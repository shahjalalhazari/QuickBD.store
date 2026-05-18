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
      <SearchBarAndFilters />

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