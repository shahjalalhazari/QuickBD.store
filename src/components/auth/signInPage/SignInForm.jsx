"use client";
import {signIn} from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import OtpInputField from "@/components/shared/inputFields/OtpInputField";
import { FaAngleLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import GoogleAuthenticate from "../GoogleAuthenticate";
import QuickbdLoading from "@/components/shared/QuickbdLoading";
import { useRouter } from "next/navigation";
import AuthHeader from "../AuthHeader";
import QuickbdMessage from "@/components/shared/QuickbdMessage";

const SignInForm = () => {
  const [method, setMethod] = useState(null); // NULL || OTP || PASSWORD
  const [timer, setTimer] = useState(30);
  const [otpSent, setOtpSent] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState("");
  const [rememberMeChecked, setRememberMeChecked] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [signInPassword, setSignInPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  // OTP TIMER EFFECT
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


  // CHECK REMEMBERED EMAIL
  useEffect(() => {
    const email = localStorage.getItem("rememberEmail");
    if (email) {
      setRememberedEmail(email);
      setSignInEmail(email);
      setRememberMeChecked(true);
    }

  }, []);


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
      router.push("/?signin=otp_success");
    } catch (error) {
      setMessage({type: false, text: "Something went wrong!"});
    } finally {
      setLoading(false);
    }
  }

  // SHOW PASSWORD FIELD
  const handleShowPasswordField = () => {
    if (loading) return;
    setMessage(null);

    if (!signInEmail) {
      setMessage({type: false, text: "Please enter your email"});
      return;
    }
    setMethod("password");
  }


  // HANDLER FOR SIGNIN WITH PASSWORD
  const handleSignInWithPassword = async(e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage(null);

    try {
      if (!signInEmail || !signInPassword) {
        setMessage({type: "error", text: "Please enter your email and password"});
        return;
      }

      const res = await signIn("credentials", {
        redirect: false,
        email: signInEmail,
        password: signInPassword,
        type: "password",
      });

      if(!res?.ok){
        setMessage({type: res.ok, text: res.error || res.message});
        return;
      }

      // REMEMBER IS CHECKED.
      if (rememberMeChecked) {
        localStorage.setItem("rememberEmail", signInEmail);
      } else {
        localStorage.removeItem("rememberEmail");
      }

      // SUCESSFUL SIGN IN
      router.push("/?signin=password_success");

    } catch (error) {
      setMessage({type: false, text: "Something went wrong!"});
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="form-container">
      {/* HEADER */}
      <AuthHeader
        heading={"Sign In"}
        bodyText={"Don't have an account"}
        linkText={"Sign Up"}
        linkHref={"/auth/signup"}
      />

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
        <QuickbdMessage message={message} />
      )}

      {/* SIGN IN FORM */}
      <form className="auth-form-layout">
        {/* EMAIL FIELD */}
        <div className="underline-input-group">
          <input
            type="email"
            name="email" id="email"
            required
            placeholder=""
            defaultValue={rememberedEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            className="underline-input-field"
          />
          <label htmlFor="email" className="underline-input-label">E-MAIL</label>
        </div>

        {/* SHOW SEND OTP & USE PASSWORD BUTTONS  */}
        {method === null && (
          <div className="flex flex-col gap-y-8">
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
              onClick={handleShowPasswordField}
              disabled={loading}
              className="full-width-btn quickbd-transition password-btn"
            >
              {loading ? <QuickbdLoading /> : "Use Password"}
            </button>
          </div>

          {/* GOOGLE LOGIN */}
          <GoogleAuthenticate />
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
                  onChange={(e) => setRememberMeChecked(e.target.checked)}
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
            {/* PASSWORD FIELD */}
            <div className="underline-password-input-group">
              <input 
                type={showPassword ? "text" : "password"}
                name="password" 
                placeholder="" 
                required
                className="underline-password-field"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <p
                title={showPassword ? "Hide Password" : "Show Password"}
                onClick={() => {
                  !setShowPassword(!showPassword);
                }}
                className="underline-show-password"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
              <label htmlFor="password" className="underline-password-label">PASSWORD</label>
            </div>

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
                  onChange={(e) => setRememberMeChecked(e.target.checked)}
                />
                <label htmlFor="rememberLogin" className="cursor-pointer">Remember Me</label>
              </div>
              {/* FORGOT PASSWORD */}
              <p className="forgot-password quickbd-transition">
                <Link href={"auth/forgot-password"}>Forgot password?</Link>
              </p>
            </div>

            {/* VERIFY BUTTON */}
              <button 
              type="submit"
              disabled={loading}
              onClick={handleSignInWithPassword}
              className="full-width-btn quickbd-transition submit-btn"
            >
              {loading ? <QuickbdLoading /> : "Sign In"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SignInForm;