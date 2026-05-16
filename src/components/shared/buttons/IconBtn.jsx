const IconBtn = ({ icon, onClick, text, customClass }) => {
  return (
    <button 
      onClick={onClick} 
      className={`icon-btn text-${customClass} bg-${customClass}/20 hover:bg-${customClass}/30`}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default IconBtn;