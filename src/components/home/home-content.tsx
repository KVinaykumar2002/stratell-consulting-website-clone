"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Server, Brain, Code, Cloud } from "lucide-react";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";

// Import JSON animations - these are small and can be imported directly
import webDevelopmentAnimation from "@/app/web_development.json";
import itDevPinkAnimation from "@/app/IT_dev_pink.json";
import dataSecurityAnimation from "@/app/DATA_SECURITY.json";
import cloudAnimation from "@/app/Cloud.json";

// Lazy load heavy components with better loading states
const Feature108 = dynamic(
  () => import("@/components/blocks/shadcnblocks-com-feature108").then((mod) => ({ default: mod.Feature108 })),
  { 
    ssr: false,
    loading: () => (
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </div>
    )
  }
);

// Lazy load sections below the fold - only load when needed
const FeatureSection = dynamic(() => import("@/components/ui/stack-feature-section"), { 
  ssr: false 
});
const TrustedBy = dynamic(() => import("@/components/sections/trusted-by"), { 
  ssr: false 
});
const CtaFinal = dynamic(() => import("@/components/sections/cta-final"), { 
  ssr: false 
});
const Footer = dynamic(() => import("@/components/sections/footer"), { 
  ssr: false 
});
const GlobalNetworkSection = dynamic(() => import("@/components/sections/global-network"), { 
  ssr: false 
});
const FeaturesAccordionSection = dynamic(() => import("@/components/sections/features-accordion"), { 
  ssr: false 
});

// Lazy load heavy components
const DynamicFrameLayout = dynamic(
  () => import("@/components/ui/dynamic-frame-layout").then((mod) => ({ default: mod.DynamicFrameLayout })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#14B8A6] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }
);

export default function HomeContent() {
  // Removed artificial 2-second loading delay - this was killing LCP scores

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <HeroSection />
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
              buttonHref: "/services/it-consulting",
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
              buttonHref: "/services/ai-ml",
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
              buttonHref: "/services/application-development",
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
              buttonHref: "/services/cloud-infrastructure",
              animationData: cloudAnimation,
            },
          },
        ]}
      />
      <FeatureSection />
      
      {/* Our Technology Services Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-visible">
        <div className="mx-auto w-full max-w-[1200px] relative z-10">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <motion.div
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#14B8A6] animate-pulse"></div>
              <p className="text-xs sm:text-sm font-medium text-[#14B8A6] tracking-wide">
                Our Services
              </p>
            </motion.div>
            <h2 
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] mb-3 sm:mb-4 px-4"
            >
              Our Technology <span className="text-[#14B8A6]">Services</span>
            </h2>
            <motion.p 
              className="max-w-2xl mx-auto font-body text-sm sm:text-base md:text-lg font-normal leading-[1.6] text-zinc-400 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive technology solutions to drive your business forward. Hover over each service to explore.
            </motion.p>
          </div>
          <div className="w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-visible relative">
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

