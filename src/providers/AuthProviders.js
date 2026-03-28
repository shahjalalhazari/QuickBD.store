"use client"
import { SessionProvider } from 'next-auth/react';

const AuthProviders = ({children}) => {
  return (
    <SessionProvider
      refetchOnWindowFocus={true} // REFETCH WHEN WINDOW IS ON FOCUS.
      refetchInterval={5 * 60} // REFETCH SESSION EVERY 5 MIN.
    >
      {children}
    </SessionProvider>
  );
};

export default AuthProviders;