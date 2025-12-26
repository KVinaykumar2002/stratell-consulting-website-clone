import { useParams } from 'react-router-dom';
import { Head } from '@/lib/use-head';
import { servicesData } from '@/lib/services-data';
import ServicePageContent from '@/app/services/[slug]/service-page-content';
import NotFoundPage from './NotFoundPage';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <NotFoundPage />;
  }

  const title = `${service.title} - Expert IT Consulting Services | TechnoRealm`;
  const description = `${service.fullDescription.slice(0, 155)}...`;

  return (
    <>
      <Head
        title={title}
        description={description}
        keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} consulting, ${service.title.toLowerCase()} services, IT consulting, technology solutions, TechnoRealm, ${service.benefits.slice(0, 3).map(b => b.toLowerCase()).join(', ')}`}
        canonical={`${siteUrl}/services/${slug}`}
        ogTitle={title}
        ogDescription={service.shortDescription}
        ogUrl={`${siteUrl}/services/${slug}`}
        ogImage={service.heroImage}
        twitterTitle={title}
        twitterDescription={service.shortDescription}
        twitterImage={service.heroImage}
      />
      <ServicePageContent service={service} />
    </>
  );
}

