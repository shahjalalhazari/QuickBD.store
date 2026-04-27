const ViewAllBtn = ({text, className}) => {
  return (
    <button className={`${className} quickbd-transition`}>
      {text}
    </button>
  );
};

export default ViewAllBtn;