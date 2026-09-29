import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FESTIVAL_FAQS, FESTIVAL_INFO } from '../data/festivalData';

export const FestivalFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-[#090b10] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Essential Visitor Guide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-sm text-neutral-400">
            Everything you need to know about venue access, gates, tickets, timings, and festival etiquette.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FESTIVAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#121520] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400 bg-amber-400/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Metro Quick Tip Box */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-[#ff5e36]/10 via-[#ff2d55]/10 to-amber-500/10 border border-[#ff5e36]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#ff5e36] uppercase tracking-wider block mb-1">
              🚆 Recommended Transit Route
            </span>
            <h4 className="text-base font-bold text-white">
              Take Delhi Metro Violet Line directly to JLN Stadium Station
            </h4>
            <p className="text-xs text-neutral-300 mt-0.5">
              Take Exit Gate 2 of the metro station; festival entrance is literally 200 meters ahead!
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Jawaharlal+Nehru+Stadium+Delhi"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold whitespace-nowrap transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
