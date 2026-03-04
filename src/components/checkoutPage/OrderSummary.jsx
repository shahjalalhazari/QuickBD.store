import Image from 'next/image';
import { BiSolidDiscount } from 'react-icons/bi';

const OrderSummary = () => {
  const subtotal = 1200;
  const deliveryFee = 0;
  const couponCode = 0;
  const grandTotal = 1200;

	return (
		<div className='order-summary section-container'>
      <h3 className="sub-heading">Order Summary</h3>
      {/* ORDER ITEMS LIST */}
      <div className="order-items">
        {[1,2,3,4].map((item, index) => (
          <div className="order-item" key={index}>
          <Image 
            src={"/images/products/item-1.jpg"} 
            width={80} height={90} 
            alt='Polo T-Shirt' 
            className='item-image'
          />
          <div className="item-details">
            <p className='item-title'>Polo T-Shirt</p>
            <div className="varients">
              <p>Size: <span>M</span></p>
              <p>Color: <span>Red</span></p>
            </div>
            <div className="qty-price">
              <p>Quantity: <span>3</span></p>
              <p className='item-price'>৳ 300</p>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* COUPON FORM */}
      <div className={`Form-input-btn border-body-color`}>
        <div className="Form-input-btn-group">
          <label htmlFor="code" className="Form-input-btn-label">
            <BiSolidDiscount />
          </label>
          <input 
            type="text" 
            name="code"
            placeholder="Coupon Code"
            className="Form-input-btn-input-field"
            defaultValue=""
          />
        </div>
        <button 
        type="submit" 
        className="Form-input-btn-apply-btn quickbd-transition"
        >
          Apply
        </button>
      </div>

      {/* PRICING DETAILS */}
      <div className="fee-details">
        <div className="fee-detail">
          <span>Subtotal:</span>
          <span>৳ {subtotal.toFixed(2)}</span>
        </div>
				<hr className="border border-border-color/60" />

        <div className="fee-detail">
          <span>Delivery Charge:</span>
          <span>{deliveryFee === 0 ? "Free" : `৳ ${deliveryFee.toFixed(2)}`}</span>
        </div>
				<hr className="border border-border-color/60" />

        <div className="flex justify-between">
          <span>Coupon Code:</span>
          <span>৳ {couponCode}</span>
        </div>
				<hr className="border border-border-color/60" />

        <div className="fee-detail font-bold text-lg">
          <span>Grand Total:</span>
          <span>৳ {grandTotal.toFixed(2)}</span>
        </div>
      </div>
		</div>
	);
};

export default OrderSummary;