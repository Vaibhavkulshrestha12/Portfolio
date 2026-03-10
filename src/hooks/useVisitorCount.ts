import { useEffect, useState } from "react";

const BASE_COUNT   = 1345;
const STORAGE_KEY  = "pf_visitor_count";
const SESSION_KEY  = "pf_visitor_counted";

export const useVisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const stored  = localStorage.getItem(STORAGE_KEY);
    let current   = stored ? parseInt(stored, 10) : BASE_COUNT;

    // Increment once per browser session
    if (!sessionStorage.getItem(SESSION_KEY)) {
      current += 1;
      localStorage.setItem(STORAGE_KEY, String(current));
      sessionStorage.setItem(SESSION_KEY, "1");
    }

    setCount(current);
  }, []);

  return count;
};
