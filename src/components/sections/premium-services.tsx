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
    color: "from-[#14B8A6] to-[#0A1628]",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Accelerate your digital transformation with scalable cloud infrastructure and automated workflows.",
    href: "/services/cloud-infrastructure",
    color: "from-[#1E3A5F] to-[#14B8A6]",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Harness the power of artificial intelligence to automate processes and gain competitive advantages.",
    href: "/services/ai-ml",
    color: "from-[#FFD700] to-[#14B8A6]",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions and risk management strategies.",
    href: "/services/cybersecurity",
    color: "from-[#14B8A6] to-[#1E3A5F]",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology guidance to optimize operations, reduce costs, and drive innovation.",
    href: "/services/it-consulting",
    color: "from-[#0A1628] to-[#1E3A5F]",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description: "Complete digital overhaul to modernize your business processes and customer experiences.",
    href: "/services/digital-transformation",
    color: "from-[#FFD700] to-[#0A1628]",
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
      className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0A1628]/20 bg-[#0A1628]/5 px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#14B8A6]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#0A1628] uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 
            id="services-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-4"
          >
            Comprehensive IT Solutions for{" "}
            <span className="text-[#14B8A6]">Your Business</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={service.href}
                  className="group relative block h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                  
                  {/* Glow Effect */}
                  <div 
                    className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0A1628] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#0A1628] font-semibold group-hover:text-[#14B8A6] transition-colors">
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0A1628] text-white font-semibold hover:bg-[#0A1628]/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

