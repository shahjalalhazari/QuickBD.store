import PageHeaderSetter from '@/components/sellerLayout/shared/PageHeaderSetter';
import { sellerDashboardPageMeta } from '@/lib/sellerDashboardPageMeta';
import React from 'react';

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
      Seller Dashboard Page
    </React.Fragment>
  );
};

export default SellerDashboardPage;