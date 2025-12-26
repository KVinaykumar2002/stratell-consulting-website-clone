import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Head } from './lib/use-head';
import RootLayout from './components/layout/RootLayout';
import StructuredDataScript from './components/StructuredDataScript';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FaqsPage = lazy(() => import('./pages/FaqsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

function App() {
  // Set default HTML attributes
  useEffect(() => {
    document.documentElement.lang = 'en';
    
    // Set viewport if not already set
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewport);
    }
    
    // Set manifest link if not already set
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifest = document.createElement('link');
      manifest.rel = 'manifest';
      manifest.href = '/manifest.json';
      document.head.appendChild(manifest);
    }
    
    // Set favicon if not already set
    if (!document.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = '/favicon.ico';
      document.head.appendChild(favicon);
    }
    
    // Set apple touch icon if not already set
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      appleIcon.href = '/apple-icon';
      document.head.appendChild(appleIcon);
    }
  }, []);

  return (
    <>
      <Head
        title="TechnoRealm - Expert IT Consulting & Technology Solutions | Boston, MA"
        description="TechnoRealm - Leading IT consulting company in Boston, MA. Expert technology consulting services including cloud computing, AI/ML solutions, cybersecurity, DevOps, custom software development, and digital transformation. Trusted by Fortune 500 companies. Get a free consultation today."
        keywords="IT consulting, IT consulting services, IT consulting company, technology consulting, cloud consulting, AI consulting, cybersecurity consulting, DevOps consulting, Boston IT consulting"
        canonical={siteUrl}
        ogTitle="TechnoRealm - Expert IT Consulting & Technology Solutions"
        ogDescription="Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation. Trusted by 100+ enterprises."
        ogImage={`${siteUrl}/opengraph-image`}
        ogUrl={siteUrl}
        twitterTitle="TechnoRealm - Expert IT Consulting & Technology Solutions"
        twitterDescription="Transform your business with cutting-edge IT consulting. Cloud, AI/ML, Cybersecurity, DevOps & Digital Transformation. Trusted by 100+ enterprises."
        twitterImage={`${siteUrl}/twitter-image`}
      />
      
      <StructuredDataScript />
      
      <RootLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </>
  );
}

export default App;

