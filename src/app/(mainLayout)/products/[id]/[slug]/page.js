import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { getProductDetails } from "@/lib/getProductDetails";
import "./product-details.css";
import ProductBadge from "@/components/shared/ProductBadge";
import ProductRating from "@/components/shared/ProductRating";
import ImageGallery from "@/components/productDetailsPage/ImageGallery";


const ProductDetailsPage = async() => {
  const product = await getProductDetails(28);
  const productOtherDetails = {
    seller: {
      name: "Hazari Enterprise",
      location: "Gouripur Bazar, Daudkandi",
      owner: "Shahjalal Hazari"
    },
    sizes: ["S", "M", "L", "XL"],
    colors: ["red", "green", "blue", "black"]
  };

  console.log(product);

  return (
    <div className="quickbd-container">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "All Products", href: "/products" },
        { label: "Food", href: "/products?category=food" },
        { label: "Burger", href: "/products?category=food&sub-cat=burger" },
        { label: "Chicken Burger"} ]}
      />

      {/* PRODUCTS DETAILS */}
      <div className="product-details-layout">
        {/* PRODUCT IMAGES */}
        <ImageGallery images={product.images} title={product.title}/>

        <div className="details-content">
          <ProductRating 
            rating={product.rating}
            size={18}
            showCount={true}
          />
          <div className="flex gap-2">
            <ProductBadge text="New" bgColor={"bg-border-color/40"} textColor={"text-heading-color"} />
            {product.discountPercentage && <ProductBadge text={`${product.discountPercentage}%`} bgColor={"bg-primary"} textColor={"text-white"} />}
          </div>

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

          <hr/>

          <p>Shop Name: {productOtherDetails.seller.name}</p>
          <p>Owner Name: {productOtherDetails.seller.owner}</p>
          <p>Shop Location: {productOtherDetails.seller.location}</p>
          
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;