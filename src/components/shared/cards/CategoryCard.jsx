import Image from 'next/image';
import Link from 'next/link';
import UnderlineBtn from '../buttons/UnderlineBtn';
import { FaArrowRight } from 'react-icons/fa6';

const CategoryCard = ({ category }) => {
  return (
    <div className="categroy-card">
      <Link href={`/products?category=${category.title.toLowerCase()}`}>
        <Image
          src={category.image}
          alt={category.title}
          width={500}
          height={520}
          className="category-image quickbd-transition"
        />
      </Link>
      <div className="card-content">
        <h3 className="category-title">Order {category.title}</h3>
        <Link href={`/products?category=${category.title.toLowerCase()}`}>
          <UnderlineBtn text="Shop Now" icon={<FaArrowRight />} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;