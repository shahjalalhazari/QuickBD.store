import StatCards from '@/components/sellerLayout/dashboardPage/StatCards';
import ProductsList from '@/components/sellerLayout/productsPage/ProductsList';
import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { getProducts } from '@/lib/getProducts';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { FaCircleCheck, FaTriangleExclamation } from 'react-icons/fa6';
import { PiChartLineDownBold } from 'react-icons/pi';
import "./productsPage.css";

export const metadata = sellerDashboardPageMeta.products.metadata

const SellerProductsPage = async () => {
  const allProducts = await getProducts();
  
  return (
    <React.Fragment>
      <PageHeaderSetter
        heading={sellerDashboardPageMeta.products.heading}
        subheading={sellerDashboardPageMeta.products.subheading}
      />

      {/* STAT CARDS */}
      <StatCards statCardData={statCardData} />

      {/* PRODUCTS TABLE SECTION */}
      <ProductsList allProducts={allProducts} />
      
    </React.Fragment>
  );
};

export default SellerProductsPage;


// STAT CARD's DATA
const statCardData = [
  {
      id:1,
      label:"Total Products",
      value:"40",
      change:"14.8%",
      trend:"up",
      intent:"info",
      icon: <AiFillProduct />,
    },

    {
      id:2,
      label:"Active Products",
      value:"34",
      change:"9.2%",
      trend:"up",
      intent:"accent",
      icon: <FaCircleCheck />,
    },

    {
      id:3,
      label:"Out of Stock",
      value:"5",
      change:"1.15%",
      trend:"down",
      intent:"danger",
      icon: <FaTriangleExclamation />,
    },

    {
      id:4,
      label:"Low Stock (<5)",
      value:"1",
      change:"0.0%",
      trend:"neutral",
      intent:"waning",
      icon: <PiChartLineDownBold />,
    }
]