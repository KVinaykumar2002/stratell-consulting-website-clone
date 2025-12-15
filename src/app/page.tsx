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
import webDevelopmentAnimation from "@/app/web_development.json";
import itDevPinkAnimation from "@/app/IT_dev_pink.json";
import dataSecurityAnimation from "@/app/DATA_SECURITY.json";
import cloudAnimation from "@/app/Cloud.json";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import { motion } from "framer-motion";

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
              animationData: itDevPinkAnimation,
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
              animationData: dataSecurityAnimation,
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
              animationData: webDevelopmentAnimation,
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
              animationData: cloudAnimation,
            },
          },
        ]}
      />
      <FeatureSection />
      
      {/* Our Technology Services Section */}
      <section className="py-32 px-6">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-12 text-center">
            <motion.div
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-primary">
                Our Services
              </p>
            </motion.div>
            <motion.h2 
              className="font-display text-3xl font-normal leading-[1.2] tracking-[-0.02em] text-foreground md:text-4xl lg:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our Technology Services
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto font-body text-lg font-normal leading-[1.6] text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive technology solutions to drive your business forward. Hover over each service to explore.
            </motion.p>
          </div>
          <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
            <DynamicFrameLayout 
              frames={[
                {
                  id: 1,
                  video: "/animations/9videos/21.mp4",
                  defaultPos: { x: 0, y: 0, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "AI & Machine Learning",
                },
                {
                  id: 2,
                  video: "/animations/9videos/22.mp4",
                  defaultPos: { x: 4, y: 0, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "Cloud Infrastructure & Management",
                },
                {
                  id: 3,
                  video: "/animations/9videos/23.mp4",
                  defaultPos: { x: 8, y: 0, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "Cybersecurity & Risk Management",
                },
                {
                  id: 4,
                  video: "/animations/9videos/24.mp4",
                  defaultPos: { x: 0, y: 4, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "DevOps Consulting",
                },
                {
                  id: 5,
                  video: "/animations/9videos/25.mp4",
                  defaultPos: { x: 4, y: 4, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "Application Development",
                },
                {
                  id: 6,
                  video: "/animations/9videos/26.mp4",
                  defaultPos: { x: 8, y: 4, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "Data & Analytics",
                },
                {
                  id: 7,
                  video: "/animations/9videos/27.mp4",
                  defaultPos: { x: 0, y: 8, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "Salesforce & Centene",
                },
                {
                  id: 8,
                  video: "/animations/9videos/28.mp4",
                  defaultPos: { x: 4, y: 8, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "System Integration",
                },
                {
                  id: 9,
                  video: "/animations/9videos/29.mp4",
                  defaultPos: { x: 8, y: 8, w: 4, h: 4 },
                  corner: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L64,0 L64,64 L0,64 Z' fill='none' stroke='%23ffffff' stroke-width='2'/%3E%3Cpath d='M0,0 L32,0 L0,32 Z' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E",
                  edgeHorizontal: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='64' y2='0' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  edgeVertical: "data:image/svg+xml,%3Csvg width='64' height='64' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='0' y2='64' stroke='%23ffffff' stroke-width='2'/%3E%3C/svg%3E",
                  mediaSize: 1,
                  borderThickness: 4,
                  borderSize: 95,
                  isHovered: false,
                  serviceName: "IT Consulting",
                },
              ]} 
              className="w-full h-full" 
              hoverSize={6}
              gapSize={4}
              showFrames={false}
            />
          </div>
        </div>
      </section>
    
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