import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import {z} from "zod";
import { handleSignInWithPassword } from "@/lib/auth/passwordSignIn";
import { handleSignInWithOTP } from "@/lib/auth/otpSignIn";
import { googleAuth } from "@/lib/auth/googleAuth";
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
    // AUTHENTICATION WITH GOOGLE
    googleAuth,

    // AUTHENTICATION WITH EMAIL & PASSWORD OR OTP
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
    // GOOGLE AUTH - ACCOUNT LINKING LOGIC
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!user.email) return false;

        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

        // ✅ CASE 1: No user → allow normal flow (adapter will create)
        if (!existingUser) return true;

        // ✅ CASE 2: User exists → check if already linked
        const alreadyLinked = existingUser.accounts.some(
          (acc) => acc.provider === "google"
        );

        if (alreadyLinked) {
          return true; // normal login
        }

        // ✅ CASE 3: Exists but not linked → LINK manually
        await prisma.account.create({
          data: {
            userId: existingUser.id,
            type: account.type,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            access_token: account.access_token,
            refresh_token: account.refresh_token,
            expires_at: account.expires_at,
            token_type: account.token_type,
            scope: account.scope,
            id_token: account.id_token,
            session_state: account.session_state,
          },
        });
        return true;
      }
      return true;
    },


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

  events: {
    async createUser({ user }) {
      const account = await prisma.account.findFirst({
        where: { userId: user.id },
      });

      if (account?.provider === "google") {
        await prisma.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date(Date.now()) },
        });
      }
    },
  },

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST};
