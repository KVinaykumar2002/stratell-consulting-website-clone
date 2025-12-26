"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "TechnoRealm transformed our entire IT infrastructure. Their cloud migration strategy saved us 40% on operational costs while improving performance. Exceptional team!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    company: "Global Solutions LLC",
    role: "CTO",
    content: "The AI automation solutions they implemented have revolutionized our customer service. Response times improved by 60% and customer satisfaction is at an all-time high.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
  },
  {
    name: "Emily Rodriguez",
    company: "InnovateCorp",
    role: "VP of Operations",
    content: "Working with TechnoRealm has been a game-changer. Their cybersecurity implementation protected us from multiple threats and their team is always responsive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    company: "ScaleUp Enterprises",
    role: "Founder",
    content: "From web development to DevOps, TechnoRealm has been our trusted technology partner. They understand our business needs and deliver solutions that drive growth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-white"
      aria-labelledby="testimonials-heading"
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
            <Star className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-sm font-semibold text-[#0A1628] uppercase tracking-wide">
              Client Success Stories
            </span>
          </div>
          <h2 
            id="testimonials-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-4"
          >
            Trusted by <span className="text-[#FFD700]">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our clients say about working with TechnoRealm
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FFD700]/20" aria-hidden="true" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" aria-hidden="true" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#0A1628]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
