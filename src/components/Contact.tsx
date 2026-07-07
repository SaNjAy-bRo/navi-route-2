"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const projectTypes = [
  "Website Development",
  "App Development",
  "AI Automation",
  "Digital Marketing",
  "Consulting",
];

const budgetRanges = [
  "Under $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
];

export default function Contact() {
  const [selectedType, setSelectedType] = useState<string>("Website Development");
  const [selectedBudget, setSelectedBudget] = useState<string>("$10k - $25k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 w-full border-t border-[#1D3D9E]/5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10 w-full">
        
        {/* Left Side: Vibe, Contact Details & Floating Artwork */}
        <div className="lg:col-span-5 space-y-10 text-left flex flex-col justify-between h-full">
          <div className="space-y-6">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              GET IN TOUCH
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D3D9E] leading-tight">
              Ready to chart <br />
              a new course?
            </h2>
            <p className="text-[#0F2C59]/80 text-sm sm:text-base leading-relaxed max-w-md">
              Tell us where you want to go. We'll help you navigate the strategy, build the technology, and scale your brand to reach new horizons.
            </p>
          </div>

          <div className="space-y-4">
            <a 
              href="mailto:hello@naviroute.studio" 
              className="flex items-center gap-4 group text-[#1D3D9E] hover:text-[#FF6B00] transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-xs sm:text-sm">hello@naviroute.studio</span>
            </a>

            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-4 group text-[#1D3D9E] hover:text-[#FF6B00] transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-xs sm:text-sm">+1 (555) 123-4567</span>
            </a>

            <div className="flex items-center gap-4 text-[#1D3D9E]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E]">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </div>
              <span className="font-semibold text-xs sm:text-sm">Austin, TX & Worldwide</span>
            </div>
          </div>

          {/* Floating Message Bottle Illustration */}
          <div className="hidden lg:block pt-8">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-44 h-44 select-none pointer-events-none"
            >
              <Image
                src="/images/floating_message_bottle_v4.png"
                alt="Floating Message Bottle Sketch"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Interactive Card Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1D3D9E]/10 shadow-sm relative overflow-hidden">
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00]">
                  <CheckCircle className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D3D9E]">Message Received!</h3>
                <p className="text-sm text-[#0F2C59]/70 max-w-sm">
                  Thank you for reaching out. We have received your message and will chart our course back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#1D3D9E] hover:text-[#FF6B00] transition-colors border-b border-[#1D3D9E]/20 hover:border-[#FF6B00]/40 pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Project Type Selector Chips */}
                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F2C59]/60 block text-left">
                    What can we help you build?
                  </label>
                  <div className="flex flex-wrap gap-2 justify-start">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                          selectedType === type
                            ? "bg-[#FF6B00] text-white shadow-sm shadow-[#FF6B00]/10"
                            : "bg-[#1D3D9E]/5 text-[#1D3D9E] hover:bg-[#1D3D9E]/10"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Interactive Input Fields (Floating Labels) */}
                <div className="space-y-6">
                  
                  {/* Name field */}
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="peer w-full bg-transparent border-b border-[#1D3D9E]/20 py-3 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:border-[#FF6B00] transition-colors placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label className="absolute left-0 top-3 text-xs sm:text-sm text-[#0F2C59]/50 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[#0F2C59]/40 peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-[#FF6B00] peer-[:not(:placeholder-shown)]:top-[-14px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#FF6B00]">
                      Full Name
                    </label>
                  </div>

                  {/* Email field */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="peer w-full bg-transparent border-b border-[#1D3D9E]/20 py-3 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:border-[#FF6B00] transition-colors placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label className="absolute left-0 top-3 text-xs sm:text-sm text-[#0F2C59]/50 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[#0F2C59]/40 peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-[#FF6B00] peer-[:not(:placeholder-shown)]:top-[-14px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#FF6B00]">
                      Email Address
                    </label>
                  </div>

                  {/* Message field */}
                  <div className="relative group">
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="peer w-full bg-transparent border-b border-[#1D3D9E]/20 py-3 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:border-[#FF6B00] transition-colors placeholder-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                    <label className="absolute left-0 top-3 text-xs sm:text-sm text-[#0F2C59]/50 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-[#0F2C59]/40 peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-[#FF6B00] peer-[:not(:placeholder-shown)]:top-[-14px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#FF6B00]">
                      Tell us about your project...
                    </label>
                  </div>
                </div>

                {/* 3. Budget Range Selector */}
                <div className="space-y-3">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0F2C59]/60 block text-left">
                    Estimated Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setSelectedBudget(range)}
                        className={`text-xs font-semibold py-2.5 px-2 rounded-xl transition-all duration-200 border ${
                          selectedBudget === range
                            ? "bg-[#1D3D9E] text-white border-transparent shadow-sm"
                            : "bg-transparent text-[#0F2C59]/80 border-[#0F2C59]/10 hover:border-[#1D3D9E]/30"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Submit button */}
                <div className="pt-2 flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
