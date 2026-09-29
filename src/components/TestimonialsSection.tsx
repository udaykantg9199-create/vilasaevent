import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/luxuryEventData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-32 relative bg-[#0a0809] border-t border-[#d4af37]/15 overflow-hidden">
      {/* Background Dim Wedding Visual */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={testimonial.image}
          alt={testimonial.couple}
          className="w-full h-full object-cover filter blur-sm scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#0a0809]/80 to-[#0a0809]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#2b0813]/60 text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4">
            <span>Patron Testimonials</span>
          </div>
        </div>

        {/* Large Editorial Quote Card */}
        <div className="text-center">
          <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-[#d4af37]/40 mx-auto mb-6 sm:mb-8" />

          <blockquote className="font-serif-luxury text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#fbf8f2] leading-[1.3] mb-8 sm:mb-10 max-w-4xl mx-auto italic">
            "{testimonial.quote}"
          </blockquote>

          <div className="space-y-1 mb-10">
            <h4 className="font-serif-luxury text-xl sm:text-2xl font-medium text-[#d4af37]">
              {testimonial.couple}
            </h4>
            <div className="text-xs font-sans tracking-[0.2em] text-neutral-400 uppercase">
              {testimonial.celebrationType} · {testimonial.venue}, {testimonial.location} ({testimonial.date})
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] bg-white/5 hover:bg-[#d4af37]/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-[#d4af37]/30 hover:border-[#d4af37] bg-white/5 hover:bg-[#d4af37]/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
