import { Head } from '@/lib/use-head';
import ServicesPageContent from '@/app/services/services-content';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function ServicesPage() {
  return (
    <>
      <Head
        title="IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm"
        description="Comprehensive IT services including cloud infrastructure, AI & machine learning, cybersecurity, DevOps, application development, data analytics, and system integration. Tailored solutions for your business needs."
        keywords="IT services, cloud infrastructure services, AI ML services, cybersecurity services, DevOps services, application development services, data analytics services, system integration services, IT consulting services, digital transformation, enterprise IT solutions"
        canonical={`${siteUrl}/services`}
        ogTitle="IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm"
        ogDescription="Comprehensive IT services including cloud infrastructure, AI & machine learning, cybersecurity, DevOps, and more."
        ogUrl={`${siteUrl}/services`}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="IT Services - Cloud, AI/ML, Cybersecurity & More | TechnoRealm"
        twitterDescription="Comprehensive IT services for your business needs."
        twitterImage={`${siteUrl}/og-image.png`}
      />
      <ServicesPageContent />
    </>
  );
}

