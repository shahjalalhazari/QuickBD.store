"use client";
import { useEffect, useState } from "react";
import AuthHeader from "../shared/AuthHeader";
import QuickbdMessage from "@/components/shared/QuickbdMessage";
import BackBtn from "../shared/BackBtn";
import EmailInputField from "./EmailInputField";
import MethodSelectStep from "./steps/MethodSelectStep";
import OtpStep from "./steps/OtpStep";
import PasswordStep from "./steps/PasswordStep";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import QuickbdLoading from "@/components/shared/QuickbdLoading";

const SignInForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = useState({
    method: null,
    timer: 30,
    otpSent: false,
    loading: false,
    message: null,
    email: "",
    rememberMe: false,
  });

  const updateState = (data) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  const { method, otpSent, message, loading, timer } = state;


  // SAFE CALLBACK URL
  const rawCallbackUrl = searchParams?.get("callbackUrl");
  const safeCallbackUrl = rawCallbackUrl && rawCallbackUrl.startsWith("/") ? decodeURIComponent(rawCallbackUrl) : "/";

  // NO FLICKER REDIRECT
  useEffect(() => {
    if (status === "loading") return;
    if (session) router.replace(safeCallbackUrl);
  }, [, session, status, router, safeCallbackUrl]);
  // BLOCK UI
  if (status === "loading") return <QuickbdLoading />;


  // TIMER EFFECT
  useEffect(() => {
    if (!otpSent || timer <= 0) return;

    const interval = setInterval(() => {
      setState((prev) => ({
        ...prev,
        timer: prev.timer - 1,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent, timer]);


  // LOAD REMEMBERED EMAIL
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {
      updateState({
        email: savedEmail,
        rememberMe: true,
      });
    }
  }, [])


  // BACK BUTTON HANDLER
  const handleBackBtn = () => {
    updateState({
      method: null,
      otpSent: false,
      timer: 30,
      message: null,
      loading: false,
    });
  };


  return (
    <div className="form-container">
      {/* HEADER */}
      <AuthHeader
        heading={"Sign In"}
        bodyText={"Don't have an account"}
        linkText={"Sign Up"}
        linkHref={"/auth/signup"}
      />


      {/* BACK BUTTON */}
      {(method !== null) && <BackBtn handleBackBtn={handleBackBtn} disabled={loading} /> }


      {/* MESSAGES */}
      {message && <QuickbdMessage message={message} /> }


      {/* SIGN IN FORM */}
      <form className="auth-form-layout" onSubmit={(e) => e.preventDefault()}>
        {/* EMAIL FIELD */}
        <EmailInputField state={state} updateState={updateState} />


        {/* OTP & PASSWORD BUTTONS  */}
        {method === null && <MethodSelectStep state={state} updateState={updateState} /> }


        {/* OTP STEP */}
        {method === "otp" && <OtpStep state={state} updateState={updateState} safeCallbackUrl={safeCallbackUrl} />}


        {/* PASSWORD STEP */}
        {method === "password" && <PasswordStep state={state} updateState={updateState} safeCallbackUrl={safeCallbackUrl} />}
      </form>
    </div>
  );
};

export default SignInForm;