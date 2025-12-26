"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Brain, Cloud, Shield, Settings, Database, ArrowRight } from "lucide-react";

const technologies = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence and machine learning to drive intelligent automation, predictive analytics, and data-driven decision making.",
    icon: Brain,
    href: "/technologies/ai-ml",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and resilient cloud solutions across AWS, Azure, and GCP. Transform your infrastructure with cloud-native architectures.",
    icon: Cloud,
    href: "/technologies/cloud-infrastructure",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets. From threat detection to compliance, we keep your business secure.",
    icon: Shield,
    href: "/technologies/cybersecurity",
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: "devops",
    title: "DevOps Consulting",
    description: "Accelerate delivery with CI/CD pipelines, infrastructure as code, containerization, and automation. Achieve faster time-to-market.",
    icon: Settings,
    href: "/technologies/devops",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights. Advanced analytics, data visualization, and business intelligence solutions.",
    icon: Database,
    href: "/technologies/data-analytics",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function TechnologiesPageContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex h-[60vh] md:h-[70vh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-50" aria-labelledby="technologies-hero-title">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14B8A6]/5 rounded-full blur-[120px]" aria-hidden="true" />
        
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <motion.div 
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" aria-hidden="true"></div>
              <p className="text-sm font-medium text-[#14B8A6] tracking-wide">
                Our Technologies
              </p>
            </motion.div>
            <h1 
              id="technologies-hero-title"
              className="font-display text-4xl font-normal leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] md:text-5xl lg:text-6xl"
            >
              Cutting-Edge <em className="italic text-[#14B8A6]">Technologies</em> for Your Business
            </h1>
            <motion.p 
              className="max-w-2xl font-body text-lg font-normal leading-[1.6] text-gray-600 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore the innovative technologies we specialize in to drive digital transformation 
              and accelerate your business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="technologies-grid-title">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 
              id="technologies-grid-title"
              className="font-display text-3xl font-normal leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] md:text-4xl lg:text-5xl mb-4"
            >
              Technologies We <span className="text-[#14B8A6]">Specialize In</span>
            </h2>
            <motion.p 
              className="max-w-2xl mx-auto font-body text-lg font-normal leading-[1.6] text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We leverage the latest technologies to deliver innovative solutions that transform businesses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={tech.href}
                    className="group block h-full p-8 bg-white rounded-2xl border border-slate-200/90 hover:border-[#14B8A6]/50 hover:shadow-xl hover:shadow-[#14B8A6]/10 transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tech.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3 group-hover:text-[#14B8A6] transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    <div className="flex items-center text-[#14B8A6] font-medium text-sm group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]" aria-labelledby="technologies-cta-title">
        <div className="mx-auto w-full max-w-[800px] text-center">
          <motion.h2 
            id="technologies-cta-title"
            className="font-display text-3xl md:text-4xl font-normal leading-[1.2] tracking-[-0.02em] text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business with Modern Technologies?
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's discuss how our technology expertise can help drive your digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#14B8A6] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

