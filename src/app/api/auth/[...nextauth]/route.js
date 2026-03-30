import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import {z} from "zod";
import { verifyOtpRateLimit } from "@/lib/rate-limit";
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
      maxAge: 30 * 24 * 60 * 60, // FOR 30 DAYS SESSION.
  },

  providers: [
    CredentialsProvider({
      name: "Credendials",
      async authorize(credendials) {
        // SIGNIN WITH PASSWORD
        const passwordParsed = passwordSignInSchema.safeParse(credendials);
        if (!passwordParsed.success) {
          throw new Error(passwordParsed.error.issues[0].message);
        } 
        const {email, password} = passwordParsed.data;

        const user = await prisma.user.findUnique({
          where: {email: email.toLowerCase()},
        });

        if (!user || !user.password) throw new Error("User not found!");

        const passwordMatch = await bcrypt.compare(
          password, user.password
        )
        if (!passwordMatch) throw new Error("Incorrect password!");

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }

        // SIGNIN WITH OTP
        const otpParsed = otpSignInSchema.safeParse(credendials);
        if (otpParsed.success){
          const {email, otp} = otpParsed.data;

          // CHECK USER IP AND RATE LIMIT
          const ip = "unknown"; // NEXTAUTH DOESN'T GIVE REQ EASILY.
          const identifier = `${ip}-${email}`;
          const {success} = await verifyOtpRateLimit.limit(identifier);
          if (!success) {
            throw new Error("Too many attempts. Try again later.");
          }

          // FIND, CHECK AND VERIFIED USER
          const user = await prisma.user.findUnique({
            where: {email: email.toLowerCase()},
          });
          if (!user) throw new Error("User not found!");
          if (!user.emailVerified) throw new Error("Email not verified!");

          // GET USER OTP & OTP EXISTENCE CHECK
          const userOtp = await prisma.userOtp.findFirst({
            where: {userId: user.id},
            orderBy: {createdAt: "desc"}
          })
          if (!userOtp) throw new Error("OTP does not exists!");

          // CHECK EXPIRY
          if (new Date() > userOtp.expiresAt) {
            throw new Error("OTP expired!");
          }

          // CHECK ATTEMPTS
          if (userOtp.attempts >= 5) {
            throw new Error("Too many wrong attempts. Try again later.");
          }

          // VEIRFY OTP
          const isValid = await bcrypt.compare(otp, userOtp.otp);
          if (!isValid) {
            await prisma.userOtp.update({
              where: {id: userOtp.id},
              data: {attempts: {increment: 1}}
            });
            throw new Error("OTP is invalid!");
          }

          // DELETE OTP AFTER SUCCESS
          await prisma.userOtp.deleteMany({
            where: {userId: user.id},
          });

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({token, user}) {
      if (user) {
        token.role = user.role;
      }
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
