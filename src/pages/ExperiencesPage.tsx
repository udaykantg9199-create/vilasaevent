import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/luxuryEventData';
import { SignatureExperience } from '../types/luxuryEvent';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { CinematicHeading } from '../components/CinematicHeading';

interface ExperiencesPageProps {
  onSelectExperience: (exp: SignatureExperience) => void;
  onPlanEvent: () => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({
  onSelectExperience,
  onPlanEvent,
}) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#2b0813]/70 text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Bespoke Ceremonials & Sacred Rituals</span>
        </div>
        <CinematicHeading
          text="SIGNATURE\nMOMENTS."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="MOMENTS"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "Each ceremonial ritual has its own sacred frequency. We choreograph every beat to leave hearts standing still."
        </p>
      </motion.div>

      {/* 8 Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {EXPERIENCES_DATA.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
          >
            <TiltCard
              onClick={() => onSelectExperience(exp)}
              className="h-full rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#16050e] flex flex-col justify-between shadow-2xl cursor-pointer group hover:border-[#d4af37]/75 transition-all duration-500"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16050e] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-sans tracking-widest text-[#d4af37] uppercase font-bold">
                    Ritual 0{index + 1}
                  </span>
                </div>

                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                    {exp.tagline}
                  </span>
                  <h3 className="font-serif-luxury text-2xl text-white font-medium mb-3 group-hover:text-[#fbf0ce] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6 font-light">
                    {exp.description}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                <div>
                  <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">Atmosphere</span>
                  <span className="text-white font-semibold">{exp.atmosphere}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Plan Event CTA */}
      <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#21060f] to-[#0c0307] border border-[#d4af37]/40 text-center flex flex-col items-center shadow-2xl">
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium mb-4">
          Ready to Craft Your Family's Grand Entry?
        </h2>
        <p className="text-xs sm:text-base text-neutral-300 font-sans max-w-xl mx-auto mb-8 font-light">
          Let our creative scenographers map your three-day timeline with unforgettable crescendos.
        </p>
        <MagneticButton>
          <button
            onClick={onPlanEvent}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer flex items-center gap-2"
          >
            <span>Begin Planning Your Celebration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </MagneticButton>
      </div>
    </div>
  );
};
