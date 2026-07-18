import { Metadata } from 'next';
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
