import { Head } from '@/lib/use-head';
import PrivacyPage from '@/app/privacy/page';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

export default function PrivacyPageWrapper() {
  return (
    <>
      <Head
        title="Privacy Policy | TechnoRealm"
        description="TechnoRealm Privacy Policy - Learn how we collect, use, and protect your personal information."
        canonical={`${siteUrl}/privacy`}
      />
      <PrivacyPage />
    </>
  );
}

