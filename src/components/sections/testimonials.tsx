"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "TechnoRealm transformed our entire IT infrastructure. Their cloud migration strategy saved us 40% on operational costs while improving performance. Exceptional team!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    text: "The AI automation solutions they implemented have revolutionized our customer service. Response times improved by 60% and customer satisfaction is at an all-time high.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80",
    name: "Michael Chen",
    role: "CTO, Global Solutions LLC",
  },
  {
    text: "Working with TechnoRealm has been a game-changer. Their cybersecurity implementation protected us from multiple threats and their team is always responsive.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80",
    name: "Emily Rodriguez",
    role: "VP of Operations, InnovateCorp",
  },
  {
    text: "From web development to DevOps, TechnoRealm has been our trusted technology partner. They understand our business needs and deliver solutions that drive growth.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
    name: "David Thompson",
    role: "Founder, ScaleUp Enterprises",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance and operational efficiency significantly.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&q=80",
    name: "Jessica Martinez",
    role: "Operations Director, DigitalFirst",
  },
  {
    text: "TechnoRealm's robust features and quick support have transformed our workflow, making us significantly more efficient and competitive in our market.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654d0d?w=150&h=150&fit=crop&q=80",
    name: "Alexandra Kim",
    role: "Project Manager, CloudTech Solutions",
  },
  {
    text: "Our business functions improved dramatically with TechnoRealm's user-friendly design and exceptional customer support. Highly recommend their services.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80",
    name: "James Wilson",
    role: "Marketing Director, GrowthCo",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations with cutting-edge technology solutions.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80",
    name: "Maria Garcia",
    role: "Sales Manager, Enterprise Solutions",
  },
  {
    text: "Using TechnoRealm's services, our online presence and conversions significantly improved, boosting business performance and customer engagement.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80",
    name: "Robert Lee",
    role: "E-commerce Manager, RetailPlus",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-background my-20 relative" aria-labelledby="testimonials-heading">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 
            id="testimonials-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5"
          >
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

