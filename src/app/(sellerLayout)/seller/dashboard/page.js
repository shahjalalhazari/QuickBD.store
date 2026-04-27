import SalesOverviewChart from '@/components/sellerLayout/dashboardPage/SalesOverviewChart';
import StatCards from '@/components/sellerLayout/dashboardPage/StatCards';
import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';
import { FaCartShopping, FaChartColumn, FaTruckPickup } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';
import "./dashboardPage.css";
import RecentOrders from '@/components/sellerLayout/dashboardPage/RecentOrders';

// METADATA
export const metadata = sellerDashboardPageMeta.dashboard.metadata;

const SellerDashboardPage = () => {
  return (
    <React.Fragment>
      {/* PAGE HEADER */}
      <PageHeaderSetter
        heading={sellerDashboardPageMeta.dashboard.heading}
        subheading={sellerDashboardPageMeta.dashboard.subheading}
      />

      {/* STAT CARDS */}
      <StatCards statCardData={statCardData} />

      {/* SALES OVERVIEW CHART */}
      <SalesOverviewChart />

      {/* RECENT ORDERS TABLE */}
      <RecentOrders/>

    </React.Fragment>
  );
};

export default SellerDashboardPage;


// STAT CARD's DATA
const statCardData = [
  {
      id:1,
      label:"Total Sales",
      value:"৳ 12,840",
      change:"14.8%",
      trend:"up",
      intent:"accent",
      icon: <TbCurrencyTaka />,
    },

    {
      id:2,
      label:"Total Orders Completed",
      value:"342",
      change:"9.2%",
      trend:"up",
      intent:"info",
      icon: <FaTruckPickup />,
    },

    {
      id:3,
      label:"Active Products",
      value:"25",
      change:"0.0%",
      trend:"neutral",
      intent:"secondary",
      icon: <FaCartShopping />,
    },

    {
      id:4,
      label:"This Month Revenue",
      value:"৳ 2,840",
      change:"2.1%",
      trend:"down",
      intent:"danger",
      icon: <FaChartColumn />,
    }
]