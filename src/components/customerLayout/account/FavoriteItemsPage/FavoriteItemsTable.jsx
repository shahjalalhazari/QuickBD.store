import FullWidthBtn from '@/components/customerLayout/shared/buttons/FullWidthBtn';
import ProductRating from '@/components/customerLayout/shared/ProductRating';
import StatusBadge from '@/components/shared/StatusBadge';
import Image from 'next/image';
import React from 'react';
import { BiX } from 'react-icons/bi';
import { FaMinus, FaPlus } from 'react-icons/fa6';

const FavoriteItemsTable = ({listItems}) => {
  return (
    <div className='favorite-list-table'>
      {/* TABLE HEADER */}
      <div className="favorite-table-header">
        <p className='w-1/3'>Product</p>
        <p>Stock</p>
        <p>Added Date</p>
        <p>Action</p>
        <p>Remove</p>
      </div>

      {/* TABLE BODY */}
      <div className="favorite-table-items">
        {listItems.map((item, index) => (
          // EACH ROW
          <div className="table-row-item" key={index}>
            {/* PRODUCTS COLUMN */}
            <div className="item-details">
              <Image
                src={item.image} 
                width={60} 
                height={75} 
                alt={item.name}
                className='favorite-item-img' 
                />
              <div className="details">
                <h6 className='item-title'>{item.name}</h6>
                <p>{item.price}</p>
                <ProductRating rating={item.rating} size={14} />
              </div>
            </div>

            {/* STOCK ABILITY */}
            {
              item.stock === "In Stock"
                ? <StatusBadge status={item.stock} text={item.stock} />
                : item.stock === "Low Stock"
                  ? <StatusBadge status={item.stock} text={item.stock} />
                  : <StatusBadge status={item.stock} text={item.stock} />
            }
            {/* ADDED DATE & TIME */}
            <p>
              {item.addedDate.split("|").map((line, i) => (
                <span key={i} className="block">
                  {line.trim()}
                </span>
              ))}
            </p>

            {/* ADD TO CART BUTTON */}
            <FullWidthBtn 
              color={"bg-secondary"} 
              text={"Add to Cart"} 
              customClass={"px-4 hover:bg-heading-color"} 
            />

            {/* REMOVE BUTTON */}
            <button className='remove-btn quickbd-transition'>
              <BiX />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteItemsTable;