import type { Metadata } from "next";
import { siteUrl, pageOptimization, servicePageSEO, keywordStrategy } from "./seo-config";

/**
 * Generate optimized metadata for any page
 */
export function generateMetadata(
  title: string,
  description: string,
  keywords: string[],
  path: string = "",
  options?: {
    noIndex?: boolean;
    image?: string;
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
  }
): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = options?.image || `${siteUrl}/opengraph-image`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "TechnoRealm", url: siteUrl }],
    creator: "TechnoRealm",
    publisher: "TechnoRealm",
    openGraph: {
      title,
      description,
      url,
      siteName: "TechnoRealm",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: options?.type || "website",
      ...(options?.publishedTime && { publishedTime: options.publishedTime }),
      ...(options?.modifiedTime && { modifiedTime: options.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@technorealm",
      site: "@technorealm",
    },
    alternates: {
      canonical: url,
    },
    robots: options?.noIndex
      ? { index: false, follow: false }
      : {
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
}

/**
 * Generate service page metadata
 */
export function generateServiceMetadata(slug: string): Metadata {
  const config = servicePageSEO[slug];
  
  if (!config) {
    return generateMetadata(
      "IT Consulting Services | TechnoRealm",
      "Expert IT consulting services for your business.",
      keywordStrategy.primary,
      `/services/${slug}`
    );
  }

  return generateMetadata(
    config.title,
    config.description,
    config.keywords,
    `/services/${slug}`
  );
}

/**
 * Optimize title for SEO (50-60 characters ideal)
 */
export function optimizeTitle(title: string, suffix: string = "| TechnoRealm"): string {
  const maxLength = 60;
  const fullTitle = `${title} ${suffix}`;
  
  if (fullTitle.length <= maxLength) {
    return fullTitle;
  }
  
  // Truncate title to fit
  const availableLength = maxLength - suffix.length - 4; // 4 for " ..."
  return `${title.slice(0, availableLength)}... ${suffix}`;
}

/**
 * Optimize description for SEO (150-160 characters ideal)
 */
export function optimizeDescription(description: string): string {
  const maxLength = 160;
  
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate at last complete word
  const truncated = description.slice(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace)}...`;
}

/**
 * Generate structured data JSON-LD for a page
 */
export function generatePageSchema(
  type: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "Service",
  data: {
    name: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
  }
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${data.url}#${type.toLowerCase()}`,
    name: data.name,
    description: data.description,
    url: data.url,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "TechnoRealm",
      url: siteUrl,
    },
    ...(data.datePublished && { datePublished: data.datePublished }),
    ...(data.dateModified && { dateModified: data.dateModified }),
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "TechnoRealm",
    },
  };
}

/**
 * Generate FAQ schema for rich snippets
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
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

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generate HowTo schema for guides
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>,
  totalTime?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime: totalTime || "PT30M",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          "@type": "ImageObject",
          url: step.image,
        },
      }),
    })),
  };
}

/**
 * Keywords density checker (for content optimization)
 */
export function checkKeywordDensity(
  content: string,
  keyword: string
): { count: number; density: number; status: "low" | "optimal" | "high" } {
  const words = content.toLowerCase().split(/\s+/);
  const keywordLower = keyword.toLowerCase();
  const count = words.filter((word) => word.includes(keywordLower)).length;
  const density = (count / words.length) * 100;

  let status: "low" | "optimal" | "high";
  if (density < 0.5) status = "low";
  else if (density > 2.5) status = "high";
  else status = "optimal";

  return { count, density: Math.round(density * 100) / 100, status };
}

/**
 * Generate internal linking suggestions
 */
export function suggestInternalLinks(content: string): string[] {
  const suggestions: string[] = [];
  const contentLower = content.toLowerCase();

  const linkMap: Record<string, string> = {
    "cloud": "/services/cloud-infrastructure",
    "aws": "/services/cloud-infrastructure",
    "azure": "/services/cloud-infrastructure",
    "ai": "/services/ai-ml",
    "machine learning": "/services/ai-ml",
    "artificial intelligence": "/services/ai-ml",
    "cybersecurity": "/services/cybersecurity",
    "security": "/services/cybersecurity",
    "devops": "/services/devops",
    "kubernetes": "/services/devops",
    "software development": "/services/application-development",
    "app development": "/services/application-development",
    "data analytics": "/services/data-analytics",
    "business intelligence": "/services/data-analytics",
    "digital transformation": "/services/digital-transformation",
    "contact": "/contact",
    "about": "/about",
  };

  for (const [keyword, url] of Object.entries(linkMap)) {
    if (contentLower.includes(keyword)) {
      suggestions.push(`Link "${keyword}" to ${url}`);
    }
  }

  return suggestions;
}

