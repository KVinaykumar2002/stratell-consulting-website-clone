"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Shield, 
  TrendingUp, 
  Users, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Innovation-First Mindset",
    description: "We stay ahead of technology trends, bringing cutting-edge solutions to your business before your competitors.",
    color: "from-[#FFD700] to-[#14B8A6]",
  },
  {
    icon: Shield,
    title: "Security-First Architecture",
    description: "Enterprise-grade security is built into every solution from day one, not added as an afterthought.",
    color: "from-[#14B8A6] to-[#1E3A5F]",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, from startup to enterprise, without requiring complete rebuilds.",
    color: "from-[#1E3A5F] to-[#14B8A6]",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Your success is our success. We align our goals with yours and measure our performance by your outcomes.",
    color: "from-[#FFD700] to-[#0A1628]",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "No surprises, no hidden costs. Clear reporting, regular updates, and honest conversations throughout.",
    color: "from-[#14B8A6] to-[#0A1628]",
  },
  {
    icon: CheckCircle2,
    title: "Proven Track Record",
    description: "95%+ client satisfaction rate with 500+ successful projects delivered across diverse industries.",
    color: "from-[#0A1628] to-[#1E3A5F]",
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

export default function WhyChooseUs() {
  return (
    <section 
      className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50"
      aria-labelledby="why-choose-heading"
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
            <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#0A1628] uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 
            id="why-choose-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-4"
          >
            What Sets TechnoRealm <span className="text-[#14B8A6]">Apart</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just deliver technology—we deliver competitive advantages, operational excellence, and measurable business results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                  
                  {/* Glow Effect */}
                  <div 
                    className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl`}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0A1628] transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

