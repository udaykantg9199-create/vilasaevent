import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/luxuryEventData';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onNavigateRoute: (path: string, title?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateRoute }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/', title: 'Atelier Welcome' },
    { label: 'ABOUT', path: '/about', title: 'The Atelier Philosophy' },
    { label: 'EXPERIENCES', path: '/experiences', title: 'Bespoke Ceremonials' },
    { label: 'WORK', path: '/work', title: 'Royal Commissions' },
    { label: 'SERVICES', path: '/services', title: 'Atelier Disciplines' },
    { label: 'JOURNEY', path: '/journey', title: '5-Stage Orchestration' },
    { label: 'DESTINATIONS', path: '/destinations', title: 'Palatial Destinations' },
    { label: 'PLANNER', path: '/planner', title: 'Event Configurator' },
    { label: 'CONTACT', path: '/contact', title: 'Private Concierge' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string, title: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigateRoute(path, title);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#14040b]/95 backdrop-blur-md border-b border-[#d4af37]/25 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/', 'Atelier Welcome')}
              className="group flex items-center gap-2.5 sm:gap-3 font-brand text-lg sm:text-2xl tracking-[0.25em] text-[#fbf8f2]"
            >
              <div className="w-8 h-8 rounded-full border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] font-serif-luxury font-bold text-xs group-hover:scale-105 transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                V
              </div>
              <span className="font-semibold bg-gradient-to-r from-[#fbf8f2] via-[#e5c158] to-[#fbf8f2] bg-clip-text text-transparent">
                {BRAND_INFO.name}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden 2xl:flex items-center gap-6 text-[11px] font-sans tracking-[0.2em] font-medium text-neutral-300">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path, link.title)}
                    className={`transition-colors relative py-1 ${
                      isActive ? 'text-[#d4af37] font-bold' : 'hover:text-[#d4af37]'
                    } after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#d4af37] ${
                      isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                    } after:transition-transform after:duration-300`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Tablet Compact Navigation Links */}
            <nav className="hidden xl:flex 2xl:hidden items-center gap-5 text-[11px] font-sans tracking-[0.16em] font-medium text-neutral-300">
              {navLinks.slice(0, 7).map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <a
                    key={link.label}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path, link.title)}
                    className={`transition-colors relative py-1 ${
                      isActive ? 'text-[#d4af37] font-bold' : 'hover:text-[#d4af37]'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Primary Action Button & Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <MagneticButton>
                <button
                  onClick={() => onNavigateRoute('/planner', 'Event Configurator')}
                  className="group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#d4af37]/20 to-[#3d0c1b]/70 hover:from-[#d4af37] hover:to-[#c59b27] text-[#fbf8f2] hover:text-[#0a0809] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] active:scale-95 cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <span className="text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-bold">
                    PLAN YOUR EVENT
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </MagneticButton>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-full text-neutral-200 hover:text-white border border-white/15 hover:border-[#d4af37]/50 bg-black/40"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Cinematic Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-[#1b050d] via-[#100308] to-[#0a0809] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-5">
              <div className="flex items-center gap-2">
                <span className="font-brand text-xl sm:text-2xl tracking-[0.25em] text-[#d4af37]">
                  {BRAND_INFO.name}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-white/20 text-neutral-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links with Staggered Entrance */}
            <motion.div
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
                closed: {},
              }}
              className="flex flex-col gap-3.5 my-auto py-6"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.a
                    key={link.label}
                    href={link.path}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    onClick={(e) => handleLinkClick(e, link.path, link.title)}
                    className={`group flex items-center justify-between font-serif-luxury text-xl sm:text-2xl py-1 transition-colors ${
                      isActive ? 'text-[#d4af37] font-bold' : 'text-neutral-200 hover:text-[#d4af37]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] sm:text-xs font-sans tracking-widest text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors">
                      {link.title} →
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-[#d4af37]/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateRoute('/planner', 'Event Configurator');
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>PLAN YOUR EVENT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] tracking-wider text-neutral-400">
                {BRAND_INFO.phone} · {BRAND_INFO.email}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
