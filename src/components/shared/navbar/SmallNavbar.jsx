"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiFacebook, FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch, BiX } from "react-icons/bi";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram, FaRegHeart } from "react-icons/fa6";
import FullWidthBtn from "../buttons/FullWidthBtn";

const SmallNavbar = ({ navItems }) => {
	const pathname = usePathname();
	const [navbarOpen, setNavbarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openNavbar = () => {
    setNavbarOpen(true);
    setIsClosing(false);
  };

  const closeNavbar = () => {
    setIsClosing(true);

    setTimeout(() => {
      setNavbarOpen(false);
      setIsClosing(false);
    }, 500);
  };

	return (
		<>


		<ul className="small-navbar">
			{/* NAVBAR FOR SMALL DEVICES */}
      {/* HAMBURGER ICON */}
      <li className="text-heading-color" onClick={openNavbar}>
        <GiHamburgerMenu size={28} />
      </li>
      {/* NAVBAR LOGO */}
      <li className="navbar-logo">
        <Link href="/" className="navbar-item">
          <Image src="/images/logo/logo.png" alt="Logo" width={110} height={27} className="w-auto h-auto"/>
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

		{navbarOpen && (
          <>
            {/* BG OVERLAY */}
            <div
              className={`sidebar-overlay ${isClosing ? "fade-out" : "fade-in"}`}
            ></div>

            {/* SIDEBAR MENU SLIDER */}
            <div
              className={`menu-sidebar ${isClosing ? "slide-out" : "slide-in"}`}
            >

                {/* SLIDER TOP PART */}
              <div className="top-part-content">
                <div className="sidebar-header">
                  {/* LOGO */}
                  <Link href="/" className="navbar-item">
                    <Image src="/images/logo/logo.png" alt="Logo" width={110} height={27} className="w-auto h-auto"/>
                  </Link>
                  {/* CLOSE BTN */}
                  <button className="sidebar-close-btn text-heading-color" onClick={closeNavbar}>
                    <BiX size={32} />
                  </button>
                </div>

                {/* SEARCH BOX */}
                <form className="sidebar-search-box">
                  <div className="search-input-wrapper">
                    <span>
                      <BiSearch size={22} className="text-body-color"/>
                    </span>
                    <input 
                      name="search" id="search" 
                      placeholder="Find Your Needs" 
                      className="sidebar-search-input" 
                    />
                  </div>

                  <button type="submit" className="sidebar-search-btn">Search</button>
                </form>

                {/* NAVBAR ITEMS */}
                <ul className="sidebar-nav-list">
                  {navItems?.map((item) => (
                    <li key={item.path}>
                      <Link
                        className={`nav-item ${
                          pathname === item.path && "active-nav-item"
                        }`}
                        href={item.path}
                        onClick={closeNavbar}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul> 
              </div>

              {/* BOTTOM PART */}
              <div className="bottom-part-content">

                {/* CART BTN */}
                <Link href="/cart" 
                  className={`cart-full-btn ${
                  pathname === "/cart" ? "active-nav-item" : ""}`}
                  onClick={closeNavbar}
                >
                  <p>Cart</p>
                  <span className="cart-icon">
                    <FiShoppingBag className="navbar-icon" />
                    <span className="cart-count">9</span>
                  </span>
                </Link>

                {/* FAVORITE BTN */}
                <Link href="/profile/favorite" 
                  className={`cart-full-btn ${
                  pathname === "/profile/favorite" ? "active-nav-item" : ""}`}
                  onClick={closeNavbar}
                >
                  <p>Favorite</p>
                  <span className="cart-icon">
                    <FaRegHeart className="navbar-icon" />
                    <span className="cart-count">9</span>
                  </span>
                </Link>

                {/* SIGNIN / ACCOUNT BTN */}
                <Link href={"/signin"}>
                  <FullWidthBtn 
                    text={"SignIn / Account"} 
                    color={"bg-primary"}
                    customClass=""
                    onClick={closeNavbar} 
                  />
                </Link>

                {/* SOCIAL MEDIA ICONS */}
                <div className="social-icons">
                  <Link href={"/"} target="_blank">
                    <FaInstagram className="navbar-icon"/>
                  </Link>
                  <Link href={"/"} target="_blank">
                    <FiFacebook className="navbar-icon"/>
                  </Link>
                  <Link href={"/"} target="_blank">
                    <SlSocialYoutube className="navbar-icon"/>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
		
		
		
		
		
		</>
	);
};

export default SmallNavbar;