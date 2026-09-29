import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, Clock, ShieldCheck, Palette, Music } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/luxuryEventData';
import { MagneticButton } from '../components/MagneticButton';
import { CinematicHeading } from '../components/CinematicHeading';

interface JourneyPageProps {
  onPlanEvent: () => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ onPlanEvent }) => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = JOURNEY_STEPS[activeStep];

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
          <span>The Sovereign Process</span>
        </div>
        <CinematicHeading
          text="THE 5-STAGE\nORCHESTRATION."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="ORCHESTRATION"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "From confidential family dialogues to the final fireworks salute, our orchestration is rigorous, poetic, and transparent."
        </p>
      </motion.div>

      {/* Interactive 5-Step Process */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
        {/* Step Selector List */}
        <div className="lg:col-span-5 space-y-4">
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#220713] border-[#d4af37] shadow-[0_10px_30px_rgba(212,175,55,0.25)] translate-x-2'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif-luxury text-sm font-bold tracking-widest ${
                      isActive ? 'text-[#d4af37]' : 'text-neutral-500'
                    }`}
                  >
                    STAGE {step.step}
                  </span>
                  <span className="text-xs font-sans italic text-[#e8decb]">
                    "{step.quote}"
                  </span>
                </div>
                <h3
                  className={`font-serif-luxury text-2xl font-medium tracking-tight mb-2 ${
                    isActive ? 'text-white' : 'text-neutral-400'
                  }`}
                >
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Active Stage Details & Visual Preview */}
        <div className="lg:col-span-7">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#18050e] border border-[#d4af37]/35 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-serif-luxury text-3xl sm:text-4xl text-[#d4af37] font-bold">
                STAGE {currentStep.step}
              </span>
              <span className="text-xs font-sans tracking-widest uppercase text-neutral-400">
                {currentStep.quote}
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium">
              {currentStep.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-sans font-light leading-relaxed">
              {currentStep.description}
            </p>

            <div className="p-4 rounded-xl bg-white/5 border border-[#d4af37]/25 text-xs text-neutral-300">
              <strong className="text-[#d4af37] block uppercase tracking-wider mb-1 font-sans">
                Stage Deliverables:
              </strong>
              <span>{currentStep.deliverable}</span>
            </div>

            {/* Stage Visual */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 shadow-lg">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-neutral-400 font-sans">
                Next Stage: {JOURNEY_STEPS[(activeStep + 1) % JOURNEY_STEPS.length].title}
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % JOURNEY_STEPS.length)}
                className="text-xs font-sans uppercase tracking-widest text-[#d4af37] font-bold hover:underline cursor-pointer"
              >
                Advance Stage →
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Plan Event CTA */}
      <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#21060f] to-[#0c0307] border border-[#d4af37]/40 text-center flex flex-col items-center shadow-2xl">
        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-medium mb-4">
          Begin Stage 01: Discover Your Vision
        </h2>
        <p className="text-xs sm:text-base text-neutral-300 font-sans max-w-xl mx-auto mb-8 font-light">
          Connect with our creative director in New Delhi or Dubai for an initial design consultation.
        </p>
        <MagneticButton>
          <button
            onClick={onPlanEvent}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer flex items-center gap-2"
          >
            <span>Commence Stage 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </MagneticButton>
      </div>
    </div>
  );
};
