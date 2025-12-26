"use client"

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, Pointer, Zap, Cloud, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

// Lazy load JSON files - only import when default tabs are actually used
// This prevents blocking initial bundle load

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

// Helper function to get default tabs - lazy loads animations only when needed
const getDefaultTabs = async (): Promise<Tab[]> => {
  const [
    { default: webDevelopmentAnimation },
    { default: itDevPinkAnimation },
    { default: dataSecurityAnimation },
    { default: cloudAnimation }
  ] = await Promise.all([
    import("@/app/web_development.json"),
    import("@/app/IT_dev_pink.json"),
    import("@/app/DATA_SECURITY.json"),
    import("@/app/Cloud.json")
  ]);

  return [
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
  ];
};

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  autoSwitchInterval = 5000, // 5 seconds default
  tabs: providedTabs,
}: Feature108Props) => {
  const [tabs, setTabs] = useState<Tab[] | undefined>(providedTabs);
  const [isLoadingDefaults, setIsLoadingDefaults] = useState(!providedTabs);

  // Load default tabs if none provided
  useEffect(() => {
    if (!providedTabs && isLoadingDefaults) {
      getDefaultTabs().then((defaultTabs) => {
        setTabs(defaultTabs);
        setIsLoadingDefaults(false);
      });
    }
  }, [providedTabs, isLoadingDefaults]);

  // Use provided tabs or wait for defaults
  const activeTabs = tabs || [];
  const [activeTab, setActiveTab] = useState(activeTabs[0]?.value || "");

  // Update activeTab when tabs load
  useEffect(() => {
    if (activeTabs.length > 0 && !activeTab) {
      setActiveTab(activeTabs[0].value);
    }
  }, [activeTabs, activeTab]);

  if (!tabs || tabs.length === 0) {
    return (
      <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="h-96 bg-gray-200 rounded-2xl animate-pulse" />
        </div>
      </section>
    );
  }
  const autoSwitchPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-switch tabs
  useEffect(() => {
    if (autoSwitchPausedRef.current) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = activeTabs.findIndex((tab) => tab.value === current);
        const nextIndex = (currentIndex + 1) % activeTabs.length;
        return activeTabs[nextIndex].value;
      });
    }, autoSwitchInterval);

    return () => clearInterval(interval);
  }, [activeTabs, autoSwitchInterval]);

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
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center mb-4 sm:mb-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-3 sm:px-4 py-1.5 sm:py-2">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-[#14B8A6] tracking-wide">{badge}</span>
          </div>
          <h1 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E3A5F] px-4 leading-tight sm:leading-normal">
            {heading}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 px-4 leading-relaxed">{description}</p>
        </div>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-6 sm:mt-8">
          <TabsList className="container flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-10 bg-transparent w-full sm:w-auto px-2 sm:px-0 overflow-x-auto scrollbar-hide">
            {activeTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-600 transition-all duration-300 ease-in-out data-[state=active]:bg-[#1E3A5F] data-[state=active]:text-[#14B8A6] data-[state=active]:scale-100 sm:data-[state=active]:scale-105 data-[state=active]:shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:text-[#1E3A5F] flex-shrink-0 min-h-[40px] sm:min-h-0 whitespace-nowrap"
              >
                <span className="w-3.5 h-3.5 sm:w-auto sm:h-auto flex items-center justify-center flex-shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-auto sm:[&>svg]:h-auto">{tab.icon}</span>
                <span className="text-center">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-6 sm:mt-8 max-w-screen-xl rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-16 relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] shadow-lg">
            {activeTabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className={`grid place-items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 lg:grid-cols-2 lg:gap-10 transition-all duration-500 ease-in-out ${
                    isActive 
                      ? "opacity-100 translate-x-0 relative z-10" 
                      : "opacity-0 translate-x-4 absolute inset-0 pointer-events-none"
                  }`}
                >
                  <div className={`flex flex-col gap-3 sm:gap-4 md:gap-5 transition-all duration-700 ease-out ${
                    isActive 
                      ? "opacity-100 translate-x-0 delay-150" 
                      : "opacity-0 -translate-x-4"
                  }`}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-2.5 sm:px-3 py-1 sm:py-1.5 w-fit">
                      <span className="text-[10px] sm:text-xs font-medium text-[#14B8A6]">{tab.content.badge}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-[#1E3A5F]">
                      {tab.content.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-400">
                      {tab.content.description}
                    </p>
                    {tab.content.buttonHref ? (
                      <Link to={tab.content.buttonHref}>
                        <Button className="mt-2 sm:mt-2.5 w-full sm:w-fit gap-2 group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 bg-[#14B8A6] text-[#1E3A5F] hover:bg-[#14B8A6]/90 shadow-[0_0_20px_rgba(20,184,166,0.3)] text-sm sm:text-base" size="default">
                          <span className="relative z-10 transition-all duration-300 font-semibold">{tab.content.buttonText}</span>
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="mt-2 sm:mt-2.5 w-full sm:w-fit gap-2 group/btn relative overflow-hidden transition-all duration-300 hover:scale-105 bg-[#14B8A6] text-[#1E3A5F] hover:bg-[#14B8A6]/90 shadow-[0_0_20px_rgba(20,184,166,0.3)] text-sm sm:text-base" size="default">
                        <span className="relative z-10 transition-all duration-300 font-semibold">{tab.content.buttonText}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-2" />
                      </Button>
                    )}
                  </div>
                  <div className={`w-full max-w-lg h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-transparent transition-all duration-700 ease-out ${
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

