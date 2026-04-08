"use client";
import { useEffect, useState } from "react";
import AuthHeader from "../AuthHeader";
import QuickbdMessage from "@/components/shared/QuickbdMessage";
import GoogleAuthenticate from "../GoogleAuthenticate";
import BackBtn from "../BackBtn";
import OtpStep from "./steps/OtpStep";
import FormStep from "./steps/FormStep";
import VerifiedStep from "./steps/VerifiedStep";

const SignUpForm = () => {
  const [state, setState] = useState({
    step: "form",
    loading: false,
    message: null,
    agreePolicy: false,
    registerUserId: "",
    timer: 0,
  });

  // HELPER FUNCTION TO UPDATE STATE
  const updateState = (data) => {
    setState((prev) => ({...prev, ...data}));
  };

  const {step, timer, message,} = state;

  // TIMER EFFECT FOR OTP RESEND
  useEffect(() => {
    if (step !== "otp" || timer === 0) return;

    const interval = setInterval(() => {
      setState((prev) => ({...prev, timer: prev.timer - 1}));
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  return (
    <div className="form-container">
      {/* HEADER */}
      <AuthHeader
        heading={"Sign Up"}
        bodyText={"Already have an account"}
        linkText={"Sign In"}
        linkHref={"/auth/signin"}
      />

      {/* BACK BUTTON */}
      {step !== "form" && <BackBtn setStep={(s) => updateState({ step: s })} step="form" />}

      {/* SHOW MESSAGES */}
      {message && <QuickbdMessage message={message} />}

      {/* FORM STEP */}
      {step === "form" && <>
        {/* FORM */}
        <FormStep state={state} updateState={updateState} />
        {/* GOOGLE AUTHENTICATE BUTTON */}
        <GoogleAuthenticate />
      </>}

      {/* SHOW OTP FORM */}
      {step === "otp" && <OtpStep state={state} updateState={updateState} />}

      {/* SHOW VERIFICARION MESSAGE */}
      {step === "verified" && <VerifiedStep />}
    </div>
  );
};

export default SignUpForm;