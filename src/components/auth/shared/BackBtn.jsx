import { FaAngleLeft } from "react-icons/fa6";

const BackBtn = ({ handleBackBtn, text = "Back", className = "", disabled = false }) => {
  return (
    <button
      type="button"
      onClick={() => handleBackBtn?.()}
      disabled={disabled}
      className={`back-btn quickbd-transition ${className}`}
    >
      <FaAngleLeft /> {text}
    </button>
  );
};

export default BackBtn;