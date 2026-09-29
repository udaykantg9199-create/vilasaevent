import React, { useRef } from 'react';
import gsap from 'gsap';
import { Utensils, Music2, ShoppingBag, Sparkles, ArrowUpRight } from 'lucide-react';

interface HighlightsBentoProps {
  onSelectCategory: (category: string) => void;
  onOpenTickets: () => void;
}

export const HighlightsBento: React.FC<HighlightsBentoProps> = ({
  onSelectCategory,
  onOpenTickets,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = document.getElementById(cardId);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotationY: x * 0.04,
      rotationX: -y * 0.04,
      transformPerspective: 1000,
      ease: 'power1.out',
      duration: 0.3,
    });
  };

  const handleCardMouseLeave = (cardId: string) => {
    const card = document.getElementById(cardId);
    if (!card) return;
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      ease: 'power2.out',
      duration: 0.5,
    });
  };

  return (
    <section ref={containerRef} className="py-20 relative bg-[#090b10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff5e36] uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Everything Happening At HOP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Four Worlds In <span className="bg-gradient-to-r from-amber-400 to-[#ff385c] bg-clip-text text-transparent">One Festival</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-neutral-400 max-w-md">
            Whether you are here for authentic Old Delhi kebabs, chart-topping live concerts,
            or vintage thrift shopping, there is a vibe crafted for you.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 150+ Culinary Popups (Large col-span-7) */}
          <div
            id="bento-card-1"
            onMouseMove={(e) => handleCardMouseMove(e, 'bento-card-1')}
            onMouseLeave={() => handleCardMouseLeave('bento-card-1')}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden border border-white/10 bg-[#12151e] p-7 flex flex-col justify-between min-h-[380px] hover:border-amber-400/40 transition-colors shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/food_truck_delicacies_1790667127584.jpg"
                alt="150+ Food Stalls"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <Utensils className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <span>150+ Stalls</span>
                  <span>·</span>
                  <span>30 Food Trucks</span>
                  <span>·</span>
                  <span>Global Cuisines</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
                150+ Handpicked Culinary Stalls
              </h3>
              <p className="text-sm text-neutral-300 mb-5 max-w-lg leading-relaxed">
                From sizzling Mughlai tikkas and Old Delhi chaat to artisanal sourdough pizzas,
                fluffy Korean baos, and Nutella-drizzled churros.
              </p>
              <a
                href="#food"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform"
              >
                <span>Browse All Food Categories</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: 2 Live Music Stages (col-span-5) */}
          <div
            id="bento-card-2"
            onMouseMove={(e) => handleCardMouseMove(e, 'bento-card-2')}
            onMouseLeave={() => handleCardMouseLeave('bento-card-2')}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden border border-white/10 bg-[#12151e] p-7 flex flex-col justify-between min-h-[380px] hover:border-[#ff2d55]/40 transition-colors shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/festival_live_stage_1790667141704.jpg"
                alt="Live Concert Stages"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#ff2d55]/20 border border-[#ff2d55]/40 flex items-center justify-center text-[#ff2d55]">
                  <Music2 className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <span>Main Arena</span>
                  <span>·</span>
                  <span>Acoustic Stage</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 group-hover:text-[#ff5e36] transition-colors">
                50+ Live Indie & Bollywood Acts
              </h3>
              <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                Headline acts including Bismil Ki Mehfil, When Chai Met Toast, Parmish Verma,
                plus acoustic sunset singer-songwriters.
              </p>
              <a
                href="#lineup"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#ff5e36] group-hover:translate-x-1 transition-transform"
              >
                <span>View Full 3-Day Schedule</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 3: Quirk Bazaar (col-span-5) */}
          <div
            id="bento-card-3"
            onMouseMove={(e) => handleCardMouseMove(e, 'bento-card-3')}
            onMouseLeave={() => handleCardMouseLeave('bento-card-3')}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden border border-white/10 bg-[#12151e] p-7 flex flex-col justify-between min-h-[340px] hover:border-emerald-400/40 transition-colors shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <img
                src="/src/assets/images/quirk_bazaar_carnival_1790667157582.jpg"
                alt="Quirk Bazaar Shopping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151e] via-[#12151e]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <span>50+ Homegrown Brands</span>
                  <span>·</span>
                  <span>Thrift & Streetwear</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-2xl font-black font-display text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Quirk Bazaar Flea & Thrift
              </h3>
              <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                Discover bohemian jewelry, oversized graphic streetwear, custom sneakers,
                hand-poured scents, and funky accessories.
              </p>
              <a
                href="#bazaar"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Artisan Brands</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 4: Carnival Rides & Beer Gardens (col-span-7) */}
          <div
            id="bento-card-4"
            onMouseMove={(e) => handleCardMouseMove(e, 'bento-card-4')}
            onMouseLeave={() => handleCardMouseLeave('bento-card-4')}
            className="md:col-span-7 group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#12151e] via-[#191d2a] to-[#12151e] p-7 flex flex-col justify-between min-h-[340px] hover:border-purple-400/40 transition-colors shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
                  <span>Ferris Wheel</span>
                  <span>·</span>
                  <span>Bull Rodeo</span>
                  <span>·</span>
                  <span>Cocktail Garden</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white mb-2 group-hover:text-purple-300 transition-colors">
                Carnival Thrills & Chilled Brews
              </h3>
              <p className="text-sm text-neutral-300 mb-5 max-w-lg leading-relaxed">
                Take in breathtaking stadium skyline views from the glowing 50ft Ferris Wheel,
                challenge friends to mechanical bull rodeo, and unwind at our open-air craft cocktail lawn.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#map"
                  className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Interactive Venue Map</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenTickets}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Book Experience Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
