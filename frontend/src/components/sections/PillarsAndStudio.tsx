import React from 'react';
import Image from 'next/image';

const PillarsAndStudio: React.FC = () => {
  const studioImages = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_15-22.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_16-23.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_1-8.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_2-9.jpg"
  ];

  return (
    <section className="bg-whitecoffee py-16 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-end text-center lg:text-right">
          <p className="font-body text-xs lg:text-sm font-bold tracking-[0.2em] mb-2 text-black/80">
            OUR THREE PILLARS
          </p>
          <h2 className="font-heading text-6xl lg:text-7xl xl:text-8xl leading-[0.85] text-black">
            CREATIVITY<br />FOCUS<br />TEAMWORK
          </h2>
          <a 
            href="/contact" 
            className="mt-6 inline-flex items-center justify-center bg-black text-white px-6 py-2.5 rounded-full font-body text-sm font-bold transition-transform hover:scale-105"
          >
            Join Team &nbsp; →
          </a>
        </div>

        {/* Right Side: Image Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 overflow-hidden rounded-md">
            {studioImages.map((src, index) => (
              <div key={index} className="relative aspect-[3/4] w-full group overflow-hidden bg-muted">
                <Image
                  src={src}
                  alt={`Studio lifestyle ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsAndStudio;