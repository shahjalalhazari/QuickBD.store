import PageHeader from "@/components/sellerLayout/shared/headers/PageHeader";
import "./sellerLayout.css";
import SellerDashboardSidebar from "@/components/sellerLayout/shared/Sidebar";
import { HeaderProvider } from "@/hooks/useDashboardHeader";


const SellerLayout = ({ children }) => {

  return (
    <HeaderProvider>
      <div className="dashboard-layout">
        {/* SIDEBAR */}
        <SellerDashboardSidebar />

        <main className="dashboard-content">
          {/* PAGE HEADER */}
          <PageHeader />

          {/* CHILDREN */}
          { children }
        </main>
      </div>
    </HeaderProvider>
  );
};

export default SellerLayout;