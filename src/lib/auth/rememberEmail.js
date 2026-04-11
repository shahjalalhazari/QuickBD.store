export const handleRememberEmail = ({ rememberMe, email }) => {
  if (rememberMe && email) {
    localStorage.setItem("rememberEmail", email);
  } else {
    localStorage.removeItem("rememberEmail");
  }
};