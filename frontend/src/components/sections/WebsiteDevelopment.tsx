"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WebsiteDevelopment = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch('/api/images?category=website-development');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setImage(data.data[0].url);
        }
      } catch (error) {
        console.error("Error fetching website development image:", error);
      }
    };
    fetchImage();
  }, []);

  return (
    <section className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-0">
        <div 
          className="relative w-full mx-auto md:max-w-[1400px] bg-[#F5F5DC] rounded-t-[500px] overflow-hidden"
          style={{ 
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            paddingBottom: '100px'
          }}
        >
          {/* Section Heading */}
          <div className="text-center mb-8 px-4 z-10 relative">
            <h2 className="font-heading text-5xl lg:text-[100px] leading-[0.9] tracking-normal mb-8 text-black">
              WEBSITE <br /> DEVELOPMENT
            </h2>
            
            <p className="font-body text-base lg:text-xl font-normal text-black max-w-2xl mx-auto mb-10 leading-tight">
              Websites are now more crucial than<br className="hidden md:block" /> 
              ever for online visibility, engagement,<br className="hidden md:block" /> 
              communication, and business<br className="hidden md:block" /> 
              success.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-10">
              <a 
                href="/get-free-consultation" 
                className="bg-black text-white font-body font-bold text-base py-3 px-8 rounded-full flex items-center transition-opacity hover:opacity-90"
              >
                Get Free Consultation 
                <span className="ml-2 mt-0.5">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Dynamic Image */}
          {image && (
             <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl mt-4 z-10">
               <Image 
                 src={image} 
                 alt="Website Development" 
                 fill 
                 className="object-cover"
               />
             </div>
          )}
        </div>
      </div>

      {/* Spacing alignment as seen in structure */}
      <div className="h-8"></div>
    </section>
  );
};

export default WebsiteDevelopment;
