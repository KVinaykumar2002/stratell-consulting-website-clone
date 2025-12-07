"use client";

import { useEffect } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FAQWithSpiral from "@/components/ui/faq-section";

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header />
      <FAQWithSpiral />
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

