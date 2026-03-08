import FavoriteItemsTable from '@/components/account/FavoriteItemsPage/FavoriteItemsTable';
import "./favorites.css";
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from '@/app/metadata';


export const metadata = {
  title: TEMPLATE_NAMES.favorites,
  description: SITE_DESCRIPTION,
};


export const FavoriteItems = [
  {
    name: "Beef Burger",
    image: "/images/products/item-1.jpg",
    price: "৳ 450",
    stock: "In Stock",
    rating: 4.5,
    addedDate: "02 Mar, 2026 | 05:30 PM",
  },
  {
    name: "I Phone 13 Pro Max",
    image: "/images/products/item-9.jpg",
    price: "৳ 38000",
    stock: "In Stock",
    rating: 4.7,
    addedDate: "01 Mar, 2026 | 09:20 PM",
  },
  {
    name: "Apple",
    image: "/images/products/item-3.jpg",
    price: "৳ 200",
    stock: "Low Stock",
    rating: 4.3,
    addedDate: "28 Feb, 2026 | 02:15 PM",
  },
  {
    name: "Pizza",
    image: "/images/products/item-4.jpg",
    price: "৳ 500",
    stock: "Out of Stock",
    rating: 4.1,
    addedDate: "26 Feb, 2026 | 11:05 AM",
  },
  {
    name: "Orage",
    image: "/images/products/item-5.jpg",
    price: "৳ 220",
    stock: "Low Stock",
    rating: 4.3,
    addedDate: "28 Feb, 2026 | 02:15 PM",
  },
];

const FavoriteItemsPage = () => {
  return (
    <div className='box-container'>
			<h3 className="box-heading">Favorite Items List</h3>

      {/* TABLE FOR LARGE SCREEN DEVICES */}
      <FavoriteItemsTable listItems={FavoriteItems} />
		</div>
  );
};

export default FavoriteItemsPage;