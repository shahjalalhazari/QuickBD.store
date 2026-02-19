"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch, BiX } from "react-icons/bi";
import { FaFacebookF, FaYoutube, FaInstagram, FaRegHeart } from "react-icons/fa6";
import FullWidthBtn from "../buttons/FullWidthBtn";
import { FiShoppingBag } from "react-icons/fi";

const SmallNavbar = ({ navItems, onCartOpen  }) => {
	const pathname = usePathname();
	const [navbarOpen, setNavbarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const cartItems = [1, 2, 3, 4];
  const totalItems = cartItems.length;

  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/shahjalalhazari0/";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/shahjalalhazari/";
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || "#";

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
      {/* NAVBAR FOR SMALL DEVICES */}
      <ul className="small-navbar">
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
          <button onClick={onCartOpen} className="cart-icon">
            <FiShoppingBag className="navbar-icon" />
            <span className="cart-count">{totalItems}</span>
          </button>
        </li>
      </ul>

		{navbarOpen && (
      <>
        {/* BG OVERLAY */}
        <div
          className={`oberlay ${isClosing ? "fade-out" : "fade-in"}`}
        ></div>
        {/* SIDEBAR MENU SLIDER */}
        <div
          className={`sidebar left-0 ${isClosing ? "slide-out" : "slide-in"}`}
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
              <Link href={instagramUrl} target="_blank" className='quickbd-transition'>
                <FaInstagram className="navbar-icon"/>
              </Link>
              <Link href={facebookUrl} target="_blank" className='quickbd-transition'>
                <FaFacebookF className="navbar-icon"/>
              </Link>
              <Link href={youtubeUrl} target="_blank" className='quickbd-transition'>
                <FaYoutube className="navbar-icon"/>
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