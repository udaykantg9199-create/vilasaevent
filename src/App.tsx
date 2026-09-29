/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CinematicTransitionOverlay } from './components/CinematicTransitionOverlay';
import { CustomCursor } from './components/CustomCursor';
import { FloatingConcierge } from './components/FloatingConcierge';
import { ScrollToTop } from './components/ScrollToTop';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { JourneyPage } from './pages/JourneyPage';
import { PlannerPage } from './pages/PlannerPage';
import { ContactPage } from './pages/ContactPage';

import { ServiceItem, SignatureExperience } from './types/luxuryEvent';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<SignatureExperience | null>(null);

  // Cinematic page transition overlay state
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [destinationTitle, setDestinationTitle] = useState('Haute Celebrations');

  const handleNavigateRoute = (path: string, title?: string) => {
    // If navigating to an anchor on home page
    if (path.startsWith('/#') || (path.startsWith('#') && location.pathname === '/')) {
      const targetId = path.replace(/^\/?#/, '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setDestinationTitle(title || 'Haute Celebrations');
    setIsTransitioning(true);

    // Navigate at curtain apex
    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 320);

    // Clear curtain
    setTimeout(() => {
      setIsTransitioning(false);
    }, 750);
  };

  const handlePlanEvent = () => {
    handleNavigateRoute('/planner', 'Event Configurator');
  };

  return (
    <div className="min-h-screen bg-[#0a0809] text-[#f7f4ed] selection:bg-[#d4af37] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Interactive Desktop Luxury Cursor */}
      <CustomCursor />

      {/* Cinematic Fullscreen Transition Overlay */}
      <CinematicTransitionOverlay
        isTransitioning={isTransitioning}
        destinationTitle={destinationTitle}
      />

      {/* Floating Glassmorphism Navbar with Route Highlighting */}
      <Navbar onNavigateRoute={handleNavigateRoute} />

      {/* Main Routed Content Area with Framer Motion Page Enter/Exit */}
      <main className="relative z-10 w-full overflow-hidden min-h-[85vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Routes location={location}>
              {/* Home */}
              <Route
                path="/"
                element={
                  <HomePage
                    onSelectService={(s) => setSelectedService(s)}
                    onSelectExperience={(e) => setSelectedExperience(e)}
                    onNavigateRoute={handleNavigateRoute}
                  />
                }
              />

              {/* About Atelier */}
              <Route
                path="/about"
                element={<AboutPage onPlanEvent={handlePlanEvent} />}
              />

              {/* Services & Scenography */}
              <Route
                path="/services"
                element={
                  <ServicesPage
                    onSelectService={(s) => setSelectedService(s)}
                    onPlanEvent={handlePlanEvent}
                  />
                }
              />

              {/* Signature Ceremonials */}
              <Route
                path="/experiences"
                element={
                  <ExperiencesPage
                    onSelectExperience={(e) => setSelectedExperience(e)}
                    onPlanEvent={handlePlanEvent}
                  />
                }
              />

              {/* Portfolio / Royal Commissions */}
              <Route
                path="/work"
                element={
                  <WorkPage
                    onPlanEvent={handlePlanEvent}
                    onNavigateRoute={handleNavigateRoute}
                  />
                }
              />

              {/* Project Case Study Details */}
              <Route
                path="/work/:id"
                element={
                  <ProjectDetailPage
                    onPlanEvent={handlePlanEvent}
                    onNavigateRoute={handleNavigateRoute}
                  />
                }
              />

              {/* Destination Weddings */}
              <Route
                path="/destinations"
                element={<DestinationsPage onPlanEvent={handlePlanEvent} />}
              />

              {/* 5-Stage Orchestration */}
              <Route
                path="/journey"
                element={<JourneyPage onPlanEvent={handlePlanEvent} />}
              />

              {/* Interactive Event Planner Configurator */}
              <Route path="/planner" element={<PlannerPage />} />

              {/* Private Concierge & Contact */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Fallback to Home */}
              <Route
                path="*"
                element={
                  <HomePage
                    onSelectService={(s) => setSelectedService(s)}
                    onSelectExperience={(e) => setSelectedExperience(e)}
                    onNavigateRoute={handleNavigateRoute}
                  />
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Luxury Footer with Animated Gold Line */}
      <Footer onNavigateRoute={handleNavigateRoute} />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onPlanEvent={() => {
          setSelectedService(null);
          handlePlanEvent();
        }}
      />

      {/* Experience Detail Modal */}
      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onPlanEvent={() => {
          setSelectedExperience(null);
          handlePlanEvent();
        }}
      />

      {/* Floating Concierge & Scroll Progress Indicator */}
      <FloatingConcierge />
    </div>
  );
}
