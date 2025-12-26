import { Head } from '@/lib/use-head';
import AboutPageContent from '@/app/about/about-content';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function AboutPage() {
  return (
    <>
      <Head
        title="About Us - Technology Consulting Experts | TechnoRealm"
        description="Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate. Expert team with decades of combined experience across industries."
        keywords="about TechnoRealm, technology consulting company, IT consulting team, technology experts, digital transformation experts, IT consulting firm, Boston IT consultants, enterprise technology partners"
        canonical={`${siteUrl}/about`}
        ogTitle="About Us - Technology Consulting Experts | TechnoRealm"
        ogDescription="Learn about TechnoRealm - a boutique technology consulting studio helping modern organizations redesign operations, scale, and innovate."
        ogUrl={`${siteUrl}/about`}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="About Us - Technology Consulting Experts | TechnoRealm"
        twitterDescription="Learn about TechnoRealm - a boutique technology consulting studio."
        twitterImage={`${siteUrl}/og-image.png`}
      />
      <AboutPageContent />
    </>
  );
}

