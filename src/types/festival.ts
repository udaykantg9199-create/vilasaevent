export interface Artist {
  id: string;
  name: string;
  genre: string;
  stage: 'Main Arena' | 'Acoustic Sunset Stage';
  day: 'Day 1 (Fri)' | 'Day 2 (Sat)' | 'Day 3 (Sun)';
  time: string;
  image: string;
  bio: string;
  topTrack: string;
  bpm: number;
}

export interface FoodStall {
  id: string;
  name: string;
  category: 'Street Chaat' | 'Tandoor & Grills' | 'Burgers & Fries' | 'Asian & Dimsum' | 'Desserts & Churros' | 'Beverages & Mocktails';
  mustTry: string;
  priceRange: '₹150 - ₹300' | '₹200 - ₹450' | '₹350 - ₹600';
  stallNo: string;
  dietary: ('Veg' | 'Non-Veg' | 'Vegan' | 'Jain Options')[];
  rating: number;
  highlight: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  tagline: string;
  description: string;
  perks: string[];
  popular?: boolean;
  stockLeft: number;
}

export interface FestivalZone {
  id: string;
  name: string;
  description: string;
  coords: { x: number; y: number };
  color: string;
  iconName: string;
  highlights: string[];
}

export interface QuirkBrand {
  id: string;
  name: string;
  category: string;
  description: string;
  popularItem: string;
}
