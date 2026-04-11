import QuickbdLoading from '@/components/shared/QuickbdLoading';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import RememberEmail from '../../shared/RememberEmail';
import { handleRememberEmail } from '@/lib/auth/rememberEmail';

const PasswordStep = ({state, updateState}) => {
  const {email, loading, rememberMe} = state;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";


  // HANDLER FOR SIGNIN WITH PASSWORD
  const handleSignInWithPassword = async(e) => {
    e.preventDefault();
    if (loading) return;

    if (!email || !password) {
      updateState({message: {type: "error", text: "Please enter your email and password"}});
      return;
    }

    updateState({loading: true, message: null});
    
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        type: "password",
      });

      if(!res?.ok){
        updateState({message: {type: res.ok, text: res.error || res.message}});
        return;
      }

      // REMEMBER EMAIL, UPDATE MESSAGE & REDIRECT
      handleRememberEmail({rememberMe, email});
      updateState({ message: { type: "success", text: "Successfully signed in with password 🎉 Redirecting..." } });
      setTimeout(() => { router.push(`${callbackUrl}`)}, 5000)

    } catch (error) {
      console.log(error);
      updateState({message: {type: "error", text: "Something went wrong!"}});
    } finally {
      updateState({loading: false});
    }
  }

  return (
    <div className="animate__animated animate__zoomIn">
      {/* PASSWORD FIELD */}
      <div className="underline-password-input-group">
        <input 
          type={showPassword ? "text" : "password"}
          name="password" 
          placeholder="" 
          required
          className="underline-password-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          title={showPassword ? "Hide Password" : "Show Password"}
          onClick={() => setShowPassword(!showPassword)}
          className="underline-show-password"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </p>
        <label htmlFor="password" className="underline-password-label">PASSWORD</label>
      </div>

      {/* REMEMBER CHECKBOX & FORGOT PASSWORD BTN */}
      <div className="remember-forgot mt-4">
        {/* REMEMBER CHECKBOX */}
        <RememberEmail state={state} updateState={updateState} />

        {/* FORGOT PASSWORD */}
        <Link href={"/auth/forgot-password"}>
          <p className="forgot-password quickbd-transition">Forgot password?</p>
        </Link>
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
  );
};

export default PasswordStep;