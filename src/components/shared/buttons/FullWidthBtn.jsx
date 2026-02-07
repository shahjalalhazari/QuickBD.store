const FullWidthBtn = ({ text, color, customClass }) => {
  return (
    <div className={`full-width-btn ${color} ${customClass}`}>
      {text}
    </div>
  );
};

export default FullWidthBtn;