"use client";

import Link from "next/link";
import { SparklesPreview } from "@/components/ui/sparkles-preview";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { TechnoRealmLogo } from "@/components/logo";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        setIsScrolling(true);
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1.05,
          transition: { duration: 0.2 },
        });

        // Reset scrolling state after scroll stops
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
          controls.start({
            scale: 1,
            transition: { duration: 0.3 },
          });
        }, 150);
      } else {
        setIsVisible(false);
        setIsScrolling(false);
        controls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(scrollTimeout);
    };
  }, [controls]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "FAQs", href: "/faqs" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter (X)", href: "#" },
  ];

  return (
    <footer className="bg-black text-white font-body relative">
      <div className="container pt-10 pb-6">
        {/* Main Grid */}
        <div className="pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-12 lg:gap-x-20 gap-y-12">
            {/* Logo */}
            <div>
              <Link href="/">
                <TechnoRealmLogo 
                  width={650} 
                  height={195} 
                  className="h-48 md:h-52 lg:h-56 xl:h-60 w-auto"
                  imageSrc="/image.png"
                  variant="light"
                />
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center h-14 px-6 mt-10 bg-white text-black rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Overlay animation from left to right - using primary blue */}
                <span className="absolute inset-0 bg-[#2639ED] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-2xl"></span>
                
                {/* Text - changes to white on hover */}
                <span className="relative z-10 font-medium text-base leading-none transition-colors duration-300 delay-100 group-hover:text-white mr-3">
                  Enquiry Now
                </span>
                
                {/* Blue circle with arrow - aligned next to text */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2639ED] rounded-full transition-all duration-300 group-hover:bg-[#1B28C3] group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-sm uppercase text-white/50 mb-6">Menu</h3>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm uppercase text-white/50 mb-6">Socials</h3>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm uppercase text-white/50 mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>+1 (555) 867-6543</li>
                <li>contact@technorealm.com</li>
                <li>
                  420 TechnoRealm Avenue, Suite 300<br />
                  Boston, MA 02116, USA
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sparkles with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pt-4 pb-2 -mt-6"
        >
          <SparklesPreview text="TechnoRealm" />
        </motion.div>

        <div className="border-t border-white/10 mt-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-sm text-white/50">
            © 2025 TechnoRealm
          </p>

          <div className="flex gap-4 text-sm text-white/50">
            <a href="#">Privacy</a>
            <a href="#">T&C</a>
            <a href="#">Built in Framer</a>
          </div>
        </div>
        
        {/* Built with Optiwebrix */}
        <motion.div 
          className="text-center pt-6 pb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/70 flex items-center justify-center gap-2 flex-wrap">
            <span>Built with</span>
            <motion.span 
              className="inline-block cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-bold text-lg bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Optiwebrix
              </span>
            </motion.span>
          </p>
        </motion.div>
      </div>

      {/* Scroll To Top Button */}
      {isVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg z-50"
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            scale: isScrolling ? 1.05 : 1,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileHover={{
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            scale: 1.15,
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            opacity: { duration: 0.3 },
            y: {
              duration: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            scale: {
              duration: 0.2,
            },
            backgroundColor: { duration: 0.2 },
          }}
        >
          ↑
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
