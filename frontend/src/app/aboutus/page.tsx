import Navigation from "@/components/sections/Navigation";
import AboutTimeline from "@/components/sections/AboutTimeline";
import PillarsAndStudio from "@/components/sections/PillarsAndStudio";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[100px] lg:pt-[90px]">
        <AboutTimeline />
        <PillarsAndStudio />
        <Footer />
      </div>
    </main>
  );
}
