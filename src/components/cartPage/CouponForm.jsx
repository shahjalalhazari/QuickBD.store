import { BiSolidDiscount } from "react-icons/bi";
import FormWithInputAndBtn from "../shared/inputFields/FormWithInputAndBtn";

const CouponForm = () => {
  return (
    <div className="coupon-form-container">
      <h3 className="sub-heading">Have a coupon?</h3>
      <FormWithInputAndBtn
        icon={<BiSolidDiscount />}
        name={"code"}
        placeholder={"Coupon Code"}
        btnText={"Apply"}
        customClass={"border-heading-color"}
      />
    </div>
  );
};

export default CouponForm;