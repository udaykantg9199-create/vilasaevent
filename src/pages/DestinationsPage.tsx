import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Calendar, Castle, Sparkle, ArrowRight } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/luxuryEventData';
import { DestinationItem } from '../types/luxuryEvent';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { CinematicHeading } from '../components/CinematicHeading';

interface DestinationsPageProps {
  onPlanEvent: () => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onPlanEvent }) => {
  const [activeDestination, setActiveDestination] = useState<DestinationItem>(DESTINATIONS_DATA[0]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#2b0813]/70 text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Palatial Havens & Coastal Retreats</span>
        </div>
        <CinematicHeading
          text="DESTINATION\nWEDDINGS."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="WEDDINGS"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "From Rajasthan's legendary water palaces to sun-drenched Arabian coastlines, we transform the world's most breathtaking estates."
        </p>
      </motion.div>

      {/* Destination Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {DESTINATIONS_DATA.map((dest) => {
          const isSelected = activeDestination.id === dest.id;
          return (
            <button
              key={dest.id}
              onClick={() => setActiveDestination(dest)}
              className={`px-6 py-3 rounded-full font-serif-luxury text-sm sm:text-base font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-[#180610] text-neutral-400 hover:text-white border border-[#d4af37]/25 hover:border-[#d4af37]/60'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'fill-current' : 'text-[#d4af37]'}`} />
              <span>{dest.name}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Destination Hero Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15060e] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-12 shadow-2xl mb-24">
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase font-bold">
            <span>{activeDestination.region}</span>
            <span>•</span>
            <span className="text-neutral-300">Best Season: {activeDestination.bestMonths}</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl font-medium text-white">
            {activeDestination.name}
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed font-light">
            {activeDestination.tagline}
          </p>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-[11px] font-sans tracking-widest text-[#d4af37] uppercase font-bold mb-2 flex items-center gap-2">
                <Castle className="w-3.5 h-3.5" />
                <span>Signature Heritage Venues</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {activeDestination.keyPalaces.map((v, i) => (
                  <span
                    key={i}
                    className="text-xs font-sans text-neutral-200 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-sans tracking-widest text-[#d4af37] uppercase font-bold mb-1 flex items-center gap-2">
                <Sparkle className="w-3.5 h-3.5" />
                <span>Atmospheric Character</span>
              </span>
              <p className="text-xs text-neutral-400 font-sans">
                {activeDestination.vibe}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <MagneticButton>
              <button
                onClick={onPlanEvent}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer flex items-center gap-2"
              >
                <span>Plan Celebration in {activeDestination.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-6">
          <TiltCard className="rounded-3xl overflow-hidden border border-[#d4af37]/35 aspect-[4/3] shadow-2xl relative">
            <img
              src={activeDestination.image}
              alt={activeDestination.name}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-sans tracking-widest text-[#d4af37] uppercase font-bold block mb-1">
                Atelier Location Portfolio
              </span>
              <h4 className="font-serif-luxury text-2xl text-white font-medium">
                {activeDestination.name} Palatial Experience
              </h4>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
};
