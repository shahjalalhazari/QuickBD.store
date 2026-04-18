import { FaArrowRight } from "react-icons/fa6";
import UnderlineBtn from "../shared/buttons/UnderlineBtn";
import CategoryCard from "../shared/cards/CategoryCard";
import Link from "next/link";

const CategorySection = () => {
  const categories = [
    {
      title: "Food",
      image: "/images/products/item-3.jpg",
    },
    {
      title: "Grocery",
      image: "/images/categories/category-4.jpg",
    },
    {
      title: "Fruits",
      image: "/images/categories/category-3.jpg",
    },
    {
      title: "Furniture",
      image: "/images/categories/category-7.jpg",
    },
    {
      title: "Vegetables",
      image: "/images/categories/category-6.jpg",
    },
    {
      title: "Clothing",
      image: "/images/categories/category-2.jpg",
    },
  ];


  return (
    <section className="categories-section">
      <div className="category-list">
        {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
      </div>

      <Link href="/categories" className="flex justify-end">
        <UnderlineBtn text={"Show More"} icon={<FaArrowRight />} />
      </Link>
    </section>
  );
};

export default CategorySection;