"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LargeNavbar = ({navItems}) => {
  const pathname = usePathname();
  
  return (
    <nav className="quickbd-navbar" role="navigation" aria-label="main navigation">

      {/* NAVBAR LOGO */}
      <div className="navbar-logo">
        <Link href="/" className="navbar-item">
          <Image src="/images/logo/logo.png" alt="Logo" width={160} height={38.27} />
        </Link>
      </div>


      {/* MAIN NAV ITEMS */}
      <ul className='navbar-items'>

        {navItems.map((item, index) => (
          <li key={index} className={`navbar-item quickbd-transition ${pathname === item.path ? 'active-nav' : ''}`}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>


      {/* NAVBAR ICONS */}
      <ul className='navbar-icons'>
        <li className='navbar-icon'>
          {pathname === "/profile" ? 
            <>
              <Image src="/icons/primary/vector.png" alt="User" width={24} height={24} />
            </> :
            <Link href="/profile">
              <Image src="/icons/dark_gray/vector.png" alt="User" width={24} height={24} />
            </Link>
          }
        </li>

        <li className='navbar-icon'>
          <Link href="/signin">
            <Image src="/icons/dark_gray/login.png" alt="Login" width={24} height={24} />
          </Link>
        </li>

        <li className='navbar-icon'>
          <Link href="/cart">
            <Image src="/icons/dark_gray/shopping_basket.png" alt="Shopping Bag" width={24} height={24} />
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default LargeNavbar;