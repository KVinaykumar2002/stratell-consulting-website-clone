import { servicesData } from "@/lib/services-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

// Organization Schema - Enhanced
export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "TechnoRealm",
    alternateName: "TechnoRealm IT Consulting",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo image/loading12/1234.png`,
      width: 500,
      height: 150,
      caption: "TechnoRealm Logo"
    },
    image: `${siteUrl}/logo image/loading12/1234.png`,
    description: "Expert IT consulting and technology solutions provider specializing in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation. Serving enterprises across the United States with cutting-edge technology solutions.",
    foundingDate: "2020",
    founder: {
      "@type": "Person",
      name: "TechnoRealm Team"
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50
    },
    slogan: "Transform Your Business with Technology",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-867-6543",
        contactType: "Customer Service",
        email: "contact@technorealm.com",
        areaServed: "US",
        availableLanguage: ["English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-555-867-6543",
        contactType: "Sales",
        email: "sales@technorealm.com",
        areaServed: "US",
        availableLanguage: ["English"]
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-555-867-6543",
        contactType: "Technical Support",
        email: "support@technorealm.com",
        areaServed: "US",
        availableLanguage: ["English"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "420 TechnoRealm Avenue, Suite 300",
      addressLocality: "Boston",
      addressRegion: "MA",
      postalCode: "02116",
      addressCountry: "US"
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    knowsAbout: [
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "DevOps",
      "Digital Transformation",
      "IT Strategy",
      "Software Development",
      "Data Analytics",
      "System Integration"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Consulting Services",
      itemListElement: Object.values(servicesData).map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription
        }
      }))
    },
    sameAs: [
      "https://www.linkedin.com/company/technorealm",
      "https://www.facebook.com/technorealm",
      "https://www.instagram.com/technorealm",
      "https://twitter.com/technorealm",
      "https://github.com/technorealm"
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
    image: `${siteUrl}/logo image/loading12/1234.png`,
    "@id": `${siteUrl}#localbusiness`,
    url: siteUrl,
    telephone: "+1-555-867-6543",
    email: "contact@technorealm.com",
    description: "Expert IT consulting and technology solutions provider in Boston, MA",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      }
    ],
    priceRange: "$$-$$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Bank Transfer, Invoice",
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
  };
}

// Service List Schema for Services Page
export function ServiceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "TechnoRealm IT Consulting Services",
    description: "Comprehensive IT consulting services offered by TechnoRealm",
    numberOfItems: Object.keys(servicesData).length,
    itemListElement: Object.values(servicesData).map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        url: `${siteUrl}/services/${service.slug}`,
        provider: {
          "@type": "Organization",
          name: "TechnoRealm"
        }
      }
    }))
  };
}

// Individual Service Schema - Enhanced
export function DetailedServiceSchema(service: {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.fullDescription,
    url: `${siteUrl}/services/${service.slug}`,
    image: service.heroImage,
    provider: {
      "@type": "Organization",
      name: "TechnoRealm",
      url: siteUrl,
      logo: `${siteUrl}/logo image/loading12/1234.png`
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} Features`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: feature
        }
      }))
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD"
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "45",
      bestRating: "5",
      worstRating: "1"
    }
  };
}

// About Page Schema
export function AboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/about#webpage`,
    url: `${siteUrl}/about`,
    name: "About TechnoRealm - IT Consulting Experts",
    description: "Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`
    },
    about: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    }
  };
}

// Contact Page Schema
export function ContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    url: `${siteUrl}/contact`,
    name: "Contact TechnoRealm - Get IT Consulting Help",
    description: "Get in touch with TechnoRealm for expert IT consulting services. Contact us for cloud, AI/ML, cybersecurity, and digital transformation solutions.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    }
  };
}

// WebPage Schema for any page
export function WebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${page.url}#webpage`,
    url: page.url,
    name: page.title,
    description: page.description,
    datePublished: page.datePublished || "2024-01-01",
    dateModified: page.dateModified || new Date().toISOString().split('T')[0],
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`
    },
    about: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`
    },
    inLanguage: "en-US"
  };
}

// How To Schema (for guides/tutorials)
export function HowToSchema(howTo: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    totalTime: howTo.totalTime || "PT30M",
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };
}

// Review Schema
export function ReviewSchema(review: {
  author: string;
  reviewBody: string;
  rating: number;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    },
    datePublished: review.datePublished,
    itemReviewed: {
      "@type": "Organization",
      name: "TechnoRealm",
      url: siteUrl
    }
  };
}

