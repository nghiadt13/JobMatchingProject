import BestJobsSection from "@/components/home/BestJobsSection";
import CareerTipsSection from "@/components/home/CareerTipsSection";
import FeaturedCompaniesSection from "@/components/home/FeaturedCompaniesSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import JobMarketSection from "@/components/home/JobMarketSection";
import Navbar from "@/components/home/Navbar";
import PersonalBrandingSection from "@/components/home/PersonalBrandingSection";
import SelfDiscoverySection from "@/components/home/SelfDiscoverySection";
import TopIndustriesSection from "@/components/home/TopIndustriesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <JobMarketSection />
      <BestJobsSection />
      <TopIndustriesSection />
      <FeaturedCompaniesSection />
      <PersonalBrandingSection />
      <SelfDiscoverySection />
      <CareerTipsSection />
      <Footer />
    </div>
  );
}
