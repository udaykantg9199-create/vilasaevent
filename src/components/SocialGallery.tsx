import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Instagram, Sparkles } from 'lucide-react';
import { SOCIAL_MOMENTS } from '../data/luxuryEventData';

export const SocialGallery: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const items = [...SOCIAL_MOMENTS, ...SOCIAL_MOMENTS];

  return (
    <section className="py-16 sm:py-24 bg-[#0a0809] border-t border-[#d4af37]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>Live From The Field</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-4xl text-white font-medium">
            Atelier Moments // @vilasa.atelier
          </h3>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-sans tracking-widest uppercase text-[#d4af37] hover:text-[#fbf0ce] font-bold"
        >
          Follow On Instagram →
        </a>
      </div>

      {/* Infinite Horizontal Running Marquee */}
      <div className="w-full overflow-hidden">
        <div ref={marqueeRef} className="flex gap-6 whitespace-nowrap w-max py-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="w-72 sm:w-80 group relative rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-[#16060f] shrink-0 shadow-xl cursor-pointer"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-sans tracking-wider text-[#d4af37] uppercase font-bold">
                    {item.type}
                  </span>
                  <Instagram className="w-4 h-4 text-white opacity-80" />
                </div>

                <div>
                  <span className="text-[10px] font-sans tracking-wider text-[#d4af37] uppercase font-semibold block mb-1">
                    {item.tag}
                  </span>
                  <p className="text-xs text-neutral-200 font-sans font-light leading-snug whitespace-normal line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
