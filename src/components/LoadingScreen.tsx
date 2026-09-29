import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const mandalaRef = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Auto enter once 100% is reached
          setTimeout(() => {
            handleEnter();
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 25);

    // Hard fallback safety timer to ensure screen is never stuck
    const safetyTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimer);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate mandala subtly
      if (mandalaRef.current) {
        gsap.to(mandalaRef.current, {
          rotation: 360,
          duration: 35,
          repeat: -1,
          ease: 'none',
        });
      }

      // Staggered reveal of logo elements
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.loader-motif',
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 0.35, duration: 1.2 }
      )
      .fromTo(
        '.loader-title-letter',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.loader-subtext',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 0.8, duration: 0.7 },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    if (!containerRef.current) {
      onComplete();
      return;
    }

    gsap.to(containerRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: 'power4.inOut',
      onComplete: () => {
        onComplete();
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#0a0809] flex flex-col items-center justify-between p-8 sm:p-12 overflow-hidden select-none"
    >
      {/* Background Indian ornamental mandala motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <svg
          ref={mandalaRef}
          viewBox="0 0 600 600"
          className="loader-motif w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] text-[#d4af37] opacity-25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Sacred geometry petals & rings */}
          <circle cx="300" cy="300" r="280" strokeDasharray="4 6" opacity="0.4" />
          <circle cx="300" cy="300" r="240" opacity="0.3" />
          <circle cx="300" cy="300" r="180" strokeDasharray="8 8" opacity="0.5" />
          <circle cx="300" cy="300" r="120" opacity="0.6" />
          <circle cx="300" cy="300" r="60" opacity="0.8" />
          {/* 16 radiating petal arches */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <g key={i} transform={`rotate(${angle} 300 300)`}>
                <path
                  d="M 300 120 C 320 80, 320 60, 300 40 C 280 60, 280 80, 300 120 Z"
                  stroke="currentColor"
                  fill="none"
                />
                <circle cx="300" cy="40" r="3" fill="currentColor" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Top Tagline with Skip Button */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs tracking-widest uppercase text-[#d4af37]/80 font-serif-luxury">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          <span>Haute Celebrations Atelier</span>
        </div>
        <button
          onClick={onComplete}
          className="px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/20 hover:bg-[#d4af37] text-white hover:text-black transition-colors font-sans text-[11px] font-bold tracking-wider cursor-pointer"
        >
          SKIP TO SITE →
        </button>
      </div>

      {/* Central Brand Reveal */}
      <div ref={logoRef} className="relative z-10 text-center my-auto flex flex-col items-center">
        {/* Royal Crest Icon */}
        <div className="w-16 h-16 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-6 bg-[#d4af37]/5 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
          <Sparkles className="w-6 h-6 text-[#d4af37]" />
        </div>

        {/* Brand Letters */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-brand text-[#fbf8f2] tracking-[0.3em] font-medium mb-4 flex items-center justify-center">
          {'VILĀSA'.split('').map((char, index) => (
            <span key={index} className="loader-title-letter inline-block">
              {char}
            </span>
          ))}
        </h1>

        <p className="loader-subtext text-xs sm:text-sm font-subheading tracking-[0.25em] text-[#d4af37] uppercase max-w-md mx-auto mb-2 italic">
          Atelier of Royal Celebrations & Weddings
        </p>

        <p className="loader-subtext text-[11px] font-sans tracking-widest text-neutral-400 uppercase">
          New Delhi · Udaipur · Jaipur · Dubai
        </p>
      </div>

      {/* Bottom Experience Controls */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#d4af37]/15">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 text-xs font-sans text-neutral-400">
          <div className="w-32 h-[2px] bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#d4af37] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="tabular-nums font-mono text-[#d4af37]">{progress}%</span>
        </div>

        {/* Enter Experience Button */}
        <button
          onClick={handleEnter}
          className="group flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/10 hover:bg-[#d4af37] text-[#fbf8f2] hover:text-[#0a0809] transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-semibold">
            {progress < 100 ? 'Enter Atelier' : 'Begin Experience'}
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
