"use client";

import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = ["Business", "Ideas", "Goals", "Vision"];
  const wordColors = [
    "text-[#E5B800]", // Gold for Business
    "text-[#E5B800]", // Gold for Ideas
    "text-[#E5B800]", // Gold for Goals
    "text-[#E5B800]", // Gold for Vision
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

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
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label="Business professionals collaborating in a modern office."
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a162866] via-[#1E3A5F50] to-[#0a162899]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:gap-10 lg:flex-row lg:items-start">
          <motion.div 
            className="w-full lg:max-w-[680px] text-center lg:text-left lg:mt-48 xl:mt-60"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-normal leading-[1.1] tracking-[-0.02em] text-white">
              Transform Your{" "}
              <span className="relative inline-block min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block italic ${wordColors[currentWordIndex]} drop-shadow-[0_0_20px_rgba(229,184,0,0.5)]`}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              with Expert IT Solutions
            </h1>
          </motion.div>
          <motion.div 
            className="flex w-full flex-col items-center lg:items-start gap-6 md:gap-8 lg:max-w-[440px] lg:mt-48 xl:mt-60"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body text-base sm:text-lg md:text-xl font-normal leading-[1.6] text-white/90 text-center lg:text-left">
              We deliver cutting-edge technology consulting services that drive innovation, optimize operations, and accelerate your digital transformation journey.
            </p>
            <a
              href="/contact"
              className="group relative inline-flex items-center h-12 sm:h-14 px-5 sm:px-6 md:px-8 rounded-xl bg-[#E5B800] text-[#1E3A5F] overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(229,184,0,0.3)] text-sm sm:text-base font-semibold"
            >
              {/* Overlay animation from left to right */}
              <span className="absolute inset-0 bg-[#1E3A5F] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-xl"></span>
              
              {/* Text - changes to gold on hover */}
              <span className="relative z-10 font-semibold text-base leading-none transition-colors duration-300 delay-100 group-hover:text-[#E5B800] mr-3">
                Book a Consultation
              </span>
              
              {/* Navy circle with arrow */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#1E3A5F] rounded-full transition-all duration-300 group-hover:bg-[#E5B800] group-hover:translate-x-1">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:text-[#1E3A5F] transition-colors" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}