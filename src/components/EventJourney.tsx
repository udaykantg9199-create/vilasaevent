import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/luxuryEventData';

export const EventJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = JOURNEY_STEPS[activeStepIndex];

  return (
    <section id="journey" className="py-20 sm:py-32 relative bg-[#0f070b] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#2b0813]/60 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4">
            <span>The 5-Stage Orchestration</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05]">
            How We Shape <br />
            <span className="text-gold-gradient italic font-normal">Your Masterpiece</span>
          </h2>
        </div>

        {/* Sticky/Interactive Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 5 Stage Selectors */}
          <div className="lg:col-span-6 space-y-4">
            {JOURNEY_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? 'bg-[#220713] border-[#d4af37] shadow-[0_10px_30px_rgba(212,175,55,0.2)] translate-x-2'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
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
                    className={`font-serif-luxury text-2xl sm:text-3xl font-medium tracking-tight mb-2 ${
                      isActive ? 'text-white' : 'text-neutral-400'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-neutral-300 font-light leading-relaxed">
                    {step.description}
                  </p>

                  {isActive && (
                    <div className="mt-4 pt-3 border-t border-[#d4af37]/20 flex items-center gap-2 text-xs font-sans text-[#d4af37]">
                      <Check className="w-3.5 h-3.5" />
                      <span className="font-semibold uppercase tracking-wider text-[11px]">
                        Deliverable: {step.deliverable}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Stage Visual Showcase */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#d4af37]/40 shadow-2xl">
              <img
                src={currentStep.image}
                alt={currentStep.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                  Active Stage: 0{activeStepIndex + 1} / 05
                </span>
                <h4 className="font-serif-luxury text-3xl text-white font-medium mb-2">
                  {currentStep.title}: {currentStep.quote}
                </h4>
                <p className="text-xs font-sans text-neutral-300 font-light">
                  {currentStep.deliverable}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
