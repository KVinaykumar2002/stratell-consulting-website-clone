import type { Metadata } from "next";
import ServicesPageContent from "./services-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export const metadata: Metadata = {
  title: "IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm",
  description: "Comprehensive IT services including cloud infrastructure, AI & machine learning, cybersecurity, DevOps, application development, data analytics, and system integration. Tailored solutions for your business needs.",
  keywords: [
    "IT services",
    "cloud infrastructure services",
    "AI ML services",
    "cybersecurity services",
    "DevOps services",
    "application development services",
    "data analytics services",
    "system integration services",
    "IT consulting services",
    "digital transformation",
    "enterprise IT solutions"
  ],
  openGraph: {
    title: "IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm",
    description: "Comprehensive IT services including cloud infrastructure, AI & machine learning, cybersecurity, DevOps, and more.",
    url: `${siteUrl}/services`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm IT Services - Cloud, AI/ML, Cybersecurity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm",
    description: "Comprehensive IT services for your business needs.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@technorealm",
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
