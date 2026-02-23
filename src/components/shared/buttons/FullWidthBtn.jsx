const FullWidthBtn = ({ text, color, customClass, icon="" }) => {
  return (
    <div className={`full-width-btn quickbd-transition ${color} ${customClass}`}>
      {icon} {text}
    </div>
  );
};

export default FullWidthBtn;