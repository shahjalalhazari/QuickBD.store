import StatCards from '@/components/sellerLayout/dashboardPage/StatCards';
import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';
import { FaCircleCheck, FaClock, FaGear } from 'react-icons/fa6';
import { HiSquare3Stack3D } from 'react-icons/hi2';

export const metadata = sellerDashboardPageMeta.orders.metadata;

const SellerOrdersPage = () => {
  return (
    <React.Fragment>
      <PageHeaderSetter
        heading={sellerDashboardPageMeta.orders.heading}
        subheading={sellerDashboardPageMeta.orders.subheading}
      />

      {/* STAT CARDS */}
      <StatCards statCardData={statCardData} />

      {/* ORDERS TABLE SECTION */}
      
    </React.Fragment>
  );
};

export default SellerOrdersPage;


// STAT CARD's DATA
const statCardData = [
  {
      id:1,
      label:"Orders in this nonth",
      value:"20",
      change:"4.0%",
      trend:"up",
      intent:"purple",
      icon: <HiSquare3Stack3D />,
    },

    {
      id:2,
      label:"Pending",
      value:"5",
      change:"9.2%",
      trend:"up",
      intent:"info",
      icon: <FaClock />,
    },

    {
      id:3,
      label:"Processing",
      value:"8",
      change:"10.15%",
      trend:"up",
      intent:"warning",
      icon: <FaGear />,
    },

    {
      id:4,
      label:"Order completed",
      value:"1123",
      change:"4.0%",
      trend:"up",
      intent:"accent",
      icon: <FaCircleCheck />,
    }
]