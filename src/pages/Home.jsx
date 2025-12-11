import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServiceSection";
import { CompanyStatsSection } from "../components/CompanyStatsSection";
import { CTASection } from "../components/CTASection";
import GlobeSection from "../components/GlobeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CompanyStatsSection />
      <CTASection />
      <GlobeSection />
    </>
  );
}
