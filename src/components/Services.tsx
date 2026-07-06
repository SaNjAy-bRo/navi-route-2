"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Heart,
  Globe,
  Camera,
  Bot,
  Search,
  Star,
  PieChart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "DIGITAL MARKETING",
    description: "Performance marketing that brings results.",
    icon: Megaphone,
    iconColor: "text-navy-800",
  },
  {
    title: "SOCIAL MEDIA",
    description: "Engage audiences and build your community.",
    icon: Heart,
    iconColor: "text-orange-brand",
  },
  {
    title: "WEBSITE DESIGN",
    description: "Modern, responsive websites that convert.",
    icon: Globe,
    iconColor: "text-navy-800",
  },
  {
    title: "CONTENT CREATION",
    description: "High-quality content that tells your story.",
    icon: Camera,
    iconColor: "text-navy-800",
  },
  {
    title: "AI AUTOMATION",
    description: "Smart automations that save time and scale your business.",
    icon: Bot,
    iconColor: "text-navy-800",
  },
  {
    title: "SEO",
    description: "Rank higher. Get found. Drive organic growth.",
    icon: Search,
    iconColor: "text-navy-800",
  },
  {
    title: "REPUTATION MANAGEMENT",
    description: "Stronger reviews. Stronger brand trust.",
    icon: Star,
    iconColor: "text-navy-800",
  },
  {
    title: "ANALYTICS & TRACKING",
    description: "Track what matters. Improve what counts.",
    icon: PieChart,
    iconColor: "text-navy-800",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-sand-100 text-sand-100 overflow-hidden w-full">
      
      {/* 4-Way Faded Watercolor Background - Nested containers to bypass Webkit mask limits */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          // Outer container fades the TOP and BOTTOM 3% of the section background
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 3%, black 97%, transparent 100%)",
        }}
      >
        <div 
          className="absolute inset-0 bg-navy-950"
          style={{
            backgroundImage: "url('/images/services_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Inner container fades the LEFT and RIGHT 1.5% of the section background
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 1.5%, black 98.5%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 1.5%, black 98.5%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left sticky top-24">
            <div className="space-y-2">
              <span className="font-script text-3xl text-orange-brand block">
                What We Do
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                OUR SERVICES
              </h2>
              <svg width="80" height="10" viewBox="0 0 100 12" fill="none" className="text-orange-brand mx-auto lg:mx-0 opacity-70">
                <path d="M0 6 C20 12, 30 0, 50 6 C70 12, 80 0, 100 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            
            <p className="text-navy-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              End-to-end digital solutions that help hospitality brands stand out and stay booked.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center gap-2 bg-sand-100 text-navy-800 hover:bg-orange-brand hover:text-white text-xs font-bold tracking-widest px-6 py-4 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                EXPLORE ALL SERVICES
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Services Grid (8 cols) - 4x2 pane layout with dividers */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-0">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              const isEven = idx % 2 === 0;
              const isLastRow = idx >= 6;
              
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`flex gap-6 p-6 group transition-all duration-300 ${
                    isEven ? "sm:border-r sm:border-white/10 sm:pr-8" : "sm:pl-8"
                  } ${
                    !isLastRow ? "border-b border-white/10 pb-8" : "pb-0"
                  } pt-6`}
                >
                  {/* Watercolor white circular wash background for high contrast */}
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center overflow-visible select-none">
                    {/* Solid White Watercolor Morphing Splash */}
                    <div className="absolute inset-0 bg-white/95 group-hover:bg-white liquid-splash transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-white/20" />
                    
                    <Icon className={`w-6 h-6 stroke-[2] relative z-10 ${svc.iconColor} group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  <div className="space-y-1.5 pt-1.5">
                    <h3 className="font-serif text-sm font-extrabold tracking-wider text-white group-hover:text-orange-brand transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-navy-300 group-hover:text-navy-100 transition-colors duration-300 leading-relaxed max-w-[280px]">
                      {svc.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
