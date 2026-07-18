import { Metadata } from 'next';
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
