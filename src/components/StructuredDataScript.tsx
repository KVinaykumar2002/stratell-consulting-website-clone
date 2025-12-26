import { useEffect } from 'react';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function StructuredDataScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'app-organization-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TechnoRealm',
      url: siteUrl,
      logo: `${siteUrl}/technorealm-logo.png`,
      description: 'Expert IT consulting and technology solutions',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Boston',
        addressRegion: 'MA',
        addressCountry: 'US',
      },
    });
    document.head.appendChild(script);
    
    return () => {
      const existing = document.getElementById('app-organization-schema');
      if (existing) document.head.removeChild(existing);
    };
  }, []);

  return null;
}

