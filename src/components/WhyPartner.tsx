"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Palmtree, LineChart, Users, Bot, ClipboardCheck, Phone } from "lucide-react";

const benefits = [
  {
    title: "HOSPITALITY-FIRST APPROACH",
    icon: Palmtree,
  },
  {
    title: "DATA-BACKED STRATEGIES",
    icon: LineChart,
  },
  {
    title: "IN-HOUSE EXPERT TEAM",
    icon: Users,
  },
  {
    title: "AI & AUTOMATION EXPERTISE",
    icon: Bot,
  },
  {
    title: "TRANSPARENT REPORTING",
    icon: ClipboardCheck,
  },
];

const testimonials = [
  {
    quote: "Navi Route completely transformed our digital presence. Our direct bookings increased by 220% in just 3 months!",
    author: "Rahul Mehta",
    role: "The Bay Resort, Goa",
    initials: "RM",
    avatarBg: "bg-sky-100 text-sky-800",
  },
  {
    quote: "The team is professional, responsive and truly understands hospitality businesses.",
    author: "Neha Sharma",
    role: "Villa Solace, Udaipur",
    initials: "NS",
    avatarBg: "bg-orange-50 text-orange-700",
  },
  {
    quote: "Their SEO and automation strategies brought us quality enquiries and saved us so much time.",
    author: "Arjun Nair",
    role: "Backwater Retreats, Kerala",
    initials: "AN",
    avatarBg: "bg-teal-50 text-teal-800",
  },
];

export default function WhyPartner() {

  return (
    <>
      {/* 1. Unified Why Partner & Testimonials Section (Flanked by Sailboat and Lighthouse) */}
      <section className="pt-12 pb-16 lg:pt-14 lg:pb-18 bg-sand-100 relative overflow-hidden border-t border-sand-200/50 w-full flex flex-col gap-10 lg:gap-12">
        
        {/* UPPER SECTION LEFT FLANKING SAILBOAT - aligns next to benefits grid */}
        <div className="absolute left-0 top-8 w-[28vw] xl:w-[32vw] max-w-[460px] h-[480px] select-none hidden lg:block z-10 pointer-events-none">
          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [-1.2, 1.2, -1.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/hero_sailboat_v2.png"
              alt="Sailboat Illustration"
              fill
              sizes="(max-width: 1280px) 28vw, 32vw"
              className="object-contain object-left watercolor-blend"
              priority
            />
          </motion.div>
        </div>

        {/* EVEN LARGER RIGHT FLANKING LIGHTHOUSE & WAVES - shifted slightly to the right to clear content */}
        <div className="absolute -right-12 top-[-40px] bottom-0 h-[calc(100%+40px)] w-[38vw] xl:w-[44vw] max-w-[620px] select-none hidden lg:block z-10 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero_lighthouse_v2.png"
              alt="Lighthouse Illustration"
              fill
              sizes="(max-width: 1280px) 38vw, 44vw"
              className="object-contain object-right-bottom watercolor-blend"
              priority
            />
            
            {/* Glowing lighthouse lens - aligned to lens in hero_lighthouse_v2 */}
            <div className="absolute top-[37.5%] right-[23.5%] w-2 h-2 bg-yellow-100 rounded-full shadow-[0_0_15px_5px_rgba(253,224,71,0.6)] z-20">
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-yellow-200/30 blur-[2px] rounded-full scale-[4]"
              />
            </div>
          </div>
        </div>

        {/* Ship Helm Steering Wheel Accent at the bottom-right next to testimonials cards */}
        <div className="absolute bottom-6 right-[16vw] w-20 h-20 opacity-[0.04] hidden lg:block z-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-navy-800 fill-none animate-spin-slow" strokeWidth="4">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="8" />
            <path d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15" strokeLinecap="round" />
            <circle cx="50" cy="8" r="4" className="fill-current" />
            <circle cx="50" cy="92" r="4" className="fill-current" />
            <circle cx="8" cy="50" r="4" className="fill-current" />
            <circle cx="92" cy="50" r="4" className="fill-current" />
          </svg>
        </div>

        {/* CENTER CONTENT CONTAINER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col gap-10 lg:gap-12">
          
          {/* SUB-SECTION 1: WHY PARTNER WITH US */}
          <div className="max-w-4xl mx-auto space-y-8 w-full">
            {/* Header */}
            <div className="text-center space-y-3">
              <span className="font-script text-3xl text-orange-brand block">
                Why Partner With Us?
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight leading-tight uppercase max-w-xl mx-auto">
                MORE THAN MARKETING. WE DRIVE BOOKINGS.
              </h2>
              <div className="flex justify-center">
                <svg width="80" height="10" viewBox="0 0 100 12" fill="none" className="text-orange-brand opacity-60">
                  <path d="M0 6 C20 12, 30 0, 50 6 C70 12, 80 0, 100 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 lg:pl-14">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex flex-col items-center text-center p-5 bg-white/40 border border-sand-200/40 rounded-xl hover:bg-white hover:shadow-md hover:border-sand-300/40 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-navy-50 text-navy-800 mb-3 group-hover:bg-orange-brand group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <h3 className="font-serif text-[10px] font-extrabold tracking-wider text-navy-800 leading-tight h-8 flex items-center justify-center">
                      {benefit.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SUB-SECTION 2: TESTIMONIALS - Shifted left to clear the lighthouse waves, and header left-aligned */}
          <div className="max-w-4xl mx-auto space-y-8 w-full lg:-translate-x-12 transition-all duration-300">
            {/* Header - Left Aligned to match mockup */}
            <div className="text-left space-y-2">
              <span className="font-script text-3xl text-orange-brand block">
                Loved by Hospitality Brands
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight leading-tight uppercase max-w-xl">
                SUCCESS STORIES THAT INSPIRE
              </h2>
              <div className="flex justify-start">
                <svg width="80" height="10" viewBox="0 0 100 12" fill="none" className="text-orange-brand opacity-60">
                  <path d="M0 6 C20 12, 30 0, 50 6 C70 12, 80 0, 100 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => {
                return (
                  <motion.div
                    key={t.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(15,44,89,0.02)] border border-sand-200/50 hover:shadow-[0_8px_30px_rgba(15,44,89,0.05)] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* 5 Stars */}
                      <div className="flex gap-1 text-orange-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {/* Quote Text */}
                      <p className="text-xs sm:text-sm text-navy-800/80 leading-relaxed font-sans italic">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Profile info */}
                    <div className="flex items-center gap-3 pt-6 border-t border-sand-100 mt-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${t.avatarBg}`}>
                        {t.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-xs sm:text-sm font-extrabold text-navy-800 leading-tight">
                          {t.author}
                        </span>
                        <span className="text-[10px] text-navy-800/50 leading-none">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 2. Separate CTA Section (Features 100% full-width watercolor orange brush stroke background) */}
      <section className="py-14 bg-sand-100 relative overflow-hidden w-full">
        
        {/* Wave bottom border wrapper */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-sand-200 pointer-events-none" style={{ clipPath: "polygon(0 30%, 25% 0, 50% 40%, 75% 0, 100% 30%, 100% 100%, 0 100%)" }} />

        {/* 100% FULL-WIDTH WATERCOLOR ORANGE BRUSH STROKE BACKGROUND */}
        <div className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none z-0">
          <Image
            src="/images/cta_orange_stroke_v3.png"
            alt="Orange Brush Stroke background"
            fill
            className="object-fill watercolor-blend"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full relative h-[140px] md:h-[110px] flex items-center"
          >
            
            {/* FLOATING BOTTLE WATERCOLOR VIDEO - Positioned on the left side of the centered content grid, multiply blended with opacity-[0.99] to bypass hardware overlays */}
            <div className="absolute left-0 -bottom-8 w-28 h-32 hidden md:block z-20 pointer-events-none">
              <video
                src="/images/bottle-float.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain mix-blend-multiply bg-transparent opacity-[0.99]"
                style={{ backfaceVisibility: "hidden", transform: "translate3d(0,0,0)" }}
              />
            </div>

            {/* Banner content - overlayed on the brush stroke, shifted right to prevent bottle overlap */}
            <div className="w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 pl-6 pr-6 md:pl-[200px] md:pr-10">
              
              {/* Left side texts */}
              <div className="space-y-0.5 text-center md:text-left">
                <h3 className="font-serif text-base sm:text-lg font-bold tracking-wide text-white leading-tight">
                  LET'S GROW YOUR BRAND THE RIGHT WAY.
                </h3>
                <p className="text-white/80 text-[11px] sm:text-xs">
                  Get a free strategy call and discover growth opportunities for your property.
                </p>
              </div>

              {/* Right side WhatsApp Button */}
              <div className="w-full md:w-auto">
                <Link
                  href="https://wa.me/yourwhatsappnumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-navy-800 hover:bg-navy-950 text-white text-[10px] sm:text-xs font-bold tracking-widest px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  SCHEDULE A CALL
                  <Phone className="w-3.5 h-3.5 text-orange-brand fill-current" />
                </Link>
              </div>

            </div>

          </motion.div>
        </div>

        {/* MOBILE ONLY FLANKING DECORATIVE - stacks centered beneath the sections */}
        <div className="lg:hidden w-full flex justify-center gap-8 mt-12 px-4 select-none z-10">
          <div className="relative w-24 h-24">
            <Image src="/images/hero_sailboat_v2.png" alt="Sailboat" fill className="object-contain watercolor-blend" />
          </div>
          <div className="relative w-24 h-24">
            <Image src="/images/hero_lighthouse_v2.png" alt="Lighthouse" fill className="object-contain watercolor-blend" />
          </div>
        </div>
      </section>
    </>
  );
}
