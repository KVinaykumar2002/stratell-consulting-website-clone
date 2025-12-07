'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { FloatingElement } from '@/components/ui/floating-element';

const serviceData = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/5GD0777uhTEfnLJ2ecCWjovLkFc-2.svg",
    title: "Business Strategy",
    description: "Set the right direction with market insights and actionable roadmaps.",
    href: "/services",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/T1N2PVkGTQYDfsFV5Gv7NMJwzEE-3.svg",
    title: "Operations Optimization",
    description: "Streamline workflows, cut costs, and boost efficiency.",
    href: "/services",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/UpDOwZQHaYF0oZSLO3Wbtd9NChY-4.svg",
    title: "Digital Transformation",
    description: "Set the right direction with market insights and actionable roadmaps.",
    href: "/services",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/S9HEVhoKrF04xj78azaPdZfuNQ-5.svg",
    title: "Financial Advisory",
    description: "Improve performance, reduce risk, and unlock growth capital.",
    href: "/services",
  },
];

const ServiceCard = ({ icon, title, description, href, index }: { icon: string; title: string; description: string; href: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block bg-card rounded-3xl p-10 shadow-[0_4px_24px_rgba(15,24,40,0.08)] hover:shadow-[0_8px_32px_rgba(15,24,40,0.12)] transition-all duration-300 ease-in-out hover:scale-[1.02] flex flex-col gap-6">
        <Image src={icon} alt={`${title} icon`} width={56} height={56} />
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-[32px] font-semibold leading-[1.3] text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const CtaCard = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative flex flex-col justify-end h-full min-h-[380px] p-10 rounded-3xl overflow-hidden"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/bdaoSUaLvfhzG6ko44D0lXACYLk-1.jpg"
        alt="Business people shaking hands"
        fill
        style={{ objectFit: 'cover' }}
        className="z-0"
      />
      <div className="absolute inset-0 bg-[#0F1828]/65 z-10"></div>
      <div className="relative z-20 flex flex-col gap-8 items-start">
        <h3 className="font-display text-[32px] font-semibold leading-[1.3] text-white">
          Start Your <em className="italic">Growth</em> Journey
        </h3>
        <Link href="/contact" className="group/button relative inline-flex items-center bg-white text-foreground rounded-2xl h-14 pl-6 overflow-hidden text-button font-medium transition-all duration-300">
          {/* Overlay animation from left to right */}
          <span className="absolute inset-0 bg-[#2639ED] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover/button:translate-x-0 rounded-2xl"></span>
          
          {/* Text - changes to white on hover */}
          <span className="relative z-10 leading-none transition-colors duration-300 delay-100 group-hover/button:text-white mr-3">
            Get in Touch
          </span>
          
          {/* Blue circle with arrow - aligned next to text */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2639ED] rounded-full transition-all duration-300 group-hover/button:bg-[#1B28C3] group-hover/button:translate-x-1">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-[120px] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Floating testimonial/rating cards */}
      <FloatingElement
        delay={0}
        duration={16}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block left-[5%] top-[20%]"
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 w-56 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white font-bold">
              LS
            </div>
            <div>
              <p className="font-semibold text-sm">Lucas Shaw</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="text-xs text-muted-foreground">4.9 Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={1.5}
        duration={18}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block right-[8%] top-[25%]"
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 w-56 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold">
              SR
            </div>
            <div>
              <p className="font-semibold text-sm">Samuel Reed</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="text-xs text-muted-foreground">4.9 Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={0.8}
        duration={20}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block left-[10%] bottom-[15%]"
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 w-56 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-white font-bold">
              EC
            </div>
            <div>
              <p className="font-semibold text-sm">Ethan Collins</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="text-xs text-muted-foreground">4.9 Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={2.2}
        duration={19}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block right-[12%] bottom-[18%]"
      >
        <div className="bg-white rounded-2xl shadow-xl p-4 w-56 border border-border/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-white font-bold">
              JB
            </div>
            <div>
              <p className="font-semibold text-sm">Jacob Bennett</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-sm">★</span>
                <span className="text-xs text-muted-foreground">4.9 Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </FloatingElement>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center text-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 bg-accent text-primary py-2 px-4 rounded-full text-label-badge">
            <div className="w-[6px] h-[6px] bg-primary rounded-full"></div>
            <span>OUR SERVICES</span>
          </div>
          <h2 className="font-display text-[40px] leading-tight md:text-[56px] md:leading-[1.2] -tracking-[0.01em] text-foreground font-normal max-w-2xl">
            Our <em className="italic">Expertise</em>
          </h2>
        </motion.div>

        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="md:col-span-2 xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <CtaCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;