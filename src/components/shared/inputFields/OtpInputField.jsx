"use client";
import { useEffect, useRef, useState } from "react";


const OtpInputField = ({length = 6, onComplete,}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const focusInput = (index) => {
    inputs.current[index]?.focus();
  };

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        focusInput(index - 1);
      }
    }
    if (e.key === "ArrowLeft" && index > 0) {
      focusInput(index - 1);
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(paste)) return;
    const pasteArr = paste.slice(0, length).split("");
    const newOtp = [...otp];
    pasteArr.forEach((num, i) => {
      newOtp[i] = num;
    });
    setOtp(newOtp);
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      onComplete?.(otp.join(""));
    }
  }, [otp]);


  return (
    <div
      className="otp-input-fields"
      onPaste={handlePaste}
    >
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength="1"
          value={digit}
          ref={(el) => (inputs.current[index] = el)}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="otp-input-box quickbd-transition"
        />
      ))}
    </div>
  );
};

export default OtpInputField;