const FullWidthBtn = ({ text, color, customClass, icon="", disabled=false }) => {
  return (
    <button 
      disabled={disabled} 
      className={`full-width-btn quickbd-transition ${color} ${customClass}`}
    >
      {icon && {icon}} {text}
    </button>
  );
};

export default FullWidthBtn;