import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "@/app/metadata";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import "./cart.css";
import CouponForm from "@/components/cartPage/CouponForm";
import CartTable from "@/components/cartPage/CartTable";
import CartSummary from "@/components/cartPage/CartSummary";
import CartProgress from "@/components/cartPage/CartProgress";

export const metadata = {
  title: TEMPLATE_NAMES.cart,
  description: [`View your shopping cart items and proceed to checkout. ${SITE_DESCRIPTION}`],
};

const CartPage = () => {
  return (
    <div className="quickbd-container cart-page">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shopping Cart" }
        ]}
      />

      {/* PAGE HEADING */}
      <h3 className="page-heading">Shopping Cart</h3>

      {/* SHOPPING PROGRESS */}
      <CartProgress currntStep={1} />

      {/* BODY CONTENT */}
      <div className="cart-body-content">
        {/* CART TABLE */}
        <CartTable />

        {/* COUPON & CART SUMMARY */}
        <div className="coupon-summary">
          {/* COUPON FORM */}
          <CouponForm />

          {/* CART SUMMARY */}
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;