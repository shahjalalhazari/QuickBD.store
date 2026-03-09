"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const UnderlinePasswordInputField = ({label, name}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="underline-password-input-group">
      <input 
        type={showPassword ? "text" : "password"}
        name={name} 
        placeholder={placeholder} 
        required
        className="underline-password-field"
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
      <label htmlFor={name} className="underline-password-label">{label}</label>
    </div>
  );
};

export default UnderlinePasswordInputField;