import "./product-details.css";
import 'react-inner-image-zoom/lib/styles.min.css';
import { getProductDetails } from "@/lib/getProductDetails";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ImageGallery from "@/components/productDetailsPage/ImageGallery";
import GridImageGallery from "@/components/productDetailsPage/GridImageGallery";
import DetailsContent from "@/components/productDetailsPage/DetailsContent";
import DescriptionTabs from "@/components/productDetailsPage/DescriptionTabs";

export const generateMetadata = async({params}) => {
  const {id} = await params;
  const {title, description} = await getProductDetails(id);
  
  return {
    title: title,
    description: description,
  }
};


const ProductDetailsPage = async({params}) => {
  const {id} = await params;
  const product = await getProductDetails(id);

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
      <DescriptionTabs product={product} faqs={faqs}/>
    </div>
  );
};

export default ProductDetailsPage;


// DUMMY FAQs
const faqs = [
  {
    id: 1,
    question: "What is the delivery time for this product?",
    answer: "Delivery usually takes 2–4 business days inside the city and 3–7 business days outside the city, depending on your location."
  },
  {
    id: 2,
    question: "Is this product returnable?",
    answer: "Yes. You can request a return within 7 days of delivery, provided the item is unused and in its original packaging."
  },
  {
    id: 3,
    question: "Does this product come with a warranty?",
    answer: "Yes, this product includes a 6-month official warranty against manufacturing defects."
  },
  {
    id: 4,
    question: "Can I pay cash on delivery?",
    answer: "Yes, we support Cash on Delivery (COD) along with online payment methods."
  },
  {
    id: 5,
    question: "Is the product authentic?",
    answer: "Absolutely. All products sold on QuickBD are 100% authentic and sourced from verified sellers."
  },
  {
    id: 6,
    question: "How can I track my order?",
    answer: "Once your order is confirmed, you will receive a tracking link via SMS and email. You can also track it from your account dashboard."
  }
]