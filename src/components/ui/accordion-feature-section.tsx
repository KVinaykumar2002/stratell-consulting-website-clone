"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  lottiePath: string;
  description: string;
  image?: string; // Optional for backwards compatibility
}

interface Feature197Props {
  features: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Ready-to-Use UI Blocks",
    lottiePath: "/animations/ui-blocks.json",
    description:
      "Browse through our extensive collection of pre-built UI blocks designed with shadcn/ui. Each block is carefully crafted to be responsive, accessible, and easily customizable. Simply copy and paste the code into your project.",
  },
  {
    id: 2,
    title: "Tailwind CSS & TypeScript",
    lottiePath: "/animations/tailwind.json",
    description:
      "Built with Tailwind CSS for rapid styling and TypeScript for type safety. Our blocks leverage the full power of Tailwind's utility classes while maintaining clean, type-safe code that integrates seamlessly with your Next.js projects.",
  },
  {
    id: 3,
    title: "Light Theme & Customization",
    lottiePath: "/animations/dark-mode.json",
    description:
      "Every block uses a clean light theme and can be customized to match your brand. Modify colors, spacing, and typography using Tailwind's configuration. The shadcn/ui theming system makes it easy to maintain consistency across your site.",
  },
  {
    id: 4,
    title: "Accessibility First",
    lottiePath: "/animations/accessibility.json",
    description:
      "All blocks are built with accessibility in mind, following WCAG guidelines. They include proper ARIA labels, keyboard navigation support, and semantic HTML structure. Ensure your website is usable by everyone without extra effort.",
  },
  {
    id: 5,
    title: "Modern Development Stack",
    lottiePath: "/animations/modern-stack.json",
    description:
      "Built for modern web development with React 18, Next.js 14, and the latest shadcn/ui components. Take advantage of React Server Components, TypeScript strict mode, and other cutting-edge features while maintaining excellent performance.",
  },
];

const Feature197 = ({ features = defaultFeatures }: Feature197Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeLottiePath, setActiveLottiePath] = useState(features[0].lottiePath);
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(activeLottiePath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };
    loadAnimation();
  }, [activeLottiePath]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E3A5F]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-4 py-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span className="text-sm font-medium text-[#14B8A6] tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-4">
            What Sets Us <span className="text-[#14B8A6]">Apart</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the core principles that drive our success and make us the preferred technology partner
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Accordion Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <Accordion
              type="single"
              className="w-full space-y-4"
              defaultValue="item-1"
              onValueChange={(value) => {
                const id = value ? parseInt(value.replace("item-", "")) : null;
                setActiveTabId(id);
                if (id) {
                  const feature = features.find((f) => f.id === id);
                  if (feature) {
                    setActiveLottiePath(feature.lottiePath);
                  }
                }
              }}
            >
              {features.map((tab, index) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  onMouseEnter={() => setHoveredId(tab.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <AccordionItem 
                    value={`item-${tab.id}`}
                    className={`
                      border rounded-xl overflow-hidden transition-all duration-300
                      ${tab.id === activeTabId 
                        ? 'border-[#14B8A6]/50 bg-gradient-to-r from-[#14B8A6]/10 to-white shadow-[0_0_30px_rgba(20,184,166,0.15)]' 
                        : 'border-gray-200 bg-white hover:border-[#14B8A6]/30 hover:bg-gray-50 shadow-sm'
                      }
                    `}
                  >
                    <AccordionTrigger className="cursor-pointer px-6 py-5 !no-underline transition-all group">
                      <div className="flex items-center gap-4">
                        {/* Number indicator */}
                        <div className={`
                          w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                          ${tab.id === activeTabId 
                            ? 'bg-[#14B8A6] text-white' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-[#14B8A6]/20 group-hover:text-[#14B8A6]'
                          }
                        `}>
                          {String(tab.id).padStart(2, '0')}
                        </div>
                        <h6
                          className={`text-lg md:text-xl font-semibold transition-all duration-300 ${
                            tab.id === activeTabId
                              ? "text-[#1E3A5F]"
                              : "text-gray-600 group-hover:text-[#1E3A5F]"
                          }`}
                        >
                          {tab.title}
                        </h6>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="pl-14">
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {tab.description}
                        </motion.p>
                        {/* Mobile Lottie */}
                        <div className="mt-6 lg:hidden">
                          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#14B8A6]/10 to-white border border-gray-200 p-4 shadow-sm">
                            <LottieComponent lottiePath={tab.lottiePath} />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Progress indicator */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    feature.id === activeTabId 
                      ? 'w-8 bg-[#14B8A6]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Animation Display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full lg:w-1/2 hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#14B8A6]/20 via-[#1E3A5F]/30 to-[#14B8A6]/20 rounded-3xl blur-2xl opacity-50" />
              
              {/* Main container */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg">
                <AnimatePresence mode="wait">
                  {animationData ? (
                    <motion.div
                      key={activeLottiePath}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Lottie
                        animationData={animationData}
                        loop={true}
                        autoplay={true}
                        style={{ 
                          width: "100%", 
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%"
                        }}
                        className="aspect-[4/3] rounded-xl"
                      />
                    </motion.div>
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-[#14B8A6]/20 rounded-full" />
                        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[#14B8A6] rounded-full animate-spin" />
                      </div>
                    </div>
                  )}
                </AnimatePresence>

                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-[#14B8A6]/30 rounded-tl-lg" />
                <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-[#14B8A6]/30 rounded-tr-lg" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-[#14B8A6]/30 rounded-bl-lg" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-[#14B8A6]/30 rounded-br-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper component for mobile Lottie animations
const LottieComponent = ({ lottiePath }: { lottiePath: string }) => {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(lottiePath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading Lottie animation:", error);
      }
    };
    loadAnimation();
  }, [lottiePath]);

  if (!animationData) {
    return (
      <div className="h-full max-h-80 w-full flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-[#14B8A6]/20 rounded-full" />
          <div className="absolute top-0 left-0 w-12 h-12 border-4 border-transparent border-t-[#14B8A6] rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="h-full max-h-80 w-full rounded-xl"
    />
  );
};

export { Feature197 };

