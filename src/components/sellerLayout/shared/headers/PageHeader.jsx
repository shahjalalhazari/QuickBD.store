"use client"
import { useHeader } from '@/hooks/useDashboardHeader';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa6';

// PAGE HEADER ONLY FOR LARGE SCREEN DEVICES
const PageHeader = () => {
  const { header } = useHeader();

  return (
    <div className='page-header'>
      {/* HEADING & SUB-HEADING */}
      <div className="heading">
        <h1 className="title">{ header.heading }</h1>
        <p className="subtitle">{ header.subheading }</p>
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
  );
};

export default PageHeader;