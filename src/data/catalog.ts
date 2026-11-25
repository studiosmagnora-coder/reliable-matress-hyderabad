export interface MattressProduct {
  id: string;
  slug: string;
  name: string;
  categoryLabel: string;
  feel: string;
  warranty: string | null;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  constructionLayers: string[];
  availableSizes: string[];
  availableThicknesses: string[];
  priceDisplay: string;
  image: string;
  alt: string;
}

export interface MattressLayerInfo {
  id: string;
  name: string;
  role: string;
  description: string;
  usedInModels: string[];
}

export interface SofaCategoryItem {
  id: string;
  name: string;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  alt: string;
}

export interface BedInteriorItem {
  id: string;
  name: string;
  categoryGroup: 'Beds' | 'Headboards' | 'Wall Panelling';
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  alt: string;
}

export type GalleryFilterCategory =
  | 'All'
  | 'Mattresses'
  | 'Orthopedic Mattresses'
  | 'Sofas'
  | 'Beds'
  | 'Headboards'
  | 'Wall Panelling';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryFilterCategory, 'All'>;
  subtitle: string;
  image: string;
  alt: string;
  enquiryProductName: string;
}

export interface InteriorShowcaseItem {
  id: string;
  title: string;
  styleTag: string;
  description: string;
  image: string;
  alt: string;
  enquiryProductName: string;
}

export const BUSINESS_INFO = {
  brandName: 'Reliable Mattresses & Furniture',
  shortBrand: 'Reliable',
  tagline: 'Comfort You Can Trust. Quality That Lasts.',
  supportingMessage: 'Six Years of Mattress Manufacturing Experience.',
  footerTagline: 'Reliable Mattresses & Furniture – Comfort You Can Trust.',
  whatsappDisplay: '+91 77939 06631',
  whatsappTelHref: 'tel:+917793906631',
  whatsappBaseUrl: 'https://wa.me/917793906631',
  instagramUrl: 'https://www.instagram.com/reliable_mattresses_furniture/',
  instagramHandle: '@reliable_mattresses_furniture',
  showroomAddressNote: 'Showroom Address: Available on enquiry (Editable placeholder)',
  emailNote: 'Direct Contact: Via WhatsApp or Contact Form (Editable placeholder)',
  hoursNote: 'Customer Enquiries: Open for consultations via phone & WhatsApp',
} as const;

export const ASSETS = {
  heroMattress: '/src/assets/images/hero_luxury_mattress_1795630116087.jpg',
  introMattress: '/src/assets/images/intro_mattress_detail_1795630116201.jpg',
  hrFoamMattress: '/src/assets/images/hr_foam_mattress_1795630117346.jpg',
  orthopedicMattress: '/src/assets/images/orthopedic_mattress_1795630117959.jpg',
  rebondedMattress: '/src/assets/images/rebonded_mattress_1795630118150.jpg',
  naturalLatexMattress: '/src/assets/images/natural_latex_mattress_1795630118599.jpg',
  mattressCutaway: '/src/assets/images/mattress_layers_cutaway_1795630118950.jpg',
  sofaSet: '/src/assets/images/sofa_set_living_1795630120004.jpg',
  sofaCumBed: '/src/assets/images/sofa_cum_bed_1795630120678.jpg',
  loungerSofa: '/src/assets/images/lounger_sofa_1795630120931.jpg',
  cornerSofa: '/src/assets/images/corner_sofa_1795630121348.jpg',
  lShapeSofa: '/src/assets/images/l_shape_sofa_1795630222528.jpg',
  chesterfieldSofa: '/src/assets/images/chesterfield_sofa_1795630148022.jpg',
  bubbleSofa: '/src/assets/images/bubble_sofa_1795630223942.jpg',
  designerBed: '/src/assets/images/designer_upholstered_bed_1795630123254.jpg',
  upholsteredBed: '/src/assets/images/upholstered_bed_linen_1795632621281.jpg',
  premiumHeadboard: '/src/assets/images/premium_headboard_tufted_1795632621552.jpg',
  wallPanelling: '/src/assets/images/bedroom_wall_panelling_1795630206438.jpg',
  designerHeadboard: '/src/assets/images/designer_headboard_1795630223544.jpg',
  aboutWorkshop: '/src/assets/images/about_mattress_clean_1795633064930.jpg',
  wpFlutedWoodOak: '/src/assets/images/wp_fluted_wood_oak_1795633289862.jpg',
  wpGeometricPanels: '/src/assets/images/wp_geometric_panels_1795633291349.jpg',
  wpWoodUpholsteryCombo: '/src/assets/images/wp_wood_upholstery_combo_1795633290780.jpg',
  wpFullWallPadded: '/src/assets/images/wp_full_wall_padded_1795633291261.jpg',
  hbTallChannelPadded: '/src/assets/images/hb_tall_channel_padded_1795633292763.jpg',
  hbDiamondTufted: '/src/assets/images/hb_diamond_tufted_1795633292405.jpg',
  hbMinimalistFabric: '/src/assets/images/hb_minimalist_fabric_1795633293395.jpg',
  hbContemporaryWood: '/src/assets/images/hb_contemporary_wood_1795633294034.jpg',
  hbFullWidthWallMounted: '/src/assets/images/hb_full_width_wall_mounted_1795633294068.jpg',
} as const;

export const MATTRESS_SIZES = [
  '36 × 72 inches',
  '36 × 75 inches',
  '48 × 72 inches',
  '48 × 75 inches',
  '60 × 72 inches',
  '60 × 75 inches',
  '72 × 75 inches',
  '72 × 78 inches',
] as const;

export const MATTRESS_THICKNESSES = [
  '4 inches',
  '5 inches',
  '6 inches',
  '7 inches',
  '8 inches',
] as const;

export const MATTRESS_MODELS: MattressProduct[] = [
  {
    id: 'hr-foam-mattress',
    slug: 'hr-foam-mattress',
    name: 'HR Foam Mattress',
    categoryLabel: 'High-Resilience Comfort',
    feel: 'Responsive Medium-Plush',
    warranty: '15-year warranty (as specified in product brochure)',
    shortDescription:
      'Experience comfortable cushioning and responsive support with our high-resilience foam mattress.',
    fullDescription:
      'Crafted for everyday resilience and plush body-contouring comfort, the Reliable HR Foam Mattress combines a breathable quilted cover with high-resilience foam engineered to recover its shape night after night.',
    features: [
      'Responsive foam support',
      'Designed to maintain shape',
      'Comfortable sleeping surface',
      'Multiple size and thickness options',
      '15-year warranty as specified in the product brochure',
    ],
    constructionLayers: [
      'Quilted Mattress Cover',
      'HR Foam Layer',
      'Support Foam Base',
    ],
    availableSizes: [...MATTRESS_SIZES],
    availableThicknesses: ['4 inches', '5 inches', '6 inches', '7 inches', '8 inches'],
    priceDisplay: 'Contact for Price',
    image: ASSETS.hrFoamMattress,
    alt: 'Reliable HR Foam Mattress featuring white quilted top and charcoal-navy side border in a sunlit bedroom',
  },
  {
    id: 'orthopedic-mattress',
    slug: 'orthopedic-mattress',
    name: 'Orthopedic Mattress',
    categoryLabel: 'Orthopedic Support Speciality',
    feel: 'Firm & Supportive',
    warranty: '5-year warranty for the rebonded model (as specified in brochure)',
    shortDescription:
      'Discover firm, supportive mattress construction designed to provide targeted body support and a comfortable sleeping experience.',
    fullDescription:
      'Built on six years of orthopedic mattress manufacturing experience, our Orthopedic Mattress pairs a high-density rebonded foam core with balanced surface cushioning to deliver steady, reliable alignment and firmness.',
    features: [
      'Support-focused construction',
      'Firm and stable feel',
      'Rebonded foam construction',
      'Multiple thickness options',
      '5-year warranty for the rebonded model as specified in the brochure',
    ],
    constructionLayers: [
      'Quilted Mattress Cover',
      'Rebonded Foam Core',
      'Support Foam Base',
    ],
    availableSizes: [...MATTRESS_SIZES],
    availableThicknesses: ['4 inches', '5 inches', '6 inches', '7 inches', '8 inches'],
    priceDisplay: 'Contact for Price',
    image: ASSETS.orthopedicMattress,
    alt: 'Reliable Orthopedic Mattress with precision euro-top quilting and burgundy piping on a warm oak bed frame',
  },
  {
    id: 'rebonded-mattress',
    slug: 'rebonded-mattress',
    name: 'Rebonded Mattress',
    categoryLabel: 'High-Density Core',
    feel: 'Firm & Structured',
    warranty: 'Available on enquiry (contact for model warranty details)',
    shortDescription:
      'Built with a high-density rebonded foam core, designed for firm support, stability and durability.',
    fullDescription:
      'Designed for sleepers who prefer dependable firmness and zero sagging over years of use, our Rebonded Mattress features a dense rebonded core finished with a soft top foam sheet and a stable bottom layer.',
    features: [
      'High-density rebonded foam',
      'Soft top foam sheet',
      'Stable bottom foam layer',
      'Durable construction',
      'Multiple thickness options',
    ],
    constructionLayers: [
      'Quilted Mattress Cover',
      'Soft Top Foam Sheet',
      'Rebonded Foam Core',
      'Support Foam Base',
    ],
    availableSizes: [...MATTRESS_SIZES],
    availableThicknesses: ['4 inches', '5 inches', '6 inches', '7 inches'],
    priceDisplay: 'Contact for Price',
    image: ASSETS.rebondedMattress,
    alt: 'Reliable Rebonded Mattress showcasing crisp diamond-quilted top and structured navy-trimmed profile',
  },
  {
    id: 'natural-latex-mattress',
    slug: 'natural-latex-mattress',
    name: 'Natural Latex Mattress',
    categoryLabel: 'Breathable Natural Comfort',
    feel: 'Buoyant & Breathable',
    warranty: '7-year warranty (as specified in product brochure)',
    shortDescription:
      'Enjoy a breathable, responsive sleeping surface with a thoughtfully designed combination of natural latex and supportive foam layers.',
    fullDescription:
      'Our Natural Latex Mattress combines an airy, pin-core natural latex comfort layer with supportive base foams to offer cool breathability, gentle buoyancy, and reduced motion transfer across the bed.',
    features: [
      'Natural latex comfort layer',
      'Breathable construction',
      'Responsive comfort',
      'Reduced motion transfer',
      '7-year warranty as specified in the brochure',
    ],
    constructionLayers: [
      'Quilted Mattress Cover',
      'Natural Latex Layer',
      'HR Foam Layer',
      'Support Foam Base',
    ],
    availableSizes: [...MATTRESS_SIZES],
    availableThicknesses: ['5 inches', '6 inches', '7 inches', '8 inches'],
    priceDisplay: 'Contact for Price',
    image: ASSETS.naturalLatexMattress,
    alt: 'Reliable Natural Latex Mattress with organic stretch-knit quilted top and linen-toned side gusset',
  },
];

export const MATTRESS_LAYERS: MattressLayerInfo[] = [
  {
    id: 'quilted-cover',
    name: 'Quilted Mattress Cover',
    role: 'Outer Breathable Finish',
    description:
      'Soft, tailored quilted fabric outer layer designed for breathable surface comfort and neat edge durability.',
    usedInModels: [
      'HR Foam Mattress',
      'Orthopedic Mattress',
      'Rebonded Mattress',
      'Natural Latex Mattress',
    ],
  },
  {
    id: 'natural-latex',
    name: 'Natural Latex Layer',
    role: 'Breathable Buoyant Comfort',
    description:
      'Perforated natural latex layer delivering airflow, responsive cushioning, and reduced partner motion transfer.',
    usedInModels: ['Natural Latex Mattress'],
  },
  {
    id: 'hr-foam',
    name: 'HR Foam Layer',
    role: 'Adaptive Resilience',
    description:
      'High-resilience foam engineered to contour gently while springing back cleanly to help preserve mattress shape.',
    usedInModels: ['HR Foam Mattress', 'Natural Latex Mattress'],
  },
  {
    id: 'rebonded-core',
    name: 'Rebonded Foam Core',
    role: 'Firm Orthopedic Stability',
    description:
      'High-density compressed rebonded foam core built for firm posture support, structural stability, and long-term durability.',
    usedInModels: ['Orthopedic Mattress', 'Rebonded Mattress'],
  },
  {
    id: 'support-base',
    name: 'Support Foam Base',
    role: 'Foundation Layer',
    description:
      'Stable foundational foam base that anchors upper comfort layers and supports consistent weight distribution.',
    usedInModels: [
      'HR Foam Mattress',
      'Orthopedic Mattress',
      'Rebonded Mattress',
      'Natural Latex Mattress',
    ],
  },
];

export const SOFA_CATEGORIES: SofaCategoryItem[] = [
  {
    id: 'sofa-sets',
    name: 'Sofa Sets',
    categoryLabel: 'Living Room Suites',
    shortDescription:
      'Coordinated multi-seater sofa sets crafted for everyday comfort, balanced proportions, and inviting living spaces.',
    fullDescription:
      'Designed as cohesive centrepieces for family living rooms, our Sofa Sets offer tailored upholstery, supportive seating cushions, and timeless silhouettes.',
    highlights: [
      'Coordinated 3+1+1 and 3+2 configurations',
      'Custom fabric & shade options on enquiry',
      'Supportive foam seating built for daily use',
    ],
    image: ASSETS.sofaSet,
    alt: 'Contemporary upholstered three-seater and armchair sofa set in warm oatmeal fabric',
  },
  {
    id: 'sofa-cum-beds',
    name: 'Sofa Cum Beds',
    categoryLabel: 'Dual-Purpose Seating',
    shortDescription:
      'Space-smart convertible sofa cum beds that transition effortlessly from daytime seating to restful guest sleeping.',
    fullDescription:
      'Ideal for compact apartments, guest rooms, and multi-use lounges, our Sofa Cum Beds combine comfortable daytime seating with a supportive fold-out sleeping surface.',
    highlights: [
      'Smooth seating-to-bed conversion',
      'Supportive foam sleep surface',
      'Clean contemporary upholstery',
    ],
    image: ASSETS.sofaCumBed,
    alt: 'Modern stone-grey convertible sofa cum bed with pull-out sleeper base',
  },
  {
    id: 'lounger-sofas',
    name: 'Lounger Sofas',
    categoryLabel: 'Extended Chaise Comfort',
    shortDescription:
      'Relaxed lounger sofas featuring an extended chaise section designed for stretching out in comfort.',
    fullDescription:
      'Our Lounger Sofas pair crisp modern tailoring with generous chaise depth, giving you a dedicated place to unwind after long days.',
    highlights: [
      'Left or right chaise layout options',
      'Deep cushioned comfort',
      'Tailored modern armrests and upholstery',
    ],
    image: ASSETS.loungerSofa,
    alt: 'Slate-navy textured bouclé lounger sofa with extended chaise in a modern living room',
  },
  {
    id: 'corner-sofas',
    name: 'Corner Sofas',
    categoryLabel: 'Spacious Room Layouts',
    shortDescription:
      'Generously proportioned corner sofas crafted to anchor open-plan rooms and accommodate family gatherings.',
    fullDescription:
      'Built to make smart use of room corners while creating generous shared seating, our Corner Sofas bring cohesive comfort to spacious living areas.',
    highlights: [
      'Maximizes corner floor space',
      'Plush wraparound seating capacity',
      'Custom sizing options available on enquiry',
    ],
    image: ASSETS.cornerSofa,
    alt: 'Spacious ivory woven corner sofa styled in a sunlit living room',
  },
  {
    id: 'l-shape-sofas',
    name: 'L-Shape Sofas',
    categoryLabel: 'Architectural Sectionals',
    shortDescription:
      'Clean-lined L-shape sectional sofas balancing modern architectural aesthetics with comfortable everyday seating.',
    fullDescription:
      'Our L-Shape Sofas frame your living room naturally, offering structured back support, generous seating depth, and refined upholstery finishes.',
    highlights: [
      'Modular sectional proportions',
      'Balanced back and seat cushioning',
      'Choice of fabrics and finishes on enquiry',
    ],
    image: ASSETS.lShapeSofa,
    alt: 'Sleek warm taupe-grey L-shape sectional sofa in an architectural living space',
  },
  {
    id: 'chesterfield-sofas',
    name: 'Chesterfield Sofas',
    categoryLabel: 'Classic Deep-Tufted Craft',
    shortDescription:
      'Statement Chesterfield sofas featuring classic deep button-tufting, scrolled arms, and rich tailored upholstery.',
    fullDescription:
      'Honouring classic upholstery craftsmanship, our Chesterfield Sofas bring unmistakable character, deep diamond tufting, and supportive seating to formal lounges and living rooms.',
    highlights: [
      'Traditional deep-buttoned tufting',
      'Signature rolled arm profile',
      'Velvet and classic upholstery options on enquiry',
    ],
    image: ASSETS.chesterfieldSofa,
    alt: 'Deep burgundy velvet Chesterfield sofa with diamond tufting and rolled arms',
  },
  {
    id: 'bubble-sofas',
    name: 'Bubble Sofas',
    categoryLabel: 'Sculptural Designer Forms',
    shortDescription:
      'Sculptural, softly rounded bubble sofas crafted for contemporary interiors seeking plush texture and bold silhouette.',
    fullDescription:
      'Featuring organic tufted contours and tactile woven fabrics, our Bubble Sofas offer a distinct designer statement without compromising cozy comfort.',
    highlights: [
      'Signature rounded tufted silhouette',
      'Plush cloud-like seat profile',
      'Available in custom neutral and statement tones',
    ],
    image: ASSETS.bubbleSofa,
    alt: 'Sculptural warm-cream bouclé bubble sofa in an airy contemporary interior',
  },
];

export const BED_INTERIOR_CATEGORIES: BedInteriorItem[] = [
  {
    id: 'designer-beds',
    name: 'Designer Beds',
    categoryGroup: 'Beds',
    shortDescription:
      'Architectural bed frames crafted to pair seamlessly with Reliable orthopedic and foam mattresses.',
    fullDescription:
      'Engineered for sturdy mattress support and refined bedroom aesthetics, our Designer Beds elevate modern master suites and guest bedrooms alike.',
    highlights: [
      'Tailored proportions for standard mattress sizes',
      'Sturdy structural bed base',
      'Custom finish and upholstery consultations',
    ],
    image: ASSETS.designerBed,
    alt: 'Contemporary master bedroom featuring a designer upholstered bed with tall channel-tufted headboard',
  },
  {
    id: 'upholstered-beds',
    name: 'Upholstered Beds',
    categoryGroup: 'Beds',
    shortDescription:
      'Softly padded upholstered bed frames wrapped in durable woven and velvet-touch fabrics.',
    fullDescription:
      'Our Upholstered Beds soften bedroom acoustics and visual lines with padded rails, clean tailoring, and comfortable cushioned backrests for reading or relaxing.',
    highlights: [
      'Softly padded upholstered side rails',
      'Rich woven, linen-look, or suede finishes',
      'Designed to complement our mattress range',
    ],
    image: ASSETS.upholsteredBed,
    alt: 'Warm stone-oatmeal upholstered bed frame paired with a crisp white quilted Reliable mattress',
  },
  {
    id: 'premium-headboards',
    name: 'Premium Headboards',
    categoryGroup: 'Headboards',
    shortDescription:
      'Plush cushioned headboards offering comfortable upright support and refined tailored stitching.',
    fullDescription:
      'Upgrade an existing bed or complete a new bedroom setup with our Premium Headboards, built with supportive foam padding and durable upholstery.',
    highlights: [
      'Comfortable cushioned backrest support',
      'Custom height and width options',
      'Precision piping and panel stitching',
    ],
    image: ASSETS.premiumHeadboard,
    alt: 'Plush warm-grey upholstered headboard with crisp tailored piping and panel stitching',
  },
  {
    id: 'designer-headboards',
    name: 'Designer Headboards',
    categoryGroup: 'Headboards',
    shortDescription:
      'Oversized, curved, and channel-tufted designer headboards that act as an architectural focal point.',
    fullDescription:
      'From dramatic curved profiles to vertical fluted detailing, our Designer Headboards turn the bed wall into a bespoke sanctuary.',
    highlights: [
      'Statement architectural silhouettes',
      'Curved, winged, and fluted styles',
      'Tailored fabric selection on enquiry',
    ],
    image: ASSETS.designerHeadboard,
    alt: 'Bespoke deep navy curved designer headboard with crisp piping in a luxury bedroom',
  },
  {
    id: 'wall-panelling',
    name: 'Wall Panelling',
    categoryGroup: 'Wall Panelling',
    shortDescription:
      'Bespoke upholstered bedroom wall panelling adding warmth, acoustic softness, and cohesive interior styling.',
    fullDescription:
      'Our custom Wall Panelling solutions transform bedroom feature walls with floor-to-ceiling or headboard-integrated upholstered panels tailored to your room dimensions.',
    highlights: [
      'Made-to-measure bedroom wall layouts',
      'Vertical, geometric, and flush panel designs',
      'Pairs directly with bespoke headboards and beds',
    ],
    image: ASSETS.wallPanelling,
    alt: 'Floor-to-ceiling vertical upholstered suede wall panelling behind an integrated designer bed',
  },
];

export const HEADBOARDS_GALLERY: InteriorShowcaseItem[] = [
  {
    id: 'hb-gal-tall-channel',
    title: 'Tall Luxury Channel-Tufted Headboard',
    styleTag: 'Vertical Channel-Tufted · Tall Padded',
    description:
      'Oversized vertical channel-tufted velvet padding rising cleanly behind the bed as an architectural statement.',
    image: ASSETS.hbTallChannelPadded,
    alt: 'Oversized tall vertical channel-tufted charcoal velvet headboard with brass bedside sconces',
    enquiryProductName: 'Tall Channel-Tufted Headboard',
  },
  {
    id: 'hb-gal-curved-rounded',
    title: 'Curved & Rounded Designer Headboard',
    styleTag: 'Curved Silhouette · Tailored Piping',
    description:
      'Gently sweeping curved edges wrapped in plush upholstery with contrasting precision edge piping.',
    image: ASSETS.designerHeadboard,
    alt: 'Bespoke deep navy curved designer headboard with crisp tailored piping in a luxury bedroom',
    enquiryProductName: 'Curved Designer Headboard',
  },
  {
    id: 'hb-gal-diamond-tufted',
    title: 'Classic Diamond-Tufted Headboard',
    styleTag: 'Diamond-Tufted · Deep Buttoning',
    description:
      'Traditional hand-pleated diamond button tufting crafted in soft velvety upholstery for refined master suites.',
    image: ASSETS.hbDiamondTufted,
    alt: 'Champagne-taupe diamond-tufted headboard with deep buttoning behind crisp white hotel pillows',
    enquiryProductName: 'Diamond-Tufted Headboard',
  },
  {
    id: 'hb-gal-modern-upholstered',
    title: 'Modern Upholstered Panel Headboard',
    styleTag: 'Modern Upholstered · Structured Stitch',
    description:
      'Crisp vertical panel stitching with generous foam cushioning built for comfortable everyday leaning support.',
    image: ASSETS.premiumHeadboard,
    alt: 'Plush warm-grey modern upholstered headboard with subtle vertical panel stitching',
    enquiryProductName: 'Modern Upholstered Headboard',
  },
  {
    id: 'hb-gal-minimalist-fabric',
    title: 'Minimalist Woven Fabric Headboard',
    styleTag: 'Minimalist Fabric · Rounded Corners',
    description:
      'Clean low-profile stone-oatmeal woven upholstery tailored for calm, sunlit contemporary bedrooms.',
    image: ASSETS.hbMinimalistFabric,
    alt: 'Minimalist stone-oatmeal woven fabric headboard with rounded corners in a bright bedroom',
    enquiryProductName: 'Minimalist Fabric Headboard',
  },
  {
    id: 'hb-gal-contemporary-wood',
    title: 'Contemporary Wooden & Cushion Headboard',
    styleTag: 'Contemporary Wood · Integrated Pads',
    description:
      'Rich horizontal walnut and oak grain paired with removable linen backrest cushions and floating bedside ledges.',
    image: ASSETS.hbContemporaryWood,
    alt: 'Contemporary walnut and oak architectural wooden headboard with integrated linen cushion pads',
    enquiryProductName: 'Contemporary Wooden Headboard',
  },
  {
    id: 'hb-gal-full-width',
    title: 'Full-Width Wall-Mounted Designer Headboard',
    styleTag: 'Wall-Mounted · Full-Width Span',
    description:
      'Expansive wall-mounted bouclé headboard framing both bed and nightstands with subtle warm perimeter illumination.',
    image: ASSETS.hbFullWidthWallMounted,
    alt: 'Full-width wall-mounted slate-grey bouclé headboard spanning across both floating nightstands',
    enquiryProductName: 'Full-Width Wall-Mounted Headboard',
  },
];

export const WALL_PANELLING_GALLERY: InteriorShowcaseItem[] = [
  {
    id: 'wp-gal-luxury-upholstered',
    title: 'Luxury Vertical Upholstered Wall Panels',
    styleTag: 'Luxury Upholstered · Acoustic Warmth',
    description:
      'Full-height cushioned vertical suede panels designed to soften acoustics and frame the master bed wall.',
    image: ASSETS.wallPanelling,
    alt: 'Floor-to-ceiling vertical upholstered suede wall panelling behind an integrated designer bed',
    enquiryProductName: 'Luxury Upholstered Wall Panelling',
  },
  {
    id: 'wp-gal-fluted-wood',
    title: 'Vertical Fluted Wooden Panelling',
    styleTag: 'Fluted Wood · Natural Oak Grain',
    description:
      'Precision-spaced vertical oak ribs bringing architectural depth, shadow play, and natural warmth behind the bed.',
    image: ASSETS.wpFlutedWoodOak,
    alt: 'Floor-to-ceiling vertical fluted warm natural oak wooden wall panelling behind a modern bed',
    enquiryProductName: 'Vertical Fluted Wooden Wall Panelling',
  },
  {
    id: 'wp-gal-geometric',
    title: 'Modern Geometric Padded Wall Panelling',
    styleTag: 'Modern Geometric · Fabric-Textured',
    description:
      'Interlocking beveled rectangular fabric panels arranged in an asymmetric accent wall composition.',
    image: ASSETS.wpGeometricPanels,
    alt: 'Modern geometric padded bedroom wall panelling in stone-taupe and charcoal woven linen',
    enquiryProductName: 'Modern Geometric Wall Panelling',
  },
  {
    id: 'wp-gal-wood-combo',
    title: 'Contemporary Wood & Upholstered Combo',
    styleTag: 'Wood & Fabric · Cove Lit Accent',
    description:
      'Warm walnut timber slats flanking wide fabric-textured upholstered center panels behind the headboard.',
    image: ASSETS.wpWoodUpholsteryCombo,
    alt: 'Walnut timber slats combined with charcoal fabric-textured upholstered bedroom wall panels',
    enquiryProductName: 'Wood & Upholstered Wall Panelling',
  },
  {
    id: 'wp-gal-full-wall-padded',
    title: 'Full-Wall Decorative Grid Panelling',
    styleTag: 'Full-Wall Padded · Plush Suede',
    description:
      'Wall-to-wall cushioned grid-tufted bedroom panels tailored to room height for seamless luxury hotel comfort.',
    image: ASSETS.wpFullWallPadded,
    alt: 'Full-wall decorative grid-tufted charcoal suede bedroom wall panelling behind a white mattress',
    enquiryProductName: 'Full-Wall Decorative Padded Panelling',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-hero-mattress',
    title: 'Quilted Luxury Orthopedic Suite',
    category: 'Orthopedic Mattresses',
    subtitle: 'Support-focused quilted construction',
    image: ASSETS.heroMattress,
    alt: 'Luxury white quilted orthopedic mattress in a sunlit contemporary bedroom',
    enquiryProductName: 'Orthopedic Mattress',
  },
  {
    id: 'gal-hr-foam',
    title: 'HR Foam Mattress',
    category: 'Mattresses',
    subtitle: 'High-resilience comfort · 15-year brochure warranty',
    image: ASSETS.hrFoamMattress,
    alt: 'HR Foam Mattress with plush knitted top and navy side gusset',
    enquiryProductName: 'HR Foam Mattress',
  },
  {
    id: 'gal-ortho',
    title: 'Orthopedic Mattress',
    category: 'Orthopedic Mattresses',
    subtitle: 'Firm targeted support · Rebonded foam core',
    image: ASSETS.orthopedicMattress,
    alt: 'Orthopedic Mattress with burgundy edge piping on oak frame',
    enquiryProductName: 'Orthopedic Mattress',
  },
  {
    id: 'gal-rebonded',
    title: 'Rebonded Mattress',
    category: 'Mattresses',
    subtitle: 'High-density core · Durable firm feel',
    image: ASSETS.rebondedMattress,
    alt: 'Rebonded Mattress with diamond-quilted cover and firm structural profile',
    enquiryProductName: 'Rebonded Mattress',
  },
  {
    id: 'gal-latex',
    title: 'Natural Latex Mattress',
    category: 'Mattresses',
    subtitle: 'Breathable latex · 7-year brochure warranty',
    image: ASSETS.naturalLatexMattress,
    alt: 'Natural Latex Mattress featuring breathable organic knit cover',
    enquiryProductName: 'Natural Latex Mattress',
  },
  {
    id: 'gal-chesterfield',
    title: 'Chesterfield Sofa',
    category: 'Sofas',
    subtitle: 'Deep button-tufted upholstery',
    image: ASSETS.chesterfieldSofa,
    alt: 'Deep burgundy Chesterfield sofa with rolled arms in a refined salon',
    enquiryProductName: 'Chesterfield Sofa',
  },
  {
    id: 'gal-lshape',
    title: 'L-Shape Sectional Sofa',
    category: 'Sofas',
    subtitle: 'Architectural living room seating',
    image: ASSETS.lShapeSofa,
    alt: 'Modern L-shape sectional sofa in warm taupe-grey performance fabric',
    enquiryProductName: 'L-Shape Sofa',
  },
  {
    id: 'gal-bubble',
    title: 'Sculptural Bubble Sofa',
    category: 'Sofas',
    subtitle: 'Plush modular tufted silhouette',
    image: ASSETS.bubbleSofa,
    alt: 'Contemporary cream bouclé bubble sofa in an airy living room',
    enquiryProductName: 'Bubble Sofa',
  },
  {
    id: 'gal-sofa-set',
    title: 'Coordinated Sofa Set',
    category: 'Sofas',
    subtitle: 'Tailored living room suite',
    image: ASSETS.sofaSet,
    alt: 'Oatmeal woven three-seater sofa and matching armchair',
    enquiryProductName: 'Sofa Sets',
  },
  {
    id: 'gal-bed',
    title: 'Channel-Tufted Upholstered Bed',
    category: 'Beds',
    subtitle: 'Designer bed & tall fluted frame',
    image: ASSETS.designerBed,
    alt: 'Contemporary master bedroom with channel-tufted upholstered bed',
    enquiryProductName: 'Designer Beds',
  },
  {
    id: 'gal-headboard',
    title: 'Curved Navy Designer Headboard',
    category: 'Headboards',
    subtitle: 'Bespoke upholstered focal wall',
    image: ASSETS.designerHeadboard,
    alt: 'Deep navy curved designer headboard with tailored piping',
    enquiryProductName: 'Designer Headboards',
  },
  {
    id: 'gal-wall-panel',
    title: 'Vertical Upholstered Wall Panelling',
    category: 'Wall Panelling',
    subtitle: 'Floor-to-ceiling bedroom panelling',
    image: ASSETS.wallPanelling,
    alt: 'Vertical suede upholstered bedroom wall panelling with warm lighting',
    enquiryProductName: 'Wall Panelling',
  },
];

export function buildWhatsAppEnquiryUrl(params: {
  productName: string;
  size?: string;
  thickness?: string;
  customMessage?: string;
}): string {
  const { productName, size, thickness, customMessage } = params;

  let message: string;
  if (customMessage) {
    message = customMessage;
  } else if (size && thickness) {
    message = `Hello Reliable Mattresses & Furniture, I am interested in ${productName}. My preferred size is ${size} and thickness is ${thickness}. Please share the details and price.`;
  } else {
    message = `Hello Reliable Mattresses & Furniture, I am interested in ${productName}. Please share the details and price.`;
  }

  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
