"use client";
import Link from "next/link";
import UnderlineInput from "@/components/shared/inputFields/UnderlineInput";
import UnderlinePasswordInputField from "@/components/shared/inputFields/UnderlinePasswordInputField";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import OtpInputField from "@/components/shared/inputFields/OtpInputField";


const SignInForm = () => {
  const [method, setMethod] = useState(null); // NULL || OTP || PASSWORD
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    if (!otpSent || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleSendOtp = () => {
    setMethod("otp");
    setOtpSent(true);
    setTimer(30);
  };

  const handleResendOtp = () => {
    setTimer(30);
  };

  return (
    <div className="form-container">
      {/* HEADER */}
      <div className="header">
        <h3 className="heading">Sign In</h3>
        <p className="redirect-text">
          Don't have account yet?&nbsp;
          <Link href={"/auth/signup"}>
            {"Sign Up"}
          </Link>
        </p>
      </div>

      {/* SIGN IN FORM */}
      <form className="auth-form-layout">
        {/* EMAIL FIELD */}
        <UnderlineInput 
          label={"E-MAIL"}
          name={"email"}
          type={"email"}
        />

        {/* SHOW SEND OTP & USE PASSWORD BUTTONS  */}
        {method === null && (
          <div className="form-buttons">
            <button
              onClick={handleSendOtp}
              className="full-width-btn quickbd-transition send-otp-btn"
            >
              Send OTP
            </button>

            <button
              onClick={() => setMethod("password")}
              className="full-width-btn quickbd-transition password-btn"
            >
              Use Password
            </button>
          </div>
        )}

        {/* SELECTED METHOD IS OTP */}
        {method === "otp" && (
          <div className="animate__animated animate__zoomIn">
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

        {/* IF METHOD IS PASSWORD */}
        {method === "password" && (
          <div className="animate__animated animate__zoomIn">
            <UnderlinePasswordInputField
              label={"Password"}
              name={"password"}
            />

            {/* VERIFY BUTTON */}
            <button className="full-width-btn quickbd-transition submit-btn">
              Sign In
            </button>
          </div>
        )}
      </form>

      {/* GOOGLE LOGIN */}
      <button className="full-width-btn quickbd-transition google-login-btn">
        <FcGoogle size={20} /> Sign in with Google
      </button>     
    </div>
  );
};

export default SignInForm;