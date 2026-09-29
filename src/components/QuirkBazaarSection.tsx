import React from 'react';
import { ShoppingBag, Sparkles, Heart, Tag, ArrowRight } from 'lucide-react';
import { QUIRK_BRANDS } from '../data/festivalData';

interface QuirkBazaarProps {
  onOpenTickets: () => void;
}

export const QuirkBazaarSection: React.FC<QuirkBazaarProps> = ({ onOpenTickets }) => {
  return (
    <section id="bazaar" className="py-24 relative bg-[#090b10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-12 mb-16 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/quirk_bazaar_carnival_1790667157582.jpg"
              alt="Quirk Bazaar Shopping Street"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f15] via-[#0d0f15]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-xs font-bold text-amber-300 uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>50+ Homegrown Indie Labels</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight mb-4">
              Quirk Bazaar <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-[#ff385c] bg-clip-text text-transparent">& Flea Alley</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              Shop curated thrift streetwear, bohemian handcrafted jewelry, artisanal scented candles,
              hand-painted sneakers, festival glitter bars, and quirky statement art from across India.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTickets}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-extrabold rounded-xl text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Get Festival Pass</span>
              </button>
              <div className="flex items-center gap-2 text-xs text-neutral-300 pl-2">
                <span>Free Entry with all HOP Tickets</span>
                <span>·</span>
                <span>Cashless UPI Accepted</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUIRK_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group p-6 rounded-3xl bg-[#131622] border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="text-amber-400 font-semibold">{brand.category}</span>
                  <Tag className="w-3.5 h-3.5 text-neutral-500" />
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {brand.name}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {brand.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  Crowd Favorite Drop
                </span>
                <span className="text-xs font-bold text-neutral-200">
                  {brand.popularItem}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
