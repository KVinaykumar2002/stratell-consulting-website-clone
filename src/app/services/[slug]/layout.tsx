import type { Metadata } from "next";
import { servicesData } from "@/lib/services-data";
import { getServiceMetadata } from "../../metadata";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/structured-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesData[params.slug];
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return getServiceMetadata(service.title, service.fullDescription);
}

export default function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const service = servicesData[params.slug];
  
  if (!service) {
    return children;
  }

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Services", url: `${siteUrl}/services` },
    { name: service.title, url: `${siteUrl}/services/${service.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            ServiceSchema({
              name: service.title,
              description: service.fullDescription,
              url: `${siteUrl}/services/${service.slug}`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BreadcrumbSchema(breadcrumbs)),
        }}
      />
      {children}
    </>
  );
}

