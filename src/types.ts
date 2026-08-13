export interface MaterialItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: {
    lifespan: string;
    windRating: string;
    weight: string;
    impactClass: string;
    fireRating: string;
    maintenance: string;
  };
  features: string[];
  bestFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Roof Replacement' | 'Metal Roofing' | 'Storm Damage Restoration' | 'Roof Repair';
  location: string;
  year: string;
  material: string;
  squareFootage: string;
  pitch: string;
  completionTime: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
  code: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  location: string;
  roofType: string;
}

export interface AssessmentFormData {
  propertyType: 'Residential Estate' | 'Commercial Property' | 'Historic Home' | 'Multi-Family';
  roofAge: '0-5 Years' | '5-15 Years' | '15-25 Years' | '25+ Years / Unknown';
  serviceNeeded: 'Full System Replacement' | 'Specialized Metal/Slate System' | 'Storm Damage Assessment' | 'Precision Leak Repair' | 'Comprehensive Inspection';
  preferredMaterial: 'Standing Seam Metal' | 'Natural Quarried Slate' | 'Luxury Asphalt Shingles' | 'Architectural Clay Tile' | 'Unsure / Need Expert Recommendation';
  address: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  notes: string;
}
