"use client";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const BoxPasswordInputField = ({
  name, label,
  placeholder="",
  defaultValue="", 
  customClass
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="box-input-group">
      <label 
        htmlFor={name}
        className="box-input-label"
      >
        {label} <span>*</span>
      </label>
      <div className="relative">
        <input 
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          required
          className={`box-input-field ${customClass}`}
          defaultValue={defaultValue}
        />
        <p
          title={showPassword ? "Hide Password" : "Show Password"}
          onClick={() => {
            !setShowPassword(!showPassword);
          }}
          className="show-password"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </p>
      </div>
    </div>
  );
};

export default BoxPasswordInputField;