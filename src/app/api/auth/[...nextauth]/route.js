import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import {z} from "zod";
const { default: NextAuth } = require("next-auth");

// VALIDATION SCHEA
const passwordSignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
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
        // PASSWORD SIGNIN
        const passwordParsed = passwordSignInSchema.safeParse(credendials);
        console.log(passwordParsed);
        if (passwordParsed.success) {
          const {email, password} = passwordParsed.data;

          const user = await prisma.user.findUnique({
            where: {email: email.toLowerCase()},
          });
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(
            password, user.password
          )
          if (!passwordMatch) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          }
        };

        // OTP SIGNIN
        const otpParsed = otpSignInSchema.safeParse(credendials);
        if (otpParsed.success){
          const {email, otp} = otpParsed.data;
          // FIND, CHECK AND VERIFIED USER
          const user = await prisma.user.findUnique({
            where: {email: email.toLowerCase()},
          });
          if (!user) throw new Error("User not found!");
          if (!user.emailVerified) throw new Error("Email not verified!");

          // GET OTP
          const userOtp = await prisma.userOtp.findFirst({
            where: {userId: user.id},
            orderBy: {createdAt: "desc"}
          })
          if (!userOtp) throw new Error("OTP does not exists!");

          // CHECK EXPIRY
          if (new Date() > userOtp.expiresAt) {
            throw new Error("OTP expired!");
          }
          // VEIRFY OTP
          const isValid = await bcrypt.compare(otp, userOtp.otp);
          if (!isValid) throw new Error("OTP is invalid!");

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
