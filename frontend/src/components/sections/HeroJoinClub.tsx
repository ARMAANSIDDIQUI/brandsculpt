"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * HeroJoinClub Section
 * This component clones the hero section featuring the "JOIN THE CLUB" heading,
 * descriptive text about the influencer network, and a sliding gallery.
 * 
 * Primary styling uses the White Coffee (#F5F5DC) background.
 * Primary typography uses the Anton (heading) and Inter (body) fonts.
 */

const HeroJoinClub: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);

  // Assets provided in the prompt (Fallback)
  const defaultImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/website_2Fjointheclub_00002-2.jpg";

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        // Fetching from 'team' category as it fits the content description
        const res = await fetch('/api/images?category=team');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setHeroImage(data.data[0].url);
        }
      } catch (error) {
        console.error("Error fetching hero image:", error);
      }
    };
    fetchHeroImage();
  }, []);

  return (
    <section className="bg-white-coffee pt-24 lg:pt-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 px-6 lg:px-24 py-12 lg:py-16 text-center lg:text-center flex flex-col items-center">
          <h1 className="mb-4 tracking-normal font-heading text-5xl lg:text-[7rem] font-extrabold leading-[0.9] text-black">
            BRANDSCULPT
          </h1>
          
          <p className="mb-8 font-body text-base lg:text-xl font-normal leading-relaxed text-black max-w-2xl px-4">
            Brandsculpt is an exclusive club of influential people - Influencers, Stylists, Entrepreneur, Socialites, Food Critics, 
            <br className="hidden md:block" /> 
            Mom Influencers, Dancers, Clubbing Lovers, Travellers, MUA, Fitness Finics!
          </p>

          <a 
            href="/services" 
            className="group mb-8 text-white bg-black font-body inline-flex justify-center items-center text-base font-bold py-3 px-8 text-center rounded-full transition-opacity hover:opacity-90"
          >
            Our Services
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              <svg 
                className="w-3.5 h-3.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.5" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
          </a>
        </div>

        {/* Right Column: Sliding Image Gallery */}
        <div className="w-full lg:w-1/2 relative bg-white-coffee h-[400px] lg:h-[800px]">
          {/* 
            Based on the screenshots, the gallery on desktop is a full-height image column 
            that displays the influential group.
          */}
          <div className="h-full w-full flex overflow-hidden relative">
            <div className="flex flex-row w-full h-full relative">
              {/* Note: The original site uses Splide for a slider. 
                  For the clone, we'll replicate the layout of the primary active slide 
                  to match the visual weight of the screenshot's composition. */}
              <div className="relative w-full h-full">
                <Image
                  src={heroImage || defaultImage} 
                  alt="Brandsculpt Influencers"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            
            {/* Subtle Overlay or corner styling to match the editorial feel if needed */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Spacing after hero */}
      <div className="h-10 lg:h-20 bg-background"></div>
    </section>
  );
};

export default HeroJoinClub;
