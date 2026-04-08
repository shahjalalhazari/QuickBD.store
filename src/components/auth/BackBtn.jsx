import { FaAngleLeft } from "react-icons/fa6";

const BackBtn = ({setStep, step}) => {
  return (
    <button
      onClick={() => setStep(step)}
      className="back-btn quickbd-transition"
    >
      <FaAngleLeft /> Back
    </button>
  );
};

export default BackBtn;