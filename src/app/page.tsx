"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import StatisticsSection from "@/components/sections/statistics";
import ServicesSection from "@/components/sections/services";
import FeatureSection from "@/components/ui/stack-feature-section";
import Testimonials from "@/components/sections/testimonials";
import TrustedBy from "@/components/sections/trusted-by";
import CtaFinal from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";
import GlobalNetworkSection from "@/components/sections/global-network";
import FeaturesAccordionSection from "@/components/sections/features-accordion";
import CurvedLoop from "@/components/CurvedLoop";
import { NeonOrbs } from "@/components/ui/neon-orbs";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NeonOrbs />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <ServicesSection />
      <FeatureSection />     
      <div className="py-8 overflow-visible">
        <CurvedLoop 
          marqueeText="Welcome to TechnoRealm ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
        />
      </div>
      <FeaturesAccordionSection />
      <GlobalNetworkSection />
      <TrustedBy />
      {/* <Testimonials /> */}
      <div className="container px-6 pb-20">
        <CtaFinal />
      </div>
      <Footer />
    </main>
  );
}