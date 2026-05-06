"use client"
import { useHeader } from '@/hooks/useDashboardHeader';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname } from 'next/navigation';
import { BiX } from 'react-icons/bi';


// PAGE HEADER ONLY FOR MEDIUM & SMALL SCREEN DEVICES.
const MdSmPageHeader = ({ navitems }) => {
  const { header } = useHeader();
  const pathname = usePathname();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    setIsClosing(false);
  };

  const closeSidebar = () => {
    setIsClosing(true);

    setTimeout(() => {
      setSidebarOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <React.Fragment>
      <div className='page-header'>
        {/* LEFT SIDE - SIDEBAR BUTTON & HEADINGS */}
        <div className="flex items-center gap-8">
          {/* HAMBURGER BUTTON */}
          <button className="text-heading-color" onClick={openSidebar}>
            <GiHamburgerMenu size={36} />
          </button>

          {/* HEADING & SUB-HEADING */}
          <div className="heading">
            <h1 className="title">{ header.heading }</h1>
            <p className="subtitle">{ header.subheading }</p>
          </div>
        </div>

        {/* RIGHT SIDE - NOTIFICATION, SUPPORT & PROFILE AVATER */}
        <div className="right-side">
          <div className="notification quickbd-transition">
            <FaBell className='icon' />
            <div className="notification-circle"></div>
          </div>
          <div className="support quickbd-transition">
            <FaQuestionCircle className='icon' />
          </div>
          <Link href={"/seller/settings"} className="profile quickbd-transition">
            <Image 
            src={"/images/users/user-1.jpg"} 
            alt="Profile" priority
            width={20} height={20} />
          </Link>
        </div>
      </div>

      {/* DASHBOARD OPEN SIDEBAR & OVERLAY */}
      {sidebarOpen && (
        <React.Fragment>
          {/* BG OVERLAY */}
          <div className={`
            sidebar-oberlay ${
              isClosing ? "fade-out" : "fade-in"
            }`}
            onClick={closeSidebar}
          ></div>
          {/* DASHBOARD SIDEBAR */}
          <div className={`
            small-sidebar left-0 ${
              isClosing ? "slide-out" : "slide-in"
            }`}
          >
            {/* CLOSE BTN */}
            <button 
              onClick={closeSidebar} 
              className={`close-btn quickbd-transition ${isClosing ? "fade-out" : "fade-in"}`}
            >
              <BiX />
            </button>

            {/* LOGO */}
            <Link href={"/seller/dashboard"} className="sidebar-logo">
              <Image 
                src={"/images/logo/whiteLogo.png"} 
                alt={"logo"} width={160} height={50}
                className='logo'
                priority
              />
            </Link>

            {/* SIDEBAR BODY - SCROLLABLE */}
            <div className="sidebar-body">
              {/* NAVIGATION */}
              <ul className='sidebar-nav-items'>
                {navitems?.map((item) => (
                  <li key={item.path}>
                    <Link 
                      onClick={closeSidebar}
                      href={item.path} 
                      className={`
                        sidebar-item quickbd-transition ${
                          pathname === item.path && "sidebar-active-item"
                        }`
                      }
                    >
                      <span className='icon'>{item.icon}</span>
                      <span className='name'>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SHOP NAME */}
            <div className="store-status-details">
              <Link href={"/seller/settings"}>
                <p className='shop-name'>Hajari Fruits Shop</p>
              </Link>
              <div className='online-status'>
                <div className=''></div>
                <p className=''>Online</p>
              </div>
            </div>
          </div>
      </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MdSmPageHeader;