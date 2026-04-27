import FullWidthBtn from "@/components/shared/buttons/FullWidthBtn";
import ProductRating from "@/components/customerLayout/shared/ProductRating";
import StatusBadge from "@/components/shared/badges/StatusBadge";
import Image from "next/image";
import { BiX } from "react-icons/bi";

export const favoriteFields = [
  { key: "image", label: "Image" },
  { key: "name", label: "Product Name" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "addedDate", label: "Added Date" },
  { key: "rating", label: "Rating" },
];


const FavoriteItemsList = ({ listItems }) => {
  return (
    <div className="Favorite-items-list">
          {listItems.map((item, index) => (
            <div className="favorite-item-card" key={index}>
              <div className="row-1">
                <div className="list-item-details">
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
                {/* REMOVE BUTTON */}
                <button className='remove-btn quickbd-transition'>
                  <BiX />
                </button>
              </div>
              <div className="row-2">
                <div className="other-details">
                  <p>Stock Ability:</p>
                  {
                    item.stock === "In Stock"
                      ? <StatusBadge status={item.stock} text={item.stock} />
                      : item.stock === "Low Stock"
                        ? <StatusBadge status={item.stock} text={item.stock} />
                        : <StatusBadge status={item.stock} text={item.stock} />
                  }
                </div>
                {/* ADDED DATE & TIME */}
                <div className="other-details">
                  <p>Added Date:</p>
                  <p className="text-heading-color">{item.addedDate.replace("|","-")}</p>
                </div>
              </div>
              {/* ADD TO CART BUTTON */}
              <FullWidthBtn
                color={"bg-secondary"} 
                text={"Add to Cart"} 
                customClass={"w-full hover:bg-heading-color"} 
              />
            </div>
          ))}
        </div>
  );
};

export default FavoriteItemsList;