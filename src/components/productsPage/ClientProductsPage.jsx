"use client";
import { FaAngleRight } from "react-icons/fa6";
import Breadcrumbs from "../shared/Breadcrumbs";
import UnderlineBtn from "../shared/buttons/UnderlineBtn";
import ProductCard from "../shared/cards/ProductCard";
import CheckboxFilter from "../shared/filters/CheckboxFilter";
import { FiFilter } from "react-icons/fi";


const ClientProductsPage = ({products, sortingOptions, categoryOptions, priceOptions}) => {

  return (
    <>
      {/* LEFT SIDE FILTERS */}
      <div className="filters">
        {/* HEADING */}
        <h2 className="filter-heading"><FiFilter />Filters</h2>

        {/* SORTING LIST */}
        <CheckboxFilter title={"Sort By"} options={sortingOptions} />
        {/* CATEGORIES LIST */}
        <CheckboxFilter title={"Categories"} options={categoryOptions} />
        {/* CATEGORIES LIST */}
        <CheckboxFilter title={"Price Range"} options={priceOptions} />
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "All Products" }
          ]}
        />
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