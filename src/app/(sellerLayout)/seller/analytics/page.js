import RecentActivitiesSection from '@/components/sellerLayout/analyticsPage/RecentActivitiesSection';
import RevenueOverview from '@/components/sellerLayout/analyticsPage/RevenueOverview';
import StatCards from '@/components/sellerLayout/dashboardPage/StatCards';
import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';
import { FaPercentage } from 'react-icons/fa';
import { FaBagShopping, FaUsers } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';
import "./analyticsPage.css";

// METADATA
export const metadata = sellerDashboardPageMeta.analytics.metadata;


const AnalyticsPage = () => {
  return (
    <React.Fragment>
      {/* PAGE HEADER */}
      <PageHeaderSetter
        heading={sellerDashboardPageMeta.analytics.heading}
        subheading={sellerDashboardPageMeta.analytics.subheading}
      />

      {/* STAT CARDS */}
      <StatCards statCardData={statCardData} />

      {/* REVENUE OVERVIEW */}
      <RevenueOverview />

      <div className='two-col-grid'>
      {/* RECENT ACTIVITIES */}
      <RecentActivitiesSection />
      </div>
    </React.Fragment>
  );
};

export default AnalyticsPage;


// STAT CARD's DATA
const statCardData = [
  {
      id:1,
      label:"Total Revenue",
      value:"৳ 45,892",
      change:"14.8%",
      trend:"up",
      intent:"primary",
      icon: <TbCurrencyTaka />,
    },

    {
      id:2,
      label:"Avg. Order Value",
      value:"৳ 450.76",
      change:"9.2%",
      trend:"up",
      intent:"accent",
      icon: <FaBagShopping />,
    },

    {
      id:3,
      label:"Conversion Rate",
      value:"4.5%",
      change:"0.5%",
      trend:"up",
      intent:"info",
      icon: <FaPercentage />,
    },

    {
      id:4,
      label:"Repeated Customers",
      value:"520",
      change:"1.1%",
      trend:"up",
      intent:"purple",
      icon: <FaUsers />,
    }
]