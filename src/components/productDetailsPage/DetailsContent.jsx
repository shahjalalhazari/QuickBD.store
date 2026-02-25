"use client"
import { FiHeart } from "react-icons/fi";
import ProductRating from "../shared/ProductRating";
import ProductBadge from "../shared/ProductBadge";
import { useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";
import FullWidthBtn from "../shared/buttons/FullWidthBtn";
import Link from "next/link";
import { generateSlug } from "@/utils/generateSlug";


const DetailsContent = ({product}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const productOtherDetails = {
    seller: {
      name: "Hazari Enterprise",
      location: "Gouripur Bazar, Daudkandi",
      owner: "Shahjalal Hazari"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: [
      "bg-[#f00]", 
      "bg-[#0f0]", 
      "bg-[#00f]", 
      "bg-[#000]", 
      "bg-[#fff]", 
      "bg-[#fafc4b]", 
      "bg-[#3ac1b4]", 
      "bg-[#a2a2a2]"
    ]
  };

  return (
    <div className="details-content">
      {/* ROW 1 - PRODUCT BASIC INFO */}
      <div className="basic-info">
        {/* RATING */}
        <ProductRating 
          rating={product.rating}
          size={18}
          showCount={true}
          />

        {/* BADGES */}
        <div className="flex gap-2">
          <ProductBadge text="New" bgColor={"bg-border-color/40"} textColor={"text-heading-color"} />
          {product.discountPercentage && <ProductBadge text={`-${product.discountPercentage}%`} bgColor={"bg-primary"} textColor={"text-white"} />}
        </div>

        {/* TITLE */}
        <h1 className="product-title">{product.title}</h1>
        {/* DETAILS */}
        <p className="body-text">
          {product.description}
        </p>
        {/* PRICES */}
        <div className="prices">
          <span className="price">৳ 99.00</span>
          <span className="discount-price">৳ 110.00</span>
        </div>
      </div>
      <hr className="border border-border-color/40" />

      {/* ROW 2 - PRODUCT SELLER INFO */}
      <div className="seller-info">
        <p>
          <span>Shop Name:</span>
          <Link 
            href={`/products?shop=${generateSlug(productOtherDetails?.seller?.name)}`}
            className="quickbd-transition"
          >
            { productOtherDetails.seller.name }
          </Link>
        </p>
        <p>
          <span>Shop Location:</span>
          <Link 
            href={`/products?location=${generateSlug(productOtherDetails?.seller?.location)}`}
            className="quickbd-transition"
          >
            { productOtherDetails.seller.location }
          </Link>
        </p>
        <p><span>Shop Owner Name:</span> { productOtherDetails.seller.owner }</p>
      </div>
      <hr className="border border-border-color/40" />

      {/* ROW 3 - VARIENT SELECTION */}
      <div className="pick-varients">
        {/* AVAILABLE SIZES */}
        <div className="varient-section">
          <h4 className="heading">Available Size(s):</h4>
          <div className="varient-list">
          {productOtherDetails.sizes?.map((size) => (
            <button
              key={size}
              className={`varient-item ${selectedSize === size ? "selected-size" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
          </div>
        </div>
        {/* AVAILABLE COLORS */}
        <div className="varient-section">
          <h4 className="heading">Available Color(s):</h4>
          <div className="varient-list">
          {productOtherDetails.colors.map(
                (color, i) => (
                  <div
                    key={i}
                    className={`color ${color}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <FaCheck className={`${selectedColor === color ? "block" : "hidden"}`}/>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
      <hr className="border border-border-color/40" />

      {/* ROW 4 - BUTTONS FOR FAVORITE & CART */}
      <div className="buttons">
        <div className="qty-fav-btn">
          <div className="qty-selector quickbd-transition">
            <button className="qty-change quickbd-transition"><FaMinus /></button>
            <span>10</span> 
            <button  className="qty-change quickbd-transition"><FaPlus /></button>
          </div>
          <button className="favorite-btn quickbd-transition">
            <FiHeart size={18}/> Add To Favorite
          </button>
        </div>
        <FullWidthBtn text={"Add to Cart"} color={"bg-primary"} customClass={"hover:bg-primary-dark"}/>
      </div>
      <hr className="border border-border-color/40" />

      {/* ROW 5 - SKU & TAGS */}
      <div className="extra-info">
        <p>
          <span>Tags:</span>
          {product.tags?.map((tag, index) => (
            <Link 
              href={`/products?tag=${generateSlug(tag)}`} 
              key={index}
              className="tag quickbd-transition"
            >
              {tag}{index < product.tags.length - 1 ? ',' : ''}
            </Link>
          ))}
        </p>
        <p><span>SKU: </span>{product.sku}</p>
      </div>
    </div>
  );
};

export default DetailsContent;