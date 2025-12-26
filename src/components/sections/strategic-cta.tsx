"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface StrategicCTAProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "dark";
}

export default function StrategicCTA({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = "default",
}: StrategicCTAProps) {
  const isDark = variant === "dark";
  
  return (
    <section 
      className={`py-20 md:py-32 px-4 sm:px-6 ${
        isDark 
          ? "bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#1E3A5F]" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-[#0A1628]"
          }`}>
            {title}
            {!subtitle && (
              <span className="block text-[#14B8A6] mt-2">Let's Build Something Great</span>
            )}
          </h2>
          {subtitle && (
            <p className={`text-lg md:text-xl mb-8 ${
              isDark ? "text-white/80" : "text-gray-600"
            }`}>
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className="group inline-flex items-center justify-center h-14 px-8 rounded-xl bg-[#14B8A6] text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(20,184,166,0.4)] hover:shadow-[0_0_50px_rgba(20,184,166,0.6)]"
            >
              <span>{primaryCTA.text}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={`inline-flex items-center justify-center h-14 px-8 rounded-xl border-2 font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-[#0A1628]/30 text-[#0A1628] hover:bg-[#0A1628]/5"
                }`}
              >
                <span>{secondaryCTA.text}</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

