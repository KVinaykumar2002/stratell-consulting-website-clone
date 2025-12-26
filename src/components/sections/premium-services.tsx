"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code, 
  Cloud, 
  Brain, 
  Shield, 
  Settings, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build scalable, high-performance web applications with modern frameworks and best practices.",
    href: "/services/application-development",
    iconBg: "bg-[#14B8A6]",
    iconGradient: "from-[#14B8A6] to-[#0D9488]",
    accentColor: "#14B8A6",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Accelerate your digital transformation with scalable cloud infrastructure and automated workflows.",
    href: "/services/cloud-infrastructure",
    iconBg: "bg-[#1E3A5F]",
    iconGradient: "from-[#1E3A5F] to-[#14B8A6]",
    accentColor: "#1E3A5F",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(30,58,95,0.3)]",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Harness the power of artificial intelligence to automate processes and gain competitive advantages.",
    href: "/services/ai-ml",
    iconBg: "bg-gradient-to-br from-[#FFD700] to-[#14B8A6]",
    iconGradient: "from-[#FFD700] to-[#14B8A6]",
    accentColor: "#FFD700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions and risk management strategies.",
    href: "/services/cybersecurity",
    iconBg: "bg-[#14B8A6]",
    iconGradient: "from-[#14B8A6] to-[#1E3A5F]",
    accentColor: "#14B8A6",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize operations, reduce costs, and drive innovation.",
    href: "/services/it-consulting",
    iconBg: "bg-[#1E3A5F]",
    iconGradient: "from-[#0A1628] to-[#1E3A5F]",
    accentColor: "#1E3A5F",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(30,58,95,0.3)]",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description: "Complete digital overhaul to modernize your business processes and customer experiences.",
    href: "/services/digital-transformation",
    iconBg: "bg-gradient-to-br from-[#FFD700] to-[#0A1628]",
    iconGradient: "from-[#FFD700] to-[#0A1628]",
    accentColor: "#FFD700",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function PremiumServices() {
  return (
    <section 
      className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A5F]/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" aria-hidden="true"></div>
            <span className="text-sm font-medium text-[#14B8A6] uppercase tracking-wide">
              Our Services
            </span>
          </motion.div>
          <h2 
            id="services-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] mb-6"
          >
            Comprehensive IT Solutions for{" "}
            <span className="text-[#14B8A6] italic">Your Business</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From web development to AI automation, we deliver enterprise-grade technology solutions that drive growth and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <Link
                  to={service.href}
                  className={`group relative block h-full p-8 md:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-[0_4px_24px_rgba(15,24,40,0.08)] hover:shadow-[0_12px_48px_rgba(15,24,40,0.16)] transition-all duration-500 overflow-hidden ${service.hoverGlow}`}
                >
                  {/* Animated gradient background on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.iconGradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                    aria-hidden="true"
                  />
                  
                  {/* Enhanced glow effect */}
                  <div 
                    className={`absolute -inset-1 bg-gradient-to-br ${service.iconGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}
                    style={{ filter: 'blur(24px)' }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with enhanced styling */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${service.iconBg} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 md:w-9 md:h-9 text-white" aria-hidden="true" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-normal text-[#1E3A5F] mb-4 group-hover:text-[#0A1628] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-base md:text-lg">
                      {service.description}
                    </p>

                    {/* Enhanced CTA */}
                    <div 
                      className="flex items-center gap-2 text-[#1E3A5F] font-semibold group-hover:text-[#14B8A6] transition-colors duration-300 mt-auto"
                      style={{ color: 'inherit' }}
                    >
                      <span className="text-sm md:text-base">View Details</span>
                      <ArrowRight 
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
                        aria-hidden="true" 
                      />
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-gradient-to-r from-[#1E3A5F] to-[#0A1628] text-white font-semibold hover:from-[#0A1628] hover:to-[#1E3A5F] transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#14B8A6]/20"
          >
            <span className="text-base md:text-lg">Explore All Services</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

