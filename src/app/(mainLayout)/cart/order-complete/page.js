import CartProgress from "@/components/cartPage/CartProgress";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import "./orderComplete.css";
import Image from "next/image";
import Link from "next/link";
import ConfirmHeadingSection from "@/components/orderCompletePage/ConfirmHeadingSection";
import OrderDetails from "@/components/orderCompletePage/OrderDetails";
import { HiDownload } from "react-icons/hi";
import FullWidthBtn from "@/components/shared/buttons/FullWidthBtn";

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