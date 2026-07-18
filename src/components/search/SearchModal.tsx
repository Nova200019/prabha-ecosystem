"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : null; // Typically would toggle, but this is just modal content
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const results = query
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center pt-[15vh] px-4 bg-black/60 backdrop-blur-md"
        >
          <div className="absolute inset-0" onClick={onClose} />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-3xl relative z-10"
          >
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-text-secondary group-focus-within:text-gold transition-colors" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, collections, materials..."
                className="w-full h-16 pl-16 pr-14 bg-surface/80 border border-white/10 rounded-2xl text-xl text-white placeholder:text-text-secondary/50 focus:outline-none focus:border-gold/50 focus:bg-surface transition-all backdrop-blur-xl"
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-text-secondary hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[60vh] flex flex-col">
              {!query && (
                <div className="p-8">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">Quick Links</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.slice(0, 5).map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/products?category=${cat.slug}`}
                        onClick={onClose}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 hover:border-white/20 transition-all text-text-secondary hover:text-white"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {query && results.length > 0 && (
                <div className="overflow-y-auto p-4 custom-scrollbar">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium truncate group-hover:text-gold transition-colors">{product.name}</h4>
                          <p className="text-sm text-text-secondary truncate">{product.category} &middot; {product.brand}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-white">₹{product.price.toLocaleString()}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {query && results.length === 0 && (
                <div className="p-12 text-center text-text-secondary">
                  <p>No results found for &quot;{query}&quot;</p>
                  <p className="text-sm mt-2">Try checking for typos or using different keywords.</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
