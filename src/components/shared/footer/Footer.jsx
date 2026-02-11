import Image from 'next/image';
import Link from 'next/link';
import "./footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import FooterColumn from './FooterColumn';

const Footer = () => {
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/shahjalalhazari0/";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/shahjalalhazari/";
  const youtubeUrl = process.env.NEXT_PUBLIC_YOUTUBE_URL || "#";

  return (
    <footer className="quickbd-footer">
      {/* TOP PART */}
      <div className="footer-top-part">
        {/* CLOUMN 1 - BRAND */}
        <div className='footer-column'>
          <Image src="/images/logo/whiteLogo.png"
            alt="QuickBD Store Logo"
            width={350}
            height={10}
            className='footer-logo'
          />

          <p className="text-base font-medium">
            All Your Needs, <br />
            <span className="font-bold">Delivered To Your Doorstep</span>
          </p>

          <div className="social-icons">
            <Link href={instagramUrl} target="_blank" className='quickbd-transition'>
              <FaInstagram />
            </Link>
            <Link href={facebookUrl} target="_blank" className='quickbd-transition'>
              <FaFacebookF />
            </Link>
            <Link href={youtubeUrl} target="_blank" className='quickbd-transition'>
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* COLUMN 2 - PAGES */}
        <FooterColumn heading={"Pages"} links={pages} isAccount={true} />

        {/* COLUMN 3 - INFO */}
        <FooterColumn heading={"Info"} links={info} isAccount={false} />

        {/* COLUMN 4 - CONTACT */}
        <FooterColumn heading={"Contact Us"} links={contactUs} isAccount={false} />
      </div>

      <div className="bottom-part">
        <p>Copyright © 2025 QuickBD.store. All rights reserved</p>
      </div>

    </footer>
  );
};

export default Footer;

const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Category",
    path: "/categories",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
]

const info = [
  {
    title: "FAQs",
    path: "/faq",
  },
  {
    title: "Delivery Policy",
    path: "/policy/delivery",
  },
  {
    title: "Refund Policy",
    path: "/policy/refund",
  },
  {
    title: "Privacy Policy",
    path: "/policy/privacy",
  },
  {
    title: "Terms of Service",
    path: "/policy/terms",
  },
]

const contactUs = [
  {
    title: "+880 123 456 789",
    path: "/contact-us",
  },
  {
    title: "quickbddotstore@gmail.com",
    path: "/contact-us",
  },
  {
    title: "Gouripur Bazar, Daudkandi, | Cumilla - 3517",
    path: "/contact-us",
  },
]