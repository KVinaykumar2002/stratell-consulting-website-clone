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
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { Server, Brain, Code, Cloud } from "lucide-react";

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
      <Feature108
        badge="Our Expertise"
        heading="Comprehensive IT Solutions Tailored to Your Needs"
        description="Explore our core service areas and discover how we can transform your business with cutting-edge technology."
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
              imageSrc:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
              imageAlt: "IT infrastructure and enterprise solutions",
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
              imageSrc:
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
              imageAlt: "Artificial intelligence and machine learning",
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
              imageSrc:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
              imageAlt: "Web development and programming",
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
              imageSrc:
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
              imageAlt: "Cloud computing and infrastructure",
            },
          },
        ]}
      />
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