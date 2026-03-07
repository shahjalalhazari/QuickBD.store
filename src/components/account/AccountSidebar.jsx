"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TbCameraPlus } from "react-icons/tb";

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
  
];

const AccountSidebar = () => {
  const pathname = usePathname();;

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
          />
          <button className='upload-btn' title='change Photo'>
            <TbCameraPlus className='icon' />
          </button>
        </div>
        <h6 className='user-name'>Shahjalal Hazari</h6>
      </div>

      {/* MENU LIST */}
      <ul className='account-menu-items'>
        {menuItems.map((item) => (
          <Link
            href={item.path} 
            key={item.path}
          >
            <li className={`
              menu-item quickbd-transition 
              ${pathname === item.path ? "active" : ""}`
            }>
              {item.name}
            </li>
          </Link>
        ))}
        <button className='w-full'>
          <li className={`menu-item quickbd-transition`}>
            Log Out
          </li>
        </button>
      </ul>
    </div>
  );
};

export default AccountSidebar;