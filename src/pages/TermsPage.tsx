import { Head } from '@/lib/use-head';
import TermsPage from '@/app/terms/page';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function TermsPageWrapper() {
  return (
    <>
      <Head
        title="Terms & Conditions | TechnoRealm"
        description="TechnoRealm Terms & Conditions - Read our terms of service and usage policies."
        canonical={`${siteUrl}/terms`}
      />
      <TermsPage />
    </>
  );
}

