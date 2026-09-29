import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowRight, Play, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';
import { MagneticButton } from './MagneticButton';
import { CinematicHeading } from './CinematicHeading';

interface HeroProps {
  onExploreWork: () => void;
  onPlanEvent: () => void;
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onPlanEvent,
  onOpenShowreel,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle, non-blocking entrance animation that leaves all elements visible
      gsap.from('.hero-kicker', {
        y: -15,
        opacity: 0.2,
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.from('.hero-subtitle', {
        y: 15,
        opacity: 0.4,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out',
      });

      gsap.from('.hero-cta', {
        y: 10,
        opacity: 0.5,
        stagger: 0.08,
        duration: 0.7,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Desktop subtle mouse move parallax
      const handleMouseMove = (e: MouseEvent) => {
        if (!bgImageRef.current || window.innerWidth < 768) return;
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 15;
        const yPos = (clientY / window.innerHeight - 0.5) * 15;

        gsap.to(bgImageRef.current, {
          x: xPos,
          y: yPos,
          duration: 1.2,
          ease: 'power1.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Cinematic Fullscreen Background with Wine & Charcoal Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImageRef}
          src="/images/hero_luxury_indian_wedding_1790667508985.jpg"
          alt="Palatial Indian Wedding Twilight"
          className="w-full h-full object-cover object-center scale-105 filter brightness-105 contrast-105"
          loading="eager"
        />
        {/* Layered luxury color scrims with warm golden ambience */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#0a0809]/55 to-[#240610]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0809]/85 via-black/40 to-[#0a0809]/85" />
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />
      </div>

      {/* Floating Gold Sparkle Accents */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#d4af37] opacity-60 animate-ping" />
        <div className="absolute top-1/3 right-12 w-1.5 h-1.5 rounded-full bg-[#fbf0ce] opacity-50 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-[#d4af37] opacity-70 animate-bounce" />
      </div>

      {/* Top Heritage Kicker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full text-center sm:text-left mb-6 sm:mb-8 hero-kicker">
        <div className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#2b0813]/85 backdrop-blur-md text-[10px] sm:text-[11px] font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] uppercase shadow-lg">
          <span className="font-semibold">Atelier of Royal Celebrations</span>
          <span className="hidden sm:inline text-[#d4af37]/40">·</span>
          <span className="text-neutral-300">New Delhi · Udaipur · Jaipur · Dubai</span>
        </div>
      </div>

      {/* Centerpiece Headline Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto text-center sm:text-left">
        <CinematicHeading
          text={'WE CREATE\nMOMENTS\nTHAT STAY.'}
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] sm:leading-[0.95] mb-5 sm:mb-8"
          highlightText="MOMENTS"
          delay={0.2}
          stagger={0.025}
        />

        <p className="hero-subtitle text-xs sm:text-base md:text-lg lg:text-xl font-subheading tracking-[0.12em] sm:tracking-[0.2em] text-[#f0e6d6] uppercase max-w-2xl mb-7 sm:mb-10 leading-relaxed font-light mx-auto sm:mx-0">
          {BRAND_INFO.subtitle}
        </p>

        {/* Primary and Secondary CTAs - Fully Responsive for Mobile & Desktop with GSAP Magnetic Interaction */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto sm:mx-0">
          <MagneticButton strength={0.42}>
            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto hero-cta group px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#c59b27] to-[#aa7c11] text-[#0a0809] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_35px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>

          <MagneticButton strength={0.35}>
            <button
              onClick={onPlanEvent}
              className="w-full sm:w-auto hero-cta px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-[#d4af37]/70 bg-[#2b0813]/85 hover:bg-[#3d0c1b] text-[#fbf8f2] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:border-[#d4af37]"
            >
              <span>Plan Your Event</span>
            </button>
          </MagneticButton>

          <MagneticButton strength={0.3}>
            <button
              onClick={onOpenShowreel}
              className="w-full sm:w-auto hero-cta px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-neutral-200 hover:text-white font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
              <span>Watch Showreel</span>
            </button>
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Hero Bar with Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 sm:pt-8 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-sans tracking-widest uppercase">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping shrink-0" />
          <span className="text-[#e5c158] font-medium">Accepting 2026–2027 Wedding & Gala Commissions</span>
        </div>

        <a
          href="#about"
          className="flex items-center gap-2 text-[#d4af37] hover:text-[#f7e7b4] transition-colors py-1 cursor-pointer"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
