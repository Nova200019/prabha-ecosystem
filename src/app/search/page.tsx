"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import GlassCard from "@/components/ui/GlassCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  
  const results = query
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()) || p.brand.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <SmoothScroll>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-8 text-center">Find What You&apos;re Looking For</h1>
          
          <div className="relative group max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-text-secondary group-focus-within:text-gold transition-colors" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, category, or brand..."
              className="w-full h-16 pl-16 pr-6 bg-surface border border-white/10 rounded-full text-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-gold/50 focus:shadow-[0_0_30px_rgba(201,169,110,0.1)] transition-all shadow-xl"
              autoFocus
            />
          </div>
        </div>

        {query && results.length > 0 && (
          <div>
            <h2 className="text-xl text-text-secondary mb-8">Found {results.length} results for &quot;<span className="text-white">{query}</span>&quot;</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/products/${product.id}`}>
                    <GlassCard className="h-full group p-0 overflow-hidden rounded-2xl cursor-pointer">
                      <div className="relative aspect-square bg-surface w-full overflow-hidden">
                        <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      </div>
                      <div className="p-5">
                        <div className="text-xs font-medium text-gold mb-1 tracking-widest uppercase">{product.brand}</div>
                        <h3 className="text-base font-medium text-white mb-1 truncate group-hover:text-gold transition-colors">{product.name}</h3>
                        <p className="text-lg text-white font-light">₹{product.price.toLocaleString()}</p>
                      </div>
                    </GlassCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-24">
            <h2 className="text-2xl text-white mb-4">No results found</h2>
            <p className="text-text-secondary mb-8">We couldn&apos;t find anything matching &quot;{query}&quot;. Try exploring our categories.</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {CATEGORIES.map(cat => (
                <Link key={cat.slug} href={`/products?category=${cat.slug}`} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2">
                  {cat.name} <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {!query && (
          <div className="max-w-2xl mx-auto opacity-60">
            <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-6 text-center">Popular Searches</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Gold Washbasin", "Italian Marble", "Matte Black Shower", "Onyx Tiles", "Freestanding Bathtub"].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 rounded-full border border-white/20 text-text-secondary hover:text-white hover:border-white transition-colors text-sm"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </SmoothScroll>
  );
}

