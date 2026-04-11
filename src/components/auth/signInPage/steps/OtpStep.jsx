"use client"
import OtpInputField from '@/components/shared/inputFields/OtpInputField';
import QuickbdLoading from '@/components/shared/QuickbdLoading';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import RememberEmail from '../../shared/RememberEmail';
import { handleRememberEmail } from '@/lib/auth/rememberEmail';
import { useState } from 'react';

const OtpStep = ({state, updateState}) => {
  const {email, timer, loading, rememberMe} = state;
  const [signinSuccess, setSigninSuccess] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";


  // HANDLER FOR RESEND OTP
  const handleResendOtp = async() => {
    if (!email) return;

    updateState({loading: true, message: null});

    try {
      const res = await fetch("/api/auth/send-signin-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        updateState({ message: { type: "error", text: data.message || data.error } });
        if (data.secondsLeft) {
          updateState({ timer: data.secondsLeft });
        }
        return;
      }

      updateState({
        timer: data.cooldown || 30,
        otpSent: true,
        message: { type: "success", text: "OTP resent successfully!", }
      });
    } catch (error) {
      updateState({ message: { type: "error", text: "Failed to resend OTP" } });
    } finally {
      updateState({ loading: false });
    }
  };


  // HANDLER FOR VERIFY OTP
  const handleVerifyOtp = async (otpCode) => {
    if (!email) return;
    updateState({ loading: true, message: null });

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        otp: otpCode,
        type: "otp",
      })

      if (!res?.ok){
        updateState({ message: { type: res.ok, text: res.error || res.message } });
        return;
      }
      // SET SIGNIN SUCCESS
      setSigninSuccess(true);
      // SAVE REMEMBER EMAIL, SUCCESS MESSAGE, AND REDIRECT
      handleRememberEmail({rememberMe, email});
      updateState({ message: { type: "success", text: "Successfully signed in with OTP 🎉 Redirecting..." } });
      setTimeout(() => {router.push(`${callbackUrl}`)}, 5000)

    } catch (error) {
      updateState({ message: { type: "error", text: "Something went wrong!" } });
    } finally {
      updateState({ loading: false });
    }
  }


  return (
    <div className="animate__animated animate__zoomIn">
      <OtpInputField
        onComplete={(otp) => {handleVerifyOtp(otp)}}
      />
      {/* REMEMBER CHECKBOX & TIMER */}
      <div className="remember-forgot">
        {loading ? 
          <div className="flex items-center justify-center w-full">
            <QuickbdLoading />
          </div> : <>
            {/* AFTER SUCCESFUL SIGNIN, HIDE THIS */}
            { !signinSuccess && <>
              {/* REMEMBER ME CHECKBOX */}
              <RememberEmail state={state} updateState={updateState} />

              {/* TIMER & RESEND BUTTON.  */}
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
            </>}
          </>
        }
      </div>
    </div>
  );
};

export default OtpStep;