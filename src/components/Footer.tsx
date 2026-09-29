import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';

interface FooterProps {
  onNavigateRoute: (path: string, title?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateRoute }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, path: string, title: string) => {
    e.preventDefault();
    onNavigateRoute(path, title);
  };

  return (
    <footer id="contact" className="bg-[#070506] border-t border-[#d4af37]/20 pt-16 sm:pt-20 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-[#d4af37]/15">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4 sm:space-y-5">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/', 'Atelier Welcome')}
              className="inline-flex items-center gap-3 font-brand text-2xl tracking-[0.25em] text-[#fbf8f2]"
            >
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] font-serif-luxury font-bold text-xs">
                V
              </div>
              <span className="font-semibold">{BRAND_INFO.name}</span>
            </a>

            <p className="font-subheading text-base sm:text-lg text-[#e8decb] italic font-light max-w-sm leading-relaxed">
              "We create moments that stay."
            </p>

            <p className="text-xs font-sans text-neutral-400 max-w-sm leading-relaxed font-light">
              Bespoke luxury wedding planning, majestic royal decor, destination celebrations,
              and experiential event production across India and the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-white">
              Atelier Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-sans font-light">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, '/about', 'The Atelier Philosophy')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  The Atelier Story
                </a>
              </li>
              <li>
                <a
                  href="/experiences"
                  onClick={(e) => handleLinkClick(e, '/experiences', 'Bespoke Ceremonials')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Signature Ceremonials
                </a>
              </li>
              <li>
                <a
                  href="/work"
                  onClick={(e) => handleLinkClick(e, '/work', 'Royal Commissions')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Royal Commissions & Archives
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLinkClick(e, '/services', 'Atelier Disciplines')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Production & Scenography
                </a>
              </li>
              <li>
                <a
                  href="/journey"
                  onClick={(e) => handleLinkClick(e, '/journey', '5-Stage Orchestration')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  The 5-Stage Orchestration
                </a>
              </li>
              <li>
                <a
                  href="/destinations"
                  onClick={(e) => handleLinkClick(e, '/destinations', 'Palatial Destinations')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Destination Weddings
                </a>
              </li>
              <li>
                <a
                  href="/planner"
                  onClick={(e) => handleLinkClick(e, '/planner', 'Event Configurator')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Interactive Event Planner
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact', 'Private Concierge')}
                  className="hover:text-[#d4af37] transition-colors"
                >
                  Private Concierge & Offices
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-white">
              Atelier Addresses
            </h4>
            <div className="text-xs font-sans space-y-2 font-light">
              <div>
                <strong className="text-white font-medium block">New Delhi Atelier:</strong>
                {BRAND_INFO.address}
              </div>
              <div>
                <strong className="text-white font-medium block">Emirates Liaison:</strong>
                {BRAND_INFO.internationalDesk}
              </div>
              <div className="pt-2 text-neutral-300">
                <div>Direct Concierge: {BRAND_INFO.phone}</div>
                <div>Private Inquiries: {BRAND_INFO.email}</div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs font-sans text-[#d4af37]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.name} Atelier. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Animated Gold Line at Bottom */}
        <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-40 animate-pulse" />
      </div>
    </footer>
  );
};
