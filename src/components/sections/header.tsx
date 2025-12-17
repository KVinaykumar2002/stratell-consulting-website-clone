"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

// Simplified animations - reduced for better performance
const animations = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-shimmer { animation: shimmer 0.8s ease-in-out; }
  .animate-slide-in { animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
`;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <style jsx global>{animations}</style>
      <header className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-2 w-[95%] sm:w-[90%] max-w-[1000px]' 
          : 'top-2 sm:top-4 w-[98%] sm:w-[95%] max-w-[1200px]'
      }`}>
      <div
        className={`relative flex items-center justify-between rounded-xl sm:rounded-2xl border border-white/30 transition-all duration-500 overflow-hidden ${
          isScrolled 
            ? 'h-14 sm:h-16 px-3 sm:px-4 md:px-6' 
            : 'h-16 sm:h-18 md:h-20 px-4 sm:px-5 md:px-8'
        }`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(40px) saturate(200%)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%)',
          boxShadow: isScrolled 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 12px 48px 0 rgba(0, 0, 0, 0.18), inset 0 1px 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Glassy overlay effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)`,
            backdropFilter: 'blur(1px)',
          }}
        />
        
        {/* Subtle gradient background - removed mouse tracking for performance */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at 50% 50%, rgba(229, 184, 0, 0.08), transparent 70%)`,
          }}
        />
        
        {/* Reflective glass highlight */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none rounded-t-2xl"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)',
          }}
        />
        {/* Logo - Highly Interactive */}
        <Link 
          href="/" 
          className="flex-shrink-0 relative z-10 group"
          onMouseEnter={() => setHoveredLink("/logo")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div 
            className={`relative transition-all duration-300 ${
              hoveredLink === "/logo" ? "scale-105" : "scale-100"
            } ${isScrolled ? 'h-24 sm:h-28 md:h-32 lg:h-36' : 'h-28 sm:h-32 md:h-40 lg:h-48'}`}
          >
            <Image
              src="/logo-33.png"
              alt="TechnoRealm - Expert IT Consulting and Technology Solutions - Home"
              width={700}
              height={210}
              className={`h-full w-auto object-contain transition-all duration-300 drop-shadow-lg ${
                hoveredLink === "/logo" ? "drop-shadow-[0_0_20px_rgba(229,184,0,0.4)]" : ""
              }`}
              priority
              fetchPriority="high"
            />
            
            {/* Simplified active indicator */}
            {pathname === "/" && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#E5B800] rounded-full shadow-[0_0_10px_rgba(229,184,0,0.6)]" />
            )}
          </div>
        </Link>
        
        {/* Desktop Navigation - Optimized for performance */}
        <nav className="hidden lg:flex items-center gap-x-4 xl:gap-x-6 2xl:gap-x-8 relative z-10">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            
            return (
              <Link 
                key={link.href} 
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`group relative text-xs xl:text-sm 2xl:text-base font-medium transition-colors duration-200 py-2 xl:py-3 px-2 xl:px-4 rounded-lg xl:rounded-xl ${
                  active 
                    ? 'text-[#1E3A5F] font-bold' 
                    : 'text-gray-700 hover:text-[#1E3A5F]'
                }`}
              >
                {/* Background */}
                <span className={`absolute inset-0 rounded-xl transition-colors duration-200 ${
                  active 
                    ? 'bg-[#E5B800]/15' 
                    : 'bg-transparent group-hover:bg-[#E5B800]/10'
                }`} />
                
                <span className="relative z-10 flex items-center gap-2">
                  {link.label}
                  {active && (
                    <span className="w-1.5 h-1.5 bg-[#E5B800] rounded-full" />
                  )}
                </span>
                
                {/* Underline */}
                <span 
                  className={`absolute bottom-0 left-0 h-1 rounded-full bg-[#E5B800] transition-all duration-200 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* Contact Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`group hidden lg:inline-flex items-center justify-center bg-[#E5B800] text-[#1E3A5F] font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:bg-[#d4a800] active:scale-95 overflow-hidden ${
              isScrolled 
                ? 'text-xs xl:text-sm h-9 xl:h-10 px-4 xl:px-6' 
                : 'text-xs xl:text-sm h-10 xl:h-11 px-6 xl:px-8'
            } ${pathname === "/contact" ? "ring-2 ring-[#E5B800] ring-offset-2" : ""}`}
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Us
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
            </span>
            
            {/* Shine effect on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95 backdrop-blur-xl border-l border-gray-200 text-gray-900 p-0 w-full max-w-sm">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <SheetClose asChild>
                      <Link href="/" className="relative h-32">
                        <Image
                          src="/logo-33.png"
                          alt="TechnoRealm - Expert IT Consulting and Technology Solutions"
                          width={650}
                          height={195}
                          className="h-full w-auto object-contain"
                        />
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <button aria-label="Close menu" className="p-2 hover:text-gray-600 transition-colors text-gray-700">
                        <X size={28} />
                      </button>
                    </SheetClose>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-y-2 pt-8 px-6">
                    {navLinks.map((link, index) => {
                      const active = isActive(link.href);
                      return (
                        <SheetClose asChild key={link.href}>
                          <Link 
                            href={link.href} 
                            className={`group relative text-2xl font-medium transition-all duration-300 py-4 px-4 rounded-lg ${
                              active
                                ? 'text-[#1E3A5F] font-semibold bg-gradient-to-r from-[#E5B800]/15 to-transparent'
                                : 'text-gray-700 hover:text-[#1E3A5F] hover:bg-gradient-to-r hover:from-[#E5B800]/10 hover:to-transparent'
                            } animate-slide-in`}
                            style={{
                              animationDelay: `${index * 0.05}s`,
                            }}
                          >
                            <span className="relative z-10 flex items-center justify-between">
                              <span>{link.label}</span>
                              {active && (
                                <span className="w-2 h-2 bg-[#E5B800] rounded-full animate-pulse"></span>
                              )}
                              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">→</span>
                            </span>
                            <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#E5B800] rounded-r-full transition-all duration-300 ${
                              active ? 'h-full' : 'h-0 group-hover:h-full'
                            }`}></span>
                          </Link>
                        </SheetClose>
                      );
                    })}
                  </nav>
                  
                  {/* Mobile Contact Button */}
                  <div className="mt-auto p-6">
                    <SheetClose asChild>
                      <Link 
                        href="/contact" 
                        className={`group relative flex items-center justify-center w-full bg-[#E5B800] text-[#1E3A5F] text-lg font-semibold h-14 rounded-full hover:bg-[#d4a800] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#E5B800]/40 hover:scale-105 active:scale-95 overflow-hidden ${
                          pathname === "/contact" ? "ring-2 ring-[#E5B800] ring-offset-2" : ""
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Contact Us
                          <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
                        {pathname === "/contact" && (
                          <span className="absolute inset-0 rounded-full bg-[#E5B800] opacity-20 animate-pulse"></span>
                        )}
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}