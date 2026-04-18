import { PiLock, PiMoneyLight, PiPhone, PiVan } from "react-icons/pi";
import FeatureCard from "../shared/cards/FeatureCard";

const FeatureCardsSection = () => {
  return (
    <div className='feature-cards-section'>
      <FeatureCard icon={<PiVan />} title="Free Shipping" details="Order Over ৳ 1,000" />
      <FeatureCard icon={<PiMoneyLight />} title="Money Back" details="7 Days Returns" />
      <FeatureCard icon={<PiLock />} title="Secure Payment" details="Secure by SSLCOMMERZ" />
      <FeatureCard icon={<PiPhone />} title="24/7 Support" details="Phone & Email Support" />
    </div>
  );
};

export default FeatureCardsSection;