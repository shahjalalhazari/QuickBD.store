"use client";
import OtpInputField from "@/components/shared/inputFields/OtpInputField";
import UnderlineInput from "@/components/shared/inputFields/UnderlineInput";
import UnderlinePasswordInputField from "@/components/shared/inputFields/UnderlinePasswordInputField";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [agreePolicy, setAgreePolicy] = useState(false);

  const [step, setStep] = useState("form");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (step !== "otp" || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate account creation
    setStep("otp");
    setTimer(30);
  };

  const handleResendOtp = () => {
    setTimer(30);
  };

  return (
    <div className="form-container">
      {step === "form" && (
        <>
          {/* HEADER */}
          <div className="header">
            <h3 className="heading">Sign Up</h3>
            <p className="redirect-text">
              Already have an account?&nbsp;
              <Link href={"/auth/signin"}>
                Sign In
              </Link>
            </p>
          </div>

          {/* SIGN UP FORM */}
          <form
            onSubmit={handleSubmit}
            className="auth-form-layout animate__animated animate__fadeIn"
          >
            {/* Name FIELD */}
            <UnderlineInput
              label={"FULL NAME"}
              name={"name"}
              type={"text"}
            />
            {/* EMAIL FIELD */}
            <UnderlineInput
              label={"E-MAIL"}
              name={"email"}
              type={"email"}
            />
            {/* PASSWORD FIELD */}
            <UnderlinePasswordInputField
              label={"PASSOWRD"}
              name={"password"}
            />
            {/* CONFIEM PASSWORD FIELD */}
            <UnderlinePasswordInputField
              label={"CONFIRM PASSWORD"}
              name={"confirmPassword"}
            />

            {/* CHECKBOX */}
            <div className="checkbox-field">
              <input
                type="checkbox"
                name="privacyPolicyChecked"
                className="privacy-checkbox uren-transition"
                checked={agreePolicy}
                onChange={(e) => setAgreePolicy(e.target.checked)}
              />
              <label 
                htmlFor="privacyPolicyChecked" 
                className="privacy-label"
              >
                I agree with <Link href={"/"}>Privacy Policy </Link> and <Link href={"/"}>Terms of Use</Link>
              </label>
            </div>

            <button 
              className="full-width-btn quickbd-transition submit-btn"
              disabled={!agreePolicy}
            >
              Sign Up
            </button>
          </form>

          {/* GOOGLE LOGIN */}
          <button className="full-width-btn quickbd-transition google-login-btn">
            <FcGoogle size={20} /> Continue with Google
          </button> 
        </>
      )}

      {step === "otp" && (
        <div className="animate__animated animate__fadeIn">
          <button
            onClick={() => setStep("form")}
            className="back-btn quickbd-transition"
          >
            <FaAngleLeft /> Back
          </button>


          {/* HEADER */}
          <h3 className="sub-heading">Verify Your E-mail</h3>
          <p className="success-message">
            Account created successfully. An OTP has been send to your email.
          </p>

          <OtpInputField
            onComplete={(otp) => {
              console.log("OTP Completed:", otp);
            }}
          />
            {/* VERIFY BUTTON */}
            <button className="full-width-btn quickbd-transition submit-btn">
              Verify OTP
            </button>

            {/* TIMER & RESEND BUTTON */}
              <div className="otp-timer">
                {timer > 0 ? (
                  <span>
                    Resend OTP in {timer}s
                  </span>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    className="resend-otp-btn quickbd-transition"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
          </div>
      )}
    </div>
  );
};

export default SignUpForm;