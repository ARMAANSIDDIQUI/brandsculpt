import Navigation from "@/components/sections/Navigation";
import ServicesOverview from "@/components/sections/ServicesOverview";
import SocialMediaDevelopment from "@/components/sections/SocialMediaDevelopment";
import InfluencerPR from "@/components/sections/InfluencerPR";
import ProfessionalContent from "@/components/sections/ProfessionalContent";
import BrandingPortfolio from "@/components/sections/BrandingPortfolio";
import IndustriesAndBrands from "@/components/sections/IndustriesAndBrands";
import WebsiteDevelopment from "@/components/sections/WebsiteDevelopment";
import Footer from "@/components/sections/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[100px] lg:pt-[90px]">
        <ServicesOverview />
        <SocialMediaDevelopment />
        <InfluencerPR />
        <ProfessionalContent />
        <BrandingPortfolio />
        <IndustriesAndBrands />
        <WebsiteDevelopment />
        <Footer />
      </div>
    </main>
  );
}
