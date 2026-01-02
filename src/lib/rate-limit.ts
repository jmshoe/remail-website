// Simple in-memory rate limiter for serverless
// For production at scale, consider using Redis or Vercel KV

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of rateLimitMap.entries()) {
    if (entry.resetTime < now) {
      rateLimitMap.delete(key)
    }
  }
}, 60000) // Clean every minute

interface RateLimitOptions {
  limit: number // Max requests
  windowMs: number // Time window in milliseconds
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { limit: 5, windowMs: 60000 }
): { success: boolean; remaining: number; resetIn: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  // If no entry or window has passed, create new entry
  if (!entry || entry.resetTime < now) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + options.windowMs,
    })
    return { success: true, remaining: options.limit - 1, resetIn: options.windowMs }
  }

  // If within window, check limit
  if (entry.count >= options.limit) {
    return {
      success: false,
      remaining: 0,
      resetIn: entry.resetTime - now,
    }
  }

  // Increment count
  entry.count++
  return {
    success: true,
    remaining: options.limit - entry.count,
    resetIn: entry.resetTime - now,
  }
}
