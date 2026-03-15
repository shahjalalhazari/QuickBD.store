import { NextResponse } from "next/server";

export async function rateLimitChecker(rateLimiter, identifier) {
  const {success} = await rateLimiter.limit(identifier);

  if (!success) {
    return NextResponse.json(
      {success: false, error: "Too many requests. Please try again later"},
      {status: 429}
    );
  }
  return null;
}