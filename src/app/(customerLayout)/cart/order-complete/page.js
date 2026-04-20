import Link from "next/link";
import Image from "next/image";
import { SITE_DESCRIPTION, SITE_NAME, TEMPLATE_NAMES } from "@/app/metadata";
import "./orderComplete.css";
import { HiDownload } from "react-icons/hi";
import Breadcrumbs from "@/components/customerLayout/shared/Breadcrumbs";
import CartProgress from "@/components/customerLayout/cartPage/CartProgress";
import FullWidthBtn from "@/components/customerLayout/shared/buttons/FullWidthBtn";
import ConfirmHeadingSection from "@/components/customerLayout/orderCompletePage/ConfirmHeadingSection";
import OrderDetails from "@/components/customerLayout/orderCompletePage/OrderDetails";

export const metadata = {
  title: TEMPLATE_NAMES.complete,
  description: `Your order has been successfully placed at ${SITE_NAME}. Thank you for shopping with us. View your order details and continue shopping for more great products. ${SITE_DESCRIPTION}`,
  robots: {
    index: false,
    follow: false,
  },
};

const OrderCompletePage = () => {
  return (
    <div className="quickbd-container order-complete-page">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Order Complete" }
        ]}
      />

      {/* PAGE HEADING */}
      <h3 className="page-heading">Order Complete</h3>

      {/* SHOPPING PROGRESS */}
      <CartProgress currntStep={3} />

      {/* BODY CONTENT */}
      <div className="body-content">
        {/* TOP ROW - GEATTING & CONFIRM TEXT */}
        <ConfirmHeadingSection />

        {/* SECOND ROW - ORDER DETAILS */}
        <div className="order-items">
          {[1, 2, 3].map((item) => (
            <div key={item} className="ordered-item">
              <Link href={"/"}>
                <Image
                  src="/images/products/item-1.jpg"
                  alt="Product"
                  width={80}
                  height={96}
                  className="item-image"
                />
              </Link>
              <span className="item-qty">
                2
              </span>
            </div>
          ))}
        </div>

        {/* THIRD ROW - ORDERED ITEMS  */}
        <OrderDetails />

        {/* BOTTOM ROW - BUTTONS */}
        <div className="buttons">
        <button className="rounded-btn download-btn quickbd-transition">
            <HiDownload /> Download Invoice
          </button>

          <Link href={"/products"} className="w-full">
            <FullWidthBtn text={"Continue Shopping"} color={"bg-primary"} customClass={"w-full hover:bg-primary-dark"}/>
          </Link>
        
      </div>
      </div>
    </div>
  );
};

export default OrderCompletePage;