import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/services-data";
import ServicePageContent from "./service-page-content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

// Generate static params for all service pages at build time
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each service page dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | TechnoRealm",
      description: "The requested service page could not be found.",
    };
  }

  const title = `${service.title} - Expert IT Consulting Services | TechnoRealm`;
  const description = `${service.fullDescription.slice(0, 155)}...`;

  return {
    title,
    description,
    keywords: [
      service.title.toLowerCase(),
      `${service.title.toLowerCase()} consulting`,
      `${service.title.toLowerCase()} services`,
      "IT consulting",
      "technology solutions",
      "TechnoRealm",
      ...service.benefits.slice(0, 3).map(b => b.toLowerCase()),
    ],
    openGraph: {
      title,
      description: service.shortDescription,
      url: `${siteUrl}/services/${slug}`,
      siteName: "TechnoRealm",
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: `${service.title} - TechnoRealm IT Consulting Services`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.shortDescription,
      images: [service.heroImage],
      creator: "@technorealm",
    },
    alternates: {
      canonical: `${siteUrl}/services/${slug}`,
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
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageContent service={service} />;
}
