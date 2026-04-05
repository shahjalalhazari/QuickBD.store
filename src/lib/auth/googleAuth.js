
import GoogleProvider from 'next-auth/providers/google';

export const googleAuth = GoogleProvider({
    clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET,
})