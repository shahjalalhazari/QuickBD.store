"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AuthToastHandler = () => {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const signin = params.get("signin");
    try {
      if (signin === "google_success") {
        toast.success("Successfully signed in with Google 🎉");
      } else if (signin === "password_success") {
        toast.success("Successfully signed in with password 🎉");
      } else if (signin === "otp_success") {
        toast.success("Successfully signed in with OTP 🎉");
      }
    } catch (error) {
      toast.error("Something went wrong while signing in.");
    } finally {
      // REMOVE QUERY PARAM AFTER SHOWING TOAST
      if (signin) {
        const newParams = new URLSearchParams(params.toString());
        newParams.delete("signin");
        const query = newParams.toString();
        router.replace(query ? `?${query}` : "/", { scroll: false });
      }
    }
  }, [params, router]);

  return null;
};

export default AuthToastHandler;