// Constants and data for the Prabha luxury website

export const BRAND = {
  name: 'Prabha',
  tagline: 'Premium Tiles • Sanitaryware • Luxury Bath Spaces',
  description: 'One of the trusted destinations in West Bengal for premium bathroom and architectural products with an extensive collection of Jaquar products, tiles, marble, granite, bath fittings and luxury interior solutions.',
  phone: '08040006864',
  whatsapp: '08040006864',
  email: 'info@prabha.in',
  address: {
    line1: '11/8 G.T. Road',
    line2: 'Near Fire Station',
    city: 'Konnagar',
    state: 'West Bengal',
    pin: '712235',
    country: 'India'
  },
  rating: 4.7,
  reviewCount: 240,
  mapUrl: 'https://maps.google.com/?q=11/8+GT+Road+Konnagar+West+Bengal',
  hours: {
    weekdays: '10:00 AM – 8:00 PM',
    saturday: '10:00 AM – 8:00 PM',
    sunday: '10:00 AM – 2:00 PM'
  }
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Tiles', href: '/tiles' },
  { label: 'Sanitaryware', href: '/sanitaryware' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const COLLECTIONS = [
  {
    id: 'luxury-tiles',
    title: 'Luxury Tiles',
    subtitle: 'Italian Marble • Porcelain • Large Format',
    description: 'Curated collection of premium Italian marble, porcelain tiles, and large format slabs for architectural excellence.',
    image: '/images/marble-collection.jpg',
    href: '/tiles',
    count: 450,
  },
  {
    id: 'designer-faucets',
    title: 'Designer Faucets',
    subtitle: 'Jaquar • Chrome • Matte Black',
    description: 'Precision-engineered luxury faucets from Jaquar with flawless chrome and matte finishes.',
    image: '/images/luxury-faucet.jpg',
    href: '/sanitaryware',
    count: 280,
  },
  {
    id: 'wash-basins',
    title: 'Designer Basins',
    subtitle: 'Countertop • Wall Mounted • Pedestal',
    description: 'Statement wash basins that transform bathrooms into architectural masterpieces.',
    image: '/images/designer-basin.jpg',
    href: '/sanitaryware',
    count: 160,
  },
  {
    id: 'shower-systems',
    title: 'Luxury Showers',
    subtitle: 'Rainfall • Thermostatic • Body Jets',
    description: 'Premium shower systems engineered for the ultimate bathing experience.',
    image: '/images/luxury-shower.jpg',
    href: '/sanitaryware',
    count: 120,
  },
  {
    id: 'granite',
    title: 'Premium Granite',
    subtitle: 'Black Galaxy • Absolute Black • Kashmir White',
    description: 'Natural granite sourced from the finest quarries for timeless architectural surfaces.',
    image: '/images/granite-texture.jpg',
    href: '/tiles',
    count: 85,
  },
  {
    id: 'bathroom-spaces',
    title: 'Bathroom Spaces',
    subtitle: 'Complete Solutions • Design to Installation',
    description: 'Complete luxury bathroom solutions from concept to creation.',
    image: '/images/hero-bathroom.jpg',
    href: '/bathroom-ideas',
    count: 45,
  },
] as const;

export const STATS = [
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 5000, suffix: '+', label: 'Products Available' },
  { value: 240, suffix: '+', label: 'Happy Customers' },
  { value: 4.7, suffix: '★', label: 'Google Rating' },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Architect',
    quote: 'Exceptional collection of premium tiles and sanitaryware. The Jaquar range is outstanding. Prabha has become our go-to destination for every project.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ananya Chatterjee',
    role: 'Interior Designer',
    quote: 'The quality of products and professional guidance at Prabha is unmatched. Their marble collection rivals any showroom in Kolkata.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Suresh Patel',
    role: 'Homeowner',
    quote: 'Excellent collection and professional staff. They helped us design our entire bathroom with premium Jaquar products. Outstanding customer service.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Priya Banerjee',
    role: 'Homeowner',
    quote: 'Premium Jaquar products with outstanding customer service. One of the best tile and sanitaryware showrooms in West Bengal.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Arjun Ghosh',
    role: 'Contractor',
    quote: 'We have been sourcing from Prabha for over 8 years. Their range, quality, and pricing are the best in the region. Truly a premium destination.',
    rating: 5,
  },
] as const;

export const PRODUCT_CATEGORIES = [
  { name: 'Wall Tiles', slug: 'wall-tiles', count: 180 },
  { name: 'Floor Tiles', slug: 'floor-tiles', count: 150 },
  { name: 'Large Format Slabs', slug: 'large-format', count: 60 },
  { name: 'Italian Marble', slug: 'italian-marble', count: 45 },
  { name: 'Granite', slug: 'granite', count: 85 },
  { name: 'Outdoor Tiles', slug: 'outdoor-tiles', count: 40 },
  { name: 'Faucets', slug: 'faucets', count: 280 },
  { name: 'Wash Basins', slug: 'wash-basins', count: 160 },
  { name: 'Toilets', slug: 'toilets', count: 90 },
  { name: 'Shower Systems', slug: 'shower-systems', count: 120 },
  { name: 'Bathtubs', slug: 'bathtubs', count: 35 },
  { name: 'Accessories', slug: 'accessories', count: 200 },
] as const;

export const FINISHES = [
  { name: 'Chrome', color: '#C0C0C0' },
  { name: 'Matte Black', color: '#1a1a1a' },
  { name: 'Brushed Gold', color: '#C9A96E' },
  { name: 'Brushed Nickel', color: '#A8A8A8' },
  { name: 'Rose Gold', color: '#B76E79' },
  { name: 'Antique Brass', color: '#8B7355' },
] as const;

export const FAQ_DATA = [
  {
    question: 'What brands do you offer?',
    answer: 'We are an Authorised Jaquar Dealer and also carry premium tiles from leading Italian and Indian manufacturers, including marble, granite, and porcelain collections from the finest quarries and factories worldwide.'
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Yes, we provide complete installation support through our network of certified professionals. From tiles to complete bathroom installations, we ensure every product is installed to the highest standards.'
  },
  {
    question: 'Can I visit the showroom?',
    answer: 'Absolutely. Our showroom at 11/8 G.T. Road, Konnagar is open Monday to Saturday 10AM-8PM and Sunday 10AM-2PM. We recommend booking a consultation for a personalized experience.'
  },
  {
    question: 'Do you offer architect and dealer pricing?',
    answer: 'Yes, we have special pricing programs for architects, interior designers, and dealers. Please register through our Architect Zone or Dealer Zone for exclusive access.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 7 days of delivery for unused and undamaged products in original packaging. Custom orders and cut-to-size materials are non-returnable.'
  },
  {
    question: 'Do you deliver outside Konnagar?',
    answer: 'Yes, we deliver across West Bengal and can arrange shipping throughout India. Delivery timelines vary by location and product availability.'
  },
  {
    question: 'Can I order samples?',
    answer: 'Yes, we offer sample tiles and material swatches. Contact us or use the Request Sample feature on any product page to receive samples at your doorstep.'
  },
  {
    question: 'Do you provide design consultation?',
    answer: 'Yes, our team includes experienced design consultants who can help you select the perfect materials and products for your space. Book a free consultation through our website or by calling us.'
  },
] as const;
