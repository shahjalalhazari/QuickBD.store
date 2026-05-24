"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SellerDashboardSidebar = ({ navItems }) => {
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
          {navItems?.map((item) => (
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
          <div></div>
          <p>Online</p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboardSidebar;