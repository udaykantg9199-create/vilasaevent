import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicTransitionOverlayProps {
  isTransitioning: boolean;
  destinationTitle: string;
}

export const CinematicTransitionOverlay: React.FC<CinematicTransitionOverlayProps> = ({
  isTransitioning,
  destinationTitle,
}) => {
  const brandName = 'VILĀSA';
  const destChars = Array.from(destinationTitle || 'Haute Celebrations');

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key="cinematic-overlay-wrapper"
          className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Layer 1: Dark Burgundy Background Silk Curtain */}
          <motion.div
            className="absolute inset-0 bg-[#0c0307]"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.65,
              ease: [0.77, 0, 0.175, 1],
            }}
          />

          {/* Layer 2: Wine / Deep Gold Royal Sheen Layer with Curved Edge */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#240610] via-[#16040b] to-[#0a0809] border-y border-[#d4af37]/30"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{
              duration: 0.65,
              delay: 0.06,
              ease: [0.77, 0, 0.175, 1],
            }}
          />

          {/* Decorative Gold Radial Glow */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Central Royal Brand Mark & Destination Announcer */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{
              duration: 0.45,
              delay: 0.15,
              ease: 'easeOut',
            }}
          >
            {/* Spinning Sacred Mandala with Monogram */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-[#d4af37]/40 flex items-center justify-center mb-5 relative shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >
              <div className="absolute inset-2 rounded-full border border-dashed border-[#d4af37]/30" />
              <span className="font-serif-luxury text-2xl font-bold text-[#d4af37]">V</span>
            </motion.div>

            {/* Brand Title with Split-by-Character Stagger & Blur */}
            <h2 className="font-brand text-3xl sm:text-4xl text-[#fbf8f2] tracking-[0.3em] font-semibold mb-2 flex items-center justify-center">
              {Array.from(brandName).map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.18 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h2>

            {/* Destination Subtitle with Character Stagger */}
            <motion.div
              className="flex items-center gap-2 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] text-[#d4af37] uppercase font-bold flex flex-wrap justify-center">
                {destChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: 'blur(6px)', y: 8 }}
                    animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.28 + i * 0.015,
                      ease: 'easeOut',
                    }}
                    className="inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            </motion.div>

            {/* Subtle Royal Accent Line */}
            <motion.div
              className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
