import LargeNavbar from "./LargeNavbar";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <LargeNavbar navItems={navItems} />
    </>
  );
};

export default Navbar;


const navItems = [
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
];