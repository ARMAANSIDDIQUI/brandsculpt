import React from 'react';
import { MoveRight } from 'lucide-react';

const SocialMediaDevelopment = () => {
  const specialistRoles = [
    "Social Media Strategist",
    "Dedicated Social Media Manager",
    "Copywriting for Captions & Hashtags",
    "Graphics Designer",
    "Photographer & Videographer",
    "Creative Director",
    "Reels & Trend Expert"
  ];

  return (
    <section className="bg-white py-1 relative overflow-x-hidden">
      {/* Arched Container */}
      <div className="w-full rounded-t-[50%] lg:rounded-t-[800px] mt-5 bg-[#F5F5DC] flex flex-col items-center justify-start relative min-h-[600px] lg:min-h-[700px]">
        
        {/* Main Heading Container */}
        <div className="pt-24 pb-8 lg:pt-32 lg:pb-12 mx-auto text-center">
          <h1 className="tracking-normal font-heading text-[3.125rem] lg:text-[4.5rem] font-extrabold leading-[0.9] text-black">
            SOCIAL MEDIA <br /> MANAGEMENT
          </h1>
        </div>

        {/* Roles List */}
        <div className="flex flex-col items-center w-full px-6 mb-8">
          {specialistRoles.map((role, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] lg:max-w-[384px] py-1.5 border-b-[2px] border-black/10 border-b-black transition-colors duration-200"
            >
              <span className="font-body text-base lg:text-xl font-normal text-black block text-left lg:text-left">
                {role}
              </span>
            </div>
          ))}
          
          {/* Checkout Link */}
          <div className="w-full max-w-[320px] lg:max-w-[384px] mt-2 flex justify-end">
            <a 
              href="/socialmediamanagement" 
              className="font-body text-base lg:text-xl text-black hover:opacity-70 transition-opacity"
            >
              Checkout our packages...
            </a>
          </div>
        </div>

        {/* Floating Circular Button (Desktop only) */}
        <div className="hidden lg:flex absolute bottom-20 right-12">
          <a 
            href="/get-free-consultation"
            className="w-[88px] h-[88px] rounded-full bg-black text-white hover:bg-black/90 transition-all flex items-center justify-center p-3 text-center text-xs font-bold leading-tight uppercase tracking-tighter"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile Quote Button */}
        <a 
          href="/get-free-consultation" 
          className="lg:hidden mt-4 mb-16 bg-black text-white font-body inline-flex justify-center items-center text-base py-3.5 px-6 rounded-full hover:bg-black/90 transition-all font-bold"
        >
          Get Free Quote &nbsp;
          <MoveRight className="w-4 h-4" />
        </a>

        <br />
      </div>

      {/* Spacing for mobile layout flow */}
      <div className="lg:h-12 h-4 bg-white" />
    </section>
  );
};

export default SocialMediaDevelopment;