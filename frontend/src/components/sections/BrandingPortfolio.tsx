"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BrandingPortfolio = () => {
  const [images, setImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const categories = ['logos', 'graphic-design', 'packaging', 'menu-designing'];
    
    categories.forEach(async (cat) => {
      try {
        const res = await fetch(`/api/images?category=${cat}`);
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          // Use the most recent image for this category
          setImages(prev => ({ ...prev, [cat]: data.data[0].url }));
        }
      } catch (error) {
        console.error(`Error fetching image for ${cat}:`, error);
      }
    });
  }, []);

  const portfolioItems = [
    {
      title: 'Graphic Design',
      category: 'graphic-design',
      defaultImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/images_4.png',
      link: '#',
      alt: 'graphic-design'
    },
    {
      title: 'Logo',
      category: 'logos',
      defaultImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/images_5.png',
      link: '#',
      alt: 'logo'
    },
    {
      title: 'Packaging',
      category: 'packaging',
      defaultImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/images_6.png',
      link: '#',
      alt: 'packaging'
    },
    {
      title: 'Menu Designing',
      category: 'menu-designing',
      defaultImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ab413a4a-cecc-46f7-98e6-fb2b31d2f04d-pinkskyclub-com/assets/images/images_7.png',
      link: '#',
      alt: 'menu-designing'
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center py-8 bg-[#F5F5DC]">
      <div className="w-full text-center mt-8 mb-4">
        <h1 className="mb-2 uppercase tracking-normal font-heading text-5xl lg:text-7xl font-extrabold leading-none text-black">
          BRANDING
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-start px-4 lg:px-0">
        {portfolioItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group bg-white font-body text-center border-2 w-[150px] lg:w-[280px] h-auto my-3 mx-2 lg:mx-3 border-black flex flex-col items-center justify-between overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex justify-center items-center w-full">
              <div className="relative w-full h-[210px] lg:h-[400px]">
                <Image
                  alt={item.alt}
                  src={images[item.category] || item.defaultImage}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 150px, 280px"
                />
              </div>
            </div>
            <div className="w-full p-2 lg:p-3 border-t-2 border-black flex items-center justify-center bg-white">
              <span className="font-body text-base lg:text-xl font-medium leading-5 text-black">
                {item.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BrandingPortfolio;
