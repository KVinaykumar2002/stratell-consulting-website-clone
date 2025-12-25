'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const CtaFinal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex w-full items-center justify-center overflow-hidden rounded-3xl bg-[#1E3A5F] py-[120px] px-4 md:py-20 sm:py-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/images/G6uXFBOzh6vAiHkQIbFMIYuCAc-11.jpg"
        alt="TechnoRealm IT consulting team collaborating on technology solutions and digital transformation projects"
        fill
        objectFit="cover"
        objectPosition="center"
        className="z-0"
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1E3A5F]/80 via-[#0a1628]/70 to-[#1E3A5F]/80" />
      <motion.div 
        className="relative z-20 flex w-full max-w-[680px] flex-col items-center gap-6 rounded-3xl bg-white/[.08] p-10 text-center backdrop-blur-[8px] md:p-8 sm:p-6 border border-[#14B8A6]/20"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="font-display text-[56px] font-normal leading-[1.2] tracking-[-0.01em] text-white md:text-[48px] sm:text-[40px]">
          Ready to <em className="italic text-[#14B8A6]">Transform</em> Your Business?
        </h2>
        <p className="max-w-xl font-body text-base leading-[1.6] text-white/70">
          Schedule a free consultation and discover how TechnoRealm can streamline your operations, optimize performance, and deliver measurable results.
        </p>
        <Link
          href="/contact"
          className="group relative mt-2 inline-flex items-center h-14 px-6 rounded-xl bg-[#14B8A6] text-[#1E3A5F] overflow-hidden font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(20,184,166,0.3)]"
        >
          {/* Overlay animation from left to right */}
          <span className="absolute inset-0 bg-white transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-xl"></span>
          
          {/* Text */}
          <span className="relative z-10 text-base leading-none transition-colors duration-300 delay-100 group-hover:text-[#1E3A5F] mr-3">
            Get Started Today
          </span>
          
          {/* Navy circle with arrow */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#1E3A5F] rounded-full transition-all duration-300 group-hover:bg-[#14B8A6] group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4 text-white group-hover:text-[#1E3A5F] transition-colors" />
          </div>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default CtaFinal;