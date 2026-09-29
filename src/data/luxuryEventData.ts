import {
  ServiceItem,
  SignatureExperience,
  PortfolioProject,
  DestinationItem,
  JourneyStep,
  Testimonial,
} from '../types/luxuryEvent';

export const BRAND_INFO = {
  name: 'VILĀSA',
  tagline: 'WE CREATE MOMENTS THAT STAY.',
  subtitle: 'Luxury Event Planning • Royal Weddings • Haute Experiences',
  phone: '+91 (0) 11 4988 2300',
  whatsapp: '+919810012345',
  email: 'concierge@vilasaatelier.com',
  address: 'The Atelier, 14 Sundar Nagar Heritage Enclave, New Delhi, India',
  internationalDesk: 'Dubai Design District (d3), UAE',
  stats: [
    { value: '10+', label: 'Years of Mastery', detail: 'Crafting signature celebrations' },
    { value: '250+', label: 'Events Executed', detail: 'Across 14 global destinations' },
    { value: '50+', label: 'Royal Celebrations', detail: 'Palatial multi-day weddings' },
    { value: '100%', label: 'Bespoke Atelier', detail: 'No templated productions' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Wedding Planning',
    subtitle: 'End-to-End Curatorial Mastery',
    description:
      'From timeline choreography and vendor procurement to royal protocols, we orchestrate every single nuance with meticulous discretion and poise.',
    deliverables: [
      'Comprehensive Multi-Day Run-of-Show',
      'Artisan Vendor & Couturier Coordination',
      'Guest Hospitality & VVIP Concierge Desk',
      'Legal Permits & Technical Safety Audits',
    ],
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
  },
  {
    number: '02',
    title: 'Stage & Décor',
    subtitle: 'Architectural Floral Installations',
    description:
      'We transform historical palace courtyards and grand ballrooms into ethereal floral wonderlands using custom sceneries, antique brass chandeliers, and hand-strung blossoms.',
    deliverables: [
      'Bespoke Mandap & Sangeet Stage Scenography',
      'Exotic Floral Imports & Fragrance Architecture',
      'Custom Heritage Furniture & Velvet Drapes',
      'Architectural Ambient & Candlelight Mapping',
    ],
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
  },
  {
    number: '03',
    title: 'Destination Weddings',
    subtitle: 'Palaces, Lakes & Overseas Forts',
    description:
      'Seamless multi-continental wedding logistics across royal Rajasthan estates, Portuguese Goan villas, and ultra-luxe Middle Eastern ballrooms.',
    deliverables: [
      'Charter Flight & Luxury Fleet Management',
      'Palace Ground Transformations & Security',
      'Curated Guest Welcome Hampers & Excursions',
      'Multi-Language Hospitality Hostesses',
    ],
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
  },
  {
    number: '04',
    title: 'Entertainment Curation',
    subtitle: 'World-Class Performers & Royal Folk',
    description:
      'Private concert headliners, symphony orchestras, Rajasthani royal Manganiyar troupes, Bollywood stars, and bespoke musical compositions.',
    deliverables: [
      'A-List Artist Booking & Rider Management',
      'Bespoke Royal Varmala Soundtracks',
      'DJ & Afterparty Electronic Stage Production',
      'Classical Shehnai & Sitar Welcome Ensembles',
    ],
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
  },
  {
    number: '05',
    title: 'Event Production',
    subtitle: 'Heavy Rigging, Kinetic Lights & FX',
    description:
      'German hangar structures, concert-grade Meyer Sound systems, computer-synchronized intelligent lighting, and cold pyrotechnics engineered flawlessly.',
    deliverables: [
      'Zero-Hazard Cold Pyro & Confetti Blasts',
      '3D Holographic Stage & Projection Mapping',
      'Weather-Proof Climatized Structures',
      'Dual Redundant Generator & Power Grids',
    ],
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
  },
  {
    number: '06',
    title: 'Luxury Guest Experience',
    subtitle: 'Seven-Star Hospitality Protocols',
    description:
      'Curated personalized guest journeys from private airport tarmac greetings and bespoke room gifting to dedicated 24/7 personal attendants.',
    deliverables: [
      'Custom RSVP Portal & Guest Mobile Concierge',
      'Artisanal Midnight Food Stations & Bars',
      'Styling & Draping Salons for Guests',
      'Luggage Tags, Custom Wax Seals & Scenting',
    ],
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
  },
  {
    number: '07',
    title: 'Corporate Events & Galas',
    subtitle: 'High-Net-Worth & Brand Summits',
    description:
      'Discreet and awe-inspiring leadership summits, luxury brand debuts, anniversary balls, and international diplomatic gatherings.',
    deliverables: [
      'Executive Hospitality & Boardroom Protocol',
      'Bespoke Keynote Theatrics & Scenography',
      'Michelin-Starred Culinary Collaboration',
      'NDA-Grade Security Infrastructure',
    ],
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
  },
  {
    number: '08',
    title: 'Theme & Styling',
    subtitle: 'Visual Identity & Custom Couturier Alignment',
    description:
      'Harmonizing bridal couture with decor textiles, bespoke monogram crest design, heirloom stationary, and thematic sensory details.',
    deliverables: [
      'Family Monogram Crest & Wax Seal Branding',
      'Letterpress Foil Invitations & Linen Menus',
      'Fragrance Diffusion Architecture',
      'Bespoke Uniforms for Hospitality Crew',
    ],
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
  },
];

export const EXPERIENCES_DATA: SignatureExperience[] = [
  {
    id: 'exp1',
    title: 'The Grand Royal Entry',
    tagline: 'A Majestic Procession of Heirs & Queens',
    description:
      'Groom arrival with 21 white Marwari stallions, brass band, and vintage Rolls-Royce, followed by the bride entering under a 40-foot hand-woven canopy of fresh jasmine and crystal tear drops.',
    atmosphere: 'Regal, Thunderous & Heart-Stopping',
    metrics: 'Over 200 artisans involved in single entry choreography',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
  },
  {
    id: 'exp2',
    title: 'The Sacred Varmala',
    tagline: 'Cosmic Union Suspended in Time',
    description:
      'Elevated water-stage in the middle of a palace moat with 360-degree fireworks, floating lotus mechanisms, and 50 kilograms of fresh fragrant rose petals descending from above.',
    atmosphere: 'Ethereal, Romantic & Awe-Inspiring',
    metrics: 'Synchronized cold pyro with custom live orchestra crescendo',
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
  },
  {
    id: 'exp3',
    title: 'The Sangeet Spectacle',
    tagline: 'Broadway Meets Bollywood Royalty',
    description:
      'Curved kinetic LED stages, concert sound, bespoke family musicals choreographed by Mumbai’s finest, followed by an all-night electronic DJ set until dawn.',
    atmosphere: 'Electric, Euphoric & Celebratory',
    metrics: '3500+ sq. ft. customized performance stage',
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
  },
  {
    id: 'exp4',
    title: 'The Sunlit Haldi Carnival',
    tagline: 'Marigolds, Citrus Spritz & Pure Merriment',
    description:
      'A sun-drenched courtyard bathed in 10,000 kilograms of local orange and yellow marigolds, artisanal organic turmeric pastes, pool day cocktails, and acoustic folk singer sets.',
    atmosphere: 'Vibrant, Warm & Heartfelt',
    metrics: '100% Organic certified farm blossoms',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
  },
  {
    id: 'exp5',
    title: 'The Royal Mehendi Bazaar',
    tagline: 'Mughal Courtyards & Persian Carpets',
    description:
      'An opulent afternoon flea of master henna artists, Kashmiri pashmina stalls, personalized perfumery bar, and live Sufi poetry over high tea.',
    atmosphere: 'Bohemian, Luxurious & Intimate',
    metrics: 'Custom scent blending bar for every guest',
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
  },
  {
    id: 'exp6',
    title: 'The Black-Tie Reception',
    tagline: 'Couture Elegance Under Crystal Chandeliers',
    description:
      'Towering floral obelisks, mirror dining tables adorned with silver cutlery, 7-course plated royal banquet, and jazz ensembles celebrating the newlyweds.',
    atmosphere: 'Sophisticated, Timeless & Glamorous',
    metrics: '12-piece jazz symphony and imported crystal tableware',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
  },
  {
    id: 'exp7',
    title: 'Destination Palace Takeover',
    tagline: 'Entire Historical Forts Exclusively Yours',
    description:
      'Privatizing 16th-century heritage forts with personal palace staff, bespoke lighting of outer ramparts, helicopter charters, and total privacy for high-profile families.',
    atmosphere: 'Exclusive, Peerless & Majestic',
    metrics: 'Full 3-day fort buyout management',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
  },
  {
    id: 'exp8',
    title: 'Private VVIP Afterparty',
    tagline: 'Underground Speakeasy Behind Secret Doors',
    description:
      'A subterranean neon velvet sanctuary unlocked at 2:00 AM with international mixologists, truffle pizza counters, and immersive deep house sets until sunrise.',
    atmosphere: 'Intoxicating, Modern & Uncensored',
    metrics: 'Curated mixology menus & sound-isolated acoustic build',
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'p1',
    title: 'The Lake Palace Symphony',
    category: 'WEDDINGS',
    coupleOrClient: 'Aashna & Devendra',
    location: 'Udaipur, Rajasthan',
    venue: 'The Leela Palace & Jagmandir Island',
    year: '2025',
    guestCount: '650 Guests',
    coverImage: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
    galleryImages: [
      '/images/destination_palace_udaipur_1790667535542.jpg',
      '/images/varmala_moment_fireworks_1790667558554.jpg',
      '/images/wedding_stage_floral_decor_1790667523080.jpg',
    ],
    description:
      'A three-day royal wedding taking over the tranquil waters of Lake Pichola. Highlights included a flotilla of decorated royal boats, floating mandap adorned with 80,000 Dutch hydrangeas, and fireworks echoing across the Aravali hills.',
    signatureFeature: 'A floating water mandap anchored 100 meters offshore with 360-degree guest seating.',
  },
  {
    id: 'p2',
    title: 'Gilded Amber Courtyards',
    category: 'DÉCOR',
    coupleOrClient: 'Meera & Siddharth',
    location: 'Jaipur, Rajasthan',
    venue: 'Rambagh Palace',
    year: '2025',
    guestCount: '800 Guests',
    coverImage: '/images/wedding_stage_floral_decor_1790667523080.jpg',
    galleryImages: [
      '/images/hero_luxury_indian_wedding_1790667508985.jpg',
      '/images/destination_palace_udaipur_1790667535542.jpg',
    ],
    description:
      'Inspired by the 18th-century Rajputana jewel vaults. We created hand-carved jali pavilions, 24-carat gold-leaf finished chandeliers, and 12-foot floral urns holding rare Ecuadorian crimson roses.',
    signatureFeature: 'Over 5,000 brass oil lamps lit concurrently at dusk along the palace lawns.',
  },
  {
    id: 'p3',
    title: 'Electric Sangeet Arena',
    category: 'STAGE',
    coupleOrClient: 'Rhea & Kabir',
    location: 'Jodhpur, Rajasthan',
    venue: 'Umaid Bhawan Palace Lawns',
    year: '2024',
    guestCount: '500 Guests',
    coverImage: '/images/varmala_moment_fireworks_1790667558554.jpg',
    galleryImages: [
      '/images/hero_luxury_indian_wedding_1790667508985.jpg',
      '/images/wedding_stage_floral_decor_1790667523080.jpg',
    ],
    description:
      'A stadium-scale Sangeet performance stage with kinetic motorized LED rings and holographic backdrops seamlessly merged with the heritage sandstone dome of Umaid Bhawan.',
    signatureFeature: 'A synchronized drone light show depicting the couple’s ten-year love story over the palace dome.',
  },
  {
    id: 'p4',
    title: 'The Emirates Royal Gala',
    category: 'DESTINATION',
    coupleOrClient: 'Al-Mansoor & Singhania Alliance',
    location: 'Abu Dhabi / Dubai',
    venue: 'Emirates Palace Ballroom & Private Beach',
    year: '2025',
    guestCount: '900 Guests',
    coverImage: '/images/destination_palace_udaipur_1790667535542.jpg',
    galleryImages: [
      '/images/hero_luxury_indian_wedding_1790667508985.jpg',
      '/images/wedding_stage_floral_decor_1790667523080.jpg',
    ],
    description:
      'A cross-cultural celebration bridging Arabian hospitality with Indian royal rituals. Features included scented oud fountains, private beach air-conditioned glass domes, and bespoke Michelin-chef banquets.',
    signatureFeature: 'A private concert by an international grammy-winning artist flown in on a private charter.',
  },
  {
    id: 'p5',
    title: 'Centenary Industrial Global Gala',
    category: 'CORPORATE',
    coupleOrClient: 'Sovereign Heritage Group',
    location: 'New Delhi, India',
    venue: 'The Oberoi & Taj Mahal Hotel Banquets',
    year: '2024',
    guestCount: '450 Dignitaries',
    coverImage: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
    galleryImages: [
      '/images/wedding_stage_floral_decor_1790667523080.jpg',
      '/images/varmala_moment_fireworks_1790667558554.jpg',
    ],
    description:
      'A 100-year celebration for an industrial conglomerate attended by cabinet ministers, global CEOs, and royalty. Seamless security, immaculate protocol, and an art-gallery style history exhibit.',
    signatureFeature: 'Curated 100-year interactive timeline gallery using rare archival artifacts and 3D soundscapes.',
  },
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: 'dest1',
    name: 'UDAIPUR',
    tagline: 'The Venice of the East & City of Lakes',
    region: 'Rajasthan',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
    bestMonths: 'October – March',
    keyPalaces: ['The Leela Palace', 'Taj Lake Palace', 'Jagmandir Island', 'The Oberoi Udaivilas'],
    vibe: 'Floating palaces, boat processions, and royal grandeur at twilight.',
  },
  {
    id: 'dest2',
    name: 'JAIPUR',
    tagline: 'The Pink City of Regal Forts',
    region: 'Rajasthan',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
    bestMonths: 'November – February',
    keyPalaces: ['Rambagh Palace', 'Jai Mahal Palace', 'Fairmont Jaipur', 'Alila Fort Bishangarh'],
    vibe: 'Towering sandstone ramparts, elephant welcomes, and heritage opulence.',
  },
  {
    id: 'dest3',
    name: 'JODHPUR',
    tagline: 'The Sun City of Sandstone Splendor',
    region: 'Rajasthan',
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
    bestMonths: 'October – March',
    keyPalaces: ['Umaid Bhawan Palace', 'Mehrangarh Fort', 'Welcomhotel by ITC'],
    vibe: 'Art Deco royal majesty, royal Polo matches, and dramatic desert sunsets.',
  },
  {
    id: 'dest4',
    name: 'GOA',
    tagline: 'Colonial Elegance & Ocean Sunsets',
    region: 'West Coast',
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
    bestMonths: 'November – April',
    keyPalaces: ['Taj Exotica Resort & Spa', 'The St. Regis Goa', 'Grand Hyatt Bambolim'],
    vibe: 'White sand seaside mandaps, barefoot luxury, and epic sunset afterparties.',
  },
  {
    id: 'dest5',
    name: 'RISHIKESH',
    tagline: 'Sacred Ganges & Himalayan Serenity',
    region: 'Uttarakhand',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
    bestMonths: 'September – November, March – May',
    keyPalaces: ['Ananda in the Himalayas', 'Taj Rishikesh Resort', 'The Roseate Ganges'],
    vibe: 'Spiritual Ganga aarti varmalas, temple bells, and pristine mountain air.',
  },
  {
    id: 'dest6',
    name: 'DUBAI & ABU DHABI',
    tagline: 'Desert Dunes & Futuristic Glamour',
    region: 'United Arab Emirates',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
    bestMonths: 'October – April',
    keyPalaces: ['Emirates Palace', 'Atlantis The Royal', 'Bab Al Shams Desert Resort'],
    vibe: 'Ultra-modern luxury, golden desert dune receptions, and Michelin dining.',
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    quote: 'Tell us your vision.',
    description:
      'We begin with private consultations to understand your lineage, personal aesthetic, family traditions, and unspoken dreams for the celebration.',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
    deliverable: 'Creative Direction Moodboard & Venue Feasibility Study',
  },
  {
    step: '02',
    title: 'DESIGN',
    quote: 'We shape the experience.',
    description:
      'Our scenographers create scale 3D renders, architectural floral layouts, lighting palettes, and textile swatches tailored to the chosen estates.',
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
    deliverable: 'Photorealistic 3D Spatial Walkthroughs & Material Samples',
  },
  {
    step: '03',
    title: 'PLAN',
    quote: 'Every detail gets a place.',
    description:
      'Milestone budgets, minute-by-minute run sheets, guest flight manifests, multi-cuisine tastings, and security cordons locked in place.',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
    deliverable: 'Master Production Dossier & 24/7 Digital Concierge App',
  },
  {
    step: '04',
    title: 'EXECUTE',
    quote: 'We bring it to life.',
    description:
      'Over 400 artisans, sound engineers, florists, and hospitality hostesses deploy 72 hours before curtain-up to ensure flawless build perfection.',
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
    deliverable: 'Flawless Zero-Error Ground Production Management',
  },
  {
    step: '05',
    title: 'CELEBRATE',
    quote: 'You enjoy every moment.',
    description:
      'You live in the magic, surrounded by your closest family and loved ones, while our discrete team handles every backstage ripple seamlessly.',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
    deliverable: 'Unforgettable Lifelong Memories & Heirloom Cinema Film',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Vilāsa transformed Jagmandir Island into a celestial paradise. When Devendra and I stepped out onto the water mandap with the fireworks reflecting in Lake Pichola, our entire family wept with awe. Their poise and execution are second to none in this world.',
    couple: 'Aashna & Devendra Singhania',
    celebrationType: '3-Day Royal Palace Wedding',
    venue: 'The Leela Palace & Jagmandir',
    location: 'Udaipur, Rajasthan',
    date: 'December 2025',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
  },
  {
    id: 't2',
    quote:
      'Managing 800 guests, royal family protocols, and international headliners across Rambagh Palace felt effortless because of the Vilāsa team. Not a single second felt stressful. They are true artists of celebration.',
    couple: 'Meera & Siddharth Kotak',
    celebrationType: 'Palace Wedding & Sangeet Gala',
    venue: 'Rambagh Palace',
    location: 'Jaipur, Rajasthan',
    date: 'November 2025',
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
  },
  {
    id: 't3',
    quote:
      'From private charters to the Emirates Palace beach mandap, every guest felt like a royal dignitary. Vilāsa doesn’t just plan events—they create living history.',
    couple: 'Pooja & Rohan Mehra',
    celebrationType: 'Middle Eastern Destination Celebration',
    venue: 'Emirates Palace',
    location: 'Abu Dhabi, UAE',
    date: 'February 2025',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
  },
];

export const SOCIAL_MOMENTS = [
  {
    id: 'sm1',
    tag: '@vilasa.atelier',
    caption: 'The moment 50 kgs of red rose petals caught the cold sparks over the Lake Pichola waters.',
    type: 'Varmala Finale',
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
  },
  {
    id: 'sm2',
    tag: '@vilasa.atelier',
    caption: '12,000 strands of real mogra and brass chandeliers at the Rambagh Palace courtyard.',
    type: 'Floral Scenography',
    image: '/images/wedding_stage_floral_decor_1790667523080.jpg',
  },
  {
    id: 'sm3',
    tag: '@vilasa.atelier',
    caption: 'Twilight reflections as Jagmandir Island illuminates for our royal black-tie reception.',
    type: 'Palace Takeover',
    image: '/images/destination_palace_udaipur_1790667535542.jpg',
  },
  {
    id: 'sm4',
    tag: '@vilasa.atelier',
    caption: 'The bride walking down an illuminated mirrored aisle flanked by thousand candles.',
    type: 'The Grand Entry',
    image: '/images/hero_luxury_indian_wedding_1790667508985.jpg',
  },
  {
    id: 'sm5',
    tag: '@vilasa.atelier',
    caption: 'Midnight fireworks lighting up the Aravali mountains as the Sangeet afterparty begins.',
    type: 'Concert Pyro',
    image: '/images/varmala_moment_fireworks_1790667558554.jpg',
  },
];

