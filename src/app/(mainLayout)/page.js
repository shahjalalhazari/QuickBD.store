import "./homePage.css";
import HeroSection from "@/components/homePage/HeroSection";
import CategorySection from "@/components/homePage/CategorySection";
import FeatureDetailsSection from "@/components/homePage/FeatureDetailsSection";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />

      <CategorySection />

      <FeatureDetailsSection />
    </main>
  );
}
