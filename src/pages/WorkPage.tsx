import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUpRight, MapPin, Users, Calendar } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/luxuryEventData';
import { TiltCard } from '../components/TiltCard';
import { CinematicHeading } from '../components/CinematicHeading';

interface WorkPageProps {
  onPlanEvent: () => void;
  onNavigateRoute: (path: string, title?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onPlanEvent, onNavigateRoute }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const navigate = useNavigate();

  const categories = ['ALL', 'WEDDINGS', 'DÉCOR', 'STAGE', 'DESTINATION', 'CORPORATE'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenProject = (id: string, title: string) => {
    onNavigateRoute(`/work/${id}`, title);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-16 sm:mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/35 bg-[#2b0813]/70 text-[11px] font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Selected Archives & Case Studies</span>
        </div>
        <CinematicHeading
          text="ROYAL\nCOMMISSIONS."
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#fbf8f2] tracking-tight uppercase leading-[1.05] mb-6"
          highlightText="COMMISSIONS"
          delay={0.12}
          stagger={0.022}
        />
        <p className="font-subheading text-lg sm:text-2xl text-[#e8decb] italic max-w-2xl mx-auto leading-relaxed font-light">
          "A curated retrospective of monumental celebrations, architectural floral mandaps, and sovereign fort buyouts."
        </p>
      </motion.div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#d4af37] text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10 hover:border-white/25'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid of Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className={idx % 3 === 0 ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'}
            >
              <TiltCard
                onClick={() => handleOpenProject(project.id, project.title)}
                className="w-full h-full rounded-3xl overflow-hidden border border-[#d4af37]/30 bg-[#15050e] cursor-pointer shadow-2xl group hover:border-[#d4af37]/75 transition-all duration-500"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0809] via-[#0a0809]/45 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-sans tracking-widest text-[#d4af37] uppercase font-bold">
                      {project.category} · {project.year}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-black group-hover:border-[#d4af37] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase block mb-1">
                      {project.location} · {project.venue}
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-white mb-2 group-hover:text-[#fbf0ce] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-sans tracking-wider text-[#d4af37] uppercase font-bold group-hover:translate-x-1 transition-transform">
                      <span>VIEW CASE STUDY</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
