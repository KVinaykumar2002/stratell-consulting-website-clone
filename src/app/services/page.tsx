"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ServiceGrid, Service } from "@/components/ui/service-grid";
import ZoomParallaxDemo from "@/components/ui/zoom-parallax-demo";
import Image from "next/image";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { Server, Brain, Code, Cloud } from "lucide-react";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import webDevelopmentAnimation from "@/app/web_development.json";
import itDevPinkAnimation from "@/app/IT_dev_pink.json";
import dataSecurityAnimation from "@/app/DATA_SECURITY.json";
import cloudAnimation from "@/app/Cloud.json";
// IT services with Unsplash images
const itServices: Service[] = [
  {
    name: "Cloud Migration",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&q=80",
    href: "/services/cloud-infrastructure",
  },
  {
    name: "DevOps",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&q=80",
    href: "/services/devops",
  },
  {
    name: "Cybersecurity",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop&q=80",
    href: "/services/cybersecurity",
  },
  {
    name: "Application Development",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&q=80",
    href: "/services/application-development",
  },
  {
    name: "Data Analytics",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&q=80",
    href: "/services/data-analytics",
  },
  {
    name: "AI & Machine Learning",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&q=80",
    href: "/services/ai-ml",
  },
  {
    name: "Cloud Infrastructure",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&q=80",
    href: "/services/cloud-infrastructure",
  },
  {
    name: "API Development",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80",
    href: "/services/api-development",
  },
  {
    name: "Database Management",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=400&fit=crop&q=80",
    href: "/services/database-management",
  },
  {
    name: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=400&fit=crop&q=80",
    href: "/services/ui-ux-design",
  },
  {
    name: "Digital Transformation",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&q=80",
    href: "/services/digital-transformation",
  },
  {
    name: "IT Strategy",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80",
    href: "/services/it-consulting",
  },
  {
    name: "System Integration",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&q=80",
    href: "/services/system-integration",
  },
  {
    name: "Mobile Development",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop&q=80",
    href: "/services/mobile-development",
  },
  {
    name: "Quality Assurance",
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop&q=80",
    href: "/services/quality-assurance",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-zinc-950 to-[#0a1628]">
      <Header />
      
      {/* Hero Heading Section */}
      <section className="relative flex h-[60vh] md:h-[70vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a1628] via-zinc-950/95 to-zinc-950">
        {/* Subtle glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5B800]/5 rounded-full blur-[120px]" />
        
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <motion.div 
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5B800]/30 bg-[#E5B800]/10 px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 w-2 rounded-full bg-[#E5B800] animate-pulse"></div>
              <p className="text-sm font-medium text-[#E5B800] tracking-wide">
                Our Services
              </p>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl font-normal leading-[1.2] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Comprehensive IT Solutions for{" "}
              <em className="italic text-[#E5B800]">Your Business</em>
            </motion.h1>
            <motion.p 
              className="max-w-2xl font-body text-lg font-normal leading-[1.6] text-zinc-400 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We deliver cutting-edge technology services that drive innovation, 
              enhance efficiency, and accelerate your digital transformation journey.
            </motion.p>
          </div>
        </div>
      </section>

      <ZoomParallaxDemo />
      
      {/* Features Section with Tabs */}
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

      {/* Dynamic Frame Layout Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-zinc-950 to-[#0a1628]">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-12 text-center">
            <motion.div
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5B800]/30 bg-[#E5B800]/10 px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 w-2 rounded-full bg-[#E5B800] animate-pulse"></div>
              <p className="text-sm font-medium text-[#E5B800] tracking-wide">
                Explore Services
              </p>
            </motion.div>
            <motion.h2 
              className="font-display text-3xl font-normal leading-[1.2] tracking-[-0.02em] text-white md:text-4xl lg:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Technology <span className="text-[#E5B800]">Services</span>
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto font-body text-lg font-normal leading-[1.6] text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Comprehensive technology solutions to drive your business forward. Hover over each service to explore.
            </motion.p>
          </div>
          <div className="w-full h-[800px] md:h-[900px] lg:h-[1000px]">
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
                  serviceName: "Cloud Infrastructure & Management",
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
                  serviceName: "Application Development",
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
                  serviceName: "AI & Machine Learning",
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
                  serviceName: "Cybersecurity & Risk Management",
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

      <Footer />
    </main>
  );
}

