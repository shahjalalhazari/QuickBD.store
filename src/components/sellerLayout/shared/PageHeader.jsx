"use client"
import { useHeader } from '@/hooks/useDashboardHeader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa6';

const PageHeader = () => {
  const { header } = useHeader();

  return (
    <div className='page-header'>
      <div className="heading">
        <h1 className="title">{ header.heading }</h1>
        <p className="subtitle">{ header.subheading }</p>
      </div>

      <div className="right-side">
        <div className="notification">
          <FaBell className='icon' />
          <div className="notification-circle"></div>
        </div>
        <div className="support">
          <FaQuestionCircle className='icon' />
        </div>
        <Link href={"/seller/settings"} className="profile">
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