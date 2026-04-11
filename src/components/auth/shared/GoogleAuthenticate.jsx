"use client"
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';

const GoogleAuthenticate = () => {
  const searchParams = useSearchParams();
  const redirectPath = searchParams?.get("redirect") || "/";

  const handleGoogleLogin = () => {
    const url = new URL(redirectPath, window.location.origin);
    url.searchParams.set("signin", "google_success");

    signIn("google", {
      callbackUrl: url.toString(),
    });
  };

  return (
    <button 
      type="button"
      className="full-width-btn quickbd-transition google-login-btn"
      onClick={handleGoogleLogin}
    >
      <FcGoogle size={20} /> Continue with Google
    </button>  
  );
};

export default GoogleAuthenticate;