import { z } from "zod";

export const signUpSchema = z.object({

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name too long"),

  email: z
    .string()
    .email("Invalid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase and number"
    ),

  confirmPassword: z
    .string()

}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});