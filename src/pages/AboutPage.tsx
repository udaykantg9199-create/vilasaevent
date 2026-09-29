import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, ShieldCheck, Compass, Award, Users, Gem, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { CinematicHeading } from '../components/CinematicHeading';

interface AboutPageProps {
  onPlanEvent: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPlanEvent }) => {
  const milestones = [
    {
      year: '2015',
      title: 'Atelier Inception in New Delhi',
      desc: 'Founded with a singular mission: to liberate royal Indian celebrations from boilerplate event decor into authentic architectural art.',
    },
    {
      year: '2018',
      title: 'First Palace Fort Buyout',
      desc: 'Orchestrated the complete 4-day privatization of a 16th-century fortress in Rajasthan for a 900-guest industrialist union.',
    },
    {
      year: '2021',
      title: 'International Middle East Desk',
      desc: 'Inaugurated our private liaison suites in Dubai Design District (d3), managing cross-border celebrations in Emirates and Europe.',
    },
    {
      year: '2025',
      title: 'Global Scenography Award',
      desc: 'Recognized as India’s foremost haute scenography atelier, completing over 250 bespoke palatial weddings with 100% discretion.',
    },
  ];

  const pillars = [
    {
      icon: Crown,
      title: 'Royal Scenography',
      desc: 'We construct monumental temporary architectures, custom mirror pavilions, and botanical installations designed specifically for your ceremonial heritage.',
    },
    {
      icon: ShieldCheck,
      title: 'Discreet Protocol',
      desc: 'Strict non-disclosure agreements, private airspace and helipad charters, and dedicated security coordination for high-profile patrons.',
    },
    {
      icon: Gem,
      title: 'Artisanal Curations',
      desc: 'From Amsterdam-imported tuberose to Varanasi hand-loomed bridal drapes, every element is bespoke to your family crest.',
    },
    {
      icon: Compass,
      title: 'Global Logistics',
      desc: 'Flawless execution across fortresses, private islands, desert dune oases, and luxury metropolitan ballrooms across 14 countries.',
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#2b0813]/70 text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>The Atelier Philosophy</span>
        </div>
        <CinematicHeading
          text="MORE THAN EVENTS.\nWE CREATE LEGACIES."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="LEGACIES"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "A wedding is the sovereign crowning of a new dynasty—an emotional tapestry woven from ancient traditions and contemporary high design."
        </p>
      </motion.div>

      {/* Featured Photo & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center mb-24 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6 text-neutral-300 font-sans leading-relaxed text-sm sm:text-base font-light"
        >
          <div className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold">
            Curatorial Heritage & Soul
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium">
            Where Heritage Royalty Meets Modern Haute Design
          </h2>
          <p>
            Established over a decade ago in New Delhi’s historic Sundar Nagar enclave,{' '}
            <strong className="text-white font-medium">VILĀSA</strong> was founded on an unapologetic belief: Indian weddings deserve the aesthetic rigor of high haute couture and the precision engineering of a stadium concert.
          </p>
          <p>
            We reject the templated banquet hall and the repetitive decor catalogue. Every single celebration we undertake is an architectural commission, conceived from blank vellum blueprints and sculpted in collaboration with international floral artists, master lighting programmers, and culinary visionaries.
          </p>
          <p>
            Whether coordinating 21 Marwari stallions through an illuminated palace gateway or chartering seaplanes across the Arabian Gulf, our invisible presence ensures your family lives purely in the emotion of the sacred moment.
          </p>

          <div className="pt-4">
            <MagneticButton>
              <button
                onClick={onPlanEvent}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer flex items-center gap-2"
              >
                <span>Initiate Private Dialogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6"
        >
          <TiltCard className="rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-2xl group">
            <div className="aspect-[4/5] relative">
              <img
                src="/images/wedding_stage_floral_decor_1790667523080.jpg"
                alt="Vilāsa Floral Scenography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                  Private Scenography
                </span>
                <h4 className="font-serif-luxury text-2xl text-white font-medium">
                  Jaipur City Palace Mandap
                </h4>
                <p className="text-xs text-neutral-300 font-sans mt-1">
                  Engineered with 18,000 fresh white blooms, velvet draping, and mirrored reflections.
                </p>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* 4 Pillars of Excellence */}
      <div className="mb-24 sm:mb-32">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-2">
            The Atelier Standard
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium">
            Four Pillars of Distinction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-[#18050e] border border-[#d4af37]/25 shadow-xl hover:border-[#d4af37]/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl text-white font-medium mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Historical Milestones */}
      <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#1d0611] to-[#0c0307] border border-[#d4af37]/35 shadow-2xl">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase font-bold block mb-2">
            Decade of Mastery
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium">
            The Evolution of VILĀSA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#d4af37]/20">
          {milestones.map((m, idx) => (
            <div key={m.year} className={`${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-gold-gradient block mb-2">
                {m.year}
              </span>
              <h4 className="font-serif-luxury text-lg text-white font-medium mb-2">
                {m.title}
              </h4>
              <p className="text-xs text-neutral-400 font-sans font-light leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
