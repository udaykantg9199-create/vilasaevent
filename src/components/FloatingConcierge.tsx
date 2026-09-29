import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';

export const FloatingConcierge: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Vilāsa Atelier, I would like to connect with a wedding specialist.'
  )}`;

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-black/40">
        <div
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#f7e7b4] to-[#d4af37] transition-all duration-100 ease-out shadow-[0_0_12px_#d4af37]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Concierge Action Buttons */}
      {visible && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#1e0711] border border-[#d4af37]/70 text-white shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 cursor-pointer"
            title="Chat with Private Concierge on WhatsApp"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:bg-black group-hover:text-[#d4af37] transition-colors">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <span className="text-xs font-sans tracking-wider uppercase font-bold pr-1 hidden sm:inline">
              Concierge WhatsApp
            </span>
          </a>
        </div>
      )}
    </>
  );
};
