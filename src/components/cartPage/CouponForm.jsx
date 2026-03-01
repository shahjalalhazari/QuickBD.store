import { BiSolidDiscount } from "react-icons/bi";

const CouponForm = () => {
  return (
    <div className="coupon-form-container">
      <h3 className="sub-heading">Have a coupon?</h3>
      <form className="coupon-form">
        <div className="form-group">
          <label htmlFor="code" className="form-label">
            <BiSolidDiscount />
          </label>
          <input 
            type="text" 
            name="code" 
            placeholder="Coupon Code" 
            className="form-input"
          />
        </div>
        <button type="submit" className="apply-btn quickbd-transition">Apply</button>
      </form>
    </div>
  );
};

export default CouponForm;