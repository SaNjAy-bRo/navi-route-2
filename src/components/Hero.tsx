"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Anchor, Compass, BarChart3, ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand-100 to-sand-200/50 min-h-[580px] lg:min-h-[700px] flex items-center pt-28 lg:pt-36 pb-16 md:pb-24">
      
      {/* Drifting Clouds Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        <motion.div
          animate={{ x: ["-10%", "110%"] }}
          transition={{ repeat: Infinity, duration: 75, ease: "linear" }}
          className="absolute top-12 left-0 w-36 h-8 bg-gradient-to-r from-transparent via-sand-300 to-transparent blur-md rounded-full"
        />
        <motion.div
          animate={{ x: ["110%", "-10%"] }}
          transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
          className="absolute top-36 right-0 w-48 h-10 bg-gradient-to-r from-transparent via-sand-300 to-transparent blur-md rounded-full"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Content (6 cols on desktop to give text plenty of space, full width on mobile) */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left relative z-20">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-script text-4xl sm:text-5xl text-orange-brand block drop-shadow-sm"
              >
                We Navigate.
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="font-serif text-5xl sm:text-7xl font-extrabold text-navy-800 tracking-tight leading-none"
              >
                YOU GROW.
              </motion.h1>
              {/* Underline wave */}
              <div className="flex justify-center lg:justify-start">
                <svg width="100" height="12" viewBox="0 0 100 12" fill="none" className="text-orange-brand opacity-60">
                  <path d="M0 6 C20 12, 30 0, 50 6 C70 12, 80 0, 100 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-serif text-navy-800 font-bold leading-snug">
                Digital Marketing that Drives Enquiries & Bookings
              </h2>
              <p className="text-navy-800/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                We help hospitality & leisure brands build their digital presence, attract the right audience and convert them into loyal guests.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
            >
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-orange-brand hover:bg-orange-brand-hover text-sand-50 text-xs font-bold tracking-widest px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                OUR SERVICES
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border-2 border-navy-300 hover:border-orange-brand hover:text-orange-brand text-navy-800 text-xs font-bold tracking-widest px-8 py-3.5 rounded-lg transition-all duration-200"
              >
                LET'S TALK
                <Phone className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-sand-300/60 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
                <div className="flex items-center gap-1.5 text-navy-800">
                  <Anchor className="w-4 h-4 text-orange-brand" />
                  <span className="text-sm sm:text-base font-serif font-extrabold">15+</span>
                </div>
                <span className="text-[9px] font-sans font-bold tracking-wider text-navy-300 uppercase leading-none">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
                <div className="flex items-center gap-1.5 text-navy-800">
                  <Compass className="w-4 h-4 text-orange-brand" />
                  <span className="text-sm sm:text-base font-serif font-extrabold">145+</span>
                </div>
                <span className="text-[9px] font-sans font-bold tracking-wider text-navy-300 uppercase leading-none">
                  Clients Served
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1">
                <div className="flex items-center gap-1.5 text-navy-800">
                  <BarChart3 className="w-4 h-4 text-orange-brand" />
                  <span className="text-sm sm:text-base font-serif font-extrabold">100%</span>
                </div>
                <span className="text-[9px] font-sans font-bold tracking-wider text-navy-300 uppercase leading-none">
                  Data Driven
                </span>
              </div>
            </motion.div>
          </div>

          {/* Desktop/Tablet Layout: Empty space placeholder for absolute background positioning */}
          <div className="hidden lg:block lg:col-span-6 h-full" />
        </div>
      </div>

      {/* DESKTOP FULL HEIGHT ABSOLUTE ARTWORK - spans right side, same height as Hero section */}
      <div className="absolute right-0 top-0 bottom-0 h-full w-[55vw] xl:w-[58vw] z-10 select-none pointer-events-none hidden lg:block overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="relative w-full h-full hero-desktop-mask"
        >
          {/* object-cover ensures it covers the full height, object-right pins lighthouse/van on the right */}
          <Image
            src="/images/hero_main_scene_user.png"
            alt="Nautical Watercolor Illustration"
            fill
            sizes="58vw"
            className="object-cover object-right watercolor-blend"
            priority
          />

          {/* Lighthouse Glowing Beacon - absolute overlay aligned to lighthouse tower lens in the vignette */}
          <div className="absolute top-[21%] right-[11.2%] w-2 h-2 bg-yellow-100 rounded-full shadow-[0_0_15px_6px_rgba(253,224,71,0.7)] z-20">
            <motion.div
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-48 sm:w-80 h-36 sm:h-64 bg-gradient-to-l from-yellow-200/40 via-yellow-100/10 to-transparent blur-md origin-right"
              style={{
                clipPath: "polygon(100% 40%, 0 0, 0 100%, 100% 60%)",
                transform: "translateY(-50%) rotate(-5deg)",
              }}
            />
          </div>

          {/* Soaring Seagulls floating overhead in the sky (center-left) */}
          <div className="absolute top-[18%] left-[25%] w-20 h-10 opacity-40">
            <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-navy-500" strokeWidth="2.5" strokeLinecap="round">
              <motion.path 
                d="M10 20 Q 20 12, 30 20 Q 40 12, 50 20" 
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.path 
                d="M60 28 Q 70 20, 80 28 Q 90 20, 100 28" 
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Subtle animated water ripple path overlay */}
          <div className="absolute bottom-[20%] left-[28%] w-[35%] h-12 opacity-40">
            <svg viewBox="0 0 200 40" className="w-full h-full fill-none stroke-sky-400" strokeWidth="2">
              <motion.path
                d="M10 20 Q 50 15, 100 20 T 190 20"
                animate={{
                  d: [
                    "M10 20 Q 50 15, 100 20 T 190 20",
                    "M10 22 Q 50 25, 100 22 T 190 22",
                    "M10 20 Q 50 15, 100 20 T 190 20"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
              <motion.path
                d="M30 28 Q 70 25, 120 28 T 170 28"
                animate={{
                  d: [
                    "M30 28 Q 70 25, 120 28 T 170 28",
                    "M30 26 Q 70 30, 120 26 T 170 26",
                    "M30 28 Q 70 25, 120 28 T 170 28"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 7, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* MOBILE ARTWORK - flows naturally below text blocks, object-contain prevents crops */}
      <div className="lg:hidden w-full relative mt-8 select-none z-10 px-4 flex justify-center">
        <div className="relative w-full h-[260px] sm:h-[360px] hero-mobile-mask">
          <Image
            src="/images/hero_main_scene_user.png"
            alt="Nautical Watercolor Illustration"
            fill
            sizes="100vw"
            className="object-contain watercolor-blend"
            priority
          />
          {/* Mobile beacon glow */}
          <div className="absolute top-[28%] right-[22%] w-2 h-2 bg-yellow-100 rounded-full shadow-[0_0_12px_5px_rgba(253,224,71,0.6)] z-20">
            <motion.div
              animate={{
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-gradient-to-l from-yellow-200/30 to-transparent blur-md origin-right"
              style={{
                clipPath: "polygon(100% 40%, 0 0, 0 100%, 100% 60%)",
                transform: "translateY(-50%) rotate(-5deg)",
              }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
