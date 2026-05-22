const OrderProcessBtn = ({nextStep}) => {
  const nextStepLower = nextStep?.toLowerCase();

  return (
    <button 
      className={`next-step-btn quickbd-transition
        ${nextStepLower == "accept" ? "bg-accent text-ghost-white" :
          nextStepLower == "shipped" ? "bg-secondary text-ghost-white" : 
          nextStepLower == "start process" ? "bg-info text-ghost-white" :
          nextStepLower == "cancel" ? "border-2 border-danger text-danger hover:bg-danger/10" :
          "bg-primary text-ghost-white"
        }
        `}
    >
      {nextStep}
    </button>
  );
};

export default OrderProcessBtn;