import React from 'react';
import { Mail, Instagram } from 'lucide-react';

/**
 * Footer component for Pinksky website.
 * Follows the "Minimalist Chic" design system with bold condensed headings and rounded UI elements.
 */
const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col items-center justify-center pt-12 pb-8 px-4 text-center">
      {/* Script Logo */}
      <div className="mb-8 font-logo text-4xl lg:text-5xl text-black">
        Brandsculpt
      </div>

        {/* Instagram Feed Section */}
        <div className="mb-10 w-full max-w-4xl">
          <p className="font-body text-base lg:text-lg mb-4 text-black">
            Follow us <span className="font-bold">@brandsculpt</span> & <span className="font-bold">@brandsculpt.marketing</span>
          </p>
          <div className="flex justify-center gap-3 overflow-hidden">
            <a href="#" target="_blank" rel="noopener noreferrer" className="relative w-24 h-24 lg:w-32 lg:h-32 bg-[#F5F5DC] rounded overflow-hidden group cursor-pointer flex items-center justify-center border border-black/10">
              <div className="text-center p-2">
                <Instagram className="w-8 h-8 mx-auto mb-1 text-black" />
                <span className="text-[10px] font-bold text-black">@brandsculpt.marketing</span>
              </div>
            </a>
          </div>
        </div>

      {/* Agency Credentials */}
      <div className="mb-8 space-y-1 font-body text-base lg:text-lg text-black font-normal">
        <p>• Creative Agency • Real Time Content</p>
        <p>• Creative & Focused Team Of Experts</p>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <a 
          href="mailto:contact@brandsculpt.com" 
          className="text-black hover:opacity-70 transition-opacity"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a 
          href="#" 
          className="text-black hover:opacity-70 transition-opacity"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>

      {/* Attribution */}
      <div className="font-body text-sm lg:text-base text-black pb-4">
        Designed with ♥ by <a href="#" className="font-bold underline decoration-1 underline-offset-4">Team</a>
      </div>
    </footer>
  );
};

export default Footer;