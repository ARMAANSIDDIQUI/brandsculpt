"use client";

import React, { useState, useRef } from "react";
import { Menu, X, ChevronLeft, ChevronRight, MessageCircle, Mail, Instagram } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  const navItems = [
    {
      emoji: "🛠️",
      title: "Our Services",
      description: "Explore our range of services.",
      href: "/services",
    },
    {
      emoji: "💻",
      title: "Website Development",
      description: "Discover our website development services.",
      href: "/website",
    },
    {
      emoji: "ℹ️",
      title: "About Us",
      description: "Learn more about our creative agency.",
      href: "/aboutus",
    },
    {
      emoji: "📞",
      title: "Contact Us",
      description: "Get in touch with us.",
      href: "/contact",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-[#E6DDD1] border-b border-black/10">
      <div className="flex flex-col items-center mx-auto transition-all duration-300">
        {/* Top Bar: Logo & Mobile Actions */}
        <div className="flex justify-between items-center w-full px-4 lg:px-0 lg:justify-center h-[52px] lg:h-[60px]">
          <div className="lg:hidden w-10"></div> {/* Spacer for symmetry */}
          
          <div className="flex items-center text-2xl lg:text-[2rem] font-logo font-bold">
            <a href="/" className="text-black no-underline">
              Brandsculpt
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <a href="/services" className="mr-3 font-bold text-sm text-black">
              Contact
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Nav (Desktop) / Vertical List (Mobile) */}
        <div
          id="navbar-sticky"
          className={`${
            isMenuOpen ? "flex h-screen overflow-y-auto" : "hidden"
          } lg:flex lg:h-auto lg:w-full lg:order-1 items-center justify-center relative mt-1 mb-1 px-2`}
        >
          {/* Desktop Slider Container */}
          <div className="hidden lg:block w-full nav-slider">
            <button
              onClick={scrollLeft}
              className="nav-scroll-btn left"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            <ul
              ref={scrollContainerRef}
              className="nav-slider-content overflow-x-auto mx-12"
            >
              {navItems.map((item, index) => (
                <li key={index} className="inline-block">
                  <a href={item.href} className="nav-item">
                    <span className="text-base">{item.emoji}</span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollRight}
              className="nav-scroll-btn right"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Mobile Menu List */}
          <ul className="flex flex-col lg:hidden w-full p-4 font-medium items-center">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <a
                  href={item.href}
                  className="flex justify-start items-center my-1 py-3 px-4 text-black rounded-xl bg-white transition-colors hover:bg-black/5"
                >
                  <div className="text-xl shrink-0">{item.emoji}</div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="ml-3 font-bold text-[15px] leading-tight">
                      {item.title}
                    </span>
                    <span className="ml-3 font-normal text-xs text-gray-600 mt-1">
                      {item.description}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Only Footer Items */}
          <div className="lg:hidden flex flex-col items-center w-full mt-auto pb-10 space-y-6">
            <div className="flex justify-center space-x-8">
              <a href="https://wa.me/918699005900" className="text-black">
                <MessageCircle size={22} />
              </a>
              <a href="mailto:contact@brandsculpt.com" className="text-black">
                <Mail size={22} />
              </a>
              <a href="#" className="text-black">
                <Instagram size={22} />
              </a>
            </div>
            <a href="/admin/upload" className="text-xs font-normal text-gray-500 uppercase tracking-widest flex items-center">
              Admin Section <ChevronRight size={12} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navigation;