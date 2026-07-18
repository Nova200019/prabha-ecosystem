"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star, SlidersHorizontal, Search } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <SmoothScroll>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">The Collection</h1>
              <p className="text-text-secondary text-lg">Curated luxury sanitaryware and premium surfaces for extraordinary spaces.</p>
            </div>
            
            <div className="w-full md:w-auto relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary group-focus-within:text-gold transition-colors" />
              <input
                type="text"
                placeholder="Search collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 h-12 pl-12 pr-4 bg-surface/50 border border-white/10 rounded-full text-white placeholder:text-text-secondary/60 focus:outline-none focus:border-gold/50 focus:bg-surface transition-all backdrop-blur-md"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-gold" />
                  <h3 className="text-lg font-medium text-white">Categories</h3>
                </div>
                <div className="space-y-2 flex flex-col">
                  <button
                    onClick={() => setActiveCategory("All")}
                    className={`text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === "All" ? "bg-white/10 text-white" : "text-text-secondary hover:bg-white/5 hover:text-white"}`}
                  >
                    All Collections
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${activeCategory === cat.name ? "bg-white/10 text-white" : "text-text-secondary hover:bg-white/5 hover:text-white"}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="w-full h-px bg-white/10" />
              
              {/* Other filters mock */}
              <div>
                <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">Availability</h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 rounded border border-white/20 group-hover:border-gold flex items-center justify-center transition-colors">
                    <div className="w-3 h-3 rounded-sm bg-gold" />
                  </div>
                  <span className="text-white group-hover:text-gold transition-colors">In Stock Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Link href={`/products/${product.id}`}>
                    <GlassCard className="h-full group p-0 overflow-hidden rounded-2xl cursor-pointer">
                      <div className="relative aspect-[4/5] bg-surface w-full overflow-hidden">
                        <Image
                          src={product.images[0] || "/images/placeholder.jpg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="px-6 py-3 bg-black/60 backdrop-blur-md rounded-full text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            Quick View
                          </div>
                        </div>
                        {product.rating > 4.5 && (
                          <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                            Best Seller
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="text-xs font-medium text-gold mb-2 tracking-widest uppercase">{product.brand}</div>
                        <h3 className="text-lg font-medium text-white mb-2 truncate group-hover:text-gold transition-colors">{product.name}</h3>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl text-white font-light">₹{product.price.toLocaleString()}</span>
                            {product.mrp && <span className="text-sm text-text-secondary line-through">₹{product.mrp.toLocaleString()}</span>}
                          </div>
                          <div className="flex items-center gap-1 text-gold">
                            <Star className="w-4 h-4 fill-gold" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {filteredProducts.length === 0 && (
              <div className="py-24 text-center">
                <p className="text-xl text-text-secondary">No products found matching your criteria.</p>
                <Button variant="secondary" className="mt-6" onClick={() => {setActiveCategory("All"); setSearchQuery("");}}>Clear Filters</Button>
              </div>
            )}
            
            {filteredProducts.length > 0 && (
              <div className="mt-16 flex justify-center">
                <Button variant="secondary">Load More</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}
