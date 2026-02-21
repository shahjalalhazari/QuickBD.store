"use client"
import { FiHeart } from "react-icons/fi";
import ProductRating from "../shared/ProductRating";
import ProductBadge from "../shared/ProductBadge";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";


const DetailsContent = ({product}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  console.log(selectedColor);

  const productOtherDetails = {
    seller: {
      name: "Hazari Enterprise",
      location: "Gouripur Bazar, Daudkandi",
      owner: "Shahjalal Hazari"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["f00", "0f0", "00f", "000", "fff", "fafc4b", "3ac1b4", "a2a2a2"]
  };

  return (
    <div className="details-content">
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
          <span className="price">99.00tk</span>
          <span className="discount-price">110.00tk</span>
        </div>
      </div>

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
                    className={`color bg-[#${color}]`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <FaCheck className={`${selectedColor === color ? "block" : "hidden"}`}/>
                  </div>
                )
              )}
          </div>
        </div>
      </div>

          {/* Quantity + Wishlist */}
          <div className="flex gap-4 items-center">
            <div className="flex items-center border rounded">
              <button className="px-3 py-1">-</button>
              <span className="px-4">2</span>
              <button className="px-3 py-1">+</button>
            </div>

            <button className="flex items-center gap-2 border px-6 py-2 rounded hover:border-orange-500">
              <FiHeart /> Add to Favorite
            </button>
          </div>

          <button className="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600 transition">
            Add to Cart
          </button>

          <div className="text-sm text-gray-500 space-y-1">
            <p>SKU: 1156</p>
            <p>TAGS: BURGER, CHICKEN BURGER, FOOD</p>
          </div>
          {/* 
          

          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h2>{product.price}</h2>

          <hr/>
          <p>Available Sizes:
            {productOtherDetails.sizes.map((size, index) => (
              <span key={index}>{size}</span>
            ))}
          </p>
          <p>Available Colors:
            {productOtherDetails.colors.map((color, index) => (
              <span key={index}>{color}</span>
            ))}
          </p>

          <hr />

          <p>Shop Name: {productOtherDetails.seller.name}</p>
          <p>Owner Name: {productOtherDetails.seller.owner}</p>
          <p>Shop Location: {productOtherDetails.seller.location}</p>
          
          <hr /> */}
        </div>
  );
};

export default DetailsContent;