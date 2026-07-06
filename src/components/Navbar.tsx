"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#", active: true },
  {
    name: "SERVICES",
    href: "#services",
    dropdown: [
      { name: "Digital Marketing", href: "#" },
      { name: "Social Media", href: "#" },
      { name: "Website Design", href: "#" },
      { name: "Content Creation", href: "#" },
      { name: "AI Automation", href: "#" },
      { name: "SEO Optimization", href: "#" },
    ],
  },
  {
    name: "INDUSTRIES",
    href: "#industries",
    dropdown: [
      { name: "Resorts & Lodges", href: "#" },
      { name: "Homestays & Villas", href: "#" },
      { name: "Boutique Hotels", href: "#" },
      { name: "Spas & Wellness Centers", href: "#" },
      { name: "Yachts & Boat Rentals", href: "#" },
      { name: "Tours & Experiences", href: "#" },
    ],
  },
  { name: "WORK", href: "#" },
  { name: "ABOUT US", href: "#" },
  { name: "BLOG", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Initialize status
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
      isScrolled 
        ? "bg-sand-100/90 backdrop-blur-md border-b border-sand-200/60 shadow-sm py-4" 
        : "bg-transparent border-b border-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo_compass.png"
                alt="Navi Route Compass"
                fill
                sizes="48px"
                className="object-contain blend-multiply group-hover:rotate-45 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-navy-800 leading-none">
                NAVI <span className="text-orange-brand">ROUTE</span>
              </span>
              <span className="text-[9px] font-sans font-semibold tracking-[0.18em] text-navy-300 uppercase mt-0.5">
                DIGITAL GROWTH PARTNERS
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-xs font-bold tracking-widest transition-colors py-2 ${
                    link.active
                      ? "text-orange-brand border-b-2 border-orange-brand/80"
                      : "text-navy-800 hover:text-orange-brand"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-75" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 mt-1 w-52 bg-sand-50 rounded-lg shadow-lg border border-sand-200/80 py-2 z-50"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-xs font-semibold text-navy-800 hover:bg-sand-200/40 hover:text-orange-brand transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Let's Talk button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-brand hover:bg-orange-brand-hover text-sand-50 text-xs font-bold tracking-widest px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 duration-200"
            >
              LET'S TALK
              <Phone className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-800 hover:text-orange-brand transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-sand-50 border-b border-sand-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-sand-200/50 pb-2">
                  <div
                    className="flex justify-between items-center py-2"
                    onClick={() => link.dropdown && toggleDropdown(link.name)}
                  >
                    <Link
                      href={link.href}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                      className={`text-sm font-bold tracking-wider ${
                        link.active ? "text-orange-brand" : "text-navy-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 text-navy-800 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown Items */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="pl-4 py-1 space-y-2 bg-sand-100/50 rounded-md">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 text-xs font-semibold text-navy-800/80 hover:text-orange-brand"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex justify-center items-center gap-2 bg-orange-brand hover:bg-orange-brand-hover text-sand-50 text-xs font-bold tracking-widest py-3 rounded-lg shadow-md w-full"
              >
                LET'S TALK
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
