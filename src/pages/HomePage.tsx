import React from 'react';
import { Hero } from '../components/Hero';
import { AboutStory } from '../components/AboutStory';
import { SignatureExperiences } from '../components/SignatureExperiences';
import { PortfolioSection } from '../components/PortfolioSection';
import { ShowreelSection } from '../components/ShowreelSection';
import { ServicesSection } from '../components/ServicesSection';
import { EventJourney } from '../components/EventJourney';
import { DestinationSection } from '../components/DestinationSection';
import { InteractiveEventPlanner } from '../components/InteractiveEventPlanner';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SocialGallery } from '../components/SocialGallery';
import { FinalCTA } from '../components/FinalCTA';
import { SectionReveal } from '../components/SectionReveal';
import { ServiceItem, SignatureExperience } from '../types/luxuryEvent';

interface HomePageProps {
  onSelectService: (service: ServiceItem) => void;
  onSelectExperience: (exp: SignatureExperience) => void;
  onNavigateRoute: (path: string, title?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectService,
  onSelectExperience,
  onNavigateRoute,
}) => {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero Section */}
      <Hero
        onExploreWork={() => onNavigateRoute('/work', 'Royal Commissions')}
        onPlanEvent={() => onNavigateRoute('/planner', 'Event Configurator')}
        onOpenShowreel={() => {
          const el = document.getElementById('showreel');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. About & Atelier Story */}
      <SectionReveal>
        <AboutStory />
      </SectionReveal>

      {/* 3. Signature Experiences Carousel */}
      <SectionReveal>
        <SignatureExperiences onSelectExperience={onSelectExperience} />
      </SectionReveal>

      {/* 4. Selected Works & Portfolio Grid with Staggered Framer Motion */}
      <PortfolioSection
        onPlanEvent={() => onNavigateRoute('/planner', 'Event Configurator')}
      />

      {/* 5. Fullscreen Showreel Section */}
      <SectionReveal>
        <div id="showreel">
          <ShowreelSection />
        </div>
      </SectionReveal>

      {/* 6. 8 Atelier Services with Staggered Framer Motion */}
      <ServicesSection onSelectService={onSelectService} />

      {/* 7. The 5-Stage Orchestration Journey */}
      <SectionReveal>
        <EventJourney />
      </SectionReveal>

      {/* 8. Destination Weddings & Palatial Retreats */}
      <SectionReveal>
        <DestinationSection
          onPlanEvent={() => onNavigateRoute('/planner', 'Event Configurator')}
        />
      </SectionReveal>

      {/* 9. Interactive Event Planner Configurator */}
      <SectionReveal>
        <InteractiveEventPlanner />
      </SectionReveal>

      {/* 10. Large Editorial Patron Testimonials */}
      <SectionReveal>
        <TestimonialsSection />
      </SectionReveal>

      {/* 11. Social / Instagram Live Feed */}
      <SectionReveal>
        <SocialGallery />
      </SectionReveal>

      {/* 12. Final Fullscreen Call to Action */}
      <SectionReveal>
        <FinalCTA
          onPlanEvent={() => onNavigateRoute('/planner', 'Event Configurator')}
          onExploreWork={() => onNavigateRoute('/work', 'Royal Commissions')}
        />
      </SectionReveal>
    </div>
  );
};
