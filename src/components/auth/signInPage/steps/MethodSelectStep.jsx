import QuickbdLoading from '@/components/shared/QuickbdLoading';
import GoogleAuthenticate from '../../shared/GoogleAuthenticate';

const MethodSelectStep = ({state, updateState}) => {
  const {email, loading} = state;

  // HANDLER FOR SIGNIN WITH OTP
  const handleSignInWithOtp = async () => {
    if (loading) return;

    if (!email) {
      updateState({message: {type: "error", text: "Please enter your email"}});
      return;
    };

    updateState({loading: true, message: null});

    try {
      const res = await fetch("/api/auth/send-signin-otp", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email })
      })
      const data = await res.json();

      if (!res.ok){
        updateState({message: {type: data.success, text: data.error || data.message}});
        return;
      }

      updateState({
        method: "otp", 
        otpSent: true, 
        timer: data.cooldown || 30, 
        message: {type: data.success, text: data.error || data.message}
      });
    } catch (error) {
      updateState({message: {type: "error", text: error.message}});
    } finally {
      updateState({loading: false});
    }
  };


  // SHOW PASSWORD FIELD
  const handleShowPasswordField = () => {
    if (loading) return;
    
    if (!email) {
      updateState({message: {type: "error", text: "Please enter your email"}});
      return;
    }
    updateState({message: null, method: "password"});
  }

  return (
    <div className="flex flex-col gap-y-8">
      <div className="form-buttons">

        {/* SEND OTP BUTTON */}
        <button
          type="button"
          onClick={handleSignInWithOtp}
          disabled={loading}
          className="full-width-btn quickbd-transition send-otp-btn"
        >
          {loading ? <QuickbdLoading /> : "Send OTP"}
        </button>

        {/* USE PASSWORD BUTTON */}
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
  );
};

export default MethodSelectStep;