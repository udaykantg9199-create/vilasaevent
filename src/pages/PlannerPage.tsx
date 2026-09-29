import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { InteractiveEventPlanner } from '../components/InteractiveEventPlanner';
import { CinematicHeading } from '../components/CinematicHeading';

export const PlannerPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#2b0813]/70 text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Curatorial Blueprint Engine</span>
          </div>
          <CinematicHeading
            text="PLAN YOUR\nEXPERIENCE."
            as="h1"
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-4"
            highlightText="EXPERIENCE"
            delay={0.12}
            stagger={0.022}
          />
          <p className="font-subheading text-base sm:text-xl text-[#e8decb] italic max-w-xl mx-auto font-light">
            Select your exact celebration modules to sculpt an initial architectural dossier.
          </p>
        </motion.div>
      </div>

      <InteractiveEventPlanner />
    </div>
  );
};
