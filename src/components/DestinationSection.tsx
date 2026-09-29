import React, { useState } from 'react';
import { MapPin, Calendar, Castle, ArrowRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/luxuryEventData';
import { DestinationItem } from '../types/luxuryEvent';

interface DestinationSectionProps {
  onPlanEvent: () => void;
}

export const DestinationSection: React.FC<DestinationSectionProps> = ({ onPlanEvent }) => {
  const [activeDestination, setActiveDestination] = useState<DestinationItem>(DESTINATIONS_DATA[0]);

  return (
    <section id="destinations" className="py-20 sm:py-32 relative bg-[#0a0809] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#2b0813]/60 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4">
            <span>Global Palaces & Coastal Sanctuaries</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05]">
            TAKE YOUR CELEBRATION <br />
            <span className="text-gold-gradient italic font-normal">SOMEWHERE UNFORGETTABLE.</span>
          </h2>
        </div>

        {/* Map-Inspired Interactive Selector Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {DESTINATIONS_DATA.map((dest) => {
            const isSelected = activeDestination.id === dest.id;

            return (
              <button
                key={dest.id}
                onClick={() => setActiveDestination(dest)}
                className={`px-5 py-3 rounded-full font-serif-luxury text-sm sm:text-base font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[#180610] text-neutral-400 hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/50'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'fill-current' : 'text-[#d4af37]'}`} />
                <span>{dest.name}</span>
              </button>
            );
          })}
        </div>

        {/* Focused Destination Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15060e] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase font-bold">
              <span>{activeDestination.region}</span>
              <span>•</span>
              <span className="text-neutral-400">{activeDestination.bestMonths}</span>
            </div>

            <h3 className="font-serif-luxury text-4xl sm:text-5xl font-medium text-white">
              {activeDestination.name}
            </h3>

            <p className="font-subheading text-lg sm:text-xl text-[#e8decb] italic font-light">
              "{activeDestination.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed">
              {activeDestination.vibe}
            </p>

            {/* Key Palace Partnerships */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-sans uppercase tracking-wider text-neutral-400 block font-semibold">
                Privileged Palace & Resort Partnerships:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeDestination.keyPalaces.map((palace, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-sans text-neutral-200 flex items-center gap-2"
                  >
                    <Castle className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="truncate">{palace}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onPlanEvent}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Plan A Celebration In {activeDestination.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-xl">
              <img
                src={activeDestination.image}
                alt={activeDestination.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-sans tracking-widest text-[#d4af37] uppercase font-bold block mb-1">
                  Heritage Grounds
                </span>
                <h4 className="font-serif-luxury text-2xl text-white">
                  Exclusive Estate Buyouts & Tarmac Protocols
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
