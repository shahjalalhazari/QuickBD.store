import DataTable from '@/components/shared/tables/DataTable';
import StatusBadge from '@/components/shared/badges/StatusBadge';
import IconBtn from '@/components/shared/buttons/IconBtn';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import DashboardPagination from '../shared/filters/DashboardPagination';
import React from 'react';

const ProductsListTable = ({allProducts}) => {

  return (
    <React.Fragment>
      {/* PRODUCTS TABLE FOR LARGE SCREENS */}
      <div className="hidden lg:block">
        <DataTable 
          columns={desktopColumns} 
          data={allProducts}
        />
      </div>

      {/* PRODUCTS TABLE FOR MEDIUM SCREENS */}
      <div className="hidden md:block lg:hidden">
        <DataTable 
          columns={tabletColumns} 
          data={allProducts} 
        />
      </div>

      {/* PAGINATION */}
      <div className="hidden md:block">
        <DashboardPagination />
      </div>
      
    </React.Fragment>
  );
};

export default ProductsListTable;

const desktopColumns = [
  // PRODUCT
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
          <button className='title quickbd-transition'>{row.title}</button>
          <p className='text-xs'>SKU: {row.sku}</p>
        </div>
      </div>
    ),
  },

  // CATEGORY & BRAND
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

  // PRICES
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

  // DISCOUNT AMOUNT
  {
    header: "Discount",
    accessor: "discountPercentage",
    render: (value) => (
      <p>{value || 0}% OFF</p>
    ),
  },

  // STOCK QTY
  {
    header: "Stock",
    accessor: "stock",
  },

  // STATUS
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

  // ACTION BTNS
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


const tabletColumns = [
  // PRODUCT & SKU
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
          <p className='title'>{row.title}</p>
          <p className='text-xs'>SKU: {row.sku}</p>
        </div>
      </div>
    ),
  },

  // CATEGORY, BRAND & STOCK
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

  // PRICES
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

  // STATUS & ACTION BTNS
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