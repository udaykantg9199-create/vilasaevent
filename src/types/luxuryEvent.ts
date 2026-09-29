export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface SignatureExperience {
  id: string;
  title: string;
  tagline: string;
  description: string;
  atmosphere: string;
  image: string;
  metrics: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'WEDDINGS' | 'DÉCOR' | 'STAGE' | 'DESTINATION' | 'CORPORATE';
  coupleOrClient: string;
  location: string;
  venue: string;
  year: string;
  guestCount: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  signatureFeature: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  tagline: string;
  region: string;
  image: string;
  bestMonths: string;
  keyPalaces: string[];
  vibe: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  quote: string;
  description: string;
  image: string;
  deliverable: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  couple: string;
  celebrationType: string;
  venue: string;
  location: string;
  date: string;
  image: string;
}
