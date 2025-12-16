"use client"

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap, Cloud, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lottie from "lottie-react";

// Import JSON files directly - Next.js will handle these
import webDevelopmentAnimation from "@/app/web_development.json";
import itDevPinkAnimation from "@/app/IT_dev_pink.json";
import dataSecurityAnimation from "@/app/DATA_SECURITY.json";
import cloudAnimation from "@/app/Cloud.json";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  animationData: object;
  buttonHref?: string; // Optional href for button navigation
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  autoSwitchInterval?: number; // Interval in milliseconds (default: 5000ms = 5 seconds)
}

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  autoSwitchInterval = 5000, // 5 seconds default
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        animationData: webDevelopmentAnimation,
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Expert Features",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        animationData: itDevPinkAnimation,
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        animationData: dataSecurityAnimation,
      },
    },
    {
      value: "tab-4",
      icon: <Cloud className="h-auto w-4 shrink-0" />,
      label: "Cloud Solutions",
      content: {
        badge: "Cloud Technology",
        title: "Scale your infrastructure with cloud solutions.",
        description:
          "Leverage the power of cloud computing to enhance your business operations, improve scalability, and reduce costs with our comprehensive cloud services.",
        buttonText: "Learn More",
        animationData: cloudAnimation,
      },
    },
  ],
}: Feature108Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const autoSwitchPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-switch tabs
  useEffect(() => {
    if (autoSwitchPausedRef.current) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.value === current);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].value;
      });
    }, autoSwitchInterval);

    return () => clearInterval(interval);
  }, [tabs, autoSwitchInterval]);

  // Handle manual tab change - pause auto-switching temporarily
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    autoSwitchPausedRef.current = true;

    // Clear existing timeout if any
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume auto-switching after 10 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      autoSwitchPausedRef.current = false;
    }, 10000);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-[#0a1628] to-zinc-950">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B800]/30 bg-[#E5B800]/10 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#E5B800] animate-pulse" />
            <span className="text-sm font-medium text-[#E5B800] tracking-wide">{badge}</span>
          </div>
          <h1 className="max-w-2xl text-3xl font-semibold md:text-4xl text-white">
            {heading}
          </h1>
          <p className="text-zinc-400">{description}</p>
        </div>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 transition-all duration-300 ease-in-out data-[state=active]:bg-[#1E3A5F] data-[state=active]:text-[#E5B800] data-[state=active]:scale-105 data-[state=active]:shadow-[0_0_20px_rgba(229,184,0,0.2)] hover:text-white"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-gradient-to-br from-[#1E3A5F]/30 to-zinc-900/50 border border-white/10 p-6 lg:p-16 relative overflow-hidden min-h-[600px]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className={`grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10 transition-all duration-500 ease-in-out ${
                    isActive 
                      ? "opacity-100 translate-x-0 relative z-10" 
                      : "opacity-0 translate-x-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className={`flex flex-col gap-5 transition-all duration-700 ease-out ${
                    isActive 
                      ? "opacity-100 translate-x-0 delay-150" 
                      : "opacity-0 -translate-x-4"
                  }`}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B800]/30 bg-[#E5B800]/10 px-3 py-1.5 w-fit">
                      <span className="text-xs font-medium text-[#E5B800]">{tab.content.badge}</span>
                    </div>
                    <h3 className="text-3xl font-semibold lg:text-5xl text-white">
                      {tab.content.title}
                    </h3>
                    <p className="text-zinc-400 lg:text-lg">
                      {tab.content.description}
                    </p>
                    {tab.content.buttonHref ? (
                      <Link href={tab.content.buttonHref}>
                        <Button className="mt-2.5 w-fit gap-2 group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 bg-[#E5B800] text-[#1E3A5F] hover:bg-[#E5B800]/90 shadow-[0_0_20px_rgba(229,184,0,0.3)]" size="lg">
                          <span className="relative z-10 transition-all duration-300 font-semibold">{tab.content.buttonText}</span>
                          <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="mt-2.5 w-fit gap-2 group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 bg-[#E5B800] text-[#1E3A5F] hover:bg-[#E5B800]/90 shadow-[0_0_20px_rgba(229,184,0,0.3)]" size="lg">
                        <span className="relative z-10 transition-all duration-300 font-semibold">{tab.content.buttonText}</span>
                        <ArrowRight className="w-4 h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-2" />
                      </Button>
                    )}
                  </div>
                  <div className={`w-full max-w-lg h-[500px] flex items-center justify-center overflow-hidden bg-transparent transition-all duration-700 ease-out ${
                    isActive 
                      ? "opacity-100 scale-100 delay-300" 
                      : "opacity-0 scale-95"
                  }`}>
                    <Lottie
                      animationData={tab.content.animationData}
                      loop={true}
                      autoplay={true}
                      style={{ 
                        width: "100%", 
                        height: "100%",
                        maxWidth: "100%",
                        maxHeight: "100%"
                      }}
                      className="rounded-xl"
                    />
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };

