"use client"
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { TbCameraPlus } from "react-icons/tb";
import DropdownForRedirect from '../shared/filters/DropdownForRedirect';
import { userSignOut } from '@/utils/userSignOut';

const menuItems = [
  {
    name: "Profile",
    path: "/account/profile",
  },
  {
    name: "Orders",
    path: "/account/orders",
  },
  {
    name: "Favorite Items",
    path: "/account/favorites",
  },
  {
    name: "Address",
    path: "/account/address",
  },
  {
    name: "Logout",
    action: "logout",
  }
];

const AccountSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleMenuClick = (item) => {
    if (item.action) {
      userSignOut();
    } else {
      router.push(item.path);
    }
  }

  return (
    <div className="sidebar-container">
      {/* USER PHOTO & NAME */}
      <div className="user-details">
        <div className="photo">
          <Image 
            src={"/images/users/user-2.jpg"} 
            alt='Shahjalal Hazari' 
            width={80} 
            height={80} 
            className='user-photo'
            priority
          />
          <button className='upload-btn' title='change Photo'>
            <TbCameraPlus className='icon' />
          </button>
        </div>
        <h6 className='user-name'>Shahjalal Hazari</h6>
      </div>

      {/* MENU LIST FOR MEDIUM & LARGE DEVICES */}
      <ul className='account-menu-items'>
        {menuItems.map((item, index) => (
          <li key={index}
            onClick={() => handleMenuClick(item)}
            className={`
            menu-item quickbd-transition 
            ${item.path && pathname === item.path && "active"}`
          }>
            {item.name}
          </li>
        ))}
      </ul>

      {/* DRODOWN FOR SMALL DIVICES */}
      <div className="account-dropdown">
        <DropdownForRedirect options={menuItems} />
      </div>
    </div>
  );
};

export default AccountSidebar;