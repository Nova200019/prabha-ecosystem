import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import ProductDetailClient from "./ProductDetailClient";
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const p = await params;
  const product = PRODUCTS.find((p_item) => p_item.id === p.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | Prabha',
    };
  }
  
  return {
    title: `${product.name} | Prabha Luxury Collections`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const product = PRODUCTS.find((p_item) => p_item.id === p.id);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = PRODUCTS.filter(p_item => p_item.category === product.category && p_item.id !== product.id).slice(0, 4);

  return (
    <SmoothScroll>
      <Navigation />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </SmoothScroll>
  );
}
