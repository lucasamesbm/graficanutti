// src/pages/Home.jsx
import HeroSection from "../components/sections/HeroSection";
import TrustSection from "../components/sections/TrustSection";
import InfoSection from "../components/sections/InfoSection";
import ProductsSection from "../components/sections/ProductsSection";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <ProductsSection />
      <TrustSection />
    </div>
  );
}
