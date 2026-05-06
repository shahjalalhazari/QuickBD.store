import PageHeader from "@/components/sellerLayout/shared/headers/PageHeader";
import "./sellerLayout.css";
import SellerDashboardSidebar from "@/components/sellerLayout/shared/Sidebar";
import { HeaderProvider } from "@/hooks/useDashboardHeader";
import MdSmPageHeader from "@/components/sellerLayout/shared/headers/MdSmPageHeader";
import { RiCouponFill, RiDashboardFill, RiFileListFill } from "react-icons/ri";
import { IoMdCube } from "react-icons/io";
import { FaChartSimple, FaGear, FaUsers, FaWallet } from "react-icons/fa6";


const SellerLayout = ({ children }) => {

  return (
    <HeaderProvider>
      <div className="dashboard-layout">
        {/* SIDEBAR */}
        <SellerDashboardSidebar navitems={sidebarNavitems} />

        <main className="dashboard-content">
          {/* PAGE HEADER FOR LARGE SCREEN */}
          <div className="hidden lg:block">
            <PageHeader />
          </div> 
          {/* PAGE HEADER FOR SMALL & MEDIUM SCREEN */}
          <div className="lg:hidden">
            <MdSmPageHeader navitems={sidebarNavitems} />
          </div>

          {/* CHILDREN */}
          { children }
        </main>
      </div>
    </HeaderProvider>
  );
};

export default SellerLayout;


const sidebarNavitems = [
  {
    name: "Dashboard",
    path: "/seller/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <RiFileListFill />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <IoMdCube />,
  },
  {
    name: "Analytics",
    path: "/seller/analytics",
    icon: <FaChartSimple />,
  },
  {
    name: "Earnings",
    path: "/seller/earnings",
    icon: <FaWallet />,
  },
  {
    name: "Promotions",
    path: "/seller/promotions",
    icon: <RiCouponFill />,
  },
  {
    name: "Customers",
    path: "/seller/customers",
    icon: <FaUsers />,
  },
  {
    name: "Settings",
    path: "/seller/settings",
    icon: <FaGear />,
  }
]