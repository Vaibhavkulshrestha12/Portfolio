import { useEffect, useState } from "react";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
const CACHE_KEY  = "gemini_daily_quote_v3";

interface CachedQuote {
  text:   string;
  author: string;
  date:   string; // YYYY-MM-DD
}

const FALLBACK: CachedQuote = {
  text:   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  author: "Martin Fowler",
  date:   "",
};

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

/* ── Try models in order until one works ── */
const MODELS = [
  "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent",
  "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent",
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
];

async function fetchFromGemini(): Promise<CachedQuote> {
  if (!GEMINI_KEY) throw new Error("No Gemini API key");

  const prompt = `Give me one unique, inspiring tech or programming quote for today (${todayStr()}).
The quote should come from a real software engineer, computer scientist, or tech visionary.
Reply ONLY with valid JSON in this exact format (no markdown, no explanation):
{"text":"the quote here","author":"Author Name"}`;

  let lastErr: Error | null = null;
  for (const endpoint of MODELS) {
    try {
      const res = await fetch(`${endpoint}?key=${GEMINI_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.9, maxOutputTokens: 200 },
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.warn(`[Gemini quote] ${endpoint} →`, res.status, body);
        lastErr = new Error(`HTTP ${res.status}`);
        continue;
      }

      const json = await res.json();
      const raw  = json.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const parsed  = JSON.parse(cleaned) as { text: string; author: string };
      return { text: parsed.text, author: parsed.author, date: todayStr() };
    } catch (e) {
      lastErr = e instanceof Error ? e : new Error(String(e));
    }
  }
  throw lastErr ?? new Error("All Gemini models failed");
}

export function useGeminiQuote() {
  const [quote,   setQuote]   = useState<CachedQuote>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // Try localStorage cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed: CachedQuote = JSON.parse(cached);
          if (parsed.date === todayStr()) {
            setQuote(parsed);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh quote
        const fresh = await fetchFromGemini();
        localStorage.setItem(CACHE_KEY, JSON.stringify(fresh));
        setQuote(fresh);
      } catch {
        // Keep fallback
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { quote, loading };
}
