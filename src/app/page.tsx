import type { Metadata } from "next";
import HomeContent from "@/components/home/home-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export const metadata: Metadata = {
  title: "Expert IT Consulting & Technology Solutions | TechnoRealm",
  description: "Transform your business with TechnoRealm's cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, application development, and digital transformation. Drive innovation and accelerate growth.",
  keywords: [
    "IT consulting services",
    "technology consulting",
    "cloud infrastructure solutions",
    "AI machine learning consulting",
    "cybersecurity services",
    "DevOps consulting",
    "application development",
    "digital transformation consulting",
    "IT strategy consulting",
    "system integration services",
    "data analytics consulting",
    "business technology solutions",
    "Boston IT consulting",
    "enterprise technology solutions"
  ],
  openGraph: {
    title: "Expert IT Consulting & Technology Solutions | TechnoRealm",
    description: "Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation.",
    url: siteUrl,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm - Expert IT Consulting & Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert IT Consulting & Technology Solutions | TechnoRealm",
    description: "Transform your business with cutting-edge IT consulting services.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@technorealm",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <HomeContent />;
}
