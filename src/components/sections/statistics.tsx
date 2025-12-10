"use client";

import CountUp from "react-countup";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { FloatingElement } from "@/components/ui/floating-element";

const statsData = [
  {
    value: 92,
    suffix: "%",
    description:
      "Of clients report measurable performance improvements within year.",
  },
  {
    value: 50,
    prefix: "$",
    suffix: "M",
    description:
      "In revenue growth generated across client portfolios in the last 3 years.",
  },
  {
    value: 100,
    suffix: "+",
    description:
      "Businesses advised across industries from tech startups to established enterprises.",
  },
  {
    value: 15,
    suffix: "+",
    description:
      "Years of combined expertise guiding business strategy and execution.",
  },
];

const StatisticsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-background py-[120px] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      {/* Floating brand icons */}
      <FloatingElement
        delay={0}
        duration={20}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block left-[8%] top-[15%]"
        rotationRange={15}
      >
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#4285F4]" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={1}
        duration={18}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block right-[10%] top-[20%]"
        rotationRange={-12}
      >
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#FF6900]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
          </svg>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={2}
        duration={22}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block left-[15%] bottom-[25%]"
        rotationRange={10}
      >
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#179BD7]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={0.5}
        duration={19}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block right-[12%] bottom-[20%]"
        rotationRange={-15}
      >
        <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#1877F2]" fill="currentColor">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
          </svg>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={1.5}
        duration={21}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block left-[20%] top-[40%]"
        rotationRange={8}
      >
        <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#EA4335]" fill="currentColor">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
          </svg>
        </div>
      </FloatingElement>

      <FloatingElement
        delay={2.5}
        duration={17}
        xOffset={0}
        yOffset={0}
        className="hidden xl:block right-[18%] top-[35%]"
        rotationRange={-10}
      >
        <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#7952B3]" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </FloatingElement>

      <div className="container relative z-10">
        <motion.div 
          className="flex flex-col items-center gap-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2">
            <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
            <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-primary">
              Who We Are
            </p>
          </div>
          <h2 className="max-w-[960px] font-display text-[56px] font-normal leading-[1.2] tracking-[-0.01em] text-primary-navy">
            TechnoRealm is a{" "}
            <em className="font-normal">results-driven</em> technology consultancy{" "}
            <em className="font-normal">helping</em> leaders{" "}
            <em className="font-normal">navigate</em> complexity,{" "}
            <em className="font-normal">refine</em> strategy, and{" "}
            <em className="font-normal">achieve</em> sustainable growth.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 pt-[60px] md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-card p-10 shadow-[0_4px_24px_rgba(15,24,40,0.08)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-stat-number text-primary-navy">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyDelay={200}
                />
              </p>
              <p className="mt-2 text-base font-normal leading-[1.6] text-text-body">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;