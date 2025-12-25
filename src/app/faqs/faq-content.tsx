"use client";

import { useEffect } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FAQWithSpiral from "@/components/ui/faq-section";

export default function FAQPageContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      <main>
        <FAQWithSpiral />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

