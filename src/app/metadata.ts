import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export const homeMetadata: Metadata = {
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
    "business technology solutions"
  ],
  openGraph: {
    title: "Expert IT Consulting & Technology Solutions | TechnoRealm",
    description: "Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation.",
    url: siteUrl,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/logo image/loading12/1234.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm - IT Consulting Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert IT Consulting & Technology Solutions | TechnoRealm",
    description: "Transform your business with cutting-edge IT consulting services.",
    images: [`${siteUrl}/logo image/loading12/1234.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const aboutMetadata: Metadata = {
  title: "About Us - Technology Consulting Experts | TechnoRealm",
  description: "Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate. Expert team with decades of combined experience across industries.",
  keywords: [
    "about TechnoRealm",
    "technology consulting company",
    "IT consulting team",
    "technology experts",
    "digital transformation experts",
    "IT consulting firm"
  ],
  openGraph: {
    title: "About Us - Technology Consulting Experts | TechnoRealm",
    description: "Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate.",
    url: `${siteUrl}/about`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/logo image/loading12/1234.png`,
        width: 1200,
        height: 630,
        alt: "About TechnoRealm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Technology Consulting Experts | TechnoRealm",
    description: "Learn about TechnoRealm - a boutique technology consulting studio.",
    images: [`${siteUrl}/logo image/loading12/1234.png`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export const servicesMetadata: Metadata = {
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
    "IT consulting services"
  ],
  openGraph: {
    title: "IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm",
    description: "Comprehensive IT services including cloud infrastructure, AI & machine learning, cybersecurity, DevOps, and more.",
    url: `${siteUrl}/services`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/logo image/loading12/1234.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm IT Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm",
    description: "Comprehensive IT services for your business needs.",
    images: [`${siteUrl}/logo image/loading12/1234.png`],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export const contactMetadata: Metadata = {
  title: "Contact Us - Get Expert IT Consulting | TechnoRealm",
  description: "Get in touch with TechnoRealm's IT consulting experts. Contact us for cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation solutions. Located in Boston, MA.",
  keywords: [
    "contact TechnoRealm",
    "IT consulting contact",
    "technology consulting contact",
    "Boston IT consulting",
    "IT services contact"
  ],
  openGraph: {
    title: "Contact Us - Get Expert IT Consulting | TechnoRealm",
    description: "Get in touch with TechnoRealm's IT consulting experts for your technology needs.",
    url: `${siteUrl}/contact`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/logo image/loading12/1234.png`,
        width: 1200,
        height: 630,
        alt: "Contact TechnoRealm",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Expert IT Consulting | TechnoRealm",
    description: "Get in touch with TechnoRealm's IT consulting experts.",
    images: [`${siteUrl}/logo image/loading12/1234.png`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export const faqsMetadata: Metadata = {
  title: "FAQs - IT Consulting Questions Answered | TechnoRealm",
  description: "Frequently asked questions about TechnoRealm's IT consulting services, cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation solutions. Get answers to common questions.",
  keywords: [
    "IT consulting FAQs",
    "technology consulting questions",
    "cloud services FAQs",
    "AI ML consulting FAQs",
    "cybersecurity FAQs",
    "DevOps FAQs"
  ],
  openGraph: {
    title: "FAQs - IT Consulting Questions Answered | TechnoRealm",
    description: "Frequently asked questions about TechnoRealm's IT consulting services and solutions.",
    url: `${siteUrl}/faqs`,
    siteName: "TechnoRealm",
    images: [
      {
        url: `${siteUrl}/logo image/loading12/1234.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm FAQs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs - IT Consulting Questions Answered | TechnoRealm",
    description: "Frequently asked questions about IT consulting services.",
    images: [`${siteUrl}/logo image/loading12/1234.png`],
  },
  alternates: {
    canonical: `${siteUrl}/faqs`,
  },
};

export function getServiceMetadata(serviceName: string, description: string): Metadata {
  return {
    title: `${serviceName} - Expert IT Consulting Services | TechnoRealm`,
    description: `${description} Expert ${serviceName} consulting services from TechnoRealm.`,
    keywords: [
      serviceName.toLowerCase(),
      `${serviceName} consulting`,
      `${serviceName} services`,
      "IT consulting",
      "technology solutions"
    ],
    openGraph: {
      title: `${serviceName} - Expert IT Consulting Services | TechnoRealm`,
      description: `${description} Expert ${serviceName} consulting services.`,
      url: `${siteUrl}/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`,
      siteName: "TechnoRealm",
      images: [
        {
          url: `${siteUrl}/logo image/loading12/1234.png`,
          width: 1200,
          height: 630,
          alt: `${serviceName} - TechnoRealm`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${serviceName} - Expert IT Consulting Services | TechnoRealm`,
      description: `${description}`,
      images: [`${siteUrl}/logo image/loading12/1234.png`],
    },
    alternates: {
      canonical: `${siteUrl}/services/${serviceName.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };
}

