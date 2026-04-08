import OtpInputField from "@/components/shared/inputFields/OtpInputField";
import QuickbdLoading from "@/components/shared/QuickbdLoading";
import { sendOtpRequest } from "@/lib/api/auth/sendOtp";


const OtpStep = ({state, updateState}) => {
  const {registerUserId, timer, loading} = state;

  // VERIFY OTP HANDLER
  const handleVerifyOtp = async (otp) => {
    if (!registerUserId) return;

    updateState({message: null, loading: true});

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify({userId: registerUserId, otp}),
        headers: {"Content-type": "application/json"}
      });

      const data = await res.json();
      if (data.success) {
        updateState({
          step: "verified",
        });

        // REDIRECT USER TO SIGNIN PAGE AFTER OTP VERICATION
        setTimeout(() => {
          window.location.href = "/auth/signin";
        }, 5000)
      } else {
        updateState({message: {type: "error", text: data.error}})
      }
    } catch (error) {
      updateState({message: {type: "error", text: "Failed to verify OTP"}});
    } finally {
      updateState({loading: false});
    }
  }

  // OTP RESEND HANDLER
  const handleResendOtp = async () => {
    if (!registerUserId) return;

    updateState({loading: true, message: null});

    try {
      const data = await sendOtpRequest({userId: registerUserId});
      if(!data) return;

      updateState({
        timer: data.cooldown || 30,
        message: {type: "success", text: "OTP resend successful!"}
      });
    } catch (error) {
      if (error.secondsLeft) {
        updateState({timer: error.secondsLeft});
      }
      updateState({message: {type: "error", text: error.message || "Failed to Resend OTP."}})
    } finally { 
      updateState({loading: false});
    }
  };

  return (
    <div className="animate__animated animate__fadeIn">
      {/* HEADING */}
      <h3 className="sub-heading">Verify Your E-mail</h3>

      <OtpInputField
        onComplete={(otp) => {handleVerifyOtp(otp)}}
      />
        {/* VERIFY LOADING SPINNER */}
        {loading ? 
          <div className="mt-8 mb-4 flex items-center justify-center">
            <QuickbdLoading />
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
              >
                Resend OTP
              </button>
            )}
          </div>
          </>
          
        }
      </div>
  );
};

export default OtpStep;