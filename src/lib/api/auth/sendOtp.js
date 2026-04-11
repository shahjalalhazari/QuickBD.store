// AN UTILITY FUNCTION TO SEND OTP.
export const sendOtpRequest = async ({ userId }) => {
  const res = await fetch("/api/auth/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId })
  });
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.error || "Failed to send OTP");
    error.secondsLeft = data.secondsLeft;
    throw error;
  }

  return data;
};
