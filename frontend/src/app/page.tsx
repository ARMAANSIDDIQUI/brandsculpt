import Navigation from "@/components/sections/Navigation";
import HeroJoinClub from "@/components/sections/HeroJoinClub";
import ServicesOverview from "@/components/sections/ServicesOverview";
import SocialMediaDevelopment from "@/components/sections/SocialMediaDevelopment";
import InfluencerPR from "@/components/sections/InfluencerPR";
import ProfessionalContent from "@/components/sections/ProfessionalContent";
import BrandingPortfolio from "@/components/sections/BrandingPortfolio";
import IndustriesAndBrands from "@/components/sections/IndustriesAndBrands";
import WebsiteDevelopment from "@/components/sections/WebsiteDevelopment";
import AboutTimeline from "@/components/sections/AboutTimeline";
import PillarsAndStudio from "@/components/sections/PillarsAndStudio";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroJoinClub />
      <ServicesOverview />
      <SocialMediaDevelopment />
      <InfluencerPR />
      <ProfessionalContent />
      <BrandingPortfolio />
      <IndustriesAndBrands />
      <WebsiteDevelopment />
      <AboutTimeline />
      <PillarsAndStudio />
      <Footer />
    </main>
  );
}
