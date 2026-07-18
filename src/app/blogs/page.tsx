import { Metadata } from 'next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlassCard from '@/components/ui/GlassCard';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Luxury Insights & Blogs | Prabha',
  description: 'Explore the latest trends in luxury bathroom design, tile selection guides, and architectural inspiration.',
};

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Rise of Large Format Slabs in Modern Architecture',
    excerpt: 'Discover why architects are increasingly turning to 1200x2400mm slabs to create seamless, monolithic spaces that exude grandeur.',
    category: 'Design Trends',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Jaquar Artize: Elevating the Bathroom to a Sanctuary',
    excerpt: 'An in-depth look at how the latest Artize collection transforms functional brassware into stunning sculptural elements.',
    category: 'Product Spotlight',
    date: 'Sep 28, 2023',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Matte vs. Glossy: Choosing the Perfect Finish',
    excerpt: 'A comprehensive guide to understanding the visual impact and maintenance requirements of different tile finishes for your space.',
    category: 'Expert Guide',
    date: 'Sep 15, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552564757-b08e5e54d193?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

export default function BlogsPage() {
  return (
    <SmoothScroll>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Luxury Insights" 
            subtitle="Curated thoughts, design trends, and expert advice for creating extraordinary spaces."
          />
          
          {/* Categories */}
          <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'Design Trends', 'Product Spotlight', 'Expert Guide', 'Case Studies'].map((cat, i) => (
              <button 
                key={cat}
                className={`px-6 py-2 rounded-full text-sm transition-all border ${i === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-white/70 border-white/20 hover:border-white hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link href={`/blogs/${post.id}`} className="group block h-full">
                  <GlassCard className="h-full flex flex-col p-0 overflow-hidden hover:border-[#C9A96E]/50 transition-colors duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      {/* Note: In a real app, you would use next/image. Using img for reliable external placeholder here */}
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs text-[#BDBDBD] mb-4">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-light text-white mb-4 group-hover:text-[#C9A96E] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-[#BDBDBD] text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center text-sm text-white group-hover:text-[#C9A96E] transition-colors font-medium">
                        Read Article 
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
