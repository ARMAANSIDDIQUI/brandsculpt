"use client";

import React, { useState } from "react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResponseMsg("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setResponseMsg("Something went wrong. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F5DC] text-black font-body">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 lg:px-0">
        <div className="container mx-auto max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-6xl lg:text-8xl font-extrabold uppercase leading-[0.9] mb-6">
              Get in Touch
            </h1>
            <p className="font-body text-xl lg:text-2xl max-w-2xl mx-auto">
              Ready to sculpt your brand? Let's create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="font-heading text-3xl uppercase mb-4">Contact Info</h3>
                <div className="space-y-4 font-body text-lg">
                  <p className="flex items-center gap-3">
                    <span className="bg-black text-white p-2 rounded-full">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </span>
                    <a href="mailto:hello@brandsculpt.com" className="hover:underline">hello@brandsculpt.com</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="bg-black text-white p-2 rounded-full">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </span>
                    <a href="tel:+1234567890" className="hover:underline">+91 12345 67890</a>
                  </p>
                   <p className="flex items-start gap-3">
                    <span className="bg-black text-white p-2 rounded-full mt-1">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </span>
                    <span>123 Creative Avenue, Design District,<br/>Mumbai, India - 400001</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-3xl uppercase mb-4">Follow Us</h3>
                <div className="flex gap-4">
                    {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                        <a key={social} href="#" className="border border-black px-6 py-2 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                            {social}
                        </a>
                    ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-sm border border-black/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold uppercase text-sm tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-black px-4 py-3 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold uppercase text-sm tracking-wide">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-black px-4 py-3 outline-none transition-colors"
                      placeholder="+91 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold uppercase text-sm tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-black px-4 py-3 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-bold uppercase text-sm tracking-wide">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({...prev, subject: e.target.value}))}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-black px-4 py-3 outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Proposal">Project Proposal</option>
                    <option value="Careers">Careers</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-bold uppercase text-sm tracking-wide">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-black px-4 py-3 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-black text-white font-heading uppercase text-xl py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 mt-4"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {responseMsg && (
                  <div className={`text-center p-3 rounded-lg font-bold ${status === 'success' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
                    {responseMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}