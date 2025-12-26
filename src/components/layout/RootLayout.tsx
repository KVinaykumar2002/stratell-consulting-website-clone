import { ReactNode, useEffect } from 'react';
import VisualEditsMessenger from '../../visual-edits/VisualEditsMessenger';
import ErrorReporter from '@/components/ErrorReporter';
import { ThemeProvider } from '@/components/providers';
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/structured-data';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    // Check if script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src*="route-messenger.js"]');
    if (existingScript) {
      return;
    }

    // Load external script
    const script = document.createElement('script');
    script.src = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js';
    script.setAttribute('data-target-origin', '*');
    script.setAttribute('data-message-type', 'ROUTE_CHANGE');
    script.setAttribute('data-include-search-params', 'true');
    script.setAttribute('data-only-in-iframe', 'true');
    script.setAttribute('data-debug', 'true');
    script.setAttribute('data-custom-data', '{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}');
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Add structured data scripts
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.id = 'organization-schema';
    orgScript.textContent = JSON.stringify(OrganizationSchema());
    document.head.appendChild(orgScript);

    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.id = 'website-schema';
    websiteScript.textContent = JSON.stringify(WebsiteSchema());
    document.head.appendChild(websiteScript);

    return () => {
      const org = document.getElementById('organization-schema');
      const website = document.getElementById('website-schema');
      if (org) document.head.removeChild(org);
      if (website) document.head.removeChild(website);
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      forcedTheme="light"
      disableTransitionOnChange
    >
      <ErrorReporter />
      {children}
      <VisualEditsMessenger />
    </ThemeProvider>
  );
}

