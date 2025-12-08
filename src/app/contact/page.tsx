"use client";

import { useEffect } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ContactForm } from "@/components/ui/contact-form";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function ContactPage() {
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
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Contact Form */}
      <section className="relative flex min-h-[calc(100vh-200px)] w-full items-center justify-center overflow-hidden bg-black pt-32 pb-20 px-4">
        {/* Background with stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
          
          {/* Gradient glow from bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent blur-3xl" />
        </div>

        {/* Multiple shooting star layers with different colors and speeds */}
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={1000}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#FF0099"
          trailColor="#FFB800"
          minSpeed={10}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={4000}
        />
        <ShootingStars
          starColor="#00FF9E"
          trailColor="#00B8FF"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1500}
          maxDelay={3500}
        />

        <div className="relative z-10 w-full">
          <ContactForm
            heading="Get in Touch with Our IT Experts"
            description="Tell us about your project and we'll get back to you with a tailored solution."
            buttonText="Send Message"
            onSubmit={handleSubmit}
          />
        </div>

        <style jsx>{`
          .stars {
            background-image: 
              radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: twinkle 5s ease-in-out infinite;
            opacity: 0.5;
          }
          @keyframes twinkle {
            0% { opacity: 0.5; }
            50% { opacity: 0.8; }
            100% { opacity: 0.5; }
          }
        `}</style>
      </section>

      <Footer />
    </main>
  );
}

