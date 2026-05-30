import StatCards from '@/components/sellerLayout/dashboardPage/StatCards';
import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';
import { FaCalendarDays, FaClock, FaWallet } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';


// METADATA
export const metadata = sellerDashboardPageMeta.earnings.metadata;


const EarningsPage = () => {
  return (
    <React.Fragment>
          {/* PAGE HEADER */}
          <PageHeaderSetter
            heading={sellerDashboardPageMeta.earnings.heading}
            subheading={sellerDashboardPageMeta.earnings.subheading}
          />
    
          {/* STAT CARDS */}
          <StatCards statCardData={statCardData} />
        </React.Fragment>
  );
};

export default EarningsPage;


// STAT CARD's DATA
const statCardData = [
  {
      id:1,
      label:"Total Earnings",
      value:"৳ 405,892",
      change:"12.8%",
      trend:"up",
      intent:"purple",
      icon: <TbCurrencyTaka />,
    },

    {
      id:2,
      label:"Available Balance",
      value:"৳ 450.76",
      change:"2.2%",
      trend:"up",
      intent:"accent",
      icon: <FaWallet />,
    },

    {
      id:3,
      label:"Pending Payout",
      value:"0.5%",
      change:"0.5%",
      trend:"up",
      intent:"primary",
      icon: <FaClock />,
    },

    {
      id:4,
      label:"Next Payout",
      value:"02 Jun, 2026",
      change:"1.1%",
      trend:"up",
      intent:"info",
      icon: <FaCalendarDays />,
    }
]