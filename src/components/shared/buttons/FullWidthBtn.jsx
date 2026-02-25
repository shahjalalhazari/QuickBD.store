const FullWidthBtn = ({ text, color, customClass, icon="" }) => {
  return (
    <button className={`full-width-btn quickbd-transition ${color} ${customClass}`}>
      {icon} {text}
    </button>
  );
};

export default FullWidthBtn;