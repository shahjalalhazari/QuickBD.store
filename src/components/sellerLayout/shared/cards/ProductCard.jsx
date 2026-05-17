"use client"
import StatusBadge from '@/components/shared/badges/StatusBadge';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

const ProductCard = ({product}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  const {thumbnail, title, price, category, brand, stock, sku, status="Active", discountPercentage} = product

  return (
      <div className="seller-product-card">
        <div className="card-header" onClick={handleToggle}>
          {/* IMAGE */}
          <img
            src={thumbnail}
            alt={title}
            className="card-img"
          />
          {/* NAME & SKU */}
          <div className="flex flex-col gap-y-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("Open Product Details Modal");
              }}
              className="text-left"
            >
              <h3 className="title">{title}</h3>
            </button>
            <p className="sku">SKU: {sku}</p>
          </div>
        </div>

        {/* PRICE + STOCK + STATUS */}
        <div className="card-body-collapsed">
          {/* PRICE */}
          <p className="price">৳ {price}</p>
          {/* STOCK */}
          <p className="stock">Stock: {stock}</p>
          {/* STATUS */}
          <StatusBadge
            status={status}
            text={status}
          />

          {/* ICON */}
          <div 
            onClick={handleToggle} 
            className={`expand-icon quickbd-transition ${
              expanded ?"rotate-180" : "rotate-0"}`}
          >
            <FaChevronDown size={16} />
          </div>
        </div>

      {/* EXPANDED CONTENT */}
      <div className={`
        card-body-expanded
        ${expanded ? 
          "h-full opacity-100 max-h-[500px] pt-4" : 
          "max-h-0 opacity-0"}
      `}
      >
        {/* PRODUCT OTHER INFO */}
        <div className="card-data-list" onClick={handleToggle}>
          {/* BRAND */}
          <div className="card-data">
            <span>Brand</span>
            <span>:</span>
            <span className='value'>{brand}</span>
          </div>

          {/* CATEGORY */}
          <div className="card-data">
            <span>Category</span>
            <span>:</span>
            <span className='value'>{category}</span>
          </div>

          {/* DISCOUNT */}
          <div className="card-data">
            <span>Discount</span>
            <span>:</span>
            <span className='value'>{discountPercentage}% OFF</span>
          </div>

          {/* ORIGINAL PRICE */}
          <div className="card-data">
            <span>Original Price</span>
            <span>:</span>
            <span className='value'>৳ {price}</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="card-footer">
          {/* DELETE */}
          <button className="delete-btn">
            DELETE <FaTrashAlt size={18} />
          </button>

          {/* EDIT */}
          <button className="edit-btn">
            EDIT <MdEdit size={18} />
          </button>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;