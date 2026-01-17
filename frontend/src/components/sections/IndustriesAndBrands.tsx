"use client";

import React from 'react';
import Image from 'next/image';

const INDUSTRIES = [
  { name: 'F&B', emoji: '🍴' },
  { name: 'Hotel & Hospitality', emoji: '🏨' },
  { name: 'Salons', emoji: '💇' },
  { name: 'Beauty & Skin', emoji: '💄' },
  { name: 'Lifestyle Brands', emoji: '☀️' },
  { name: 'Clothing', emoji: '👗' },
  { name: 'Automobile', emoji: '🚗' },
  { name: 'Gyms', emoji: '🏋️' },
];

const BRANDS = [
  { id: 1, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_1-8.jpg" },
  { id: 2, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_2-9.jpg" },
  { id: 3, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_3-10.jpg" },
  { id: 4, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_4-11.jpg" },
  { id: 5, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_5-12.jpg" },
  // Duplicate for marquee effect
  { id: 6, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_1-8.jpg" },
  { id: 7, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_2-9.jpg" },
  { id: 8, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_3-10.jpg" },
  { id: 9, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_4-11.jpg" },
  { id: 10, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/brand_5-12.jpg" },
];

export default function IndustriesAndBrands() {
  return (
    <div className="bg-[#FFFFFF]">
      {/* INDUSTRIES WE WORK FOR SECTION */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 tracking-normal font-heading text-5xl lg:text-7xl font-extrabold leading-none text-black uppercase">
            INDUSTRIES WE WORK FOR
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 max-w-5xl mx-auto px-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="pill-tag bg-white border border-black rounded-full px-4 py-1.5 flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
              >
                <span className="text-base">{industry.emoji}</span>
                <span className="font-body font-bold text-sm text-black">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="bg-[#F5F5DC] py-12 lg:py-20 overflow-hidden">
        <div className="px-4 mb-4 lg:mb-8">
            <h2 className="font-heading text-6xl lg:text-9xl font-extrabold text-black uppercase leading-none tracking-tight">
                BRANDS
            </h2>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-2 animate-marquee flex whitespace-nowrap items-center">
            {BRANDS.map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="mx-4 flex-shrink-0">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full border border-gray-300 overflow-hidden bg-white flex items-center justify-center p-2 lg:p-4">
                  <Image
                    src={brand.src}
                    alt="Brand Logo"
                    width={100}
                    height={100}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 py-2 animate-marquee2 flex whitespace-nowrap items-center">
            {BRANDS.map((brand, index) => (
              <div key={`dup-${brand.id}-${index}`} className="mx-4 flex-shrink-0">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full border border-gray-300 overflow-hidden bg-white flex items-center justify-center p-2 lg:p-4">
                  <Image
                    src={brand.src}
                    alt="Brand Logo"
                    width={128}
                    height={128}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row Scrolling (Reverse) */}
        <div className="relative flex overflow-x-hidden mt-4 lg:mt-6">
          <div className="py-2 animate-marquee-reverse flex whitespace-nowrap items-center">
            {[...BRANDS].reverse().map((brand, index) => (
              <div key={`rev-${brand.id}-${index}`} className="mx-4 flex-shrink-0">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full border border-gray-300 overflow-hidden bg-white flex items-center justify-center p-2 lg:p-4">
                  <Image
                    src={brand.src}
                    alt="Brand Logo"
                    width={128}
                    height={128}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
           <div className="absolute top-0 py-2 animate-marquee2-reverse flex whitespace-nowrap items-center">
            {[...BRANDS].reverse().map((brand, index) => (
              <div key={`rev-dup-${brand.id}-${index}`} className="mx-4 flex-shrink-0">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full border border-gray-300 overflow-hidden bg-white flex items-center justify-center p-2 lg:p-4">
                  <Image
                    src={brand.src}
                    alt="Brand Logo"
                    width={128}
                    height={128}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}