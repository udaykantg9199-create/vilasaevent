import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';
import { MagneticButton } from './MagneticButton';

interface FinalCTAProps {
  onPlanEvent: () => void;
  onExploreWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanEvent, onExploreWork }) => {
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Vilāsa Atelier, I would like to inquire about event planning and luxury wedding design.'
  )}`;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-[#d4af37]/20">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_luxury_indian_wedding_1790667508985.jpg"
          alt="Royal Celebration Night"
          className="w-full h-full object-cover filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#1a050e]/60 to-[#0a0809]" />
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center my-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#2b0813]/80 backdrop-blur-md text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Commence Your Legacy</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white tracking-tight uppercase leading-[1.05] sm:leading-[0.95] mb-6 sm:mb-8">
          YOUR MOMENT. <br />
          <span className="text-gold-gradient italic font-normal">OUR MASTERPIECE.</span>
        </h2>

        <p className="text-xs sm:text-base md:text-lg font-subheading text-[#e8decb] tracking-[0.15em] sm:tracking-[0.2em] uppercase max-w-xl mx-auto mb-8 sm:mb-12 font-light">
          We invite you to schedule a confidential dialogue with our Senior Scenographers.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <MagneticButton strength={0.42}>
            <button
              onClick={onPlanEvent}
              className="w-full sm:w-auto group px-7 sm:px-9 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#aa7c11] text-[#0a0809] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>PLAN YOUR EVENT →</span>
            </button>
          </MagneticButton>

          <MagneticButton strength={0.35}>
            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto px-7 sm:px-8 py-4 sm:py-5 rounded-full border border-[#d4af37]/60 bg-[#2b0813]/80 hover:bg-[#3d0c1b] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center"
            >
              <span>EXPLORE OUR WORK</span>
            </button>
          </MagneticButton>

          <MagneticButton strength={0.35}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 sm:py-5 rounded-full bg-emerald-600/30 hover:bg-emerald-600 border border-emerald-500/50 text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Floating Bottom Quick Contacts */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-10 border-t border-[#d4af37]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-400">
        <div className="flex items-center gap-6">
          <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{BRAND_INFO.phone}</span>
          </a>
          <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{BRAND_INFO.email}</span>
          </a>
        </div>
        <div className="text-neutral-500 tracking-wider">
          New Delhi · Udaipur · Jaipur · Dubai
        </div>
      </div>
    </section>
  );
};
