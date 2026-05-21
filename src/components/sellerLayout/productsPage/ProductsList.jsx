"use client";
import { useState } from 'react';
import SectionHeader from '../shared/headers/SectionHeader';
import SearchBarAndFilters from '../shared/filters/SearchBarAndFilters';
import ProductsCardList from './ProductsCardList';
import ProductsListTable from './ProductsListTable';

const ProductsList = ({allProducts}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className='section-container'>
      {/* SECTION HEADER */}
      <SectionHeader
        heading="All Products"
        btnText="Add Product"
        onClick={() => setOpenModal(true)}
      />

      {/* SEARCH BAR & FILTER DROPDOWNS */}
      <SearchBarAndFilters
        searchPlaceholer={"Search Products by Id, Name or SKU..."}
        dropdownOne={categoryFilters}
        dropdownTwo={statusFilters}
      />

      {/* PRODUCTS LIST TABLE FOR MEDIUM & LARGE SCREEN */}
      <ProductsListTable 
        allProducts={allProducts} 
      />

      {/* PRODUCTS CARD LIST FOR SMALL SCREENS */}
      <div className="md:hidden">
        <ProductsCardList
          data={allProducts} 
        />
      </div>
    </section>
  );
};

export default ProductsList;


const categoryFilters = [
  { value: 'all', label: 'All Categories' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'home', label: 'Home & Living' },
];

const statusFilters = [
  { value: 'all', label: 'All Statuses' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'outofstock', label: 'Out of Stock' },
];