import Breadcrumbs from "@/components/shared/Breadcrumbs";
import "./products.css";
import ClientProductsPage from "@/components/productsPage/ClientProductsPage";

export const metadata = {
  title: "Products",
};

const ProductsPage = () => {
  return (
    <div className="products-page quickbd-container">
      <div className="small-breadcrumbs">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products" }
          ]}
        />
      </div>
      <ClientProductsPage
        products = {products}
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