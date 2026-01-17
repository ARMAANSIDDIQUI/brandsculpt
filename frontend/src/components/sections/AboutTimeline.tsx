import React from 'react';

/**
 * AboutTimeline Component
 * 
 * Clones the "WE ARE A CREATIVE AGENCY" section featuring professional agency biography 
 * and a detailed vertical timeline showing growth from 2020 to 2024.
 * Consistent with the Fashion Editorial / Minimalist Chic aesthetic.
 */

const AboutTimeline: React.FC = () => {
  const timelineData = [
    {
      year: '2020',
      description: 'Established as the first Influencer Marketing Agency in Chandigarh, proudly women-owned, women-run, and women-led',
    },
    {
      year: '2021',
      description: 'Conducted PR and promotions for over 45 brands, pioneering Influencer Marketing in the Tricity. Transitioned into a Creative Agency that handles complete marketing solutions for clients.',
    },
    {
      year: '2022',
      description: 'Collaborated with premium brands in the Tricity, building a vast portfolio across all industries. Provided services such as branding and photography.',
    },
    {
      year: '2023',
      description: 'Earned trust as a trusted brand, inaugurating our own Office & Studio, and offering brands real-time, creative content.',
    },
    {
      year: '2024',
      description: 'Expanded internationally to Canada, opening our first global branch and extending services to clients worldwide.',
    },
  ];

  return (
    <div className="bg-white font-body">
      {/* Narrative Section */}
      <section className="flex flex-col items-center justify-center py-16 px-6 lg:px-48 text-center bg-white">
        <h2 className="mb-4 tracking-normal font-heading text-5xl lg:text-7xl font-extrabold leading-none text-black">
          WE ARE A<br />CREATIVE AGENCY
        </h2>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-body text-base lg:text-xl leading-relaxed text-black">
            We&apos;re Brandsculpt, a trusted creative agency incorporated in 2020. With years of experience in enhancing brands online presence through social media strategy, we offer professional photoshoots, ad campaigns, aesthetic grid design, and influencer campaigns. Ready to take your social media game to the next level with us?
          </p>
        </div>

        <a 
          href="/contact" 
          className="bg-black text-white rounded-full px-12 py-3 lg:py-4 font-bold text-base flex items-center justify-center transition-opacity hover:opacity-90 w-full lg:w-fit"
        >
          Contact Us &nbsp;
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 14 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1.16663 7H12.8333M12.8333 7L7.5833 1.75M12.8333 7L7.5833 12.25" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </a>
      </section>

      {/* Timeline Section */}
      <section className="bg-white pb-20 px-6 lg:px-48">
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-black ml-4 lg:ml-0 pl-10 space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 bg-black rounded-full" />
                
                <div className="flex flex-col space-y-1">
                  <span className="font-bold text-gray-900 text-lg">
                    {item.year}
                  </span>
                  <p className="text-black text-base lg:text-lg leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTimeline;