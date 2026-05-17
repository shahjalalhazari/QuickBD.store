"use client";
import { useState } from 'react';
import SectionHeader from '../shared/headers/SectionHeader';
import SearchBarAndFilters from '../shared/SearchBarAndFilters';
import DataTable from '@/components/shared/tables/DataTable';
import StatusBadge from '@/components/shared/badges/StatusBadge';
import IconBtn from '@/components/shared/buttons/IconBtn';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const ProductsList = (allProducts) => {
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

      {/* PRODUCTS TABLE FOR LARGE SCREENS */}
      <div className="hidden lg:block">
        <DataTable 
          columns={lgTableColumns} 
          data={allProducts.allProducts}
        />
      </div>

      {/* PRODUCTS TABLE FOR MEDIUM SCREENS */}
      <div className="hidden md:block lg:hidden">
        <DataTable 
          columns={mdTableColumns} 
          data={allProducts.allProducts} 
        />
      </div>

      {/* PRODUCTS CARD LIST FOR SMALL SCREENS */}
    </section>
  );
};

export default ProductsList;


const lgTableColumns = [
  {
    header: "Product",
    accessor: "product",
    render: (_, row) => (
      <div className="product">
        <img
          src={row.thumbnail}
          alt={row.title}
          className="product-img"
        />

        <div className="multiple-data-list">
          <button className='product-title quickbd-transition'>{row.title}</button>
          <p className='text-xs'>SKU: {row.sku}</p>
        </div>
      </div>
    ),
  },

  {
    header: "Category & Brand",
    accessor: "category",
    render: (_, row) => (
      <div className='multiple-data-list'>
        <p>{row.category}</p>
        <p>{row.brand}</p>
      </div>
    )
  },

  {
    header: "Price",
    accessor: "price",
    render: (_, row) => (
      <div className="multiple-data-list">
        {row.price && (
          <p className="discount-price">
            ৳ {row.price}
          </p>
        )}
        <p>
          ৳ {row.price}
        </p>
      </div>
    ),
  },

  {
    header: "Discount",
    accessor: "discountPercentage",
    render: (value) => (
      <p>{value || 0}% OFF</p>
    ),
  },

  {
    header: "Stock",
    accessor: "stock",
  },

  {
    header: "Status",
    accessor: "status",
    render: (value="active") => (
      <StatusBadge
        status={value}
        text={value}
      />
    ),
  },

  {
    header: "Action",
    accessor: "action",
    render: (_, row) => (
      <div className="action-btns">
        <IconBtn 
          icon={<MdEdit />}
          onClick={() => console.log("Edit", row.id)}
          customClass="info"
        />
        <IconBtn 
          icon={<FaTrashAlt />}
          onClick={() => console.log("Delete", row.id)}
          customClass="danger"
        />
      </div>
    ),
  },
];


const mdTableColumns = [
  {
    header: "Product",
    accessor: "product",
    render: (_, row) => (
      <div className="product">
        <img
          src={row.thumbnail}
          alt={row.title}
          className="product-img"
        />

        <div className="multiple-data-list">
          <p>{row.title}</p>
          <p className='text-xs'>SKU: {row.sku}</p>
        </div>
      </div>
    ),
  },

  {
    header: "Category & Brand",
    accessor: "category",
    render: (_, row) => (
      <div className="multiple-data-list text-xs">
        <p>{row.category}</p>
        <p>{row.brand}</p>
        <p>Stock: {row.stock}</p>
      </div>
    ),
  },

  {
    header: "Price",
    accessor: "price",
    render: (_, row) => (
      <div className="multiple-data-list">
        {row.price && (
          <p className="discount-price">
            ৳ {row.price}
          </p>
        )}

        <p>৳ {row.price}</p>
        <p className='flex text-xs'>{row.discountPercentage || 0}% OFF</p>
      </div>
    ),
  },

  {
    header: "Action",
    accessor: "action",
    render: (value="active", row) => (
      <div className="product-actions">
        <StatusBadge
          status={value}
          text={value}
        />
        <div className="action-btns">
          <IconBtn 
            icon={<MdEdit />}
            onClick={() => console.log("Edit", row.id)}
            customClass="info"
          />
          <IconBtn 
            icon={<FaTrashAlt />}
            onClick={() => console.log("Delete", row.id)}
            customClass="danger"
          />
        </div>
      </div>
    ),
  },
];