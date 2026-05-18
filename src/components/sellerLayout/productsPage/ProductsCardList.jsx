"use client";
import ProductCard from "../shared/cards/ProductCard";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import UnderlineBtn from "@/components/shared/buttons/UnderlineBtn";

const ProductsCardList = ({data = []}) => {
    
  return (
    <div className='product-card-layout'>
      {data.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}

      {/* LOAD MORE BTN */}
      <div className="flex justify-end">
        <UnderlineBtn text={"Load More"} icon={<FaArrowRight />} />
      </div>
    </div>
  );
};

export default ProductsCardList;