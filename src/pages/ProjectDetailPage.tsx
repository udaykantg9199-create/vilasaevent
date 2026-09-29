import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, MapPin, Users, Calendar, Award } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/luxuryEventData';
import { MagneticButton } from '../components/MagneticButton';
import { CinematicHeading } from '../components/CinematicHeading';

interface ProjectDetailPageProps {
  onPlanEvent: () => void;
  onNavigateRoute: (path: string, title?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  onPlanEvent,
  onNavigateRoute,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = PORTFOLIO_PROJECTS.findIndex((p) => p.id === id);
  const project = PORTFOLIO_PROJECTS[currentIndex] || PORTFOLIO_PROJECTS[0];

  const prevProject =
    PORTFOLIO_PROJECTS[(currentIndex - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length];
  const nextProject =
    PORTFOLIO_PROJECTS[(currentIndex + 1) % PORTFOLIO_PROJECTS.length];

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => onNavigateRoute('/work', 'Royal Commissions')}
        className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#d4af37] hover:text-[#fbf0ce] mb-8 cursor-pointer group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Royal Commissions</span>
      </button>

      {/* Case Study Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex flex-wrap items-center gap-3 text-xs font-sans tracking-[0.25em] text-[#d4af37] uppercase mb-4 font-bold">
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.location}</span>
        </div>
        <CinematicHeading
          text={project.title}
          as="h1"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight uppercase leading-[1.05] mb-6"
          delay={0.12}
          stagger={0.022}
        />
        <p className="text-sm sm:text-lg text-neutral-300 font-sans font-light max-w-3xl">
          Client: <strong className="text-white font-medium">{project.coupleOrClient}</strong> · Venue: <strong className="text-white font-medium">{project.venue}</strong>
        </p>
      </motion.div>

      {/* Main Hero Photo */}
      <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-12 border border-[#d4af37]/35 shadow-2xl relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#17050e] border border-[#d4af37]/30 mb-16 shadow-xl">
        <div>
          <span className="text-neutral-400 text-xs font-sans uppercase tracking-wider block mb-1">
            Location
          </span>
          <span className="font-serif-luxury text-lg sm:text-xl text-white font-medium">
            {project.location}
          </span>
        </div>

        <div>
          <span className="text-neutral-400 text-xs font-sans uppercase tracking-wider block mb-1">
            Venue
          </span>
          <span className="font-serif-luxury text-lg sm:text-xl text-white font-medium">
            {project.venue}
          </span>
        </div>

        <div>
          <span className="text-neutral-400 text-xs font-sans uppercase tracking-wider block mb-1">
            Patron Guests
          </span>
          <span className="font-serif-luxury text-lg sm:text-xl text-[#d4af37] font-bold">
            {project.guestCount}
          </span>
        </div>

        <div>
          <span className="text-neutral-400 text-xs font-sans uppercase tracking-wider block mb-1">
            Commission Year
          </span>
          <span className="font-serif-luxury text-lg sm:text-xl text-white font-medium">
            {project.year}
          </span>
        </div>
      </div>

      {/* Narrative & Scenographic Feat */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        <div className="lg:col-span-7 space-y-6 text-neutral-300 font-sans leading-relaxed text-sm sm:text-base font-light">
          <h2 className="font-serif-luxury text-3xl text-white font-medium">
            The Production Narrative
          </h2>
          <p>{project.description}</p>
          <p>
            From the initial hand-sketched scenography to the final guest farewell at dawn, every single element was engineered exclusively for this three-day celebration. Sound, fragrance diffusion, lighting temperature, and floral hydration protocols were managed with microscopic precision.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#240610] to-[#120409] border border-[#d4af37]/45 shadow-2xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-sans tracking-[0.2em] text-[#d4af37] uppercase font-bold block">
              Signature Feat
            </span>
            <p className="font-serif-luxury text-xl sm:text-2xl text-white font-medium italic leading-snug">
              "{project.signatureFeature}"
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Showcase */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="mb-20">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-medium mb-8">
            Atmospheric Archives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-xl group"
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Between Projects */}
      <div className="pt-10 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <button
          onClick={() => onNavigateRoute(`/work/${prevProject.id}`, prevProject.title)}
          className="flex items-center gap-3 text-xs font-sans tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-[#d4af37] group-hover:-translate-x-1 transition-transform" />
          <span>Previous: {prevProject.title}</span>
        </button>

        <MagneticButton>
          <button
            onClick={onPlanEvent}
            className="px-8 py-3.5 rounded-full bg-[#d4af37] text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:brightness-110 cursor-pointer"
          >
            Inquire For Similar Celebration →
          </button>
        </MagneticButton>

        <button
          onClick={() => onNavigateRoute(`/work/${nextProject.id}`, nextProject.title)}
          className="flex items-center gap-3 text-xs font-sans tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Next: {nextProject.title}</span>
          <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
