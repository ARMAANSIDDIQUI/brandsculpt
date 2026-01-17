import Navigation from "@/components/sections/Navigation";
import WebsiteDevelopment from "@/components/sections/WebsiteDevelopment";
import IndustriesAndBrands from "@/components/sections/IndustriesAndBrands";
import Footer from "@/components/sections/Footer";
import { ArrowRight, CheckCircle, Globe, Smartphone, Zap, ShieldCheck, BarChart3, Palette } from "lucide-react";

export default function WebsitePage() {
  const features = [
    { icon: Globe, title: "Custom Websites", desc: "Tailored designs that reflect your brand identity" },
    { icon: Smartphone, title: "Mobile Responsive", desc: "Perfect experience on all devices" },
    { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and SEO" },
    { icon: ShieldCheck, title: "Secure & Reliable", desc: "Built with security best practices" },
    { icon: BarChart3, title: "Analytics Ready", desc: "Track your website performance" },
    { icon: Palette, title: "Modern Design", desc: "Clean, contemporary aesthetics" },
  ];

  const services = [
    "Landing Pages",
    "Business Websites",
    "E-commerce Stores",
    "Portfolio Sites",
    "Blog Platforms",
    "Web Applications",
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[100px] lg:pt-[90px]">
        <WebsiteDevelopment />
        
        <section className="bg-white py-16 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl lg:text-6xl font-extrabold leading-none text-black mb-4">
                WHY CHOOSE US
              </h2>
              <p className="font-body text-base lg:text-xl text-black max-w-2xl mx-auto">
                We build websites that not only look great but also drive results for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#F5F5DC] rounded-2xl p-6 lg:p-8 transition-transform hover:-translate-y-1">
                  <feature.icon className="w-10 h-10 text-black mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-black mb-2">{feature.title}</h3>
                  <p className="font-body text-base text-black/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5DC] py-16 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl lg:text-6xl font-extrabold leading-none text-black mb-6">
                  OUR WEB SERVICES
                </h2>
                <p className="font-body text-base lg:text-xl text-black mb-8">
                  From simple landing pages to complex web applications, we have the expertise to bring your vision to life.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-black text-white font-body font-bold text-base py-4 px-8 rounded-full transition-opacity hover:opacity-90"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white rounded-full py-4 px-6 transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 text-black" />
                    <span className="font-body font-bold text-base lg:text-lg text-black">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 lg:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl lg:text-6xl font-extrabold leading-none text-white mb-6">
              READY TO BUILD YOUR WEBSITE?
            </h2>
            <p className="font-body text-base lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a website that stands out from the competition.
            </p>
            <a
              href="https://wa.me/918699005900?text=Hi!%20I%20am%20interested%20in%20website%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-body font-bold text-base py-4 px-10 rounded-full transition-opacity hover:opacity-90"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <IndustriesAndBrands />
        <Footer />
      </div>
    </main>
  );
}
