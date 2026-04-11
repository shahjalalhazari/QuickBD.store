import { Ratelimit } from "@upstash/ratelimit";
const { Redis } = require("@upstash/redis");

const redis = Redis.fromEnv();

// RATE LIMIT FOR SIGNUP - 5 REQs / 10 MINs
export const signUpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
});

// RATE LIMIT FOR SEND OTP - 5 REQs / 10 MINs.
export const sendOtpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
});

// RATE LIMIT FOR VERIFY OTP - 5 ATTEMPTs / 10 MINs.
export const verifyOtpRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
})

// APPTEMPT LIMIT FOR PASSWORD SIGNIN - 5 ATTEMPTs / 10 MINs.
export const passwordSignInRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
})