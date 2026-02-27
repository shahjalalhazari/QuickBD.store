"use client"
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiLogIn, FiShoppingBag } from "react-icons/fi";
import SmallNavbar from "./SmallNavbar";
import CartSidebar from "@/components/cartPage/CartSidebar";
import { useState } from "react";
import { useNavigation } from "@/hooks/useNavigation";

const Navbar = () => {
  const pathname = usePathname();
  const [cartOpen, setCartOpen] = useState(false);
  const { isActiveNavItem } = useNavigation();

  const cartItems = [1, 2, 3, 4, 5];
  const totalItems = cartItems.length;

  return (
    <>
    <nav role="navigation" aria-label="main navigation" className="main-navbar">
      {/* NAVBAR FOR LARGE & MEDIUM DEVICES */}
      <div className="quickbd-navbar">
        {/* NAVBAR LOGO */}
        <div className="navbar-logo">
          <Link href="/" className="navbar-item">
            <Image src="/images/logo/logo.png" alt="Logo" width={160} height={38.27} className="w-auto h-auto"/>
          </Link>
        </div>

        {/* MAIN NAV ITEMS */}
        <ul className='navbar-items'>
          {navItems.map((item) => (
              <li key={item.path} className={`quickbd-transition ${isActiveNavItem(item) ? "active-nav" : ""}`}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* NAVBAR ICONS */}
        <ul className='navbar-icons'>
          <li className="quickbd-transition">
            <Link href="/signin">
              <FaRegCircleUser className="navbar-icon" />
            </Link>
          </li>
          <li className="quickbd-transition">
            <Link href="/signin">
              <FiLogIn className="navbar-icon" />
            </Link>
          </li>
          <li className="quickbd-transition">
            <button
              onClick={() => setCartOpen(true)}
              className="cart-icon"
            >
              <FiShoppingBag className="navbar-icon" />
              <span className="cart-count">{totalItems}</span>
            </button>
          </li>
        </ul>
      </div>

      {/* NAVBAR FOR SMALL DEVICES */}
      <SmallNavbar navItems={navItems} cartItems={cartItems} onCartOpen={() => setCartOpen(true)}/>
    </nav>

    {/* Cart Sidebar */}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
      />
    </>
  );
};

export default Navbar;

const navItems = [
  { title: "Home", path: "/", exact: true },
  { title: "Products", path: "/products" },
  { title: "Category", path: "/categories" },
  { title: "Contact Us", path: "/contact-us" },
];