import type { Metadata } from "next";
import Script from "next/script";
import FAQPageContent from "./faq-content";
import { FAQSchema } from "@/components/seo/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

// FAQ data for structured data
const faqItems = [
  {
    question: "What IT consulting services does TechnoRealm offer?",
    answer: "TechnoRealm offers comprehensive IT consulting services including cloud infrastructure & management, AI & machine learning, cybersecurity & risk management, DevOps consulting, application development, data analytics, system integration, and strategic IT consulting."
  },
  {
    question: "How long does a typical IT consulting engagement take?",
    answer: "The duration varies based on project scope and complexity. Small projects may take 4-8 weeks, while larger digital transformation initiatives can span 6-12 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you offer remote IT consulting services?",
    answer: "Yes, we offer both remote and on-site IT consulting services. Our team can work with clients globally through secure collaboration tools and platforms."
  },
  {
    question: "What industries does TechnoRealm serve?",
    answer: "We serve clients across various industries including finance, healthcare, retail, manufacturing, SaaS, and emerging technology sectors. Our consultants bring industry-specific expertise to each engagement."
  },
  {
    question: "How do I get started with TechnoRealm's IT consulting services?",
    answer: "Getting started is easy. Simply contact us through our website or call us to schedule a free consultation. We'll discuss your needs, challenges, and goals to propose a tailored solution."
  }
];

export const metadata: Metadata = {
  title: "FAQs - IT Consulting Questions Answered | TechnoRealm",
  description: "Frequently asked questions about TechnoRealm's IT consulting services, cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation solutions. Get answers to common questions about our technology consulting services.",
  keywords: [
    "IT consulting FAQs",
    "technology consulting questions",
    "cloud services FAQs",
    "AI ML consulting FAQs",
    "cybersecurity FAQs",
    "DevOps FAQs",
    "IT consulting pricing",
    "technology consulting process"
  ],
  openGraph: {
    title: "FAQs - IT Consulting Questions Answered | TechnoRealm",
    description: "Frequently asked questions about TechnoRealm's IT consulting services and solutions.",
    url: `${siteUrl}/faqs`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm FAQs - IT Consulting Questions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs - IT Consulting Questions Answered | TechnoRealm",
    description: "Frequently asked questions about IT consulting services.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@technorealm",
  },
  alternates: {
    canonical: `${siteUrl}/faqs`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQSchema(faqItems)),
        }}
      />
      <FAQPageContent />
    </>
  );
}
