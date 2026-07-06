"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "HOSPITALITY FOCUSED",
    description: "We work exclusively with hospitality & leisure businesses.",
    image: "/images/value_hospitality_v2.png",
  },
  {
    title: "BRAND TO BOOKING",
    description: "From brand strategy to guest journey, we drive real bookings.",
    image: "/images/value_brand_v2.png",
  },
  {
    title: "DATA LED DECISIONS",
    description: "Smart strategy backed by data insights for measurable growth.",
    image: "/images/value_data_v2.png",
  },
  {
    title: "IN-HOUSE EXPERTS",
    description: "Designers, marketers and strategists – all under one roof.",
    image: "/images/value_experts_v2.png",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-sand-100 py-12 lg:py-16 border-b border-sand-200/50 relative overflow-hidden">
      
      {/* Decorative background watercolor accent on the far left, matching mockup edge */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-44 h-44 bg-radial from-navy-100/35 to-transparent blur-2xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-x-0">
          
          {values.map((val, idx) => {
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="flex items-center gap-4 px-2 sm:px-4 lg:px-6 lg:border-r lg:border-sand-300/80 last:border-r-0 group"
              >
                
                {/* Extra Large Watercolor Icon Circle - w-28 h-28 on desktop */}
                <div className="relative w-20 h-20 sm:w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 flex items-center justify-center select-none">
                  {/* Subtle ambient rotating shadow ring */}
                  <div className="absolute inset-0 liquid-splash bg-sand-200/30 opacity-40 scale-105 pointer-events-none group-hover:rotate-12 transition-transform duration-700" />
                  
                  <Image
                    src={val.image}
                    alt={val.title}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                    className="object-contain watercolor-blend group-hover:scale-105 transition-transform duration-500 relative z-10"
                  />
                </div>

                {/* Text Content side-by-side with icon - properly sized typography */}
                <div className="space-y-1.5 flex-grow">
                  <h3 className="font-serif text-sm lg:text-[15px] font-extrabold tracking-wider text-navy-800 uppercase leading-snug group-hover:text-orange-brand transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-xs lg:text-[13px] text-navy-800/75 leading-relaxed max-w-[200px] lg:max-w-none">
                    {val.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
