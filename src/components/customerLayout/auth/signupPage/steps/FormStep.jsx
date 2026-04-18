import UnderlineInput from "@/components/shared/inputFields/UnderlineInput";
import UnderlinePasswordInputField from "@/components/shared/inputFields/UnderlinePasswordInputField";
import QuickbdLoading from "@/components/shared/QuickbdLoading";
import { sendOtpRequest } from "@/lib/api/auth/sendOtp";
import Link from "next/link";

const FormStep = ({state, updateState}) => {
  const {agreePolicy, loading} = state;

  // HANDLER FOR USER SIGNUP
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    updateState({message: null, loading: true});

    const form = e.target;
    const newUser = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value
    };

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      if (!res.ok) {
        updateState({message: { type: "error", text: data.error}});
        return;
      }
      updateState({registerUserId: data.userId});

      // CALL SEND OTP API
      try {
        const otpData = await sendOtpRequest({userId: data.userId});
        updateState({
          step: "otp", 
          timer: otpData.cooldown || 30, 
          message: { type: "success", text: data.message}
        })
      } catch (error) {
        if (error.secondsLeft) {
          updateState({timer: error.secondsLeft});
        }
        updateState({
          message: { type: "error", text: error.message || "Failed to send OTP!"}
        });
      }
    } catch (error) {
      updateState({message: { type: "error", text: "SignUp failed! Try again."}});
    } finally {
      updateState({loading: false});
    }
  };

  return (
    <form onSubmit={handleSubmit}
      className="auth-form-layout animate__animated animate__fadeIn"
    >
      {/* Name FIELD */}
      <UnderlineInput label={"FULL NAME"} name={"name"} />
      {/* EMAIL FIELD */}
      <UnderlineInput label={"E-MAIL"} name={"email"} type={"email"} />
      {/* PASSWORD FIELD */}
      <UnderlinePasswordInputField label={"PASSOWRD"} name={"password"} />
      {/* CONFIEM PASSWORD FIELD */}
      <UnderlinePasswordInputField label={"CONFIRM PASSWORD"} name={"confirmPassword"} />
      
      {/* CHECKBOX */}
      <div className="checkbox-field">
        <input
          type="checkbox"
          name="privacyPolicyChecked"
          className="privacy-checkbox uren-transition"
          checked={agreePolicy}
          onChange={(e) => updateState({agreePolicy: e.target.checked})}
        />
        <label 
          htmlFor="privacyPolicyChecked" 
          className="privacy-label"
        >
          I agree with <Link href={"/policy/privacy"}>Privacy Policy </Link> and <Link href={"/policy/terms"}>Terms of Use</Link>
        </label>
      </div>
      {/* SUBMIT BUTTON */}
      <button 
        className="full-width-btn quickbd-transition submit-btn"
        disabled={!agreePolicy || loading}
      >
        {loading ? <QuickbdLoading /> : "Sign Up"}
      </button>
    </form>
  );
};

export default FormStep;