import React, { useState, useEffect } from 'react';
import { Ticket, Sparkles, ChevronUp } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

interface FloatingTicketBarProps {
  onOpenTickets: () => void;
}

export const FloatingTicketBar: React.FC<FloatingTicketBarProps> = ({ onOpenTickets }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after hero section (500px)
      setVisible(window.scrollY > 550);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md w-full animate-slide-up">
      <div className="bg-[#151928]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff5e36] to-[#ff2d55] flex items-center justify-center text-white shrink-0 shadow-lg">
            <Ticket className="w-5 h-5" />
          </div>
          <div className="truncate">
            <div className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
              <span>Horn OK Please Pass</span>
              <span className="text-[10px] text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded">
                From ₹249
              </span>
            </div>
            <div className="text-[11px] text-neutral-400 truncate">
              {FESTIVAL_INFO.dates} · JLN Stadium
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenTickets}
            className="px-4 py-2 bg-gradient-to-r from-[#ff5e36] to-[#ff2d55] text-white text-xs font-extrabold rounded-xl shadow-md hover:brightness-110 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            Book Passes
          </button>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
            title="Scroll to Top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
