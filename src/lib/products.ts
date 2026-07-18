// Product data for Phase 2 — static data (replace with DB in production)

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  mrp: number;
  images: string[];
  finish: string;
  material: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  description: string;
  specs: Record<string, string>;
  featured: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'jaq-faucet-001', name: 'Jaquar Aria Single Lever Basin Mixer', slug: 'jaquar-aria-basin-mixer',
    category: 'Sanitaryware', subcategory: 'Faucets', brand: 'Jaquar', price: 8500, mrp: 12000,
    images: ['/images/luxury-faucet.jpg'], finish: 'Chrome', material: 'Brass',
    sizes: ['Standard'], colors: ['Chrome', 'Matte Black', 'Brushed Gold'], inStock: true,
    rating: 4.8, reviews: 45, featured: true,
    description: 'Precision-engineered single lever basin mixer with ceramic disc cartridge and aerator for optimal water flow.',
    specs: { 'Height': '180mm', 'Spout Reach': '120mm', 'Cartridge': 'Ceramic Disc 40mm', 'Flow Rate': '8 L/min', 'Warranty': '10 Years' },
  },
  {
    id: 'jaq-shower-001', name: 'Jaquar Rainfall Overhead Shower System', slug: 'jaquar-rainfall-shower',
    category: 'Sanitaryware', subcategory: 'Showers', brand: 'Jaquar', price: 22000, mrp: 28000,
    images: ['/images/luxury-shower.jpg'], finish: 'Chrome', material: 'Stainless Steel',
    sizes: ['200mm', '300mm'], colors: ['Chrome', 'Matte Black'], inStock: true,
    rating: 4.9, reviews: 32, featured: true,
    description: 'Ultra-thin 3mm rainfall shower head with air-infusion technology for a luxurious rain-like experience.',
    specs: { 'Head Size': '300mm', 'Thickness': '3mm', 'Spray': 'Rain', 'Technology': 'Air Infusion', 'Warranty': '10 Years' },
  },
  {
    id: 'basin-001', name: 'Oval Countertop Wash Basin', slug: 'oval-countertop-basin',
    category: 'Sanitaryware', subcategory: 'Basins', brand: 'Prabha Select', price: 15000, mrp: 18000,
    images: ['/images/designer-basin.jpg'], finish: 'Glossy White', material: 'Ceramic',
    sizes: ['600x400mm'], colors: ['White', 'Ivory'], inStock: true,
    rating: 4.7, reviews: 28, featured: true,
    description: 'Designer oval countertop basin crafted from premium vitreous china with high-gloss finish.',
    specs: { 'Dimensions': '600x400x150mm', 'Material': 'Vitreous China', 'Mounting': 'Countertop', 'Overflow': 'Yes', 'Warranty': '5 Years' },
  },
  {
    id: 'tile-marble-001', name: 'Calacatta Gold Italian Marble Slab', slug: 'calacatta-gold-marble',
    category: 'Tiles', subcategory: 'Italian Marble', brand: 'Imported', price: 450, mrp: 600,
    images: ['/images/marble-collection.jpg'], finish: 'Polished', material: 'Natural Marble',
    sizes: ['1200x600mm', '1200x1200mm', '2400x1200mm'], colors: ['White Gold'], inStock: true,
    rating: 4.9, reviews: 67, featured: true,
    description: 'Rare Calacatta Gold marble from Italian quarries with dramatic gold and grey veining on a pristine white base.',
    specs: { 'Origin': 'Italy', 'Thickness': '18mm', 'Finish': 'Polished', 'Application': 'Wall & Floor', 'Water Absorption': '<0.5%' },
  },
  {
    id: 'tile-granite-001', name: 'Absolute Black Galaxy Granite', slug: 'black-galaxy-granite',
    category: 'Tiles', subcategory: 'Granite', brand: 'Domestic', price: 180, mrp: 250,
    images: ['/images/granite-texture.jpg'], finish: 'Polished', material: 'Natural Granite',
    sizes: ['600x600mm', '600x300mm'], colors: ['Black Galaxy'], inStock: true,
    rating: 4.6, reviews: 53, featured: true,
    description: 'Premium Black Galaxy granite with golden copper flecks, quarried from the finest Indian deposits.',
    specs: { 'Origin': 'India', 'Thickness': '15mm', 'Finish': 'Polished', 'Hardness': 'Mohs 6-7', 'Density': '2.7 g/cm³' },
  },
  {
    id: 'tile-porcelain-001', name: 'Statuario Large Format Porcelain Slab', slug: 'statuario-porcelain-slab',
    category: 'Tiles', subcategory: 'Large Format', brand: 'Prabha Select', price: 320, mrp: 420,
    images: ['/images/marble-collection.jpg'], finish: 'Glossy', material: 'Porcelain',
    sizes: ['1200x2400mm', '800x1600mm'], colors: ['Statuario White'], inStock: true,
    rating: 4.8, reviews: 41, featured: false,
    description: 'Large format porcelain slab with Statuario marble effect. Seamless luxury for walls and floors.',
    specs: { 'Thickness': '9mm', 'Finish': 'Polished', 'Rectified': 'Yes', 'Frost Proof': 'Yes', 'Warranty': '15 Years' },
  },
  {
    id: 'jaq-toilet-001', name: 'Jaquar Bidspa Wall Hung Rimless WC', slug: 'jaquar-bidspa-wall-hung-wc',
    category: 'Sanitaryware', subcategory: 'Toilets', brand: 'Jaquar', price: 35000, mrp: 45000,
    images: ['/images/hero-bathroom.jpg'], finish: 'Glossy White', material: 'Ceramic',
    sizes: ['Standard'], colors: ['White'], inStock: true,
    rating: 4.9, reviews: 19, featured: true,
    description: 'Rimless wall-hung WC with integrated bidet, soft-close seat, and concealed cistern.',
    specs: { 'Type': 'Wall Hung', 'Flush': 'Dual 3/6L', 'Seat': 'Soft Close UF', 'Technology': 'Rimless', 'Warranty': '10 Years' },
  },
  {
    id: 'jaq-bathtub-001', name: 'Jaquar Kubix Freestanding Bathtub', slug: 'jaquar-kubix-freestanding-bathtub',
    category: 'Sanitaryware', subcategory: 'Bathtubs', brand: 'Jaquar', price: 85000, mrp: 110000,
    images: ['/images/hero-bathroom.jpg'], finish: 'Glossy White', material: 'Acrylic',
    sizes: ['1700x750mm'], colors: ['White', 'Matte White'], inStock: true,
    rating: 4.8, reviews: 12, featured: true,
    description: 'Luxurious freestanding acrylic bathtub with ergonomic design and integrated overflow.',
    specs: { 'Capacity': '280L', 'Material': 'Sanitary Acrylic', 'Drain': 'Pop-up Waste', 'Weight': '45kg', 'Warranty': '10 Years' },
  },
];

export const CATEGORIES = [
  { name: 'All', slug: 'all' },
  { name: 'Tiles', slug: 'tiles' },
  { name: 'Italian Marble', slug: 'italian-marble' },
  { name: 'Granite', slug: 'granite' },
  { name: 'Large Format', slug: 'large-format' },
  { name: 'Faucets', slug: 'faucets' },
  { name: 'Basins', slug: 'basins' },
  { name: 'Showers', slug: 'showers' },
  { name: 'Toilets', slug: 'toilets' },
  { name: 'Bathtubs', slug: 'bathtubs' },
];
