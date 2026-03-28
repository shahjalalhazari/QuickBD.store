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
import { useNavigation } from "@/hooks/useNavigation";
import { userSignOut } from "@/utils/userSignOut";

const SmallNavbar = ({ navItems, onCartOpen, cartItems, isCartPage, userSession}) => {
	const pathname = usePathname();
	const [navbarOpen, setNavbarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { isActiveNavItem } = useNavigation();

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


  // HANDLER FOR USER SIGNOUT
  const handleSignOut = () => {
    closeNavbar();
    userSignOut();
  }

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
          <button onClick={onCartOpen} className={`cart-icon ${pathname === "/cart" && "active-icon"}`}>
            <FiShoppingBag className="navbar-icon" />
            <span className="cart-count">{cartItems.length}</span>
          </button>
        </li>
      </ul>

		{navbarOpen && (
      <>
        {/* BG OVERLAY */}
        <div
          className={`oberlay ${isClosing ? "fade-out" : "fade-in"}`}
        ></div>

        {/* MENU SIDEBAR */}
        <div
          className={`sidebar left-0 ${isClosing ? "slide-out" : "slide-in"}`}
        >
          {/* SIDEBAR HEADER */}
          <div className="sidebar-header">
            <Link href="/">
              <Image 
                src="/images/logo/logo.png" 
                alt="Logo" width={110} height={27} 
                className="w-auto h-auto"
              />
            </Link>
            <button onClick={closeNavbar} className="close-btn quickbd-transition">
              <BiX size={26}/>
            </button>
          </div>

          {/* BODY CONTAINER - SCROLLABLE */}
          <div className="sidebar-body-container">
            {/* SEARCH BOX */}
            <form className="sidebar-search-box">
              <div className="search-input-wrapper">
                <span>
                  <BiSearch size={20} className="text-body-color"/>
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
                <li 
                  key={item.path}
                  className={`nav-item ${
                    isActiveNavItem(item) && "active-nav-item"
                  }`}
                >
                  <Link
                    href={item.path}
                    onClick={closeNavbar}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul> 
          </div>

          {/* SIDEBAR FOOTER */}
          <div className="sidebar-footer">
            {/* CART BTN */}
            <Link href="/cart" 
              className={`cart-full-btn 
                ${isCartPage && "sidebar-active-icon"}
              `}
              onClick={closeNavbar}
            >
              <p>Cart</p>
              <span className="cart-icon">
                <FiShoppingBag className="navbar-icon" />
                <span className="cart-count">{cartItems.length}</span>
              </span>
            </Link>

            {/* FAVORITE BTN */}
            <Link href="/profile/favorite" 
              className={`cart-full-btn ${
              pathname === "/account/favorite" && "sidebar-active-icon"}`}
              onClick={closeNavbar}
            >
              <p>Favorite</p>
              <span className="cart-icon">
                <FaRegHeart className="navbar-icon" />
                <span className="cart-count">9</span>
              </span>
            </Link>

            {/* SIGNIN / ACCOUNT BTN */}
            {userSession.status === "authenticated" ? 
              <Link href={"/account"} className="w-full" onClick={closeNavbar}>
                <FullWidthBtn 
                  text={"Profile"} 
                  color={"bg-primary"}
                  customClass={"w-full"}
                />
              </Link> : 
              <Link href={"/auth/signin"} className="w-full" onClick={closeNavbar}>
                <FullWidthBtn 
                  text={"SignIn"} 
                  color={"bg-primary"}
                  customClass={"w-full"}
                />
              </Link>
            }


            <div className="flex items-center justify-between w-full">
              {/* USER SIGN OUT BUTTON */}
              {userSession.status === "authenticated" &&
                <div className="w-1/2" onClick={handleSignOut}>
                  <FullWidthBtn 
                    text={"Sign Out"} 
                    color={"bg-heading-color"}
                    customClass={"w-full"}
                  />
                </div>
              }
              
              {/* SOCIAL MEDIA ICONS */}
              <div className="flex gap-x-4 text-heading-color">
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
        </div>
      </>
      )}
		</>
	);
};

export default SmallNavbar;