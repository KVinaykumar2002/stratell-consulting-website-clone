"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const brands = [
  { name: "Google", icon: "G", color: "from-blue-500 to-red-500", position: { top: "10%", left: "8%" } },
  { name: "React", icon: "⚛", color: "from-cyan-400 to-blue-500", position: { top: "15%", left: "85%" } },
  { name: "Microsoft", icon: "⊞", color: "from-blue-600 to-cyan-500", position: { top: "45%", right: "10%" } },
  { name: "Apple", icon: "", color: "from-gray-700 to-gray-900", position: { top: "65%", right: "8%" } },
  { name: "Notion", icon: "N", color: "from-gray-800 to-black", position: { top: "70%", right: "85%" } },
  { name: "WordPress", icon: "W", color: "from-blue-400 to-blue-600", position: { top: "25%", left: "15%" } },
  { name: "Figma", icon: "F", color: "from-purple-500 to-pink-500", position: { top: "55%", left: "12%" } },
  { name: "Wix", icon: "Wix", color: "from-gray-900 to-black", position: { top: "8%", left: "45%" } },
];

export default function IntegrationsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-label-badge mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            INTEGRATION
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display mb-6">
            Seamlessly integrate with your{" "}
            <span className="italic">favorite tools</span>
          </h2>
          
          <p className="text-body-lg text-text-body mb-10">
            Built to work with the platforms and systems you already use,
            making implementation smooth and efficient.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-hover-blue transition-all text-button group">
            View all integrations
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Floating Brand Icons */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className="absolute"
              style={brand.position}
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2 + index * 0.3,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} shadow-lg flex items-center justify-center text-white font-bold text-xl`}
              >
                {brand.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}