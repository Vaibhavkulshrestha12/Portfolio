import type { VercelRequest, VercelResponse } from "@vercel/node";
import { kv } from "@vercel/kv";

const KEY = "portfolio:visitor_count";

export default async function handler(req: VercelRequest, res: VercelResponse) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    
    const count = await kv.incr(KEY);
    return res.status(200).json({ count });
  } catch (err) {
    console.error("[visitor] KV error:", err);
   
    return res.status(500).json({ count: null });
  }
}
