"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "RESORTS",
    image: "/images/card_resort_v2.png",
    description: "Eco-lodges, wellness resorts, and luxury stays.",
  },
  {
    name: "HOMESTAYS & VILLAS",
    image: "/images/card_homestay_v2.png",
    description: "Charming rentals, villas, and private holiday homes.",
  },
  {
    name: "HOTELS",
    image: "/images/card_hotel_v2.png",
    description: "Boutique hotels, business hotels, and local chains.",
  },
  {
    name: "SPAS & WELLNESS",
    image: "/images/card_spa_v2.png",
    description: "Zen retreats, thermal spas, and relaxation centers.",
  },
  {
    name: "YACHTS & BOAT RENTALS",
    image: "/images/card_yacht_v2.png",
    description: "Charter yachts, catamarans, and leisure boat services.",
  },
  {
    name: "TOURS & EXPERIENCES",
    image: "/images/card_tour_v2.png",
    description: "Guided tours, balloon flights, and outdoor excursions.",
  },
];

export default function Industries() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScrollBounds = () => {
    if (carouselRef.current) {
      const { scrollWidth, clientWidth } = carouselRef.current;
      setMaxScroll(scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    updateScrollBounds();
    window.addEventListener("resize", updateScrollBounds);
    return () => window.removeEventListener("resize", updateScrollBounds);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const handleScrollEvent = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  return (
    <section id="industries" className="py-20 bg-sand-50 relative overflow-hidden">
      {/* Background ambient watercolor stains */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-radial from-navy-100/30 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-radial from-orange-200/20 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <span className="font-script text-3xl text-orange-brand block">
              Industries We Serve
            </span>
            {/* Wave underline */}
            <div className="flex justify-center md:justify-start">
              <svg width="80" height="10" viewBox="0 0 100 12" fill="none" className="text-orange-brand opacity-60">
                <path d="M0 6 C20 12, 30 0, 50 6 C70 12, 80 0, 100 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight leading-tight uppercase max-w-xl">
              BUILT FOR HOSPITALITY. FOCUSED ON GROWTH.
            </h2>
            <p className="text-navy-800/70 text-sm sm:text-base leading-relaxed">
              We understand your world because we work in it.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              disabled={scrollPosition <= 5}
              className="w-12 h-12 rounded-full border border-sand-300 flex items-center justify-center text-navy-800 hover:border-orange-brand hover:text-orange-brand disabled:opacity-30 disabled:hover:border-sand-300 disabled:hover:text-navy-800 transition-all shadow-sm bg-white"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={scrollPosition >= maxScroll - 5}
              className="w-12 h-12 rounded-full border border-sand-300 flex items-center justify-center text-navy-800 hover:border-orange-brand hover:text-orange-brand disabled:opacity-30 disabled:hover:border-sand-300 disabled:hover:text-navy-800 transition-all shadow-sm bg-white"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          onScroll={handleScrollEvent}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-none touch-pan-x cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none" }}
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start bg-sand-100 rounded-2xl shadow-[0_4px_24px_rgba(15,44,89,0.02)] hover:shadow-[0_8px_32px_rgba(15,44,89,0.05)] p-4 transition-all duration-300 group border border-transparent hover:border-sand-300/40"
            >
              {/* Watercolor Image Card Container - transparent blending */}
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-transparent flex items-center justify-center mb-5 select-none">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover watercolor-blend group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title & Description */}
              <div className="px-2 space-y-1">
                <h3 className="font-serif text-sm font-extrabold text-navy-800 group-hover:text-orange-brand transition-colors duration-300 tracking-wider">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-sm text-navy-800/65 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {industries.map((_, index) => {
            const cardWidth = 320 + 24; // Card width + gap
            const currentDot = Math.round(scrollPosition / cardWidth);
            const isActive = index === currentDot;
            return (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive ? "w-6 bg-orange-brand" : "w-2 bg-sand-300"
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
