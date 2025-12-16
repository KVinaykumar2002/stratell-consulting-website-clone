"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

// Enhanced animations for maximum interactivity
const animations = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-4px); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(229, 184, 0, 0.3), 0 0 40px rgba(229, 184, 0, 0.2); }
    50% { box-shadow: 0 0 30px rgba(229, 184, 0, 0.6), 0 0 60px rgba(229, 184, 0, 0.4); }
  }
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-3deg); }
    75% { transform: rotate(3deg); }
  }
  .animate-shimmer {
    animation: shimmer 0.8s ease-in-out;
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  .animate-slide-in {
    animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .animate-bounce-subtle {
    animation: bounce 1s ease-in-out infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
  .animate-ripple {
    animation: ripple 0.6s ease-out;
  }
  .animate-wiggle {
    animation: wiggle 0.5s ease-in-out;
  }
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
          ? 'top-2 w-[90%] max-w-[1000px]' 
          : 'top-4 w-[95%] max-w-[1200px]'
      }`}>
      <div
        className={`relative flex items-center justify-between rounded-2xl border border-white/30 transition-all duration-500 overflow-hidden ${
          isScrolled 
            ? 'h-16 px-4 md:px-6' 
            : 'h-18 md:h-20 px-5 md:px-8'
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
        
        {/* Interactive gradient background that follows mouse */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 184, 0, 0.1), rgba(30, 58, 95, 0.05), transparent 70%)`,
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
            className={`relative transition-all duration-500 ${
              hoveredLink === "/logo" ? "scale-110 rotate-1" : "scale-100 rotate-0"
            } group-active:scale-95 ${
              isScrolled ? 'h-36' : 'h-40 md:h-48'
            } ${pathname === "/" ? "animate-float" : ""}`}
          >
            {/* Multiple glow layers for depth */}
            <div className={`absolute inset-0 bg-gradient-to-r from-[#E5B800]/0 via-[#E5B800]/30 to-[#E5B800]/0 blur-2xl transition-opacity duration-500 ${
              hoveredLink === "/logo" ? "opacity-60" : "opacity-0"
            } -z-10`}></div>
            <div className={`absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/20 to-transparent blur-xl transition-opacity duration-500 ${
              hoveredLink === "/logo" ? "opacity-40" : "opacity-0"
            } -z-10`}></div>
            
            <Image
              src="/logo-33.png"
              alt="TechnoRealm Logo"
              width={700}
              height={210}
              className={`h-full w-auto object-contain transition-all duration-500 ${
                hoveredLink === "/logo" 
                  ? "drop-shadow-[0_0_30px_rgba(229,184,0,0.6)] brightness-115" 
                  : "drop-shadow-lg"
              } ${pathname === "/" ? "drop-shadow-[0_0_20px_rgba(229,184,0,0.4)]" : ""}`}
              style={{
                imageRendering: 'auto',
              }}
              priority
            />
            
            {/* Active indicator with multiple rings */}
            {pathname === "/" && (
              <>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#E5B800] rounded-full animate-pulse shadow-[0_0_15px_rgba(229,184,0,0.8)]"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#E5B800] rounded-full animate-ping opacity-40"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#E5B800] rounded-full animate-ping opacity-20" style={{ animationDelay: "0.5s" }}></div>
              </>
            )}
            
            {/* Hover particles */}
            {hoveredLink === "/logo" && (
              <>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#E5B800] rounded-full animate-bounce-subtle"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 80}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </Link>
        
        {/* Desktop Navigation - Highly Interactive */}
        <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-8 relative z-10">
          {navLinks.map((link, index) => {
            const active = isActive(link.href);
            const isHovered = hoveredLink === link.href;
            
            return (
              <Link 
                key={link.href} 
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`group relative text-sm xl:text-base font-medium transition-all duration-300 py-3 px-4 rounded-xl ${
                  active 
                    ? 'text-[#1E3A5F] font-bold scale-105' 
                    : 'text-gray-700 hover:text-[#1E3A5F] hover:scale-105'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Animated background with gradient */}
                <span className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                  active 
                    ? 'bg-gradient-to-r from-[#E5B800]/20 via-[#E5B800]/10 to-transparent' 
                    : 'bg-gradient-to-r from-[#E5B800]/0 via-[#E5B800]/5 to-transparent group-hover:from-[#E5B800]/15 group-hover:via-[#E5B800]/10 group-hover:to-transparent'
                } ${isHovered ? 'scale-110' : 'scale-100'}`}></span>
                
                {/* Animated border */}
                <span className={`absolute inset-0 rounded-xl border-2 transition-all duration-300 ${
                  active 
                    ? 'border-[#E5B800]/50 shadow-[0_0_20px_rgba(229,184,0,0.3)]' 
                    : 'border-transparent group-hover:border-[#E5B800]/30 group-hover:shadow-[0_0_15px_rgba(229,184,0,0.2)]'
                }`}></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`transition-all duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                    {link.label}
                  </span>
                  {/* Active indicator with animation */}
                  {active && (
                    <>
                      <span className="w-2 h-2 bg-[#E5B800] rounded-full animate-pulse shadow-[0_0_10px_rgba(229,184,0,0.8)]"></span>
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#E5B800] rounded-full animate-ping opacity-75"></span>
                    </>
                  )}
                  {/* Hover arrow indicator */}
                  {isHovered && !active && (
                    <span className="text-[#E5B800] transition-all duration-300 animate-wiggle">→</span>
                  )}
                </span>
                
                {/* Proper underline with gradient - always visible for active, appears on hover for others */}
                <span 
                  className={`absolute bottom-0 left-0 h-1.5 rounded-full transition-all duration-500 ${
                    active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`} 
                  style={{
                    background: 'linear-gradient(to right, #E5B800 0%, #E5B800 50%, #1E3A5F 100%)',
                  }}
                ></span>
                
                {/* Ripple effect on click */}
                <span className="absolute inset-0 rounded-xl bg-[#E5B800] opacity-0 group-active:opacity-30 group-active:animate-ripple -z-0"></span>
                
                {/* Glow effect */}
                <span className={`absolute -inset-1 rounded-xl bg-[#E5B800] opacity-0 blur-xl transition-opacity duration-500 ${
                  isHovered ? 'opacity-30' : ''
                } -z-10`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Contact Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onMouseEnter={() => setHoveredLink("/contact")}
            onMouseLeave={() => setHoveredLink(null)}
            className={`group relative hidden lg:inline-flex items-center justify-center bg-gradient-to-r from-[#E5B800] to-[#d4a800] text-[#1E3A5F] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#E5B800]/50 hover:scale-110 active:scale-95 overflow-hidden ${
              isScrolled 
                ? 'text-sm h-10 px-6' 
                : 'text-sm h-11 px-8'
            } ${pathname === "/contact" ? "ring-2 ring-[#E5B800] ring-offset-2 animate-pulse-glow" : ""} ${
              hoveredLink === "/contact" ? "scale-110" : "scale-100"
            }`}
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#E5B800] via-[#ffcc00] to-[#E5B800] animate-gradient opacity-100 group-hover:opacity-100"></span>
            
            {/* Shine effect on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
            
            {/* Pulsing glow for active state */}
            {pathname === "/contact" && (
              <>
                <span className="absolute inset-0 rounded-full bg-[#E5B800] opacity-30 animate-pulse"></span>
                <span className="absolute -inset-2 rounded-full bg-[#E5B800] opacity-20 animate-ping"></span>
              </>
            )}
            
            {/* Glow effect on hover */}
            <span className={`absolute -inset-1 rounded-full bg-[#E5B800] opacity-0 blur-2xl transition-opacity duration-500 ${
              hoveredLink === "/contact" ? "opacity-50" : ""
            } -z-10`}></span>
            
            <span className="relative z-10 flex items-center gap-2">
              <span className={`transition-all duration-300 ${hoveredLink === "/contact" ? "scale-110" : "scale-100"}`}>
                Contact Us
              </span>
              <span className={`transition-all duration-300 ${
                hoveredLink === "/contact" 
                  ? "opacity-100 translate-x-2 scale-110 animate-wiggle" 
                  : "opacity-0 translate-x-0"
              }`}>→</span>
            </span>
            
            {/* Sparkle particles on hover */}
            {hoveredLink === "/contact" && (
              <>
                <span className="absolute top-1 left-4 w-1 h-1 bg-white rounded-full animate-bounce-subtle"></span>
                <span className="absolute bottom-1 right-4 w-1 h-1 bg-white rounded-full animate-bounce-subtle" style={{ animationDelay: "0.2s" }}></span>
                <span className="absolute top-1/2 right-2 w-1 h-1 bg-white rounded-full animate-bounce-subtle" style={{ animationDelay: "0.4s" }}></span>
              </>
            )}
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
                          alt="TechnoRealm Logo"
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