import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight, MapPin, Users, Calendar, X } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/luxuryEventData';
import { PortfolioProject } from '../types/luxuryEvent';

interface PortfolioSectionProps {
  onPlanEvent: () => void;
}

const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onPlanEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = ['ALL', 'WEDDINGS', 'DÉCOR', 'STAGE', 'DESTINATION', 'CORPORATE'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="py-20 sm:py-32 relative bg-[#0a0809] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Staggered Entrance */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16"
        >
          <div>
            <motion.div
              variants={headerItemVariants}
              className="flex items-center gap-2 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-3 sm:mb-4"
            >
              <span>Selected Works & Archives</span>
            </motion.div>
            <motion.h2
              variants={headerItemVariants}
              className="font-serif-luxury text-3xl sm:text-5xl md:text-7xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05]"
            >
              Royal <span className="text-gold-gradient italic font-normal">Commissions</span>
            </motion.h2>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <motion.div
            variants={headerItemVariants}
            className="mt-6 md:mt-0 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Editorial Masonry Grid with Staggered Children */}
        <motion.div
          key={selectedCategory}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                onClick={() => setActiveProject(project)}
                className={`group relative rounded-3xl overflow-hidden border border-[#d4af37]/25 bg-[#14050b] cursor-pointer shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/80 ${
                  idx % 3 === 0 ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                }`}
              >
                {/* Image with zoom on hover */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Dark luxury gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#0a0809]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Project Card Content */}
                <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-sans tracking-widest text-[#d4af37] uppercase font-bold">
                      {project.category} · {project.year}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase block mb-1">
                      {project.location} · {project.venue}
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 group-hover:text-[#fbf0ce] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-sans tracking-wider text-[#d4af37] uppercase font-bold group-hover:translate-x-1 transition-transform">
                      <span>VIEW EXPERIENCE</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative bg-[#13050c] border border-[#d4af37]/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 bg-black/40 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-6">
              <div className="flex items-center gap-3 text-xs font-sans tracking-widest text-[#d4af37] uppercase mb-2">
                <span>{activeProject.category}</span>
                <span>•</span>
                <span>{activeProject.year}</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white font-medium">
                {activeProject.title}
              </h3>
              <div className="text-sm font-sans text-neutral-400 mt-1">
                Client / Couple: <strong className="text-neutral-200">{activeProject.coupleOrClient}</strong>
              </div>
            </div>

            {/* Main Featured Photo */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 border border-white/10">
              <img
                src={activeProject.coverImage}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-xs font-sans">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div>
                  <span className="text-neutral-400 block">Location</span>
                  <span className="text-white font-medium">{activeProject.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div>
                  <span className="text-neutral-400 block">Guest Count</span>
                  <span className="text-white font-medium">{activeProject.guestCount}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div>
                  <span className="text-neutral-400 block">Venue</span>
                  <span className="text-white font-medium">{activeProject.venue}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-light mb-8">
              <p>{activeProject.description}</p>
              <div className="p-4 rounded-xl bg-[#220713]/60 border border-[#d4af37]/30">
                <span className="text-[11px] font-sans tracking-widest text-[#d4af37] uppercase font-bold block mb-1">
                  Signature Scenographic Feat
                </span>
                <p className="text-neutral-200 italic font-serif-luxury text-sm sm:text-base">
                  "{activeProject.signatureFeature}"
                </p>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {activeProject.galleryImages && activeProject.galleryImages.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#d4af37] font-bold mb-3">
                  Production Archives
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {activeProject.galleryImages.map((img, i) => (
                    <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                      <img src={img} alt="Production detail" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400 font-sans">
                Curating your custom celebration timeline?
              </span>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onPlanEvent();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#d4af37] text-black font-bold text-xs uppercase tracking-[0.15em] hover:brightness-110 cursor-pointer"
              >
                Inquire For Similar Production →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
