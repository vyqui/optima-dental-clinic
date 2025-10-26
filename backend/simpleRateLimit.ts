// simpleRateLimit.ts
import type { Request, Response, NextFunction } from "express";

/**
 * Everything is already set:
 * - 100 requests per 60 seconds, per IP
 * - Fixed window counter (simple & fast)
 * - In-memory cache scoped to this file
 * - Standard rate-limit headers + Retry-After
 */
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 2;

type Entry = {
  count: number;
  windowStart: number; // epoch ms (start of current window)
};

const buckets = new Map<string, Entry>();
let cleanupTimer: NodeJS.Timeout | null = null;

function startCleanup() {
  if (cleanupTimer) return;
  // Purge entries idle for > 2 windows
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of buckets) {
      if (now - entry.windowStart > WINDOW_MS * 2) buckets.delete(ip);
    }
  }, WINDOW_MS).unref?.();
}

export function simpleRateLimit() {
  startCleanup();

  return function (req: Request, res: Response, next: NextFunction) {
    // NOTE: if you're behind a proxy, do: app.set('trust proxy', true) in your app
    const ip = req.ip || "unknown-ip";
    const now = Date.now();

    let entry = buckets.get(ip);
    if (!entry) {
      entry = { count: 0, windowStart: now };
      buckets.set(ip, entry);
    }

    // If current window expired, reset
    const elapsed = now - entry.windowStart;
    if (elapsed >= WINDOW_MS) {
      entry.count = 0;
      entry.windowStart = now;
    }

    // Increment and check
    entry.count += 1;

    const remaining = Math.max(0, MAX_REQUESTS - entry.count);
    const msUntilReset = WINDOW_MS - (now - entry.windowStart);
    const secondsUntilReset = Math.max(0, Math.ceil(msUntilReset / 1000));

    // Standard headers
    res.setHeader("X-RateLimit-Limit", String(MAX_REQUESTS));
    res.setHeader("X-RateLimit-Remaining", String(remaining));
    // Communicate seconds until the window resets
    res.setHeader("X-RateLimit-Reset", String(secondsUntilReset));

    if (entry.count > MAX_REQUESTS) {
      res.setHeader("Retry-After", String(secondsUntilReset));
      return res.status(429).json({
        error: "Too Many Requests",
        message: `Rate limit exceeded. Try again in ${secondsUntilReset} second(s).`
      });
    }

    next();
  };
}

/* ============================
   Example usage
   ============================
import express from "express";
import { simpleRateLimit } from "./simpleRateLimit";

const app = express();

// If behind a proxy/load balancer (so req.ip is correct)
app.set("trust proxy", true);

app.use(simpleRateLimit());

app.get("/api/hello", (_req, res) => res.json({ ok: true }));

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
*/
