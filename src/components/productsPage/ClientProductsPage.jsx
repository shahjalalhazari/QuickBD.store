"use client";
import { FaAngleRight } from "react-icons/fa6";
import Breadcrumbs from "../shared/Breadcrumbs";
import UnderlineBtn from "../shared/buttons/UnderlineBtn";
import ProductCard from "../shared/cards/ProductCard";
import CheckboxFilters from "./CheckboxFilters";
import SortingDropdowns from "./SortingDropdowns";


const ClientProductsPage = ({products}) => {

  return (
    <>
      {/* LEFT SIDE FILTERS */}
      <div className="filters">
        {/* SIDEBAR CHECK BOX FILTER OPTIONS FOR LARGE DEVICES */}
        <CheckboxFilters 
          sortingOptions={sortingOptions}
          categoryOptions={categoryOptions}
          priceOptions={priceOptions}
        />

        {/* DROPDOWN FILTER OPTIONS FOR SMALL DEVICESS */}
        <SortingDropdowns 
          sortingOptions={sortingOptions}
          categoryOptions={categoryOptions}
          priceOptions={priceOptions}
        />
        
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        <div className="large-breadcrumbs">
          <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products" }
          ]}
        />
        </div>
        <div className="products-grid-items">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>

        <div className="flex justify-end">
          <UnderlineBtn icon={<FaAngleRight />} text={"Load More"} />
        </div>
      </div>      
    </>
  );
};

export default ClientProductsPage;


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