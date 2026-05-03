"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartSimple, FaGear, FaUsers, FaWallet } from 'react-icons/fa6';
import { IoMdCube } from "react-icons/io";
import { RiCouponFill, RiDashboardFill, RiFileListFill } from 'react-icons/ri';

const navitems = [
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

const SellerDashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="dashboard-sidebar">
      {/* LOGO */}
      <Link href={"/"} className="sidebar-logo">
        <Image 
          src={"/images/logo/whiteLogo.png"} 
          alt={"logo"} width={160} height={50} 
          priority
        />
      </Link>

      {/* SIDEBAR BODY - SCROLLABLE */}
      <div className="sidebar-body">
        {/* NAVIGATION */}
        <ul className='sidebar-nav-items'>
          {navitems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className={`sidebar-item quickbd-transition ${pathname === item.path && "sidebar-active-item"}`}>
                <span className='icon'>{item.icon}</span>
                <span className='name'>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* SHOP NAME */}
      <div className="store-status-details">
        <Link href={"/seller/settings"}>
          <p className='shop-name'>Hajari Fruits Shop</p>
        </Link>
        <div className='online-status'>
          <div className=''></div>
          <p className=''>Online</p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboardSidebar;