import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BiX } from "react-icons/bi";
import FullWidthBtn from "../shared/buttons/FullWidthBtn";
import UnderlineBtn from "../shared/buttons/UnderlineBtn";
import { FaMinus, FaPlus } from "react-icons/fa6";


const CartSidebar = ({ isOpen, onClose, cartItems }) => {
  const totalItems = cartItems.length;

  // DISABLE BODY SCROLL WHILE OPEN.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* BG OVERLAY */}
      <div
        className={`oberlay quickbd-transition
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />

      {/* CART SIDEBAR */}
      <div className={`sidebar right-0
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* SIDEBAR HEADER */}
        <div className="sidebar-header">
          <h2 className="sidebar-heading">
            Shopping Cart <strong>({totalItems})</strong>
          </h2>
          <button onClick={onClose} className="close-btn quickbd-transition">
            <BiX size={26}/>
          </button>
        </div>

        {/* BODY CONTAINER - SCROLLABLE */}
        <div className="sidebar-body-container">
          <div className="cart-list">
            {cartItems.length === 0 ? (
              <p className="cart-empty">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((_, index) => (
                <div
                  key={index}
                  className="cart-list-item quickbd-transition"
                >
                  <Image
                    src={"/images/products/item-1.jpg"}
                    width={100}
                    height={100}
                    alt={"Apple"}
                    className="list-item-img"
                  />
                  <div className="cart-item-content">
                    <div className="item-title">
                      <h5>Beef Tikka Burger</h5>
                      <button onClick={onClose} className="close-btn quickbd-transition">
                        <BiX size={20}/>
                      </button>
                    </div>
                    <p className="varitent">size: <span>M</span> | Ingredient: <span>Beef</span></p>
                    <div className="price-qty">
                      <div className="qty-selector">
                        <button className="qty-change quickbd-transition"><FaMinus /></button>
                        <span>1</span> 
                        <button  className="qty-change quickbd-transition"><FaPlus /></button>
                      </div>
                      <p className="unit-price">৳ 129.99</p>
                      <h6 className="total-price">৳ 129.00</h6>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* SIDEBAR FOOTER */}
        <div className="sidebar-footer">
          {totalItems >= 1 && 
            <div className="sub-total">
              <span>Subtotal</span>
              <span>৳ 250.99</span>
            </div>
          }

          <div className="buttons">
            <div className="w-full" onClick={onClose}>
              <FullWidthBtn color={"bg-primary"} text={"Continue Shopping"} customClass={"w-full"}/>
            </div>
            {totalItems >= 1 && 
              <Link href="/cart" onClick={onClose} className="w-full">
                <FullWidthBtn color={"bg-secondary"} text={"Checkout"} customClass={"w-full"}/>
              </Link>
            }
          </div>
        </div>

      </div>
    </>
  );
};

export default CartSidebar;



{/* <> */}
      

      {/* CART SIDEBAR */}
        {/* TOP PART */}
        {/* <div className="top-part-content">
          

        <div className="cart-list-container">
          {totalItems === 0 ? (
            <p className="cart-empty">
              Your cart is empty.
            </p>
          ) : (
            <div className="cart-list">
              {cartItems.map((_, index) => (
                <div
                  key={index}
                  className="cart-list-item"
                >
                  <Image
                    src={"/images/products/item-1.jpg"}
                    width={70}
                    height={70}
                    alt={"Apple"}
                    className="list-item-img quickbd-transition"
                  />

                  <div className="cart-item-content">
                    <div>
                      <h5>Beef Tikka Burger</h5>
                      <BiX />
                    </div>
                    <p>size: <span>M</span> | Ingredient: <span>Beef</span></p>
                    <div className="">
                      <div className="qty-selector">- 1 +</div>
                      <p>৳ 129.99</p>
                      <h6>৳ 129.00</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
    </> */}