const OrderProcessBtn = ({nextStep}) => {
  const nextStepLower = nextStep?.toLowerCase();

  return (
    <button 
      className={`order-next-step
        ${nextStepLower == "accept" ? "bg-accent" :
          nextStepLower == "shipped" ? "bg-secondary" : 
          nextStepLower == "start process" ? "bg-info" :
          nextStepLower == "cancel" ? "bg-danger" :
          "bg-primary"
        }
        `}
    >
      {nextStep}
    </button>
  );
};

export default OrderProcessBtn;