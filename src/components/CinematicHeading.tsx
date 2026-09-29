import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CinematicHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  stagger?: number;
  highlightText?: string;
  highlightClassName?: string;
  subHighlightText?: string;
  subHighlightClassName?: string;
}

export const CinematicHeading: React.FC<CinematicHeadingProps> = ({
  text,
  as: Component = 'h1',
  className = '',
  delay = 0.15,
  stagger = 0.022,
  highlightText,
  highlightClassName = 'text-gold-gradient italic font-normal',
  subHighlightText,
  subHighlightClassName = '',
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: 'blur(10px)',
      scale: 1.06,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Split text by lines first (if text has \n)
  const lines = text.split('\n');

  return (
    <Component className={className}>
      <motion.span
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, lineIdx) => {
          const words = line.trim().split(/\s+/);

          return (
            <span key={lineIdx} className="block">
              {words.map((word, wordIdx) => {
                // Check if this word matches highlightText or subHighlightText
                const cleanWord = word.replace(/[^a-zA-ZĀā0-9]/g, '');
                const isHighlight =
                  highlightText &&
                  (word.toLowerCase().includes(highlightText.toLowerCase()) ||
                    highlightText.toLowerCase().includes(cleanWord.toLowerCase()));

                const isSubHighlight =
                  subHighlightText &&
                  (word.toLowerCase().includes(subHighlightText.toLowerCase()) ||
                    subHighlightText.toLowerCase().includes(cleanWord.toLowerCase()));

                const appliedClass = isHighlight
                  ? highlightClassName
                  : isSubHighlight
                  ? subHighlightClassName
                  : '';

                return (
                  <span
                    key={`${wordIdx}-${word}`}
                    className={`inline-block whitespace-nowrap mr-[0.25em] ${appliedClass}`}
                  >
                    {Array.from(word).map((char, charIdx) => (
                      <motion.span
                        key={`${charIdx}-${char}`}
                        variants={charVariants}
                        className="inline-block will-change-[transform,opacity,filter]"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
};
