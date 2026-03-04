"use client";
import { useState } from "react";
import { PiCreditCardBold, PiDeviceMobileCameraBold, PiMoneyBold } from "react-icons/pi";
import RadioInputField from "../shared/inputFields/RadioInputField";

const paymentMethods = [
  {
    name: "Cash On Delivery",
    value: "cod",
    SecondaryText: <PiMoneyBold size={20} />,
    helperText: "COD"
  },
  {
    name: "Mobile Banking",
    value: "mobileBanking",
    SecondaryText: <PiDeviceMobileCameraBold size={20} />,
    helperText: "Bkash, Nagad & Rocket"
  },
  {
    name: "Pay By Card",
    value: "card",
    SecondaryText: <PiCreditCardBold size={20} />,
    helperText: "Debit or Credit Card"
  },
]


const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("cod");

	return (
		<div className='section-container space-y-6'>
			<h3 className="sub-heading">Payment Method</h3>

      {paymentMethods.map(option => (
        <RadioInputField key={option.value}
          option={option}
          selected={selectedPayment}
          setSelected={setSelectedPayment}
        />
      ))}
		</div>
	);
};

export default PaymentMethod;