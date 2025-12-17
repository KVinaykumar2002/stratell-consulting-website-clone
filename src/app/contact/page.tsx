import type { Metadata } from "next";
import Script from "next/script";
import ContactPageContent from "./contact-content";
import { LocalBusinessSchema } from "@/components/seo/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export const metadata: Metadata = {
  title: "Contact Us - Get Expert IT Consulting | TechnoRealm",
  description: "Get in touch with TechnoRealm's IT consulting experts. Contact us for cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation solutions. Located in Boston, MA. Free consultation available.",
  keywords: [
    "contact TechnoRealm",
    "IT consulting contact",
    "technology consulting contact",
    "Boston IT consulting",
    "IT services contact",
    "free IT consultation",
    "technology partner contact",
    "enterprise IT contact"
  ],
  openGraph: {
    title: "Contact Us - Get Expert IT Consulting | TechnoRealm",
    description: "Get in touch with TechnoRealm's IT consulting experts for your technology needs. Free consultation available.",
    url: `${siteUrl}/contact`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact TechnoRealm - IT Consulting Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Expert IT Consulting | TechnoRealm",
    description: "Get in touch with TechnoRealm's IT consulting experts.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@technorealm",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LocalBusinessSchema()),
        }}
      />
      <ContactPageContent />
    </>
  );
}
