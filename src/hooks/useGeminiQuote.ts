import { useEffect, useState } from "react";

const GEMINI_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

interface CachedQuote {
  text:   string;
  author: string;
  date:   string;
}

const FALLBACK: CachedQuote = {
  text:   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  author: "Martin Fowler",
  date:   "",
};

const ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent";

async function fetchFromGemini(): Promise<CachedQuote> {
  if (!GEMINI_KEY) throw new Error("No Gemini API key");

  const prompt = `Give me one short, unique coding or programming quote.
It must be directly about writing code, software engineering, debugging, or building software.
The quote must come from a real, well-known programmer, software engineer, or computer scientist.
Pick a RANDOM quote each time — do not repeat common ones like Fowler or Knuth.
Reply ONLY with valid JSON, no markdown, no extra text:
{"text":"the quote here","author":"Author Name"}`;

  let lastErr: Error | null = null;
  try {
    const res = await fetch(`${ENDPOINT}?key=${GEMINI_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 1.0, maxOutputTokens: 200 },
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      console.warn(`[Gemini quote] ${ENDPOINT} →`, res.status, body);
      lastErr = new Error(`HTTP ${res.status}`);
    } else {
      const json = await res.json();
      const raw  = json.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
      const cleaned = raw.replace(/```json|```/g, "").trim();
      const parsed  = JSON.parse(cleaned) as { text: string; author: string };
      return { text: parsed.text, author: parsed.author, date: new Date().toISOString() };
    }
  } catch (e) {
    lastErr = e instanceof Error ? e : new Error(String(e));
  }
  throw lastErr ?? new Error("Gemini model failed");
}

export function useGeminiQuote() {
  const [quote,   setQuote]   = useState<CachedQuote>(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fresh = await fetchFromGemini();
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
