import { Ratelimit } from "@upstash/ratelimit";
const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();

// RATE LIMIT FOR SIGNUP - 5 REQs / 10 MINs
export const signUpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
});

// RATE LIMIT FOR SEND OTP - 3 REQs / 5 MINs.
export const sendOtpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "5 m"),
});

// RATE LIMIT FOR VERIFY OTP - 10 ATTEMPTs / 5 MINs.
export const verifyOtpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "5 m"),
})