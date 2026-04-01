import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import {z} from "zod";
import { handleSignInWithPassword } from "@/lib/auth/passwordSignIn";
import { handleSignInWithOTP } from "@/lib/auth/otpSignIn";
const { default: NextAuth } = require("next-auth");

// VALIDATION SCHEA
const passwordSignInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase and number"
    ),
  type: z.literal("password"),
});

const otpSignInSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
  type: z.literal("otp"),
});


// NEXT AUTH CONFIG
const handler = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // FOR 30 DAYS.
  },

  providers: [
    CredentialsProvider({
      name: "Credendials",
      async authorize(credentials) {
        if (!credentials?.type) {
          throw new Error("Invalid request");
        }

        // ================= PASSWORD =================
        if (credentials.type === "password") {
          const passwordParsed = passwordSignInSchema.safeParse(credentials);
          if (!passwordParsed.success) {
            throw new Error(passwordParsed.error.issues[0].message);
          }

          const { email, password } = passwordParsed.data;
          return await handleSignInWithPassword({ email, password });
        }

        // ================= OTP =================
        if (credentials.type === "otp") {
          const otpParsed = otpSignInSchema.safeParse(credentials);
          if (!otpParsed.success) {
            throw new Error(otpParsed.error.issues[0].message);
          }

          const { email, otp } = otpParsed.data;
          return await handleSignInWithOTP({ email, otp });
        }

        throw new Error("Invalid credentials!");
      }
    }),
  ],

  callbacks: {
    async jwt({token, user}) {
      if (user) token.role = user.role;
      return token;
    },

    async session({session, token}) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.role = token.role
      }
      return session;
    }
  },

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST};
