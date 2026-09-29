import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { EXPERIENCES_DATA } from '../data/luxuryEventData';
import { SignatureExperience } from '../types/luxuryEvent';

interface SignatureExperiencesProps {
  onSelectExperience: (exp: SignatureExperience) => void;
}

export const SignatureExperiences: React.FC<SignatureExperiencesProps> = ({
  onSelectExperience,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -420 : 420;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="experiences"
      className="py-20 sm:py-32 relative bg-[#0f070b] border-t border-[#d4af37]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-3 sm:mb-4">
              <span>Bespoke Ceremonials</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05]">
              DESIGNED AROUND <br />
              <span className="text-gold-gradient italic font-normal">YOUR MOMENTS.</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] bg-white/5 hover:bg-[#d4af37]/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] bg-white/5 hover:bg-[#d4af37]/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 px-4 sm:px-8 md:px-12 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {EXPERIENCES_DATA.map((exp, index) => (
          <div
            key={exp.id}
            onClick={() => onSelectExperience(exp)}
            className="snap-start shrink-0 w-[84vw] sm:w-[380px] md:w-[440px] max-w-[440px] group relative rounded-3xl overflow-hidden border border-[#d4af37]/25 bg-[#17050d] cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/60"
          >
            {/* Visual Header */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17050d] via-transparent to-transparent opacity-90" />

              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-sans tracking-widest text-[#d4af37] uppercase font-bold">
                0{index + 1} // Ritual
              </span>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 pt-2">
              <span className="text-[11px] font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                {exp.tagline}
              </span>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium mb-3 group-hover:text-[#fbf0ce] transition-colors">
                {exp.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-6 font-light line-clamp-3">
                {exp.description}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                <span className="text-neutral-400">Atmosphere:</span>
                <span className="text-white font-semibold">{exp.atmosphere}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
