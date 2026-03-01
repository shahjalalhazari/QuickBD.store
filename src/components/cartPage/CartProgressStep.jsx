import { FaCheck } from 'react-icons/fa6';

const statusStyles = {
  running: {
    wrapper: "text-secondary border-secondary",
    circle: "bg-secondary"
  },
  pending: {
    wrapper: "text-border-color/60 border-border-color/60",
    circle: "bg-border-color/60"
  },
  success: {
    wrapper: "text-accent border-accent",
    circle: "bg-accent"
  },
}

const CartProgressStep = ({status, text, step}) => {
  const style = statusStyles[status];

	return (
		<div className={`cart-progress ${style.wrapper}`}>
			<div className={`circle ${style.circle}`}>
        {status === "success" ? <FaCheck /> : step}
      </div>
			<h6>{text}</h6>
		</div>
	);
};

export default CartProgressStep;