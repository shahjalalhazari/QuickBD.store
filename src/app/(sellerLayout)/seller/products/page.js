import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';

export const metadata = sellerDashboardPageMeta.products.metadata

const SellerProductsPage = () => {
  return (
    <React.Fragment>
      <PageHeaderSetter
        heading={sellerDashboardPageMeta.products.heading}
        subheading={sellerDashboardPageMeta.products.subheading}
      />
      Seller All Products will go here with all details.
    </React.Fragment>
  );
};

export default SellerProductsPage;