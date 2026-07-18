import { Metadata } from 'next';
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
