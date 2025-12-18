import { MetadataRoute } from "next";
import { servicesData } from "@/lib/services-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();
  
  // Main pages with highest priority
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];

  // Important pages
  const importantRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/faqs`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  // Service pages - high priority for SEO
  const serviceRoutes: MetadataRoute.Sitemap = Object.values(servicesData).map(
    (service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })
  );

  // Legal pages - lower priority
  const legalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Combine all routes in order of importance
  return [
    ...mainRoutes,
    ...serviceRoutes,
    ...importantRoutes,
    ...legalRoutes,
  ];
}
