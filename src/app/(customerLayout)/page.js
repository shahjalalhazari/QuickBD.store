import "./homePage.css";
import HeroSection from "@/components/customerLayout/homePage/HeroSection";
import CategorySection from "@/components/customerLayout/homePage/CategorySection";
import FeatureDetailsSection from "@/components/customerLayout/homePage/FeatureDetailsSection";
import NewArrivals from "@/components/customerLayout/homePage/NewArrivals";
import FeatureCardsSection from "@/components/customerLayout/homePage/FeatureCardsSection";
import TestimonialSetion from "@/components/customerLayout/homePage/TestimonialSetion";
import { SITE_DESCRIPTION, TEMPLATE_NAMES } from "../metadata";

export const metadata = {
  title: TEMPLATE_NAMES.home,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <main className="home-page">
      {/* HOME PAGE CONTENT */}
      <HeroSection />

      <CategorySection />

      <FeatureDetailsSection />

      <NewArrivals />

      <FeatureCardsSection />

      <TestimonialSetion />
    </main>
  );
}
