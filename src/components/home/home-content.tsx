"use client";

import { lazy, Suspense } from "react";
import { Server, Brain, Code, Cloud } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";

// Lazy load JSON animations to reduce initial bundle size
// These will be loaded only when the Feature108 component is rendered
const Feature108 = lazy(
  () => import("@/components/blocks/shadcnblocks-com-feature108").then((mod) => ({ default: mod.Feature108 }))
);

const Feature108Loading = () => (
  <div className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
    </div>
  </div>
);

// Component that lazy loads animations
function Feature108WithAnimations({ badge, heading, description }: { badge: string; heading: string; description: string }) {
  const [animations, setAnimations] = useState<{
    webDevelopment?: any;
    itDevPink?: any;
    dataSecurity?: any;
    cloud?: any;
  }>({});

  useEffect(() => {
    // Load animations asynchronously after component mounts
    Promise.all([
      import("@/app/web_development.json"),
      import("@/app/IT_dev_pink.json"),
      import("@/app/DATA_SECURITY.json"),
      import("@/app/Cloud.json"),
    ]).then(([webDev, itDev, dataSec, cloud]) => {
      setAnimations({
        webDevelopment: webDev.default,
        itDevPink: itDev.default,
        dataSecurity: dataSec.default,
        cloud: cloud.default,
      });
    });
  }, []);

  // Show loading state while animations load
  if (!animations.webDevelopment) {
    return (
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<Feature108Loading />}>
      <Feature108
        badge={badge}
        heading={heading}
        description={description}
      tabs={[
        {
          value: "it-feature",
          icon: <Server className="h-auto w-4 shrink-0" />,
          label: "IT Feature",
          content: {
            badge: "Enterprise IT",
            title: "Complete IT Infrastructure & Support Solutions.",
            description:
              "We provide comprehensive IT services including infrastructure management, system integration, cybersecurity, and 24/7 technical support. Our expert team ensures your IT systems run smoothly, securely, and efficiently.",
            buttonText: "Explore IT Services",
            buttonHref: "/services/it-consulting",
            animationData: animations.itDevPink,
          },
        },
        {
          value: "ai-ml",
          icon: <Brain className="h-auto w-4 shrink-0" />,
          label: "AI & ML",
          content: {
            badge: "Intelligent Automation",
            title: "Harness the Power of Artificial Intelligence & Machine Learning.",
            description:
              "Transform your business with AI and ML solutions. From predictive analytics and natural language processing to computer vision and automated decision-making systems, we help you leverage intelligent technologies to gain competitive advantages.",
            buttonText: "Learn About AI/ML",
            buttonHref: "/services/ai-ml",
            animationData: animations.dataSecurity,
          },
        },
        {
          value: "web-development",
          icon: <Code className="h-auto w-4 shrink-0" />,
          label: "Web Development",
          content: {
            badge: "Modern Web Solutions",
            title: "Build Scalable, High-Performance Web Applications.",
            description:
              "Our web development expertise spans from responsive frontend designs to robust backend systems. We create modern, secure, and scalable web applications using the latest technologies and best practices to deliver exceptional user experiences.",
            buttonText: "View Web Solutions",
            buttonHref: "/services/application-development",
            animationData: animations.webDevelopment,
          },
        },
        {
          value: "cloud",
          icon: <Cloud className="h-auto w-4 shrink-0" />,
          label: "Cloud",
          content: {
            badge: "Cloud Excellence",
            title: "Scalable Cloud Infrastructure & Migration Services.",
            description:
              "Accelerate your digital transformation with our cloud solutions. We specialize in cloud migration, infrastructure setup, DevOps automation, and cloud-native application development across AWS, Azure, and GCP platforms.",
            buttonText: "Discover Cloud Services",
            buttonHref: "/services/cloud-infrastructure",
            animationData: animations.cloud,
          },
        },
      ]}
      />
    </Suspense>
  );
}


// Lazy load sections below the fold - only load when needed
const FeatureSection = lazy(() => import("@/components/ui/stack-feature-section"));
const HomeServicesShowcase = lazy(() => import("@/components/sections/home-services-showcase"));
const TrustedBy = lazy(() => import("@/components/sections/trusted-by"));
const CtaFinal = lazy(() => import("@/components/sections/cta-final"));
const Footer = lazy(() => import("@/components/sections/footer"));
const GlobalNetworkSection = lazy(() => import("@/components/sections/global-network"));
const FeaturesAccordionSection = lazy(() => import("@/components/sections/features-accordion"));
const StrategicCTA = lazy(() => import("@/components/sections/strategic-cta"));

export default function HomeContent() {
  // Removed artificial 2-second loading delay - this was killing LCP scores

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <HeroSection />
      <Feature108WithAnimations
        badge="Our Expertise"
        heading="Comprehensive IT Solutions Tailored to Your Needs"
        description="Explore our core service areas and discover how we can transform your business with cutting-edge technology."
      />
      <Suspense fallback={<div className="h-96 bg-gray-200 animate-pulse rounded-2xl" />}>
        <FeatureSection />
      </Suspense>
    
      <Suspense fallback={<div className="h-56 bg-gray-100 animate-pulse rounded-2xl" />}>
        <StrategicCTA
          title="Ready to Transform Your Business?"
          subtitle="Let's discuss how TechnoRealm can help you achieve your technology goals."
          primaryCTA={{ text: "Book a Free Consultation", href: "/contact" }}
          secondaryCTA={{ text: "View Our Services", href: "/services" }}
        />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded-2xl" />}>
        <HomeServicesShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded-2xl" />}>
        <FeaturesAccordionSection />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded-2xl" />}>
        <GlobalNetworkSection />
      </Suspense>
      <Suspense fallback={<div className="h-80 bg-gray-100 animate-pulse rounded-2xl" />}>
        <TrustedBy />
      </Suspense>
      <div className="container px-6 pb-10 md:pb-14">
        <Suspense fallback={<div className="h-56 bg-gray-100 animate-pulse rounded-2xl" />}>
          <CtaFinal />
        </Suspense>
      </div>
      <Suspense fallback={<div className="h-40 bg-gray-100 animate-pulse rounded-2xl" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

