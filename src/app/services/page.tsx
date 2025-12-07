"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ServiceGrid, Service } from "@/components/ui/service-grid";
import ZoomParallaxDemo from "@/components/ui/zoom-parallax-demo";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

// IT Consultancy services with Unsplash images
const itConsultancyServices: Service[] = [
  {
    name: "Cloud Migration",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&q=80",
    href: "/services/cloud-migration",
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
    name: "Software Development",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop&q=80",
    href: "/services/software-development",
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
    href: "/services/it-strategy",
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
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Heading Section */}
      <section className="relative flex h-[60vh] md:h-[70vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <motion.div 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-primary">
                Our Services
              </p>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl font-normal leading-[1.2] tracking-[-0.02em] text-foreground md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Comprehensive IT Solutions for{" "}
              <em className="italic">Your Business</em>
            </motion.h1>
            <motion.p 
              className="max-w-2xl font-body text-lg font-normal leading-[1.6] text-muted-foreground md:text-xl"
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
      <ServiceGrid
        title="Our IT Consultancy Services"
        subtitle="Comprehensive technology solutions to drive your business forward. Choose from our wide range of expert IT services."
        services={itConsultancyServices}
        className="pt-32"
      />
      
      {/* Timeline Section */}
      <div className="py-20">
        <Timeline
          data={[
            {
              title: "2024",
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Expanded our service offerings with cutting-edge AI and machine learning solutions, helping clients transform their businesses with intelligent automation.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop&q=80"
                      alt="AI and ML services"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&q=80"
                      alt="Data analytics"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop&q=80"
                      alt="Cloud migration"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop&q=80"
                      alt="Cybersecurity"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "2023",
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Launched comprehensive DevOps and cloud infrastructure services, enabling clients to achieve faster deployment cycles and improved scalability.
                  </p>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Established strategic partnerships with leading cloud providers and expanded our team of certified engineers.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop&q=80"
                      alt="DevOps services"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop&q=80"
                      alt="Cloud infrastructure"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop&q=80"
                      alt="Software development"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=500&fit=crop&q=80"
                      alt="Database management"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </div>
                </div>
              ),
            },
            {
              title: "2022",
              content: (
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Key milestones and achievements in our consultancy journey:
                  </p>
                  <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      ✅ Launched digital transformation services
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      ✅ Expanded mobile development capabilities
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      ✅ Achieved ISO 27001 certification
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      ✅ Opened new offices in key markets
                    </div>
                    <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                      ✅ Reached 100+ successful client projects
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop&q=80"
                      alt="Digital transformation"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop&q=80"
                      alt="Mobile development"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=500&fit=crop&q=80"
                      alt="UI/UX design"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop&q=80"
                      alt="Cybersecurity"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <Footer />
    </main>
  );
}

