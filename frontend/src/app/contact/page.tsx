"use client";

import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/918699005900?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-[100px] lg:pt-[90px]">
        <section className="bg-white py-12 lg:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-5xl lg:text-7xl font-extrabold leading-none text-black mb-4">
                CONTACT US
              </h1>
              <p className="font-body text-base lg:text-xl text-black max-w-2xl mx-auto">
                Ready to elevate your brand? Get in touch with us and let&apos;s create something amazing together.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-body font-bold text-sm mb-2 text-black">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black rounded-full font-body text-base focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-bold text-sm mb-2 text-black">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black rounded-full font-body text-base focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-bold text-sm mb-2 text-black">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black rounded-full font-body text-base focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block font-body font-bold text-sm mb-2 text-black">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black rounded-full font-body text-base focus:outline-none focus:ring-2 focus:ring-black/20 bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="pr">PR & Influencer Marketing</option>
                      <option value="content">Professional Content</option>
                      <option value="branding">Branding</option>
                      <option value="website">Website Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body font-bold text-sm mb-2 text-black">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-black rounded-2xl font-body text-base focus:outline-none focus:ring-2 focus:ring-black/20 bg-white resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white font-body font-bold text-base py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-[#F5F5DC] rounded-3xl p-8 lg:p-10">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-6 text-black">GET IN TOUCH</h3>
                  
                  <div className="space-y-6">
                    <a 
                      href="https://wa.me/918699005900" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-body font-bold text-sm text-black/60">WhatsApp</p>
                        <p className="font-body text-base text-black group-hover:underline">+91 8699005900</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:contact@brandsculpt.com"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-body font-bold text-sm text-black/60">Email</p>
                        <p className="font-body text-base text-black group-hover:underline">contact@brandsculpt.com</p>
                      </div>
                    </a>

                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-body font-bold text-sm text-black/60">Instagram</p>
                        <p className="font-body text-base text-black group-hover:underline">@brandsculpt</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-body font-bold text-sm text-black/60">Location</p>
                        <p className="font-body text-base text-black">Chandigarh, India & Canada</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-3xl p-8 lg:p-10 text-white text-center">
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4">BOOK A FREE CONSULTATION</h3>
                  <p className="font-body text-base mb-6 opacity-80">
                    Schedule a call with our team to discuss your project requirements.
                  </p>
                  <a
                    href="https://wa.me/918699005900?text=Hi!%20I%20would%20like%20to%20book%20a%20free%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black font-body font-bold text-base py-3 px-8 rounded-full transition-opacity hover:opacity-90"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
