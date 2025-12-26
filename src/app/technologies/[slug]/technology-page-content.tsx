"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import OptimizedImage from "@/lib/image-utils";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight, Zap } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { TechnologyDetail } from "@/lib/technologies-data";

interface TechnologyPageContentProps {
  technology: TechnologyDetail;
}

export default function TechnologyPageContent({ technology }: TechnologyPageContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#1E3A5F] relative overflow-hidden">
      {/* Animated Tech Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Header />
      
      {/* Tech Hero Section */}
      <section className="relative pt-32 pb-24 px-6 min-h-[70vh] flex items-center" aria-labelledby="technology-title">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-label="Breadcrumb"
            >
              <Link 
                to="/technologies" 
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#14B8A6] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                <span>Back to Technologies</span>
              </Link>
            </motion.nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-4 py-2 backdrop-blur-sm"
            >
              <Zap className="w-3 h-3 text-blue-400" aria-hidden="true" />
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.1em] text-blue-400">
                Our Technology
              </p>
            </motion.div>
            
            <motion.h1
              id="technology-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-[#1E3A5F] via-[#14B8A6] to-[#1E3A5F] bg-clip-text text-transparent"
            >
              {technology.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed"
            >
              {technology.shortDescription}
            </motion.p>
          </motion.div>
        </div>

        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" aria-hidden="true" />
      </section>

      {/* Main Content Section */}
      <section className="relative py-20 px-6" aria-label="Technology details">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Description */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description Card */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity" aria-hidden="true" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Overview
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {technology.fullDescription}
                  </p>
                </div>
              </motion.article>

              {/* Benefits Section */}
              {technology.benefits && technology.benefits.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative"
                  aria-labelledby="benefits-title"
                >
                  <h2 id="benefits-title" className="font-display text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Key Benefits
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                    {technology.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity" aria-hidden="true" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-5 flex items-start gap-4 hover:border-blue-500/50 transition-colors">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mt-0.5" aria-hidden="true">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-base text-gray-300 leading-relaxed">{benefit}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.section>
              )}

            </div>

            {/* Right Column - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Hero Image with Tech Frame */}
                <motion.figure
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-50 group-hover:opacity-75 blur-lg transition-opacity" aria-hidden="true" />
                  <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-gray-800">
                    <OptimizedImage
                      src={technology.heroImage}
                      alt={`${technology.title} - TechnoRealm professional technology solutions illustration`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                  </div>
                </motion.figure>

                {/* Use Cases Card */}
                {technology.useCases && technology.useCases.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity" aria-hidden="true" />
                    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
                      <h3 className="font-display text-xl font-bold text-white mb-5">
                        Common Use Cases
                      </h3>
                      <ol className="space-y-3" role="list">
                        {technology.useCases.map((useCase, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <span className="text-sm font-bold text-cyan-400 mt-0.5" aria-hidden="true">{index + 1}.</span>
                            <span className="text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">{useCase}</span>
                          </motion.li>
                        ))}
                      </ol>
                    </div>
                  </motion.div>
                )}

                {/* CTA Card with Glow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-50 group-hover:opacity-75 blur-lg transition-opacity" aria-hidden="true" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-blue-500/30 p-6">
                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      Get Started Today
                    </h3>
                    <p className="text-sm text-gray-400 mb-6">
                      Ready to transform your business with {technology.title.toLowerCase()}?
                    </p>
                    <Link
                      to="/contact"
                      className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden"
                    >
                      <span className="relative z-10">Contact Us</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Image Gallery with Tech Theme */}
      {technology.images && technology.images.length > 0 && (
        <section className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black" aria-labelledby="gallery-title">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="gallery-title" className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                See Our Technology in Action
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                {technology.images.map((image, index) => (
                  <motion.figure
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity" aria-hidden="true" />
                    <div className="relative h-64 rounded-xl overflow-hidden border-2 border-gray-800">
                      <OptimizedImage
                        src={image}
                        alt={`${technology.title} technology example ${index + 1} - TechnoRealm professional solutions`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

