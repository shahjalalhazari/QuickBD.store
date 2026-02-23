import Image from "next/image";
import Link from "next/link";
import ProductRating from "../ProductRating";
import { FaRegHeart } from "react-icons/fa6";
import ProductBadge from "../ProductBadge";
import { generateSlug } from "@/utils/generateSlug";

const ProductCard = ({ item}) => {

  return (
    <div className="product-card">
      {/* IMAGE WRAPER */}
      <div className="product-image-wrapper">
        <Link href={`/products/${item.id}/${generateSlug(item.name)}`}>
          <Image
            src={item.image}
            alt={item.name}
            width={800}
            height={800}
            className="product-image quickbd-transition"
          />
        </Link>
        <div className="badges-icons">
          <div className="badges">
            <ProductBadge text="New" bgColor={"bg-ghost-white"} textColor={"text-heading-color"} />
            {item.discountPrice && <ProductBadge text="50%" bgColor={"bg-primary"} textColor={"text-white"} />}
          </div>
          <div className="favorite-icon quickbd-transition">
            <FaRegHeart size={18}/>
          </div>
        </div>
        <button className="add-to-cart-btn quickbd-transition">
          Add to Cart
        </button>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="product-details">
        <ProductRating rating={item.rating} size="16" />
        <Link href={`/products/${item.id}/${generateSlug(item.name)}`}>
          <h3 className="product-name">
          {item.name}
        </h3>
        </Link>
        <p className="product-price quickbd-transition">
          ৳ {item.price}
          {item.discountPrice && (
            <span className="discount-price">
              ৳ {item.discountPrice}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;