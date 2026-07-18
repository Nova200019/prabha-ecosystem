import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Prabha — Premium Tiles & Luxury Sanitaryware",
    template: "%s | Prabha",
  },
  description:
    "One of West Bengal's most trusted destinations for premium tiles, luxury sanitaryware, marble, granite, and Jaquar products. Curated for timeless architectural spaces.",
  keywords: [
    "premium tiles", "luxury sanitaryware", "Jaquar dealer", "marble", "granite",
    "bathroom solutions", "bath fittings", "luxury faucets", "designer basins",
    "Konnagar", "West Bengal", "India",
  ],
  authors: [{ name: "Prabha" }],
  creator: "Prabha",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prabha.in",
    siteName: "Prabha",
    title: "Prabha — Premium Tiles & Luxury Sanitaryware",
    description: "Luxury tiles, sanitaryware, marble, granite & Jaquar products curated for timeless architecture.",
    images: [{ url: "/images/hero-bathroom.jpg", width: 1920, height: 1080, alt: "Prabha Premium Bathroom Collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabha — Premium Tiles & Luxury Sanitaryware",
    description: "Luxury tiles, sanitaryware, marble, granite & Jaquar products curated for timeless architecture.",
    images: ["/images/hero-bathroom.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prabha",
  description: "Premium Tiles, Luxury Sanitaryware, Marble, Granite & Authorized Jaquar Dealer",
  url: "https://prabha.in",
  telephone: "08040006864",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11/8 G.T. Road, Near Fire Station",
    addressLocality: "Konnagar",
    addressRegion: "West Bengal",
    postalCode: "712235",
    addressCountry: "IN",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "240" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "14:00" },
  ],
};

import { CartProvider } from "@/components/cart/CartContext";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-bg text-text-primary antialiased`}>
        <CartProvider>
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
