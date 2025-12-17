"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { FloatingContactCards } from "@/components/ui/floating-contact-cards";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { SuccessCelebration } from "@/components/ui/success-celebration";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (formData: {
    fullName: string;
    email: string;
    company: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    // Replace this with your actual API endpoint
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      console.log("Contact form submitted:", formData);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A10] via-[#0a1628] to-[#0A0A10] relative overflow-hidden">
      <Header />
      
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Hero Section with Contact Form */}
      <section className="relative min-h-screen w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Background with stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.08)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
          
          {/* Gradient glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1E3A5F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Multiple shooting star layers */}
        <ShootingStars
          starColor="#FFD700"
          trailColor="#1E3A5F"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#1E3A5F"
          trailColor="#FFD700"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#282800] px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
              <span className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px] rounded-full bg-[#FFD700]" />
              <p className="text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[0.16em] text-white/90">
                Let's Connect
              </p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-3 sm:mb-4 block px-2">
              <TypingAnimation
                text="Get in Touch with Our IT Experts"
                speed={60}
                className="block"
              />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto px-4"
            >
              Tell us about your project and we'll get back to you with a tailored solution.
            </motion.p>
          </motion.div>

          {/* Floating Contact Cards */}
          <FloatingContactCards />

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10"
          >
            <ContactForm
              heading=""
              description=""
              buttonText="Send Message"
              onSubmit={handleSubmit}
            />
          </motion.div>
        </div>

        <style jsx>{`
          .stars {
            background-image: 
              radial-gradient(2px 2px at 20px 30px, rgba(255,215,0,0.3), rgba(0,0,0,0)),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.4), rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, rgba(255,215,0,0.2), rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.3), rgba(0,0,0,0)),
              radial-gradient(2px 2px at 130px 80px, rgba(255,215,0,0.3), rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.2), rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: twinkle 5s ease-in-out infinite;
            opacity: 0.6;
          }
          @keyframes twinkle {
            0% { opacity: 0.6; }
            50% { opacity: 0.9; }
            100% { opacity: 0.6; }
          }
        `}</style>
      </section>

      {/* Success Celebration */}
      <SuccessCelebration show={showSuccess} onComplete={() => setShowSuccess(false)} />

      <Footer />
    </main>
  );
}

