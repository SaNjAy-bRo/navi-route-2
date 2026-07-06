"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";

// Inline brand SVGs since Lucide React removed them in newer releases
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 py-16 border-t border-navy-900 relative overflow-hidden">
      {/* Decorative ambient background light */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-radial from-navy-800/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex-shrink-0 bg-white/5 rounded-full p-1 border border-white/10">
                <Image
                  src="/images/logo_compass.png"
                  alt="Navi Route Compass"
                  fill
                  sizes="40px"
                  className="object-contain blend-multiply brightness-200"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white leading-none">
                  NAVI <span className="text-orange-brand">ROUTE</span>
                </span>
                <span className="text-[8px] font-sans font-semibold tracking-[0.18em] text-navy-300 uppercase mt-0.5">
                  DIGITAL GROWTH PARTNERS
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-navy-300/80 leading-relaxed">
              We navigate the complex digital waters to drive direct bookings and measurable revenue growth for hospitality brands.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: FacebookIcon, href: "#" },
                { icon: InstagramIcon, href: "#" },
                { icon: LinkedinIcon, href: "#" },
                { icon: TwitterIcon, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-orange-brand hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm font-extrabold tracking-wider text-white uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {[
                { name: "Our Services", href: "#services" },
                { name: "Industries Served", href: "#industries" },
                { name: "Success Stories", href: "#" },
                { name: "About Navi Route", href: "#" },
                { name: "Industry Insights (Blog)", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm font-extrabold tracking-wider text-white uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-brand flex-shrink-0 mt-0.5" />
                <span>
                  123 Marine Parade, Suite 400<br />
                  Harbor District, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-orange-brand flex-shrink-0" />
                <Link href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-brand flex-shrink-0" />
                <Link href="mailto:hello@naviroute.com" className="hover:text-white transition-colors">
                  hello@naviroute.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Booking Inquiry */}
          <div className="space-y-6">
            <h4 className="font-serif text-sm font-extrabold tracking-wider text-white uppercase">
              Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-navy-300/80">
              Receive direct booking tips and hospitality marketing guides.
            </p>
            <form className="flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-navy-300/50 focus:outline-none focus:border-orange-brand transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-brand hover:bg-orange-brand-hover text-white text-xs font-bold tracking-widest py-2.5 rounded-lg transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-navy-300/55">
          <p>© {new Date().getFullYear()} Navi Route. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
