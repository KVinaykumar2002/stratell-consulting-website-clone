import { servicesData } from "@/lib/services-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

// Organization Schema
export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechnoRealm",
    url: siteUrl,
    logo: `${siteUrl}/logo-33.png`,
    description: "Expert IT consulting and technology solutions provider specializing in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-867-6543",
      contactType: "Customer Service",
      email: "contact@technorealm.com",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "420 TechnoRealm Avenue, Suite 300",
      addressLocality: "Boston",
      addressRegion: "MA",
      postalCode: "02116",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/technorealm",
      "https://www.facebook.com/technorealm",
      "https://www.instagram.com/technorealm",
      "https://twitter.com/technorealm",
    ],
  };
}

// Website Schema
export function WebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechnoRealm",
    url: siteUrl,
    description: "Expert IT consulting and technology solutions",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Service Schema
export function ServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "TechnoRealm",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    url: service.url,
  };
}

// Breadcrumb Schema
export function BreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// FAQ Schema
export function FAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// LocalBusiness Schema (for contact page)
export function LocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TechnoRealm",
    image: `${siteUrl}/logo-33.png`,
    "@id": `${siteUrl}#organization`,
    url: siteUrl,
    telephone: "+1-555-867-6543",
    email: "contact@technorealm.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "420 TechnoRealm Avenue, Suite 300",
      addressLocality: "Boston",
      addressRegion: "MA",
      postalCode: "02116",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.3551",
      longitude: "-71.0656",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
  };
}

