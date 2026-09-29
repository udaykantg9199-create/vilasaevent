import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/luxuryEventData';
import { ServiceItem } from '../types/luxuryEvent';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { CinematicHeading } from '../components/CinematicHeading';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onPlanEvent: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
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
          <span>Full-Spectrum Production & Scenography</span>
        </div>
        <CinematicHeading
          text="THE ATELIER\nDISCIPLINES."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="DISCIPLINES"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "Every royal celebration is a tapestry of distinct artforms. We engineer and govern every facet in-house."
        </p>
      </motion.div>

      {/* Services Grid with 3D Tilt Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-24">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
          >
            <TiltCard
              onClick={() => onSelectService(service)}
              className="h-full rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#16050e] p-6 sm:p-8 flex flex-col justify-between shadow-2xl cursor-pointer group hover:border-[#d4af37]/75 transition-all duration-500"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16050e] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 font-serif-luxury text-xl font-bold text-[#d4af37] px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/30">
                    {service.number}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block">
                    {service.subtitle}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium group-hover:text-[#fbf0ce] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div>
                {/* Deliverables tags */}
                <div className="pt-4 border-t border-white/10 mb-6 flex flex-wrap gap-2">
                  {service.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-sans text-neutral-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-sans font-bold tracking-widest uppercase text-[#d4af37]">
                  <span>Explore Deliverables & Dossier</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#240610] via-[#15040a] to-[#0a0809] border border-[#d4af37]/40 text-center flex flex-col items-center justify-center shadow-2xl"
      >
        <span className="text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase font-bold mb-3">
          Custom Atelier Commissions
        </span>
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium mb-5">
          Require a Bespoke Multi-Discipline Package?
        </h2>
        <p className="text-xs sm:text-base text-neutral-300 font-sans max-w-xl mx-auto mb-8 font-light leading-relaxed">
          From 3-day fort buyouts in Udaipur to intimate beachside vows in Goa, our senior production team configures your exact technical and creative rider.
        </p>

        <MagneticButton>
          <button
            onClick={onPlanEvent}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer flex items-center gap-2"
          >
            <span>Launch Event Configurator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </MagneticButton>
      </motion.div>
    </div>
  );
};
