"use client"
import Link from "next/link";
import "./navbar.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiLogIn, FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav role="navigation" aria-label="main navigation">

      {/* NAVBAR FOR LARGE & MEDIUM DEVICES */}
      <div className="quickbd-navbar">
        {/* NAVBAR LOGO */}
        <div className="navbar-logo">
          <Link href="/" className="navbar-item">
            <Image src="/images/logo/logo.png" alt="Logo" width={160} height={38.27} />
          </Link>
        </div>


        {/* MAIN NAV ITEMS */}
        <ul className='navbar-items'>

          {navItems.map((item, index) => (
            <li key={index} className={`navbar-item quickbd-transition ${pathname === item.path ? 'active-nav' : ''}`}>
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
            <Link href="/cart" className="cart-icon">
              <FiShoppingBag className="navbar-icon" />
              <span className="cart-count">9</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* NAVBAR FOR SMALL DEVICES */}
      <ul className="small-navbar">
        {/* HAMBURGER ICON */}
        <li className="hamburger-icon">
          <GiHamburgerMenu size={28} />
        </li>

        {/* NAVBAR LOGO */}
        <li className="navbar-logo">
          <Link href="/" className="navbar-item">
            <Image src="/images/logo/logo.png" alt="Logo" width={110} height={38.27} />
          </Link>
        </li>

        {/* CART ICON */}
        <li className="quickbd-transition">
          <Link href="/cart" className="cart-icon">
            <FiShoppingBag className="navbar-icon" />
            <span className="cart-count">9</span>
          </Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Navbar;


const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Category",
    path: "/categories",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
]