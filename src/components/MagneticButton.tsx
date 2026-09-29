import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  innerStrength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.38,
  innerStrength = 0.52,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const content = contentRef.current;
    if (!button) return;

    // Check if device supports fine cursor pointer (disable on touchscreens)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Fast GSAP quickTo tweens for buttery smooth 60/120fps cursor tracking
    const xTo = gsap.quickTo(button, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(button, 'y', { duration: 0.5, ease: 'power3.out' });

    const contentXTo = content
      ? gsap.quickTo(content, 'x', { duration: 0.5, ease: 'power3.out' })
      : null;
    const contentYTo = content
      ? gsap.quickTo(content, 'y', { duration: 0.5, ease: 'power3.out' })
      : null;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();

      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      xTo(middleX * strength);
      yTo(middleY * strength);

      if (contentXTo && contentYTo) {
        contentXTo(middleX * innerStrength);
        contentYTo(middleY * innerStrength);
      }
    };

    const handleMouseLeave = () => {
      // Elastic tactile recoil snap-back
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1.15, 0.45)',
        overwrite: 'auto',
      });

      if (content) {
        gsap.to(content, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'elastic.out(1.15, 0.45)',
          overwrite: 'auto',
        });
      }
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(button);
      if (content) gsap.killTweensOf(content);
    };
  }, [strength, innerStrength]);

  return (
    <div
      ref={buttonRef}
      onClick={onClick}
      className={`inline-block transform-gpu will-change-transform ${className}`}
    >
      <div ref={contentRef} className="w-full h-full transform-gpu will-change-transform">
        {children}
      </div>
    </div>
  );
};
