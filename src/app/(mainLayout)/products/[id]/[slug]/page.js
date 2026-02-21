import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { getProductDetails } from "@/lib/getProductDetails";
import "./product-details.css";
import ProductBadge from "@/components/shared/ProductBadge";
import ProductRating from "@/components/shared/ProductRating";
import 'react-inner-image-zoom/lib/styles.min.css';
import ImageGallery from "@/components/productDetailsPage/ImageGallery";
import { FaStar } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import GridImageGallery from "@/components/productDetailsPage/GridImageGallery";


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
        {/* FOR LARGE DEVICES */}
        <GridImageGallery images={product.images} title={product.title} />
        {/* FOR SMALL & MEDIUM DEVICES */}
        <ImageGallery images={product.images} title={product.title}/>

        <div className="details-content">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-orange-500">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <span className="text-sm text-gray-500">11 Reviews</span>
          </div>

          {/* Badge */}
          <div className="flex gap-2">
            <span className="bg-gray-200 px-3 py-1 text-xs rounded">NEW</span>
            <span className="bg-orange-500 text-white px-3 py-1 text-xs rounded">
              -50%
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold">Burger</h1>

          <p className="text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-orange-500">99.00tk</span>
            <span className="line-through text-gray-400">110.00tk</span>
          </div>

          <hr />

          {/* Sizes */}
          <div>
            <h4 className="font-semibold mb-2">Available Size(s):</h4>
            <div className="flex gap-3">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-1 rounded hover:border-orange-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h4 className="font-semibold mb-2">Available Color(s):</h4>
            <div className="flex gap-3">
              {["bg-orange-500", "bg-red-500", "bg-gray-700", "bg-blue-600"].map(
                (color, i) => (
                  <div
                    key={i}
                    className={`h-6 w-6 rounded cursor-pointer ${color}`}
                  />
                )
              )}
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="font-semibold mb-2">Ingredients:</h4>
            <div className="flex gap-3">
              {["Chicken", "Beef", "Vegetable"].map((item) => (
                <button
                  key={item}
                  className="border px-3 py-1 rounded text-sm hover:border-orange-500"
                >
                  {item}
                </button>
              ))}
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
          {/* <ProductRating 
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

          <hr />

          <p>Shop Name: {productOtherDetails.seller.name}</p>
          <p>Owner Name: {productOtherDetails.seller.owner}</p>
          <p>Shop Location: {productOtherDetails.seller.location}</p>
          
          <hr /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;