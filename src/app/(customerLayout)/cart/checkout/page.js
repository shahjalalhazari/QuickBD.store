import CartProgress from '@/components/customerLayout/cartPage/CartProgress';
import Breadcrumbs from '@/components/customerLayout/shared/Breadcrumbs';
import "./checkout.css";
import ContactInfoForm from '@/components/customerLayout/checkoutPage/ContactInfoForm';
import ShippingAddressForm from '@/components/customerLayout/checkoutPage/ShippingAddressForm';
import PaymentMethod from '@/components/customerLayout/checkoutPage/PaymentMethod';
import OrderSummary from '@/components/customerLayout/checkoutPage/OrderSummary';
import FullWidthBtn from '@/components/shared/buttons/FullWidthBtn';
import { SITE_DESCRIPTION, SITE_NAME, TEMPLATE_NAMES } from '@/app/metadata';
import Link from 'next/link';

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
					<Link href={"/cart/order-complete"} className='hidden md:block w-full'>
            <FullWidthBtn
              color={"bg-primary"}
              text={"Proceed to Payment"}
              customClass={"w-full hover:bg-primary-dark"}
            />
          </Link>
				</div>

				{/* RIGHT SIDE - ORDER SUMMARY SIDEBAR */}
				<div className='checkout-sidebar'>
					<OrderSummary />
				</div>

        {/* FORM SUBMIT BUTTON */}
				<Link href={"/cart/order-complete"} className='w-full md:hidden'>
          <FullWidthBtn
            color={"bg-primary"}
            text={"Proceed to Payment"}
            customClass={"w-full hover:bg-primary-dark"}
          />
        </Link>
      </form>
    </div>
	);
};

export default CheckoutPage;