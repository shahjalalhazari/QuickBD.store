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
        <DataTable columns={tableColumns} data={allProducts.allProducts} />
      </div>
      
      {/* PRODUCTS TABLE FOR MEDIUM SCREENS */}
      {/* PRODUCTS CARD LIST FOR SMALL SCREENS */}
    </section>
  );
};

export default ProductsList;


const tableColumns = [
  {
    header: "Product",
    accessor: "product",
    render: (_, row) => (
      <div className="flex items-center gap-3">
        <img
          src={row.thumbnail}
          alt={row.title}
          className="h-12 w-12 rounded-md object-cover border border-border-color/60"
        />

        <div className="flex flex-col gap-1">
          <p className="font-semibold">{row.title}</p>
          <p className='text-xs'>SKU: {row.sku}</p>
        </div>
      </div>
    ),
  },

  {
    header: "Category",
    accessor: "category",
  },

  {
    header: "Brand",
    accessor: "brand",
  },

  {
    header: "Price",
    accessor: "price",
    render: (_, row) => (
      <div className="space-y-1">
        {row.price && (
          <p className="text-xs text-gray-400 line-through">
            ৳ {row.price}
          </p>
        )}

        <p className="font-semibold">
          ৳ {row.price}
        </p>
      </div>
    ),
  },

  {
    header: "Discount",
    accessor: "discountPercentage",
    render: (value) => (
      <p>{value || 0}%</p>
    ),
  },

  {
    header: "Stock",
    accessor: "stock",
  },

  // {
  //   header: "Status",
  //   accessor: "status",
  //   render: (value) => (
  //     <StatusBadge
  //       status={value}
  //       text={value}
  //     />
  //   ),
  // },
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
      <div className="flex items-center gap-1">
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