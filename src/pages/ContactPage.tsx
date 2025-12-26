import { Head } from '@/lib/use-head';
import { useEffect } from 'react';
import ContactPageContent from '@/app/contact/contact-content';
import { LocalBusinessSchema } from '@/components/seo/structured-data';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'local-business-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(LocalBusinessSchema());
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('local-business-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Head
        title="Contact Us - Get Expert IT Consulting | TechnoRealm"
        description="Get in touch with TechnoRealm's IT consulting experts. Contact us for cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation solutions. Located in Boston, MA. Free consultation available."
        keywords="contact TechnoRealm, IT consulting contact, technology consulting contact, Boston IT consulting, IT services contact, free IT consultation, technology partner contact, enterprise IT contact"
        canonical={`${siteUrl}/contact`}
        ogTitle="Contact Us - Get Expert IT Consulting | TechnoRealm"
        ogDescription="Get in touch with TechnoRealm's IT consulting experts for your technology needs. Free consultation available."
        ogUrl={`${siteUrl}/contact`}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="Contact Us - Get Expert IT Consulting | TechnoRealm"
        twitterDescription="Get in touch with TechnoRealm's IT consulting experts."
        twitterImage={`${siteUrl}/og-image.png`}
      />
      <ContactPageContent />
    </>
  );
}

