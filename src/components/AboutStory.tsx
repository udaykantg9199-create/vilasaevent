import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Crown, Compass, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';

gsap.registerPlugin(ScrollTrigger);

export const AboutStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of section title with fromTo so it's guaranteed visible
      gsap.fromTo(
        '.about-heading-line',
        { y: 30, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // Reveal large story image with clip-path
      if (imageRevealRef.current) {
        gsap.fromTo(
          imageRevealRef.current,
          { opacity: 0.8, scale: 0.98 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 relative bg-[#0f070b] border-t border-[#d4af37]/15 overflow-hidden"
    >
      {/* Subtle luxury background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#3d0c1b]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4 sm:mb-6">
          <span>The Atelier Philosophy</span>
        </div>

        {/* Oversized Editorial Heading */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] max-w-5xl mb-12 sm:mb-16">
          <span className="block about-heading-line">MORE THAN EVENTS.</span>
          <span className="block about-heading-line text-gold-gradient italic font-normal">
            WE CREATE EXPERIENCES.
          </span>
        </h2>

        {/* Editorial Story Layout: Text & Large Revealing Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Story Text */}
          <div className="lg:col-span-6 space-y-6 text-neutral-300 font-sans leading-relaxed text-sm sm:text-base font-light">
            <p className="text-lg sm:text-xl font-subheading text-[#e8decb] leading-relaxed font-normal italic">
              "We believe a wedding is not a calendar event—it is the ceremonial crowning of a new dynasty,
              an emotional tapestry woven from ancient traditions and contemporary high design."
            </p>

            <p>
              Founded over a decade ago in New Delhi, <strong className="text-white font-medium">Vilāsa</strong> has
              earned global repute as the premier Indian wedding atelier for royal dynasties, global industrialists,
              and discerning couples who reject the ordinary.
            </p>

            <p>
              Our philosophy pairs <strong className="text-[#d4af37] font-medium">haute scenography</strong> with
              invisible, uncompromising execution. From flying master florists from Amsterdam to privatizing
              500-year-old fort ramparts, every element is sculpted exclusively for your family legacy.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Crown className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Royal Heritage Protocols
                </h4>
                <p className="text-xs text-neutral-400">
                  Custom courtly welcomes, traditional brass ensembles, and historic site conservation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Discreet Confidentiality
                </h4>
                <p className="text-xs text-neutral-400">
                  Strict non-disclosure protocols and private airspace coordination for high-profile guests.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Slow-Revealing Image */}
          <div className="lg:col-span-6">
            <div
              ref={imageRevealRef}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group"
            >
              <img
                src="/images/wedding_stage_floral_decor_1790667523080.jpg"
                alt="Vilāsa Floral Scenography"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block mb-1">
                  Haute Scenography
                </span>
                <h4 className="font-serif-luxury text-2xl text-white font-medium">
                  Rambagh Palace Court Transformation
                </h4>
                <p className="text-xs text-neutral-300 font-sans mt-1">
                  12,000 strands of real mogra, antique brass chandeliers, and mirror reflection aisles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Section */}
        <div className="stats-container pt-16 border-t border-[#d4af37]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
            {BRAND_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-box p-6 rounded-2xl bg-[#1e0711]/60 border border-[#d4af37]/20 backdrop-blur-md"
              >
                <div className="font-serif-luxury text-4xl sm:text-6xl font-black text-gold-gradient mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-neutral-400 font-light">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
