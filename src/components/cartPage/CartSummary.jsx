"use client";
import { useEffect, useMemo, useState } from "react";
import FullWidthBtn from "../shared/buttons/FullWidthBtn";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const FREE_DELIVERY_THRESHOLD = 1000;

const deliveryOptions = [
	{
		name: "Standard",
		value: "standard",
		fee: 40,
		requiredTime: "4-5 Hours"
	},
	{
		name: "Express",
		value: "express",
		fee: 70,
		requiredTime: "2-3 Hours"
	},
	{
		name: "Free",
		value: "free",
		fee: 0,
		requiredTime: "4-5 Hours"
	},
]


const CartSummary = ({ subtotal }) => {
	const [deliveryType, setDeliveryType] = useState("standard");

  const isFreeEligible = subtotal >= FREE_DELIVERY_THRESHOLD;

  // GET SELECTED DELIVERY OBJECT
  const selectedDelivery = useMemo(() => {
    return deliveryOptions.find(option => option.value === deliveryType);
  }, [deliveryType]);

  // CALCULATE DELIVERY FEE
  const deliveryFee = useMemo(() => {
    if (deliveryType === "free") {
      return isFreeEligible ? 0 : 0; // PREVENT UNEXPECTED FEE
    }
    return selectedDelivery?.fee || 0;
  }, [deliveryType, selectedDelivery, isFreeEligible]);

  const total = subtotal + deliveryFee;

  // AUTO SWITCH FROM FREE TO STANDARD IF NOT ELIGIBLE
  useEffect(() => {
    if (!isFreeEligible && deliveryType === "free") {
      setDeliveryType("standard");
    }
  }, [isFreeEligible, deliveryType]);

	return (
		<div className="cart-summary">
      {/* HEADING */}
      <h4 className="sub-heading">Cart Summary</h4>

      {/* DELIVERY OPTIONS */}
      <div className="space-y-3">
        {deliveryOptions.map(option => {
          const isFreeOption = option.value === "free";
          const disabled = isFreeOption && !isFreeEligible;

          return (
            <label 
						key={option.value}
						className={`delivery-option quickbd-transition
							${disabled && "cursor-not-allowed"}
							${option.value === selectedDelivery?.value && "selected-option"}
						`}>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									name="delivery"
									value="standard"
									checked={deliveryType === option.value}
									onChange={() => setDeliveryType(option.value)}
									className="hidden peer"
								/>

								{/* CUSTOM CIRCLE WITH CHECK MARK */}
								<div className="outer-circle peer-checked:border-primary">
									{option.value === selectedDelivery?.value && 
										<FaCheck size={10} className="check-mark"/>
									}
								</div>
								
								{/* LABEL */}
								<span className="option-label">
									{option.name}
									<span className="helper-text">&nbsp;({option.requiredTime})</span>
									{isFreeOption && !isFreeEligible && (
                  <span className="helper-text">
                    <br />(Available above ৳ {FREE_DELIVERY_THRESHOLD})
                  </span>
                )}
								</span>
							</div>

							{/* DELIVERY FEES */}
							<span className="delivery-fees">
                {option.fee === 0 ? "Free" : `৳ ${option.fee}`}
              </span>
						</label>
          )
        })}
      </div>

      {/* PRICE DETAILS */}
      <div className="fee-details">
        <div className="fee-detail">
          <span>Subtotal:</span>
          <span>৳ {subtotal.toFixed(2)}</span>
        </div>
				<hr className="border border-border-color/60" />

        <div className="fee-detail">
          <span>Delivery Charge:</span>
          <span>{deliveryFee === 0 ? "Free" : `৳ ${deliveryFee}.00`}</span>
        </div>
				<hr className="border border-border-color/60" />

        <div className="flex justify-between">
          <span>Coupon Code:</span>
          <span>৳ 0.00</span>
        </div>
				<hr className="border border-border-color/60" />

        <div className="fee-detail font-bold text-lg">
          <span>Grand Total:</span>
          <span>৳ {total.toFixed(2)}</span>
        </div>
      </div>

      {/* CHECKOUT BUTTON */}
      <Link href={"/cart/checkout"}>
				<FullWidthBtn
					disabled={subtotal === 0}
					color={"bg-primary"}
					text={"Proceed to Checkout"}
					customClass={`w-full hover:bg-primary-dark`}
				/>
			</Link>
    </div>
	);
};

export default CartSummary;