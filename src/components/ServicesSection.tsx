import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/luxuryEventData';
import { ServiceItem } from '../types/luxuryEvent';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeHoverId, setActiveHoverId] = useState<string>('01');

  return (
    <section id="services" className="py-20 sm:py-32 relative bg-[#0a0809] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Entrance */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20"
        >
          <div>
            <motion.div
              variants={headerItemVariants}
              className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-3 sm:mb-4"
            >
              <span>Full-Spectrum Production</span>
            </motion.div>
            <motion.h2
              variants={headerItemVariants}
              className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05]"
            >
              Atelier <span className="text-gold-gradient italic font-normal">Services</span>
            </motion.h2>
          </div>
          <motion.p
            variants={headerItemVariants}
            className="mt-4 md:mt-0 text-neutral-400 font-sans text-xs sm:text-base max-w-md font-light leading-relaxed"
          >
            Every celebration requires a symphony of distinct disciplines. We engineer and govern
            each facet in-house to protect the integrity of your vision.
          </motion.p>
        </motion.div>

        {/* Responsive Interactive Services List with Staggered Children */}
        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="divide-y divide-[#d4af37]/15 border-y border-[#d4af37]/15"
        >
          {SERVICES_DATA.map((service) => {
            const isActive = activeHoverId === service.number;

            return (
              <motion.div
                key={service.number}
                variants={listItemVariants}
                onMouseEnter={() => setActiveHoverId(service.number)}
                onClick={() => {
                  setActiveHoverId(service.number);
                  onSelectService(service);
                }}
                className={`group relative py-6 sm:py-10 transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive ? 'bg-[#1c0610]/40' : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Desktop hover preview image */}
                {isActive && (
                  <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80 h-48 rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl pointer-events-none z-20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[10px] font-sans tracking-widest text-[#d4af37] uppercase font-bold">
                      {service.subtitle}
                    </span>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 relative z-10 px-2 sm:px-6">
                  {/* Left: Number and Title */}
                  <div className="flex items-start sm:items-baseline gap-4 sm:gap-10">
                    <span
                      className={`font-serif-luxury text-xl sm:text-4xl tabular-nums font-bold transition-all duration-300 ${
                        isActive ? 'text-[#d4af37] sm:translate-x-2' : 'text-neutral-600'
                      }`}
                    >
                      {service.number}
                    </span>

                    <div>
                      <h3
                        className={`font-serif-luxury text-xl sm:text-3xl md:text-4xl font-medium tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <span className="block text-[11px] sm:text-xs font-sans tracking-[0.15em] sm:tracking-[0.2em] text-[#d4af37] uppercase font-light mt-1">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Right: Description & Action Button */}
                  <div className="lg:max-w-md lg:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'border-[#d4af37] bg-[#d4af37] text-black scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                          : 'border-white/20 text-neutral-400 group-hover:border-white/40 group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* Deliverables tags on active state for all screens */}
                {isActive && (
                  <div className="mt-4 px-2 sm:px-6 pt-3 border-t border-[#d4af37]/15 flex flex-wrap gap-2">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-sans text-neutral-300 bg-[#2b0813]/60 px-3 py-1 rounded-full border border-[#d4af37]/25 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
