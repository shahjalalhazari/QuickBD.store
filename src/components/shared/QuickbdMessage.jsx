import { FaCircleCheck, FaCircleInfo, FaCircleXmark } from "react-icons/fa6";
import { MdDangerous } from "react-icons/md";
import { PiWarningFill } from "react-icons/pi";

const icons = {
  success: <FaCircleCheck />,
  error: <FaCircleXmark />,
  warning: <PiWarningFill />,
  info: <FaCircleInfo />,
  danger: <MdDangerous />,
};

const QuickbdMessage = ({ message }) => {
  // NORMALIZE TYPE
  const normalizeType = (type) => {
    if (type === true) return "success";
    if (type === false) return "error";
    return type;
  };

  const finalType = normalizeType(message?.type);

  return (
    <div className={`message-box ${finalType}-message`}>
      <span className="text-base">{icons[finalType]}</span> {message?.text}
    </div>
  );
};

export default QuickbdMessage;