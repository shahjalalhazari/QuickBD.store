"use client";
import OtpInputField from "@/components/shared/inputFields/OtpInputField";
import UnderlineInput from "@/components/shared/inputFields/UnderlineInput";
import UnderlinePasswordInputField from "@/components/shared/inputFields/UnderlinePasswordInputField";
import QuickbdLoading from "@/components/shared/QuickbdLoading";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [step, setStep] = useState("form");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (step !== "otp" || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const newUser = {name, email, password, confirmPassword};

    try {
      // SEND NEW USER DATA TO DB.
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });

      // GET THE RESPONSE.
      const data = await res.json();
      
      if (data.success) {
        setMessage({ type: "success", text: data.message});
        // SHOW OTP INPUT FIELDS AND START THE TIMER
        setStep("otp");
        setTimer(30);
      } else {
        setMessage({type: "error", text:data.error})
      }
    } catch (error) {
      setMessage({type: "error", text:"Something went wrong! while Register User."});
    } finally {
      setLoading(false);
    }
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

          {/* SHOW MESSAGES */}
          {message && (
            <div className={`message-box ${
                message.type === "success" ? "success-message" : "error-message"
              }`}
            >
              {message.text}
            </div>
          )}

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
              disabled={!agreePolicy || loading}
            >
              {loading ? <QuickbdLoading customSize={"w-[20px] h-[20px] md:w-[24px] h-[24px]"} /> : "Sign Up"}
              {/* <QuickbdLoading customSize={"w-5 h-5 md:w-6 h-6"} /> "Sign Up" */}
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
          {/* SHOW MESSAGES */}
          {message && (
            <div className={`message-box mt-4 mb-8 ${
                message.type === "success" ? "success-message" : "error-message"
              }`}
            >
              {message.text}
            </div>
          )}

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