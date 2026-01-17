import React from 'react';

const ProfessionalContent = () => {
  return (
    <section 
      className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative min-h-[500px] lg:min-h-[600px]"
      style={{ 
        backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/minimilist/o/website%2Fphotography_videography.jpeg?alt=media')",
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Overlay to ensure readability and match the brightness/contrast from screenshots */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-20">
        <br />
        
        {/* Heading: Using Anton or Impact style condensed sans-serif */}
        <h1 
          className="mb-4 uppercase tracking-normal text-5xl lg:text-7xl font-extrabold leading-none text-white font-heading"
          style={{ 
            textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
            fontFamily: 'var(--font-heading)' 
          }}
        >
          Professional content
        </h1>

        {/* Subtext: Modern sans-serif white typography */}
        <div 
          className="mx-3 my-4 font-body font-normal leading-tight text-white text-base lg:text-xl sm:px-16 lg:px-48 max-w-4xl"
          style={{ 
            textShadow: '0px 1px 2px rgba(0,0,0,0.5)',
            transition: 'all 0.3s ease'
          }}
        >
          Professional photography and videography services to capture your important moments with stunning clarity and creativity.
        </div>

        {/* CTA Button: White background pill-shaped button */}
        <a 
          href="/get-free-consultation"
          className="mt-80 md:mt-12 lg:mt-16 text-black bg-white hover:bg-gray-100 transition-colors w-fit font-bold inline-flex justify-center items-center text-base py-3 px-8 text-center rounded-full focus:ring-0 shadow-lg"
          style={{ 
            fontFamily: 'var(--font-body)',
            fontWeight: 700 
          }}
        >
          Book Free Consultation &nbsp;
          <svg 
            className="w-3.5 h-3.5" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 10"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        
        <br />
      </div>
    </section>
  );
};

export default ProfessionalContent;