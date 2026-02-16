import "./products.css";
import ClientProductsPage from "@/components/productsPage/ClientProductsPage";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <ClientProductsPage
        products = {products}
        sortingOptions = {sortingOptions}
        categoryOptions = {categoryOptions}
        priceOptions = {priceOptions}
      />
    </div>
  );
};

export default ProductsPage;


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
  {
    id: 9,
    name: "Fresh Papaya",
    price: 99.00,
    image: "/images/products/item-15.jpg",
    rating: 4.5,
  },
  {
    id: 10,
    name: "Grill Chicken",
    price: 450.25,
    discountPrice: 549.99,
    image: "/images/products/item-2.jpg",
    rating: 3.0,
  },
  {
    id: 11,
    name: "Chicken Burger",
    price: 220.99,
    discountPrice: 299.99,
    image: "/images/products/item-3.jpg",
    rating: 5.0,
  },
  {
    id: 12,
    name: "Fresh Fruits",
    price: 99.00,
    image: "/images/products/item-10.jpg",
    rating: 4.0,
  },
];

const sortingOptions = [
  { label: "Default", value: "default" },
  { label: "Name, A - Z", value: "name-asc" },
  { label: "Name, Z - A", value: "name-desc" },
  { label: "Price, Low to High", value: "price-asc" },
  { label: "Price, High to Low", value: "price-desc" },
  { label: "Rating, Low to High", value: "rating-asc" },
  { label: "Rating, High to Low", value: "rating-desc" },
];

const categoryOptions = [
  { label: "All Products", value: "all-products" },
  { label: "Vegetables", value: "vegetables" },
  { label: "Fruits", value: "fruits" },
  { label: "Meat", value: "meat" },
  { label: "Grocery", value: "grocery" },
  { label: "Clothes", value: "clothes" },
  { label: "Shoes", value: "shoes" },
  { label: "Mobile Phone", value: "mobile-phone" },
];

const priceOptions = [
  { label: "All Prices", value: "all-prices" },
  { label: "0 - 100", value: "0-100" },
  { label: "100 - 300", value: "100-300" },
  { label: "300 - 500", value: "300-500" },
  { label: "500+", value: "500-plus" },
];