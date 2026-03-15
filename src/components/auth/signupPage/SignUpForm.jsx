"use client";
import OtpInputField from "@/components/shared/inputFields/OtpInputField";
import UnderlineInput from "@/components/shared/inputFields/UnderlineInput";
import UnderlinePasswordInputField from "@/components/shared/inputFields/UnderlinePasswordInputField";
import QuickbdLoading from "@/components/shared/QuickbdLoading";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [registerUserId, setRegisterUserId] = useState("");

  const [step, setStep] = useState("form");
  const [timer, setTimer] = useState(30);


  useEffect(() => {
    if (step !== "otp" || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);


  // SEND OTP FUNCTION
  const sendOtp = async(userId) => {
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userId}),
        cache: "no-store",
      });

      const data = await res.json();
      if(!data.success) {
        throw new Error(data.error || "Failed to send OTP!");
      }
      return true;
    } catch (error) {
      setMessage({type: "error", text: error.message})
      return false;
    }
  }


  // HANDLER FOR USER SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setMessage(null);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const newUser = {name, email, password, confirmPassword};

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser),
        cache: "no-store",
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage({ type: "error", text: data.error});
        return;
      }

      setRegisterUserId(data.userId);

      // CALL SEND OTP API
      const otpSent = await sendOtp(data.userId);
      if (!otpSent) return;

      // SHOW OTP INPUT FIELDS AND START THE TIMER
      setStep("otp");
      setTimer(30);

      // SUCCESS MESSAGE
      setMessage({ type: "success", text: data.message});
    } catch (error) {
      setMessage({ type: "error", text: "SignUp failed! Try again."});
    } finally {
      setLoading(false);
    }
  }


  const handleResendOtp = async () => {
    setLoading(true);
    setMessage(null);

    if (!registerUserId) return;

    setTimer(30);
    try {
      const otpSent = await sendOtp(registerUserId);
      if(!otpSent) return;

      setMessage({type: "success", text: "OTP resend successful!"})
    } catch (error) {
      console.log(error);
      setMessage({type: "error", text: "Failed to Resend OTP."})
    } finally {
      setLoading(false);
    }
  };


  // VERIFY OTP HANDLER
  const handleVerifyOtp = async (otp) => {
    if (!registerUserId) return;

    setLoading(true);
    setMessage(null);

    try {
      // SEND OTP FOR VERIFY WITH USER ID
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify({userId: registerUserId, otp}),
        headers: {"Content-type": "application/json"}
      });

      const data = await res.json();

      if (data.success) {
        setMessage({type: "success", text: data.message});
        // SHOW VERIFICARION SUCCESS
        setStep("verified");

        // REDIRECT USER TO SIGNIN PAGE AFTER OTP VERICATION
        setTimeout(() => {
          window.location.href = "/auth/signin";
        }, 3000)
      } else {
        setMessage({type: "error", text: data.error})
      }
    } catch (error) {
      setMessage({type: "error", text: "Failed to verify OTP"});
    } finally {
      setLoading(false);
    }
  }

  
  return (
    <div className="form-container">
      {/* SHOW SIGNUP FORM */}
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
            </button>
          </form>

          {/* GOOGLE LOGIN */}
          <button className="full-width-btn quickbd-transition google-login-btn">
            <FcGoogle size={20} /> Continue with Google
          </button> 
        </>
      )}


      {/* SHOW OTP FORM */}
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
            onComplete={(otp) => {handleVerifyOtp(otp)}}
          />
            {/* VERIFY LOADING SPINNER */}
            {loading 
            ? <div className="mt-8 mb-4 flex items-center justify-center">
                <QuickbdLoading customSize={"w-6 h-6"} />
              </div>
            : <>{/* TIMER & RESEND BUTTON */}
              <div className="otp-timer">
                {timer > 0 ? (
                  <span>
                    Resend OTP in {timer}s
                  </span>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    className="resend-otp-btn quickbd-transition"
                  >Resend OTP
                  </button>
                )}
              </div>
              </>
              
            }
          </div>
      )}


      {/* SHOW VERIFICARION MESSAGE */}
      {step === "verified" && (
        <div className="animate__animated animate__fadeIn">
          <h3 className="sub-heading">Email Verified Successfully!</h3>
          {/* SHOW MESSAGES */}
          {message && (
            <div className={`message-box mt-4 mb-8 ${
                message.type === "success" ? "success-message" : "error-message"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUpForm;