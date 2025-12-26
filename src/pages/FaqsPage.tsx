import { Head } from '@/lib/use-head';
import { useEffect } from 'react';
import FAQPageContent from '@/app/faqs/faq-content';
import { FAQSchema } from '@/components/seo/structured-data';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';

const faqItems = [
  {
    question: "What IT consulting services does TechnoRealm offer?",
    answer: "TechnoRealm offers comprehensive IT consulting services including cloud infrastructure & management, AI & machine learning, cybersecurity & risk management, DevOps consulting, application development, data analytics, system integration, and strategic IT consulting."
  },
  {
    question: "How long does a typical IT consulting engagement take?",
    answer: "The duration varies based on project scope and complexity. Small projects may take 4-8 weeks, while larger digital transformation initiatives can span 6-12 months. We provide detailed timelines during our initial consultation."
  },
  {
    question: "Do you offer remote IT consulting services?",
    answer: "Yes, we offer both remote and on-site IT consulting services. Our team can work with clients globally through secure collaboration tools and platforms."
  },
  {
    question: "What industries does TechnoRealm serve?",
    answer: "We serve clients across various industries including finance, healthcare, retail, manufacturing, SaaS, and emerging technology sectors. Our consultants bring industry-specific expertise to each engagement."
  },
  {
    question: "How do I get started with TechnoRealm's IT consulting services?",
    answer: "Getting started is easy. Simply contact us through our website or call us to schedule a free consultation. We'll discuss your needs, challenges, and goals to propose a tailored solution."
  }
];

export default function FaqsPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'faq-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(FAQSchema(faqItems));
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <>
      <Head
        title="FAQs - IT Consulting Questions Answered | TechnoRealm"
        description="Frequently asked questions about TechnoRealm's IT consulting services, cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation solutions. Get answers to common questions about our technology consulting services."
        keywords="IT consulting FAQs, technology consulting questions, cloud services FAQs, AI ML consulting FAQs, cybersecurity FAQs, DevOps FAQs, IT consulting pricing, technology consulting process"
        canonical={`${siteUrl}/faqs`}
        ogTitle="FAQs - IT Consulting Questions Answered | TechnoRealm"
        ogDescription="Frequently asked questions about TechnoRealm's IT consulting services and solutions."
        ogUrl={`${siteUrl}/faqs`}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="FAQs - IT Consulting Questions Answered | TechnoRealm"
        twitterDescription="Frequently asked questions about IT consulting services."
        twitterImage={`${siteUrl}/og-image.png`}
      />
      <FAQPageContent />
    </>
  );
}

