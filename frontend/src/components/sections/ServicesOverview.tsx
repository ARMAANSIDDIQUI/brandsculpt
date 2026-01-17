import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      emoji: '📱',
      label: 'Social Media Management',
      href: '/socialmediamanagement',
    },
    {
      emoji: '📣',
      label: 'Influencer & PR Agency',
      href: '/pr',
    },
    {
      emoji: '📸🎥',
      label: 'Professional Content',
      href: '/professional',
    },
    {
      emoji: '🖌️',
      label: 'Branding',
      href: '/branding',
    },
    {
      emoji: '🌐',
      label: 'Website Development',
      href: '/website',
    },
  ];

  return (
    <section className="bg-white py-8 lg:py-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full text-center px-4">
        {/* Section Heading */}
        <h1 
          className="mb-4 tracking-normal font-heading text-5xl lg:text-7xl font-extrabold leading-none text-black"
          style={{ letterSpacing: '-0.02em' }}
        >
          OUR SERVICES
        </h1>

        {/* Description */}
        <div className="mb-6 font-body text-base lg:text-xl font-normal leading-relaxed max-w-[90%] md:max-w-3xl mx-auto text-black">
          <div className="mx-4 lg:mx-12">
            We offer social media management, branding, photography, content creation, influencer marketing, and web development.
          </div>
        </div>

        {/* Service Tags Desktop/Flex Layout */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-5xl mx-auto px-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="pill-tag bg-white text-black border border-black rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base transition-all hover:shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 hover:-translate-x-0.5"
              style={{ fontWeight: 500 }}
            >
              <span>{service.emoji}</span>
              <span className="ml-2">{service.label}</span>
            </a>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="w-full max-w-[280px] lg:max-w-xs mx-auto px-4">
          <a
            href="/contact"
            className="btn-primary w-full bg-black text-white hover:opacity-90 inline-flex items-center justify-center py-3 px-8 rounded-full font-bold text-base transition-opacity"
          >
            Contact Us
            <span className="ml-2 inline-flex items-center">
              <ArrowRight className="w-4 h-4" strokeWidth={3} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;