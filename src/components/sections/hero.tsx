"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  // Memoize static arrays to prevent re-renders
  const words = useMemo(() => ["Business", "Ideas", "Goals", "Vision"], []);
  const wordColor = "text-[#14B8A6]"; // Logo Teal
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Memoize the interval callback
  const rotateWord = useCallback(() => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(rotateWord, 3000);
    return () => clearInterval(interval);
  }, [rotateWord]);

  // Lazy load video when section is in viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            // Start loading video after a small delay to prioritize text rendering
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.load();
              }
            }, 100);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden" 
      aria-label="Hero section - Transform your business with expert IT solutions"
    >
      {/* Background Video with optimized loading for better LCP */}
      <div className="absolute inset-0 z-0" role="presentation" aria-hidden="true">
        {/* Static gradient background - shows immediately while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]" />
        
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            src="https://ikconsultingservices.com/wp-content/uploads/2025/03/business-consulting11.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-hidden="true"
            onLoadedData={() => {
              // Video loaded, ensure it plays
              if (videoRef.current) {
                videoRef.current.play().catch(() => {
                  // Auto-play failed, video will play on user interaction
                });
              }
            }}
          >
            {/* Fallback text for accessibility */}
            <p>Business professionals collaborating in a modern office environment, showcasing IT consulting and technology solutions.</p>
          </video>
        )}
        {/* Enhanced gradient overlay for text readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]/70" 
          aria-hidden="true" 
        />
        {/* Subtle animated gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/5 via-transparent to-[#1E3A5F]/5 animate-pulse" 
          aria-hidden="true" 
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 pt-20 pb-32">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2"
          >
            <Check className="w-4 h-4 text-[#14B8A6]" aria-hidden="true" />
            <span className="text-sm font-medium text-white">Trusted by Growing Businesses</span>
          </motion.div>

          {/* Main Headline */}
          <motion.header 
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-6">
              Transform Your{" "}
              <span className="relative inline-block min-w-[140px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[250px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block italic ${wordColor} drop-shadow-[0_0_30px_rgba(20,184,166,0.6)] font-bold`}
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              with Enterprise IT Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal leading-[1.6] text-white/90 max-w-3xl mx-auto">
              We deliver cutting-edge technology consulting services that drive innovation, optimize operations, and accelerate your digital transformation journey.
            </p>
          </motion.header>
          
          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center h-14 px-8 rounded-xl bg-[#14B8A6] text-white overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(20,184,166,0.4)] text-base sm:text-lg font-bold hover:scale-105 hover:shadow-[0_0_50px_rgba(20,184,166,0.6)]"
              aria-label="Book a free consultation with TechnoRealm IT experts"
            >
              {/* Overlay animation from left to right */}
              <span 
                className="absolute inset-0 bg-[#0A1628] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-xl"
                aria-hidden="true"
              />
              
              {/* Text */}
              <span className="relative z-10 font-bold leading-none transition-colors duration-300 delay-100 group-hover:text-[#14B8A6]">
                Book a Free Consultation
              </span>
              
              {/* Arrow circle */}
              <span 
                className="relative z-10 flex items-center justify-center w-10 h-10 ml-3 bg-white rounded-full transition-all duration-300 group-hover:bg-[#14B8A6] group-hover:translate-x-1"
                aria-hidden="true"
              >
                <ArrowRight className="w-5 h-5 text-[#14B8A6] group-hover:text-white transition-colors" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/services"
              className="group inline-flex items-center justify-center h-14 px-8 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white overflow-hidden transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-base sm:text-lg font-semibold"
              aria-label="View all TechnoRealm services"
            >
              <span className="relative z-10">View Services</span>
              <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
