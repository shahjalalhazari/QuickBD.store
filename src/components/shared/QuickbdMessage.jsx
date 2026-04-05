const QuickbdMessage = ({ message }) => {
  return (
    <div className={`message-box ${
        message.type === "success" || true ? "success-message" : "error-message"
      }`}
    >
      {message.text}
    </div>
  );
};

export default QuickbdMessage;