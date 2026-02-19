const FullWidthBtn = ({ text, color, customClass }) => {
  return (
    <div className={`full-width-btn quickbd-transition ${color} ${customClass}`}>
      {text}
    </div>
  );
};

export default FullWidthBtn;