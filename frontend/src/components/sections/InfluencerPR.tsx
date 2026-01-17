import React from 'react';

/**
 * InfluencerPR Section
 * 
 * This component clones the "Pinksky Club Influencer & PR Agency" section.
 * Features:
 * - Centered text with bold uppercase heading
 * - Responsive grid of service tags with hover effects
 * - Dual CTA buttons ("Get Started" and "Know More")
 * - Pixel perfect accuracy based on computed styles and design guidelines.
 */

const InfluencerPR: React.FC = () => {
  const serviceTags = [
    "Content Marketing",
    "Influencer Campaign",
    "Promotional Event",
    "Launch & Brand Activation",
    "PR Packages & GuestList",
    "Clubbing GuestList"
  ];

  return (
    <section className="flex flex-col items-center justify-center py-4 bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-48 py-8 md:py-16">
        
        {/* Heading Section */}
        <header className="mb-4">
          <h1 className="uppercase tracking-normal text-[3rem] lg:text-[4.5rem] font-heading font-extrabold leading-none text-black">
            Brandsculpt
          </h1>
          <div className="text-2xl lg:text-3xl font-heading font-extrabold uppercase mt-1 text-black">
            Influencer & PR Agency
          </div>
        </header>

        {/* Description Section */}
        <div className="font-body mb-6 font-normal leading-[1.25] text-black text-base lg:text-xl lg:px-12 max-w-4xl">
          <p className="mb-4">
            We’re not your average PR agency—<br className="hidden md:block" />
            we’re the hype creators your brand needs!<br className="hidden md:block" />
            At Brandsculpt, we connect the dots between<br className="hidden md:block" />
            influencers, socialites, and your audience to get the right buzz rolling.
          </p>
          <p>
            We slayed in last 5 years from soft launches to big bang campaigns, we rewrote the rules of marketing with our services.
          </p>
        </div>

        {/* Service Tags Grid */}
        <div className="flex flex-wrap my-4 justify-center items-center gap-2 max-w-5xl">
          {serviceTags.map((tag, index) => (
            <div 
              key={index}
              className="py-1 px-3 m-1 text-sm font-semibold text-center rounded-full bg-white text-black border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-default inline-block"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a 
            href="/get-free-consultation" 
            className="text-white bg-black w-full sm:w-fit font-body font-bold inline-flex justify-center items-center text-base py-3 px-8 text-center rounded-full transition-opacity hover:opacity-90 active:scale-95"
          >
            Get Started
          </a>
          <a 
            href="/pr" 
            className="text-white bg-black w-full sm:w-fit font-body font-bold inline-flex justify-center items-center text-base py-3 px-8 text-center rounded-full transition-opacity hover:opacity-90 active:scale-95"
          >
            Know More &nbsp;
            <svg 
              className="w-3.5 h-3.5 ml-1" 
              viewBox="0 0 14 10" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 5H13M13 5L9 1M13 5L9 9" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfluencerPR;