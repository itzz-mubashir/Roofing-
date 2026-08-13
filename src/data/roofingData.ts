import { MaterialItem, ProjectItem, ServiceItem, ProcessStep, TestimonialItem } from '../types';

import heroImg from '../assets/images/roof_hero_cinematic_1786517626211.jpg';
import slateImg from '../assets/images/slate_roof_material_1786517643079.jpg';
import metalImg from '../assets/images/metal_roof_material_1786517656908.jpg';
import asphaltImg from '../assets/images/asphalt_shingle_material_1786517674361.jpg';
import tileImg from '../assets/images/tile_roof_material_1786517690136.jpg';
import beforeImg from '../assets/images/roof_before_transform_1786517705914.jpg';
import afterImg from '../assets/images/roof_after_transform_1786517719660.jpg';
import protectFooterImg from '../assets/images/roof_protect_footer_1786517731780.jpg';

export const HERO_IMAGE = heroImg;
export const BEFORE_IMAGE = beforeImg;
export const AFTER_IMAGE = afterImg;
export const PROTECT_FOOTER_IMAGE = protectFooterImg;

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 'asphalt',
    name: 'Asphalt Shingles',
    tagline: 'Dimensional Architectural & Heavyweight Class 4 Impact Systems',
    description: 'Engineered multi-layer heavy fiberglass asphalt shingles designed to replicate cedar shakes while providing Class 4 hail impact defense and thermal sealing.',
    image: asphaltImg,
    specs: {
      lifespan: '30 – 50 Years',
      windRating: '130 MPH Continuous',
      weight: '340 – 450 lbs / Square',
      impactClass: 'Class 4 (UL 2218 Certified)',
      fireRating: 'Class A Fire Resistance',
      maintenance: 'Low / Periodic Flash Check',
    },
    features: [
      'Multi-tonal shadow bands for rich architectural roofline depth',
      'Advanced DuraColor algae-resistant ceramic granules',
      'High-performance strike zone self-sealing adhesive strip',
      'Optimal cost-to-longevity ratio for estate homes',
    ],
    bestFor: 'Residential estates seeking refined texture and proven impact resistance.',
  },
  {
    id: 'metal',
    name: 'Metal Roofing',
    tagline: 'Concealed Fastener Standing Seam & Architectural Zinc',
    description: 'Precision-rolled 24-gauge steel and zinc standing seam panels featuring floating clips that accommodate extreme thermal expansion without membrane stress.',
    image: metalImg,
    specs: {
      lifespan: '50 – 75+ Years',
      windRating: '150+ MPH Category 5',
      weight: '120 – 175 lbs / Square',
      impactClass: 'Class 4 Maximum Impact',
      fireRating: 'Class A Non-Combustible',
      maintenance: 'Zero Scheduled Maintenance',
    },
    features: [
      'Concealed mechanical seam locking system for 100% water isolation',
      'Kynar 500 resin coating formulation preventing fading and chalking',
      '100% recyclable architectural grade alloy panels',
      'Reflects up to 70% of solar radiant energy for thermal efficiency',
    ],
    bestFor: 'Modern architectural structures, coastal properties, and alpine snow loads.',
  },
  {
    id: 'slate',
    name: 'Natural Slate',
    tagline: 'Quarried Vermont S-1 Grade Architectural Stone',
    description: 'Hand-selected natural quarried stone tiles meticulously hand-cut and installed using copper nails and custom lead-coated copper valley flashing.',
    image: slateImg,
    specs: {
      lifespan: '75 – 125+ Years',
      windRating: '140+ MPH Rated',
      weight: '800 – 1,400 lbs / Square',
      impactClass: 'Class 4 High Impact Stone',
      fireRating: 'Class A Non-Combustible',
      maintenance: 'Occasional Inspection',
    },
    features: [
      'Authentic quarried Vermont slate with naturally variegated color tones',
      'Impervious to water penetration, freeze-thaw cycles, and mildew',
      'Installed with heavy solid copper slating nails and brass snow guards',
      'Timeless architectural prestige that outlasts generations',
    ],
    bestFor: 'Historic restorations, high-end custom estates, and heirloom architecture.',
  },
  {
    id: 'tile',
    name: 'Handcrafted Tile',
    tagline: 'Architectural Clay S-Tile & High-Density Composite Systems',
    description: 'Kiln-fired natural clay and engineered high-density interlocking tiles providing exceptional thermal massing and hurricane-grade wind uplift resistance.',
    image: tileImg,
    specs: {
      lifespan: '50 – 80 Years',
      windRating: '150 MPH Hurricane Class',
      weight: '600 – 1,100 lbs / Square',
      impactClass: 'Class 4 Certified',
      fireRating: 'Class A Fire Resistance',
      maintenance: 'Minimal / Periodic Clear',
    },
    features: [
      'Dual-interlocking weather baffles preventing wind-driven rain intrusion',
      'Naturally insulated air pocket under tiles reducing HVAC loads',
      'Salt-air proof and corrosion-immune for harsh coastal environments',
      'Deep architectural shadow profiles with hand-glazed earth tones',
    ],
    bestFor: 'Mediterranean, Tuscan, modern ranch, and coastal estate roofs.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Precision Standing Seam Roof Overhaul',
    category: 'Metal Roofing',
    location: 'Oakridge Ridge Estate',
    year: '2025',
    material: '24-Ga Matte Anthracite Zinc-Coated Steel',
    squareFootage: '6,400 sq. ft.',
    pitch: '10/12 Steep Pitch',
    completionTime: '6 Days',
    image: metalImg,
    description: 'Full conversion from a deteriorating shake roof to a continuous concealed-fastener standing seam metal system. Integrated concealed gutters and custom solder-welded copper valley flashings.',
    highlights: [
      '1.75" Snap-lock standing seam profile with hidden floating clips',
      'Custom fabricated copper perimeter drip edges',
      'Thermal barrier underlayment for acoustic dampening',
    ],
  },
  {
    id: 'project-2',
    title: 'Historic Slate & Lead Flashing Restoration',
    category: 'Roof Replacement',
    location: 'Highland Manor',
    year: '2025',
    material: 'Quarried Vermont S-1 Unfading Black Slate',
    squareFootage: '8,200 sq. ft.',
    pitch: '12/12 Turret & Gable',
    completionTime: '12 Days',
    image: slateImg,
    description: 'Precision replacement of a 90-year-old slate system. Restored underlying structural decking, installed breathable self-healing underlayment, and hand-cut individual slate tiles for custom conical turrets.',
    highlights: [
      '100% solid copper nail fasteners throughout',
      'Custom lead-coated copper valley and chimney flashing boots',
      'Bronze snow guard array along primary roof eaves',
    ],
  },
  {
    id: 'project-3',
    title: 'Post-Hail Storm Recovery & Structural Fortification',
    category: 'Storm Damage Restoration',
    location: 'Pinnacle Crest',
    year: '2026',
    material: 'Class 4 Impact Architectural Shingle System',
    squareFootage: '5,100 sq. ft.',
    pitch: '8/12 Complex Gable',
    completionTime: '4 Days',
    image: asphaltImg,
    description: 'Emergency assessment and structural restoration following severe hail impact. Replaced compromised plywood decking, installed continuous ridge ventilation, and applied Class 4 heavy shingles.',
    highlights: [
      'Complete thermal moisture scan & decking structural audit',
      'Zero-leak synthetic underlayment with ice & water shield at all eaves',
      '130 MPH rated wind seal protection guarantee',
    ],
  },
  {
    id: 'project-4',
    title: 'Architectural Clay Tile Flashing & Ridge Repair',
    category: 'Roof Repair',
    location: 'Terra Rosa Estate',
    year: '2026',
    material: 'Custom Interlocking Handcrafted Clay Tile',
    squareFootage: '4,800 sq. ft.',
    pitch: '6/12 Hip Roof',
    completionTime: '3 Days',
    image: tileImg,
    description: 'Surgical repair and flashing overhaul on a high-value clay tile system. Resolved persistent valley leak by rebuilding underlying mortar beds and installing seamless copper flashing channels.',
    highlights: [
      'Preserved 95% of original antique handcrafted tiles',
      'Upgraded perimeter underlayment to high-temp rubberized asphalt',
      'Mortar-free mechanical hip cap locking system',
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-replacement',
    code: 'SRV-01',
    title: 'Roof Replacement',
    subtitle: 'Complete Architectural System Overhauls',
    description: 'Engineered tear-off and structural replacement using premium materials, high-density weather barriers, precision flashing, and continuous ventilation systems designed for lifetime performance.',
    details: [
      'Full removal down to structural roof deck',
      'Thermal moisture scanning & deck integrity evaluation',
      'Dual-layer synthetic self-healing underlayment',
      'Precision copper or kynar drip edge & valley sealing',
      'Multi-point Quality Control seal inspection',
    ],
    image: heroImg,
  },
  {
    id: 'service-repair',
    code: 'SRV-02',
    title: 'Roof Repair',
    subtitle: 'Surgical Leak Containment & Component Restoration',
    description: 'Targeted technical repairs for complex roof leaks, wind uplift, damaged flashing, penetration boots, and perimeter mortar seals without compromising structural aesthetics.',
    details: [
      'Infrared leak tracing & moisture boundary mapping',
      'Flashing rebuilds around chimneys, skylights & dormers',
      'Surgical tile/slate matching & individual panel replacement',
      'Ridge cap sealing & ventilation airflow realignment',
    ],
    image: slateImg,
  },
  {
    id: 'service-storm',
    code: 'SRV-03',
    title: 'Storm Damage',
    subtitle: 'Impact & High-Wind Emergency Restoration',
    description: 'Rapid response assessments and forensic damage reporting following severe hail, fallen tree debris, and extreme wind uplift events.',
    details: [
      'Immediate emergency tarping & structural shoring',
      'Detailed forensic photo documentation & engineering report',
      'Impact damage boundary mapping for insurance compliance',
      'Full restoration using Class 4 wind/hail resistant materials',
    ],
    image: asphaltImg,
  },
  {
    id: 'service-metal',
    code: 'SRV-04',
    title: 'Metal Roofing',
    subtitle: 'Standing Seam & Architectural Alloy Systems',
    description: 'Custom on-site panel rolling and installation of continuous standing seam metal roofs engineered to withstand 150+ MPH hurricane winds and extreme freeze-thaw cycles.',
    details: [
      'Hidden fastener clips allowing zero-stress thermal expansion',
      '24-Gauge steel, zinc, or solid architectural copper options',
      'Custom hand-brazed flashing for seamless watertight seams',
      'Reflective thermal coatings reducing summer HVAC load',
    ],
    image: metalImg,
  },
  {
    id: 'service-shingles',
    code: 'SRV-05',
    title: 'Asphalt Shingles',
    subtitle: 'Dimensional & Heavyweight Class 4 Systems',
    description: 'Premium heavy architectural shingle systems engineered with high-impact polymer modification and advanced algae-resistant ceramic coatings.',
    details: [
      'Class 4 impact resistance meeting strict insurance standards',
      'Advanced dual-line adhesive sealant for 130 MPH wind resistance',
      'Deep dimensional shadow profiles enhancing architectural curb appeal',
      'System-matched ridge cap and starter strip alignment',
    ],
    image: asphaltImg,
  },
  {
    id: 'service-inspection',
    code: 'SRV-06',
    title: 'Roof Inspection',
    subtitle: 'Comprehensive Structural & Thermal Diagnostics',
    description: 'Multi-point technical inspection covering roof pitch, structural rafter deflection, attic ventilation dynamics, flash seals, and sub-membrane moisture intrusion.',
    details: [
      'High-resolution thermal camera moisture detection',
      'Structural rafter & deck load assessment',
      'Flashing integrity & sealant life-expectancy audit',
      'Comprehensive digital report with priority action matrix',
    ],
    image: tileImg,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Assess',
    subtitle: 'Forensic Diagnostic & Structural Audit',
    description: 'We perform an exhaustive multi-point physical and thermal inspection of your entire roof system, examining flashing joints, deck integrity, attic moisture barriers, and ventilation dynamics.',
    deliverables: [
      'Thermal moisture intrusion scan',
      'Decking structural load assessment',
      'Comprehensive photographic diagnostic report',
    ],
  },
  {
    number: '02',
    title: 'Recommend',
    subtitle: 'Architectural System Engineering',
    description: 'Based on your property’s architectural style, roof pitch, wind exposure, and aesthetic preferences, we engineer a custom material specification and transparent scope of work.',
    deliverables: [
      'Material sample tactile review (Metal, Slate, Tile, Shingle)',
      '3D roofline geometry & pitch analysis',
      'Detailed line-item project specification',
    ],
  },
  {
    number: '03',
    title: 'Build',
    subtitle: 'Master Craftsman Installation',
    description: 'Our specialized roofing technicians execute the tear-off, underlayment sealing, flashing installation, and primary roof system build with disciplined jobsite cleanliness and zero shortcut tolerances.',
    deliverables: [
      'Full property protection & magnet magnetic sweep protocol',
      'Ice & water self-healing barrier at all perimeter gutters',
      'Custom copper or kynar metal flashing installation',
    ],
  },
  {
    number: '04',
    title: 'Protect',
    subtitle: 'Quality Assurance & Long-Term Guarantee',
    description: 'Every project concludes with a rigorous 42-point quality inspection by our Lead Roofing Director before issuing full system warranty certificates and maintenance guidelines.',
    deliverables: [
      '42-Point final quality control checklist',
      'Manufacturer system warranty registration',
      'Annual maintenance advisory protocol',
    ],
  },
];

export const CREDIBILITY_ITEMS = [
  {
    title: 'Licensed & Insured',
    detail: 'Full general liability, workers compensation, and state master roofing contractor credentials.',
  },
  {
    title: 'Quality Materials',
    detail: 'Exclusively heavy 24-gauge standing seam metal, natural Vermont slate, Class 4 impact shingles, and copper flashing.',
  },
  {
    title: 'Professional Installation',
    detail: 'Specialized in-house craftsmen trained strictly in roofline geometry, zero-leak flashings, and thermal sealing.',
  },
  {
    title: 'Detailed Inspections',
    detail: 'Thermal infrared diagnostics and multi-point moisture mapping on every assessment and completion audit.',
  },
  {
    title: 'Local Roofing Expertise',
    detail: 'Deep engineering knowledge of regional storm conditions, freeze-thaw cycles, high wind loads, and architectural styles.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "Vanguard approached our slate roof replacement like structural conservators. Their copper flashing detail and slate hand-trimming restored the architectural gravity of our property without a single compromise.",
    author: "Julian Vance",
    role: "Architectural Principal",
    location: "Highland Park Estate",
    roofType: "Natural Quarried Slate System",
  },
  {
    quote: "After two failed repairs from standard contractors, Vanguard pinpointed our standing seam roof leak within 20 minutes using thermal imaging. The repair work was immaculate and completely watertight through heavy winter storms.",
    author: "Elena Rostova",
    role: "Estate Director",
    location: "Cedar Ridge Manor",
    roofType: "Standing Seam Metal Roof",
  },
  {
    quote: "Their focus was 100% on the roof system itself—not selling us fluff. The crew maintained a spotlessly clean jobsite and completed our 6,000 sq ft class 4 impact shingle installation with astounding speed and precision.",
    author: "Marcus Lindqvist",
    role: "Property Owner",
    location: "Pinnacle Valley",
    roofType: "Architectural Shingle System",
  },
];
