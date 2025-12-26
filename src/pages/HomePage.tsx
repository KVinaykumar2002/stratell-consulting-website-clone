import { Head } from '@/lib/use-head';
import HomeContent from '@/components/home/home-content';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function HomePage() {
  return (
    <>
      <Head
        title="Expert IT Consulting & Technology Solutions | TechnoRealm"
        description="Transform your business with TechnoRealm's cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, application development, and digital transformation. Drive innovation and accelerate growth."
        keywords="IT consulting services, technology consulting, cloud infrastructure solutions, AI machine learning consulting, cybersecurity services, DevOps consulting, application development, digital transformation consulting, IT strategy consulting, system integration services, data analytics consulting, business technology solutions, Boston IT consulting, enterprise technology solutions"
        canonical={siteUrl}
        ogTitle="Expert IT Consulting & Technology Solutions | TechnoRealm"
        ogDescription="Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation."
        ogUrl={siteUrl}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="Expert IT Consulting & Technology Solutions | TechnoRealm"
        twitterDescription="Transform your business with cutting-edge IT consulting services."
        twitterImage={`${siteUrl}/og-image.png`}
      />
      <HomeContent />
    </>
  );
}

