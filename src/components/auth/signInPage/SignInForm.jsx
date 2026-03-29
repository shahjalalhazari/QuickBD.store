"use client";
import {signIn} from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import UnderlineInput from "@/components/shared/inputFields/UnderlineInput";
import UnderlinePasswordInputField from "@/components/shared/inputFields/UnderlinePasswordInputField";
import OtpInputField from "@/components/shared/inputFields/OtpInputField";
import { FaAngleLeft } from "react-icons/fa6";
import GoogleAuthenticate from "../GoogleAuthenticate";
import QuickbdLoading from "@/components/shared/QuickbdLoading";
import { useRouter } from "next/navigation";


const SignInForm = () => {
  const [method, setMethod] = useState(null); // NULL || OTP || PASSWORD
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInUserId, setSignInUserId] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!otpSent || timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // HANDLER FOR BACK BUTTON
  const handleBackBtn = () => {
    setMethod(null);
    setOtpSent(false);
    setTimer(30);
  } 


  // HANDLER FOR SIGNIN WITH OTP
  const handleSignInWithOtp = async () => {
    if (loading) return;

    setLoading(true);
    setMessage(null);
    
    try {
      if (!signInEmail) {
        setMessage({type: false, text: "Please enter your email"})
        return;
      };

      const res = await fetch("/api/auth/send-signin-otp", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: signInEmail})
      })
      const data = await res.json();

      if (!res.ok){
        setMessage({type: data.success, text: data.error || data.message})
        return;
      }

      setSignInUserId(data.userId);

      setMethod("otp");
      setOtpSent(true);
      setTimer(30);

      setMessage({type: data.success, text: data.error || data.message})
    } catch (error) {
      setMessage({type: false, text: error.message})
    } finally {
      setLoading(false);
    }
  };


  // HANDLER FOR RESEND OTP
  const handleResendOtp = async() => {
    if (!signInEmail) return;

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/auth/send-signin-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signInEmail }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: false, text: data.message || data.error });
        if (data.secondsLeft) {
          setTimer(data.secondsLeft);
        }
        return;
      }

      setTimer(30);
      setOtpSent(true);
      setMessage({ type: true, text: "OTP resent successfully!" || data.message });

    } catch (error) {
      setMessage({ type: false, text: "Failed to resend OTP" });
    } finally {
      setLoading(false);
    }
  };


  // HANDLER FOR VERIFY OTP
  const handleVerifyOtp = async (otp) => {
    if (!signInEmail) return;

    setLoading(true)
    setMessage(null);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: signInEmail,
        otp: otp,
        type: "otp",
      })

      if (!res?.ok){
        setMessage({type: res.ok, text: res.error || res.message});
        return;
      }

      // SIGNIN SUCCESS
      setMessage({type: true, text: "Sign In Successfull! You will be redirected"});

      // REDIRECT
      setTimeout(() => {
        router.push("/");
      }, 3000)
    } catch (error) {
      setMessage({type: false, text: "Something went wrong!"});
    } finally {
      setLoading(false);
    }
  }


  // HANDLER FOR SIGNIN WITH PASSWORD
  const handleSignInWithPassword = async() => {
    setLoading(true);
    setMessage(null);

    try {
      if (!signInEmail) {
        setMessage({type: "error", text: "Please enter your email"})
        return;
      };

      setMethod("password");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


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

      {(method === "otp" || method === "password") &&
        <button
          onClick={handleBackBtn}
          className="back-btn quickbd-transition"
        >
          <FaAngleLeft /> Back
        </button>
      }

      {/* SHOW MESSAGES */}
      {message && (
        <div className={`message-box ${
            message.type === true ? "success-message" : "error-message"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* SIGN IN FORM */}
      <form className="auth-form-layout">
        {/* EMAIL FIELD */}
        <UnderlineInput 
          label={"E-MAIL"}
          name={"email"}
          type={"email"}
          value={signInEmail}
          onChange={(e) => setSignInEmail(e.target.value)}
        />

        {/* SHOW SEND OTP & USE PASSWORD BUTTONS  */}
        {method === null && (
          <div className="form-buttons">
            <button
              type="button"
              onClick={handleSignInWithOtp}
              disabled={loading}
              className="full-width-btn quickbd-transition send-otp-btn"
            >
              {loading ? <QuickbdLoading /> : "Send OTP"}
            </button>

            <button
              type="button"
              onClick={handleSignInWithPassword}
              disabled={loading}
              className="full-width-btn quickbd-transition password-btn"
            >
              {loading ? <QuickbdLoading /> : "Use Password"}
            </button>
          </div>
        )}

        {/* SELECTED METHOD IS OTP */}
        {method === "otp" && (
          <div className="animate__animated animate__zoomIn">
            <OtpInputField
              onComplete={(otp) => {handleVerifyOtp(otp)}}
            />

            {/* REMEMBER CHECKBOX & TIMER */}
            <div className="remember-forgot">
              {loading ? <div className="flex items-center justify-center w-full"><QuickbdLoading /></div>:
              <>
              {/* CHECKBOX */}
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="rememberLogin"
                  id="rememberLogin"
                  className="remember-checkbox uren-transition"
                  defaultChecked={!!rememberedEmail}
                />
                <label htmlFor="rememberLogin" className="cursor-pointer">Remember Me</label>
              </div>
              {/* TIMER & RESEND BUTTON */}
              <div className="otp-timer">
                {timer > 0 ? (
                  <span>
                    Resend OTP in {timer}s
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="resend-otp-btn quickbd-transition"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              </>
}
            </div>
          </div>
        )}

        {/* IF METHOD IS PASSWORD */}
        {method === "password" && (
          <div className="animate__animated animate__zoomIn">
            <UnderlinePasswordInputField
              label={"PASSWORD"}
              name={"password"}
            />

            {/* REMEMBER CHECKBOX & FORGOT PASSWORD BTN */}
            <div className="remember-forgot mt-4">
              {/* REMEMBER CHECKBOX */}
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="rememberLogin"
                  id="rememberLogin"
                  className="remember-checkbox uren-transition"
                  defaultChecked={!!rememberedEmail}
                />
                <label htmlFor="rememberLogin" className="cursor-pointer">Remember Me</label>
              </div>
              {/* FORGOT PASSWORD */}
              <p className="forgot-password quickbd-transition">
                <Link href={"auth/forgot-password"}>Forgot password?</Link>
              </p>
            </div>

            {/* VERIFY BUTTON */}
            <button className="full-width-btn quickbd-transition submit-btn">
              Sign In
            </button>
          </div>
        )}
      </form>

      {/* GOOGLE LOGIN */}
      <GoogleAuthenticate />
    </div>
  );
};

export default SignInForm;