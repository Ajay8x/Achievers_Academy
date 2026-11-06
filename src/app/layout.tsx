import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://achieversedugroup.com"),
  title: {
    default: "Achievers Academy - Excellence in Education | Manmad, Chandwad, Niphad",
    template: "%s | Achievers Group of Institutes"
  },
  description: "Achievers Group of Institutes offers premier CBSE & Maharashtra State Board education, plus leading JEE, NEET & MHT-CET coaching with residential hostels and GPS transport across Nashik district.",
  keywords: [
    "Achievers Academy",
    "Achievers Group of Institutes",
    "Achievers World School Manmad",
    "Achievers IIT & Medical Chandwad",
    "Wisdom International School Niphad",
    "JEE Coaching Nashik",
    "NEET Coaching Chandwad",
    "MHT-CET Coaching Manmad",
    "Best School in Manmad",
    "CBSE School Niphad",
    "Residential School Nashik",
    "Boys Hostel School Chandwad",
    "Girls Hostel School Nashik"
  ],
  authors: [{ name: "Achievers Group of Institutes" }],
  creator: "Achievers Academy",
  publisher: "Achievers Group of Institutes",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Achievers Academy - Excellence in Education",
    description: "Nurturing rural and institutional excellence across 3 modern campuses in Manmad, Chandwad, and Niphad.",
    url: "https://achieversedugroup.com",
    siteName: "Achievers Group of Institutes",
    images: [
      {
        url: "/images/static_achivers.jpg",
        width: 1200,
        height: 630,
        alt: "Achievers Academy Campus"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievers Academy - Excellence in Education",
    description: "World-class schooling and JEE/NEET preparation across Manmad, Chandwad, and Niphad.",
    images: ["/images/static_achivers.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Schema.org EducationalOrganization structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Achievers Group of Institutes",
  "alternateName": "Achievers Academy",
  "url": "https://achieversedugroup.com",
  "logo": "https://achieversedugroup.com/images/static_Web_Logo_1.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-8459360161",
      "contactType": "Admissions Helpline",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-8999542174",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Shrinath Dream City, Umrane Road",
      "addressLocality": "Manmad",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Opp. Indian Oil Petrol Pump, Chandwad-Manmad Road",
      "addressLocality": "Chandwad",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Niphad-Sambhajinagar Road",
      "addressLocality": "Niphad",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/static_Web_Logo_1.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-gold-500 selection:text-navy-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <AIChatbot />
      </body>
    </html>
  );
}
