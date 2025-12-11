"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["Business", "idea", "Goals", "Vision"];
  const wordColors = [
    "text-[#2639ED]", // Blue for Business
    "text-[#FF6B6B]", // Red/Pink for idea
    "text-[#4ECDC4]", // Teal for Goals
    "text-[#FFE66D]", // Yellow for Vision
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="https://ikconsultingservices.com/wp-content/uploads/2025/03/business-consulting11.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-label="Business professionals collaborating in a modern office."
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F182866] to-[#0F182899]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <motion.div 
            className="w-full lg:max-w-[680px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-[56px] font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-[72px]">
              Transform Your{" "}
              <span className="relative inline-block min-w-[200px] md:min-w-[250px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block italic ${wordColors[currentWordIndex]}`}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              with Expert IT Solutions
            </h1>
          </motion.div>
          <motion.div 
            className="flex w-full flex-col items-start gap-10 lg:max-w-[440px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body text-xl font-normal leading-[1.6] text-white">
              We deliver cutting-edge technology consulting services that drive innovation, optimize operations, and accelerate your digital transformation journey.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center h-14 px-6 rounded-2xl bg-white text-primary-navy overflow-hidden transition-all duration-300"
            >
              {/* Overlay animation from left to right */}
              <span className="absolute inset-0 bg-[#2639ED] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-2xl"></span>
              
              {/* Text - changes to white on hover */}
              <span className="relative z-10 font-medium text-base leading-none transition-colors duration-300 delay-100 group-hover:text-white mr-3">
                Book a Consultation
              </span>
              
              {/* Blue circle with arrow - aligned next to text */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2639ED] rounded-full transition-all duration-300 group-hover:bg-[#1B28C3] group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}