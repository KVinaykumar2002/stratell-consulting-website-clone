"use client";

import Link from "next/link";
import Image from "next/image";
import { SparklesPreview } from "@/components/ui/sparkles-preview";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <footer className="bg-gradient-to-b from-zinc-950 to-[#0a1628] text-white font-body relative">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#E5B800] to-transparent" />
      
      <div className="container pt-10 pb-6">
        {/* Main Grid */}
        <div className="pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-12 lg:gap-x-20 gap-y-12">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-block relative h-32 md:h-40 lg:h-48" aria-label="TechnoRealm Home - IT Consulting Services">
                <Image
                  src="/logo-33.png"
                  alt="TechnoRealm - Expert IT Consulting and Technology Solutions Logo"
                  width={500}
                  height={150}
                  className="h-full w-auto object-contain"
                  priority
                />
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center h-14 px-6 mt-10 bg-[#E5B800] text-[#1E3A5F] rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(229,184,0,0.2)]"
              >
                {/* Overlay animation from left to right */}
                <span className="absolute inset-0 bg-[#1E3A5F] transform origin-left -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 rounded-xl"></span>
                
                {/* Text - changes to gold on hover */}
                <span className="relative z-10 font-semibold text-base leading-none transition-colors duration-300 delay-100 group-hover:text-[#E5B800] mr-3">
                  Enquiry Now
                </span>
                
                {/* Navy circle with arrow */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#1E3A5F] rounded-full transition-all duration-300 group-hover:bg-[#E5B800] group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-[#1E3A5F] transition-colors" />
                </div>
              </Link>
            </div>

            {/* Menu */}
            <div>
              <h3 className="text-sm uppercase text-[#E5B800] mb-6 tracking-wider">Menu</h3>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-zinc-400 hover:text-[#E5B800] transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-sm uppercase text-[#E5B800] mb-6 tracking-wider">Socials</h3>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" className="text-zinc-400 hover:text-[#E5B800] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <address className="not-italic">
              <h3 className="text-sm uppercase text-[#E5B800] mb-6 tracking-wider">Contact</h3>
              <ul className="space-y-4 text-zinc-400">
                <li>
                  <a href="tel:+15558676543" className="hover:text-[#E5B800] transition-colors">
                    +1 (555) 867-6543
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@technorealm.com" className="hover:text-[#E5B800] transition-colors">
                    contact@technorealm.com
                  </a>
                </li>
                <li>
                  420 TechnoRealm Avenue, Suite 300<br />
                  Boston, MA 02116, USA
                </li>
              </ul>
            </address>
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
            <Link href="/privacy" className="hover:text-[#E5B800] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#E5B800] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {isVisible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[#E5B800] text-[#1E3A5F] px-4 py-2 rounded-full shadow-[0_0_20px_rgba(229,184,0,0.3)] z-50 font-bold"
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            scale: isScrolling ? 1.05 : 1,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileHover={{
            backgroundColor: "#1E3A5F",
            color: "#E5B800",
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
