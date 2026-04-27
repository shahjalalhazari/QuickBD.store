import Breadcrumbs from '@/components/customerLayout/shared/Breadcrumbs';
import UnderlineBtn from '@/components/shared/buttons/UnderlineBtn';
import CategoryCard from '@/components/customerLayout/shared/cards/CategoryCard';
import { FaArrowRight } from 'react-icons/fa6';
import "./categories.css";
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from '@/app/metadata';

export const metadata = {
  title: "Categories",
  description: SITE_DESCRIPTION
};

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      title: "Food",
      image: "/images/products/item-3.jpg",
    },
    {
      id: 2,
      title: "Grocery",
      image: "/images/categories/category-4.jpg",
    },
    {
      id: 3,
      title: "Fruits",
      image: "/images/categories/category-3.jpg",
    },
    {
      id: 4,
      title: "Furniture",
      image: "/images/categories/category-7.jpg",
    },
    {
      id: 5,
      title: "Vegetables",
      image: "/images/categories/category-6.jpg",
    },
    {
      id: 6,
      title: "Clothing",
      image: "/images/categories/category-2.jpg",
    },
  ];

  return (
    <div className="quickbd-container categories-page">
      {/* BREADCRUMBS */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories" }
        ]}
      />

      <div className="body-container">
        <div className="category-list">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="flex justify-end">
          <UnderlineBtn text={"Show More"} icon={<FaArrowRight />} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;