import "./product-details.css";
import 'react-inner-image-zoom/lib/styles.min.css';
import { getProductDetails } from "@/lib/getProductDetails";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ImageGallery from "@/components/productDetailsPage/ImageGallery";
import GridImageGallery from "@/components/productDetailsPage/GridImageGallery";
import DetailsContent from "@/components/productDetailsPage/DetailsContent";
import DescriptionTabs from "@/components/productDetailsPage/DescriptionTabs";


const ProductDetailsPage = async() => {
  const product = await getProductDetails(28);
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
        {/* PRODUCT IMAGES - FOR LARGE DEVICES */}
        <GridImageGallery images={product.images} title={product.title} />
        {/* PRODUCT IMAGES - FOR SMALL & MEDIUM DEVICES */}
        <ImageGallery images={product.images} title={product.title}/>
        {/* DETAILS CONTENT */}
        <DetailsContent product={product} />
      </div>
      {/* DESCRIPTION, REVIEWS & FAQs */}
      <DescriptionTabs product={product} />
    </div>
  );
};

export default ProductDetailsPage;