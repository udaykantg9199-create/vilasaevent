import React from 'react';
import { Ticket, Check, Sparkles, Shield, Zap } from 'lucide-react';
import { TICKET_TIERS, FESTIVAL_INFO } from '../data/festivalData';
import { TicketTier } from '../types/festival';

interface TicketSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="py-24 relative bg-[#0c0e14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
            <Ticket className="w-3.5 h-3.5" />
            <span>Phase 1 Passes Live</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight mb-4">
            Grab Your Passes To <span className="bg-gradient-to-r from-amber-400 to-[#ff385c] bg-clip-text text-transparent">Happiness</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Passes include full grounds entry, concert stages access, carnival zone, and Quirk Bazaar.
            Prices increase as tiers sell out.
          </p>
        </div>

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TICKET_TIERS.map((tier) => {
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#201d2c] via-[#161726] to-[#12131e] border-2 border-amber-400 shadow-[0_15px_40px_rgba(255,199,0,0.2)]'
                    : 'bg-[#121520] border border-white/10 hover:border-white/20 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-black text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {tier.tagline}
                  </span>
                  <h3 className="text-xl font-black font-display text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-display text-white">
                      ₹{tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-xs text-neutral-500 line-through">
                        ₹{tier.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-neutral-400">/ pass</span>
                  </div>

                  {/* Perks list */}
                  <div className="space-y-2.5 mb-8">
                    {tier.perks.map((perk, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Stock Left */}
                  <div className="text-[11px] text-neutral-400 mb-3 text-center">
                    ⚡ Only <strong className="text-amber-300">{tier.stockLeft}</strong> passes left in this tier
                  </div>

                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:brightness-110 shadow-lg'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Entry Guarantees */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-neutral-400">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>100% Genuine RFID Wristbands at Gate 2</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Instant Digital SMS & WhatsApp Confirmation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Ticket className="w-4 h-4 text-[#ff5e36]" />
            <span>Children Under 8 Years Enter Free</span>
          </div>
        </div>
      </div>
    </section>
  );
};
