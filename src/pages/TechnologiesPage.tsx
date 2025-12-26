import { Head } from '@/lib/use-head';
import TechnologiesPageContent from '@/app/technologies/technologies-content';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function TechnologiesPage() {
  return (
    <>
      <Head
        title="Technologies - AI/ML, Cloud, Cybersecurity & More | TechnoRealm"
        description="Explore cutting-edge technologies including AI & Machine Learning, Cloud Infrastructure, Cybersecurity, DevOps, and Data Analytics. Discover how we leverage modern technologies to transform your business."
        keywords="AI machine learning, cloud infrastructure, cybersecurity, DevOps, data analytics, modern technologies, enterprise technology, technology solutions"
        canonical={`${siteUrl}/technologies`}
        ogTitle="Technologies - AI/ML, Cloud, Cybersecurity & More | TechnoRealm"
        ogDescription="Explore cutting-edge technologies including AI & Machine Learning, Cloud Infrastructure, Cybersecurity, DevOps, and Data Analytics."
        ogUrl={`${siteUrl}/technologies`}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="Technologies - AI/ML, Cloud, Cybersecurity & More | TechnoRealm"
        twitterDescription="Explore cutting-edge technologies to transform your business."
        twitterImage={`${siteUrl}/og-image.png`}
      />
      <TechnologiesPageContent />
    </>
  );
}

