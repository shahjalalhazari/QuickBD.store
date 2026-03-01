import CartProgressStep from "./CartProgressStep";

const CartProgress = ({ currntStep }) => {
	const steps = [
		{ text: "Shopping Cart" },
		{ text: "Checkout" },
		{ text: "Order Confirm" },
	];

	return (
		<div className="w-wfull">
			{/* MOBILE VIEW */}
			<div className="cart-progresses-mobile md:hidden relative h-16 overflow-hidden">
				{steps.map((step, index) => {
					const stepNumber = index + 1;

					let status = "pending";
					if (stepNumber < currntStep) status = "success";
					if (stepNumber === currntStep) status = "running";

					// POSITION LOGIC
					let positionClass = "hidden";

					if (stepNumber === currntStep) {
						positionClass = "absolute left-1/2 -translate-x-1/2";
					}

					if (stepNumber === currntStep - 1) {
						positionClass = "absolute right-[80%]";
					}

					if (stepNumber === currntStep + 1) {
						positionClass = "absolute left-[80%]";
					}

					if (
						stepNumber !== currntStep &&
						stepNumber !== currntStep - 1 &&
						stepNumber !== currntStep + 1
					) {
						return null;
					}

					return (
						<div key={stepNumber} className={positionClass}>
							<CartProgressStep
								status={status}
								step={stepNumber}
								text={step.text}
							/>
						</div>
					);
				})}
			</div>

			{/* DESKTOP VIEW */}
			<div className="hidden md:flex cart-progresses">
				{steps.map((step, index) => {
					const stepNumber = index + 1;

					let status = "pending";
					if (stepNumber < currntStep) status = "success";
					if (stepNumber === currntStep) status = "running";

					return (
						<CartProgressStep
							key={stepNumber}
							status={status}
							step={stepNumber}
							text={step.text}
						/>
					)
				})}
			</div>
		</div>
	);
};

export default CartProgress;