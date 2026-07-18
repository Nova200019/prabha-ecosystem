import os

base_dir = "/Users/soumyadipbanerjee/.gemini/antigravity/scratch/prabha/src/app"

files = {
    "about/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import { Award, ShieldCheck, Cog, Hammer, Lightbulb, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'About Prabha | Luxury Tiles & Sanitaryware',
  description: 'Discover the legacy of Prabha, your trusted destination for luxury tiles and sanitaryware.',
};

const VALUES = [
  { icon: Sparkles, title: 'Luxury', desc: 'Curated collections for exquisite spaces.' },
  { icon: ShieldCheck, title: 'Trust', desc: 'Building relationships through transparency.' },
  { icon: Cog, title: 'Engineering', desc: 'Precision in every product we offer.' },
  { icon: Hammer, title: 'Craftsmanship', desc: 'Celebrating artisanal excellence.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Bringing the latest trends to your home.' },
  { icon: Award, title: 'Elegance', desc: 'Timeless designs for modern living.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="py-24 md:py-32 lg:py-40 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="About Prabha" subtitle="Our Story" />
          <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
            <div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                For over a decade, Prabha has been synonymous with luxury and excellence in the world of tiles and sanitaryware. We believe that every space has a story, and we provide the finest materials to help you tell yours.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our curated collections from global brands, coupled with our expert team, ensure that your vision is transformed into a breathtaking reality.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/hero-bathroom.jpg" alt="Prabha Showroom" fill className="object-cover" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-24 md:py-32 lg:py-40 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Our Values" subtitle="What Drives Us" alignment="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {VALUES.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <GlassCard className="p-8 text-center flex flex-col items-center">
                  <val.icon className="w-12 h-12 text-gold mb-6" />
                  <h3 className="text-xl text-white font-medium mb-3">{val.title}</h3>
                  <p className="text-text-secondary">{val.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
""",
    "collections/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Collections | Prabha',
  description: 'Explore our complete range of luxury tiles, sanitaryware, and bath fittings.',
};

const CATEGORIES = [
  { name: 'Tiles', image: '/images/granite-texture.jpg', count: '1000+', link: '/tiles' },
  { name: 'Marble', image: '/images/marble-collection.jpg', count: '200+', link: '/tiles?cat=marble' },
  { name: 'Faucets', image: '/images/luxury-faucet.jpg', count: '500+', link: '/sanitaryware?cat=faucets' },
  { name: 'Basins', image: '/images/designer-basin.jpg', count: '300+', link: '/sanitaryware?cat=basins' },
  { name: 'Showers', image: '/images/luxury-shower.jpg', count: '150+', link: '/sanitaryware?cat=showers' },
  { name: 'Kitchen', image: '/images/hero-bathroom.jpg', count: '100+', link: '/kitchen' },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <ScrollReveal>
          <SectionHeader title="Our Collections" subtitle="Curated Elegance" alignment="center" />
          
          <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
            <button className="px-6 py-2 rounded-full border border-gold text-gold">All</button>
            <button className="px-6 py-2 rounded-full border border-border text-text-secondary hover:text-white transition-colors">Tiles</button>
            <button className="px-6 py-2 rounded-full border border-border text-text-secondary hover:text-white transition-colors">Sanitaryware</button>
            <button className="px-6 py-2 rounded-full border border-border text-text-secondary hover:text-white transition-colors">Wellness</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.1}>
                <Link href={cat.link}>
                  <GlassCard className="group overflow-hidden p-0 relative h-[400px]">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-2xl text-white font-medium mb-1">{cat.name}</h3>
                      <p className="text-gold text-sm uppercase tracking-wider">{cat.count} Products</p>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "tiles/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Luxury Tiles Collection | Prabha',
  description: 'Premium floor and wall tiles, marble, and granite.',
};

const PRODUCTS = [
  { name: 'Statuario Marble', size: '1200x2400mm', price: 'Premium', finish: 'High Gloss', image: '/images/marble-collection.jpg' },
  { name: 'Nero Marquina', size: '800x1600mm', price: 'Luxury', finish: 'Polished', image: '/images/granite-texture.jpg' },
  { name: 'Calacatta Gold', size: '1200x1200mm', price: 'Premium', finish: 'Satin', image: '/images/hero-bathroom.jpg' },
  { name: 'Travertine Classico', size: '600x1200mm', price: 'Standard', finish: 'Matte', image: '/images/marble-collection.jpg' },
];

export default function TilesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Tiles Collection" subtitle="Foundation of Elegance" />
          
          <div className="flex gap-8 mt-12">
            <aside className="w-64 hidden lg:block shrink-0">
              <GlassCard className="p-6 sticky top-32">
                <h3 className="text-white font-medium mb-4">Categories</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="text-gold">Wall Tiles</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Floor Tiles</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Outdoor</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Large Format</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Marble</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Granite</li>
                </ul>
              </GlassCard>
            </aside>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map((prod, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-0 overflow-hidden group">
                      <div className="relative h-[300px] w-full">
                        <Image src={prod.image} alt={prod.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl text-white mb-2">{prod.name}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                          <span>Size: {prod.size}</span>
                          <span>Finish: {prod.finish}</span>
                        </div>
                        <div className="mt-4 text-gold">{prod.price}</div>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "sanitaryware/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Luxury Sanitaryware & Bath Fittings | Prabha',
  description: 'Exquisite faucets, basins, showers, and accessories.',
};

const PRODUCTS = [
  { name: 'Gold Series Faucet', category: 'Faucets', finish: 'Brushed Gold', image: '/images/luxury-faucet.jpg' },
  { name: 'Artisan Basin', category: 'Basins', finish: 'Matte Black', image: '/images/designer-basin.jpg' },
  { name: 'Rain Shower System', category: 'Showers', finish: 'Chrome', image: '/images/luxury-shower.jpg' },
  { name: 'Freestanding Bathtub', category: 'Bathtubs', finish: 'Gloss White', image: '/images/hero-bathroom.jpg' },
];

export default function SanitarywarePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Sanitaryware" subtitle="Art of Bathing" />
          
          <div className="flex gap-8 mt-12">
            <aside className="w-64 hidden lg:block shrink-0">
              <GlassCard className="p-6 sticky top-32">
                <h3 className="text-white font-medium mb-4">Categories</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="text-gold">All Products</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Faucets</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Basins</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Toilets</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Showers</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Bathtubs</li>
                </ul>
              </GlassCard>
            </aside>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map((prod, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <GlassCard className="p-0 overflow-hidden group">
                      <div className="relative h-[300px] w-full bg-surface/50">
                        <Image src={prod.image} alt={prod.name} fill className="object-cover mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-gold uppercase tracking-widest mb-1">{prod.category}</p>
                        <h4 className="text-xl text-white mb-2">{prod.name}</h4>
                        <div className="text-sm text-text-secondary">
                          <span>Finish: {prod.finish}</span>
                        </div>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "jaquar/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Authorised Jaquar Dealer | Prabha',
  description: 'Discover the complete Jaquar and Artize collections at Prabha.',
};

export default function JaquarPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/luxury-shower.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm tracking-widest uppercase mb-6">Authorised Dealer</span>
            <h1 className="text-5xl md:text-7xl text-white font-light mb-6 tracking-tight">Jaquar <span className="text-text-secondary">Collection</span></h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light">Experience the perfect blend of technology, design, and unparalleled performance.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Featured Series" subtitle="Masterpieces of Design" alignment="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((item) => (
              <GlassCard key={item} className="p-0 overflow-hidden group">
                <div className="relative h-[400px]">
                  <Image src={item === 1 ? '/images/luxury-faucet.jpg' : item === 2 ? '/images/luxury-shower.jpg' : '/images/designer-basin.jpg'} alt="Jaquar Series" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl text-white mb-2">Artize Series {item}</h3>
                    <p className="text-text-secondary">Exquisite craftsmanship for luxury spaces.</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
""",
    "bathroom-ideas/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Bathroom Ideas & Inspiration | Prabha',
  description: 'Explore curated bathroom designs, from modern villas to spa-like retreats.',
};

const THEMES = [
  { name: 'Modern Villa', image: '/images/hero-bathroom.jpg', desc: 'Sleek lines and minimal aesthetics.' },
  { name: 'Luxury Apartment', image: '/images/marble-collection.jpg', desc: 'Opulent materials in compact spaces.' },
  { name: 'Hotel Bathroom', image: '/images/designer-basin.jpg', desc: 'Five-star luxury at home.' },
  { name: 'Spa Retreat', image: '/images/luxury-shower.jpg', desc: 'Calming spaces for rejuvenation.' },
  { name: 'Minimal', image: '/images/granite-texture.jpg', desc: 'Less is more philosophy.' },
  { name: 'Dark Luxury', image: '/images/luxury-faucet.jpg', desc: 'Moody atmospheres with gold accents.' },
];

export default function InspirationPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Inspiration Gallery" subtitle="Find Your Style" alignment="center" />
          
          <div className="flex justify-center gap-4 mt-8 mb-12 flex-wrap">
            {['All Styles', 'Modern', 'Classic', 'Minimal', 'Industrial'].map((style, i) => (
              <button key={style} className={`px-6 py-2 rounded-full border ${i === 0 ? 'border-gold text-gold' : 'border-border text-text-secondary hover:text-white transition-colors'}`}>
                {style}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {THEMES.map((theme, i) => (
              <ScrollReveal key={theme.name} delay={i * 0.1}>
                <GlassCard className="p-0 overflow-hidden group">
                  <div className="relative h-[450px] w-full">
                    <Image src={theme.image} alt={theme.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <h3 className="text-3xl text-white font-light mb-2">{theme.name}</h3>
                      <p className="text-text-secondary">{theme.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "projects/page.tsx": """import { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Our Projects | Prabha',
  description: 'View our portfolio of luxury residential and commercial projects.',
};

const PROJECTS = [
  { title: 'The Sapphire Residence', location: 'City Center', scope: 'Full Home', year: '2023', image: '/images/hero-bathroom.jpg', height: 'h-[600px]' },
  { title: 'Boutique Hotel Alpha', location: 'West End', scope: 'Bathrooms', year: '2023', image: '/images/marble-collection.jpg', height: 'h-[400px]' },
  { title: 'Minimalist Loft', location: 'Downtown', scope: 'Kitchen & Bath', year: '2022', image: '/images/granite-texture.jpg', height: 'h-[500px]' },
  { title: 'Estate Villa', location: 'Hills', scope: 'Full Home', year: '2022', image: '/images/designer-basin.jpg', height: 'h-[450px]' },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Our Projects" subtitle="Portfolio of Excellence" />
          
          <div className="columns-1 md:columns-2 gap-8 mt-12 space-y-8">
            {PROJECTS.map((proj, i) => (
              <div key={i} className={`relative w-full ${proj.height} rounded-2xl overflow-hidden group break-inside-avoid`}>
                <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-gold text-sm tracking-widest uppercase mb-2">{proj.year} • {proj.scope}</div>
                  <h3 className="text-2xl text-white font-medium mb-1">{proj.title}</h3>
                  <p className="text-text-secondary">{proj.location}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "architect-zone/page.tsx": """import { Metadata } from 'next';
import { Download, Users, FileText, CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Architect Zone | Prabha',
  description: 'Exclusive resources and support for architects and interior designers.',
};

export default function ArchitectZonePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-white font-light mb-6">Partner With <span className="text-gold">Prabha</span></h1>
            <p className="text-xl text-text-secondary mb-10">Exclusive access to CAD files, technical specifications, trade pricing, and dedicated support for your projects.</p>
            <Button variant="primary">Register as Architect</Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Benefits" subtitle="Why Partner With Us" alignment="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Download, title: 'CAD & 3D Models', desc: 'Access our comprehensive library of product models.' },
              { icon: FileText, title: 'Technical Specs', desc: 'Detailed specifications and installation guides.' },
              { icon: Users, title: 'Dedicated Rep', desc: 'A personal account manager for your firm.' },
              { icon: CheckCircle, title: 'Trade Pricing', desc: 'Exclusive pricing and volume discounts.' }
            ].map((ben, i) => (
              <GlassCard key={i} className="p-6 text-center">
                <ben.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg text-white font-medium mb-2">{ben.title}</h3>
                <p className="text-text-secondary text-sm">{ben.desc}</p>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
""",
    "dealer-zone/page.tsx": """import { Metadata } from 'next';
import { Package, TrendingUp, HeadphonesIcon, BadgeCheck } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Dealer Zone | Prabha',
  description: 'Portal for authorised Prabha dealers and distributors.',
};

export default function DealerZonePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="py-24 md:py-32 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl text-white font-light mb-6">Dealer <span className="text-gold">Portal</span></h1>
            <p className="text-xl text-text-secondary mb-10">Manage your inventory, place orders seamlessly, and access marketing materials.</p>
            <Button variant="primary">Dealer Login</Button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader title="Dealer Benefits" subtitle="Grow With Us" alignment="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Package, title: 'Inventory Sync', desc: 'Real-time stock updates and automated ordering.' },
              { icon: TrendingUp, title: 'Sales Analytics', desc: 'Track your performance and identify trends.' },
              { icon: BadgeCheck, title: 'Marketing Assets', desc: 'High-res images and promotional materials.' },
              { icon: HeadphonesIcon, title: 'Priority Support', desc: 'Direct line to our support team.' }
            ].map((ben, i) => (
              <GlassCard key={i} className="p-6 text-center">
                <ben.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="text-lg text-white font-medium mb-2">{ben.title}</h3>
                <p className="text-text-secondary text-sm">{ben.desc}</p>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
""",
    "gallery/page.tsx": """'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

const IMAGES = [
  '/images/hero-bathroom.jpg',
  '/images/marble-collection.jpg',
  '/images/luxury-faucet.jpg',
  '/images/designer-basin.jpg',
  '/images/luxury-shower.jpg',
  '/images/granite-texture.jpg',
  '/images/hero-bathroom.jpg', // repeated for masonry effect
  '/images/marble-collection.jpg'
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Gallery" subtitle="Visual Journey" alignment="center" />
          
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-12 space-y-4">
            {IMAGES.map((src, i) => (
              <div 
                key={i} 
                className="relative cursor-pointer overflow-hidden rounded-lg group break-inside-avoid"
                onClick={() => setSelectedImage(src)}
              >
                <Image 
                  src={src} 
                  alt="Gallery image" 
                  width={600} 
                  height={800} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white"><X className="w-8 h-8" /></button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Fullscreen gallery" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
""",
    "contact/page.tsx": """import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contact Us | Prabha',
  description: 'Get in touch with Prabha for inquiries, appointments, and support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Contact Us" subtitle="Get in Touch" />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <div>
              <GlassCard className="p-8">
                <h3 className="text-2xl text-white font-medium mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">First Name</label>
                      <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">Last Name</label>
                      <input type="text" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary">Email</label>
                    <input type="email" className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary">Inquiry Type</label>
                    <select className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                      <option>General Inquiry</option>
                      <option>Sales</option>
                      <option>Support</option>
                      <option>Architect/Dealer</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary">Message</label>
                    <textarea rows={4} className="w-full bg-surface/50 border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"></textarea>
                  </div>
                  <Button variant="primary" className="w-full justify-center">Send Message</Button>
                </form>
              </GlassCard>
            </div>
            
            <div className="space-y-8">
              <GlassCard className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Showroom</h4>
                      <p className="text-text-secondary mt-1">123 Luxury Boulevard<br/>Design District<br/>City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-text-secondary mt-1">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Hours</h4>
                      <p className="text-text-secondary mt-1">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> WhatsApp Us
                  </Button>
                  <Button variant="primary">Book Appointment</Button>
                </div>
              </GlassCard>
              
              <div className="h-64 rounded-2xl overflow-hidden border border-border relative">
                <div className="absolute inset-0 bg-surface/50 flex items-center justify-center">
                  <p className="text-text-secondary">Map Embed Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "faq/page.tsx": """'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';
import GlassCard from '@/components/ui/GlassCard';

const FAQ_DATA = [
  { question: "What is the warranty on your sanitaryware products?", answer: "We offer a 10-year warranty on most of our sanitaryware products. Specific terms vary by brand, such as Jaquar, which has its own extensive warranty policies." },
  { question: "Do you provide installation services?", answer: "While we do not provide direct installation services, we have a network of certified plumbers and contractors we can recommend for your projects." },
  { question: "Can I order samples of tiles?", answer: "Yes, tile samples are available in our showroom. For bulk or architect orders, we can arrange for samples to be delivered to your office or site." },
  { question: "What is the lead time for large marble orders?", answer: "Standard sizes are usually in stock. Custom cuts or large format imported slabs may take 3-6 weeks depending on availability." },
  { question: "Do you offer trade discounts?", answer: "Yes, we have dedicated programs for architects, interior designers, and contractors. Please visit our Architect Zone or Dealer Zone to register." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="FAQ" subtitle="Common Questions" alignment="center" />
          
          <div className="relative mt-8 mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search questions..." 
              className="w-full bg-surface border border-border rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <GlassCard key={i} className="p-0 overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className={`font-medium transition-colors ${openIndex === i ? 'text-gold' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-gold' : 'text-text-secondary'}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "privacy/page.tsx": """import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prabha',
  description: 'Privacy Policy and data protection terms for Prabha website.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Privacy Policy" subtitle="Legal" />
          
          <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-white prose-a:text-gold mt-12">
            <p>Last updated: January 2024</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including when you create an account, make a purchase, request customer support, or communicate with us.</p>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to operate our business and provide you with the products and services we offer. This includes using data to improve our offerings and personalize your experiences.</p>
            
            <h2>3. Information Sharing</h2>
            <p>We do not share your personal information with third parties except as described in this privacy policy.</p>
            
            <h2>4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to maintain the security of your personal information.</p>
            
            <h2>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@prabha.com.</p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "terms/page.tsx": """import { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Terms of Service | Prabha',
  description: 'Terms and conditions for using the Prabha website and services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <ScrollReveal>
          <SectionHeader title="Terms of Service" subtitle="Legal" />
          
          <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-white prose-a:text-gold mt-12">
            <p>Last updated: January 2024</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2>2. Products and Services</h2>
            <p>All products and services described on this website are subject to availability. We reserve the right to modify or discontinue any product at any time.</p>
            
            <h2>3. Pricing</h2>
            <p>Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>
            
            <h2>4. Warranties</h2>
            <p>Product warranties are provided by the respective manufacturers. Prabha acts solely as an authorized dealer and distributor.</p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
""",
    "not-found.tsx": """import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg pt-24 pb-20">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-600 mb-6 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">Lost in the showroom?</h2>
        <p className="text-text-secondary max-w-md mx-auto mb-10">
          The page you are looking for doesn't exist or has been moved. Let's get you back to exploring our collections.
        </p>
        <Link href="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </main>
  );
}
"""
}

for path, content in files.items():
    full_path = os.path.join(base_dir, path)
    with open(full_path, "w") as f:
        f.write(content)
    print(f"Created {full_path}")
