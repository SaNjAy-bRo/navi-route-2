"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[110vh] bg-white lg:bg-transparent pt-32 pb-48 lg:pb-0 overflow-hidden flex flex-col justify-start">
      
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10 w-full lg:h-[80vh]">
        
        {/* Left Side: Typography (Takes 6 columns on desktop, relative z-10 to stay above background) */}
        <div className="lg:col-span-6 space-y-6 text-left relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block"
          >
            END-TO-END DIGITAL GROWTH
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D3D9E] leading-tight"
          >
            Navigate Your <br className="hidden lg:inline" />
            Brand Toward <br className="hidden lg:inline" />
            Smarter Growth.
          </motion.h1>
          
          {/* Partner Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Google Partner Badge */}
            <div className="bg-[#FAF5EE]/60 border border-[#1D3D9E]/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Certified</span>
                <span className="text-[11px] font-black text-[#1D3D9E] tracking-tight mt-0.5">Google Ads Partner</span>
              </div>
            </div>

            {/* Meta Partner Badge */}
            <div className="bg-[#FAF5EE]/60 border border-[#1D3D9E]/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1877F2]" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M15.53 7.828c-1.396 0-2.652.74-3.372 1.86l-1.22 1.897a2.38 2.38 0 01-1.986 1.102 2.38 2.38 0 01-1.987-1.102l-1.22-1.897C5.025 8.568 3.769 7.828 2.373 7.828A3.832 3.832 0 000 11.66c0 2.115 1.722 3.832 3.832 3.832 1.396 0 2.652-.74 3.372-1.86l1.22-1.897c.45-.698 1.25-1.102 1.986-1.102.736 0 1.536.404 1.987 1.102l1.22 1.897c.72 1.12 1.976 1.86 3.372 1.86A3.832 3.832 0 0020.9 11.66c0-2.115-1.722-3.832-3.832-3.832zm0 6.13a2.3 2.3 0 01-1.986-1.102l-1.22-1.898c-.45-.698-1.25-1.102-1.987-1.102-.736 0-1.536.404-1.986 1.102l-1.22 1.897A2.3 2.3 0 015.158 13.96a2.3 2.3 0 01-1.986-1.102 2.3 2.3 0 011.986-3.51c.736 0 1.536.404 1.987 1.102l1.22 1.897c.45.698 1.25 1.102 1.986 1.102.736 0 1.536-.404 1.987-1.102l1.22-1.897a2.3 2.3 0 011.986-1.102c1.27 0 2.3 1.03 2.3 2.3s-1.03 2.3-2.3 2.3z" 
                />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Official</span>
                <span className="text-[11px] font-black text-[#1D3D9E] tracking-tight mt-0.5">Meta Business Partner</span>
              </div>
            </div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full"
          >
            <Link
              href="#services"
              className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto text-center"
            >
              Start Your Journey
            </Link>
            
            <Link
              href="#work"
              className="inline-flex justify-center items-center gap-2 text-[#1D3D9E] hover:text-[#FF6B00] text-sm font-bold py-4 px-2 group transition-all duration-200 w-full sm:w-auto text-center"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>
        </div>
 
        {/* Desktop Helper Column */}
        <div className="hidden lg:block lg:col-span-6 h-full" />
      </div>
 
      {/* DESKTOP FULL HEIGHT ABSOLUTE ARTWORK - Positioned in the right-bottom corner, with increased width to span 75vw/80vw */}
      <div className="absolute right-0 top-0 h-[80vh] w-[75vw] xl:w-[80vw] z-0 select-none pointer-events-none hidden lg:block overflow-hidden video-fade-mask">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full"
        >
          <video
            src="/images/Vintage Coastal Lighthouse Panorama.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain object-right-bottom"
          />
        </motion.div>
      </div>

      {/* MOBILE BACKGROUND ARTWORK - Larger and highly visible background watermark under the text and buttons */}
      <div className="absolute inset-0 z-0 top-60 select-none pointer-events-none lg:hidden opacity-45">
        <Image
          src="/images/hero_lighthouse_ink.png"
          alt="Lighthouse Cliff Background (Mobile)"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

    </section>
  );
}
