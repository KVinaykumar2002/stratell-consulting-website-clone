import type { Metadata } from "next";
import AboutPageContent from "./about-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export const metadata: Metadata = {
  title: "About Us - Technology Consulting Experts | TechnoRealm",
  description: "Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate. Expert team with decades of combined experience across industries.",
  keywords: [
    "about TechnoRealm",
    "technology consulting company",
    "IT consulting team",
    "technology experts",
    "digital transformation experts",
    "IT consulting firm",
    "Boston IT consultants",
    "enterprise technology partners"
  ],
  openGraph: {
    title: "About Us - Technology Consulting Experts | TechnoRealm",
    description: "Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate.",
    url: `${siteUrl}/about`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About TechnoRealm - IT Consulting Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Technology Consulting Experts | TechnoRealm",
    description: "Learn about TechnoRealm - a boutique technology consulting studio.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@technorealm",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
