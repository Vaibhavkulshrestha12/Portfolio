import { useEffect, useState } from "react";

/**
 * Increments a visitor counter via our own Vercel KV serverless function
 * (api/visitor.ts) and returns the total count.
 *
 * Requires Vercel KV to be linked in the Vercel dashboard — the env vars
 * KV_REST_API_URL and KV_REST_API_TOKEN are injected automatically at build time.
 */
export const useVisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((r) => {
        if (!r.ok) throw new Error("visitor API unavailable");
        return r.json();
      })
      .then((data) => {
        if (typeof data.count === "number") setCount(data.count);
      })
      .catch(() => {
        // Silently fail; leave count as null so the UI hides it
      });
    // Only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return count;
};
