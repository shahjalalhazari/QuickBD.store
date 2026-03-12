import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import {z} from "zod";

const { default: NextAuth } = require("next-auth");


const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

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
        const validated = loginSchema.safeParse(credendials);
        if (!validated.success) return null;
        const {email, password} = validated.data;

        const user = await prisma.user.findUnique({
          where: {email: email.toLowerCase()},
        })
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
      }
    })
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

  secret: process.env.NEXTAUTH_SECRET,
});

export {handler as GET, handler as POST};
