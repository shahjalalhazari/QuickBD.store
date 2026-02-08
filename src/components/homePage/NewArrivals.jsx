import Image from "next/image";
import UnderlineBtn from "../shared/buttons/UnderlineBtn";
import { FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { VscStarFull } from "react-icons/vsc";
import SectionHeading from "../shared/heading/SectionHeading";
import Link from "next/link";
import ProductCard from "../shared/cards/ProductCard";

const products = [
  {
    id: 1,
    name: "Fresh Papaya",
    price: 99.00,
    discountPrice: 149.99,
    image: "/images/products/item-15.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Grill Chicken",
    price: 450.25,
    discountPrice: 549.99,
    image: "/images/products/item-2.jpg",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: 220.99,
    discountPrice: 299.99,
    image: "/images/products/item-3.jpg",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Fresh Fruits",
    price: 99.00,
    image: "/images/products/item-10.jpg",
    rating: 4.0,
  },
  {
    id: 5,
    name: "Fresh Papaya",
    price: 99.00,
    image: "/images/products/item-15.jpg",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Grill Chicken",
    price: 450.25,
    discountPrice: 549.99,
    image: "/images/products/item-2.jpg",
    rating: 3.0,
  },
  {
    id: 7,
    name: "Chicken Burger",
    price: 220.99,
    discountPrice: 299.99,
    image: "/images/products/item-3.jpg",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Fresh Fruits",
    price: 99.00,
    image: "/images/products/item-10.jpg",
    rating: 4.0,
  },
];


const NewArrivals = () => {
  return (
    <section className="new-arrivals-section">
      <SectionHeading text={"New Arrivals"} customClass="w-full" />

        <div className="products-list">
          {products.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>

        <div className="flex justify-end">
          <UnderlineBtn text="Show More" icon={<FaAngleRight/>}/>
        </div>

    </section>
  );
};

export default NewArrivals;