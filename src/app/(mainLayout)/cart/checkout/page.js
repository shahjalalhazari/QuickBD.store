import CartProgress from '@/components/cartPage/CartProgress';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import "./checkout.css";
import ContactInfoForm from '@/components/checkoutPage/ContactInfoForm';
import ShippingAddressForm from '@/components/checkoutPage/ShippingAddressForm';
import PaymentMethod from '@/components/checkoutPage/PaymentMethod';
import OrderSummary from '@/components/checkoutPage/OrderSummary';
import FullWidthBtn from '@/components/shared/buttons/FullWidthBtn';
import { SITE_DESCRIPTION, SITE_NAME, TEMPLATE_NAMES } from '@/app/metadata';

export const metadata = {
  title: TEMPLATE_NAMES.checkout,
  description: [`Complete your purchase securely at ${SITE_NAME}. Fast delivery, secure payments, and trusted online shopping experience. ${SITE_DESCRIPTION}`],
  robots: {
    index: false,
    follow: false,
  },
};

const CheckoutPage = () => {
	return (
		<div className="quickbd-container checkout-page">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shopping Cart", href: "/cart" },
          { label: "Checkout" }
        ]}
      />

      {/* PAGE HEADING */}
      <h3 className="page-heading">Checkout</h3>

      {/* SHOPPING PROGRESS */}
      <CartProgress currntStep={2} />

      {/* BODY CONTENT */}
      <form className="checkout-body-content">
				{/* LEFT SIDE - ALL FORMS */}
				<div className='checkout-forms'>
					{/* CONTACT INFO FORM */}
					<ContactInfoForm />
					{/* SHIPPING ADDRESS FORM */}
					<ShippingAddressForm />
					{/* PAYMENT METHOD FORM */}
					<PaymentMethod />
          {/* FORM SUBMIT BUTTON */}
					<div className='hidden md:block w-full'>
            <FullWidthBtn
              color={"bg-primary"}
              text={"Proceed to Payment"}
              customClass={"w-full hover:bg-primary-dark"}
            />
          </div>
				</div>

				{/* RIGHT SIDE - ORDER SUMMARY SIDEBAR */}
				<div className='checkout-sidebar'>
					<OrderSummary />
				</div>

        {/* FORM SUBMIT BUTTON */}
				<div className='w-full md:hidden'>
          <FullWidthBtn
            color={"bg-primary"}
            text={"Proceed to Payment"}
            customClass={"w-full hover:bg-primary-dark"}
          />
        </div>
      </form>
    </div>
	);
};

export default CheckoutPage;