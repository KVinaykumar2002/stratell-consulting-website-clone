"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/technologies", label: "Technologies", hasDropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
];

const serviceItems = [
  { href: "/services/application-development", label: "App Development" },
  { href: "/services/system-integration", label: "System Integration" },
  { href: "/services/it-consulting", label: "IT Consulting" },
  { href: "/services/digital-transformation", label: "Digital Transformation" },
  { href: "/services/business-strategy", label: "Business Strategy" },
];

const technologyItems = [
  { href: "/technologies/ai-ml", label: "AI & Machine Learning" },
  { href: "/technologies/cloud-infrastructure", label: "Cloud Infrastructure" },
  { href: "/technologies/cybersecurity", label: "Cybersecurity" },
  { href: "/technologies/devops", label: "DevOps Consulting" },
  { href: "/technologies/data-analytics", label: "Data & Analytics" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTechnologiesOpen, setIsTechnologiesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileTechnologiesOpen, setIsMobileTechnologiesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const technologiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'top-3 w-[92%] max-w-5xl' 
        : 'top-4 w-[95%] max-w-6xl'
      }`}>
      <nav
        className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'h-16 px-4 md:px-6 bg-white/95 shadow-lg shadow-black/5' 
            : 'h-18 md:h-20 px-5 md:px-8 bg-white/90'
        }`}
        style={{
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 relative z-10">
          <div className={`relative transition-all duration-300 ${
            isScrolled ? 'h-36 md:h-44' : 'h-44 md:h-56'
          }`}>
            <Image
              src="/logo image/loading12/1234.png"
              alt="TechnoRealm"
              width={560}
              height={168}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isTechnologies = link.href === "/technologies";
            
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (isTechnologies) {
                      if (technologiesTimeoutRef.current) clearTimeout(technologiesTimeoutRef.current);
                      setIsTechnologiesOpen(true);
                    } else {
                      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                      setIsServicesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (isTechnologies) {
                      technologiesTimeoutRef.current = setTimeout(() => {
                        setIsTechnologiesOpen(false);
                      }, 100);
                    } else {
                      servicesTimeoutRef.current = setTimeout(() => {
                        setIsServicesOpen(false);
                      }, 100);
                    }
                  }}
                >
                  <Link 
                    href={link.href}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      active 
                        ? 'text-[#14B8A6] bg-[#14B8A6]/10 font-semibold' 
                        : 'text-slate-800/80 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      (isTechnologies ? isTechnologiesOpen : isServicesOpen) ? 'rotate-180' : ''
                    }`} />
                  </Link>
                  
                  {/* Services Dropdown */}
                  {!isTechnologies && isServicesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 py-2 bg-white/95 rounded-xl border border-slate-200/90 shadow-xl shadow-black/10 z-[100]"
                      style={{ backdropFilter: 'blur(18px)' }}
                      onMouseEnter={() => {
                        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                        setIsServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        servicesTimeoutRef.current = setTimeout(() => {
                          setIsServicesOpen(false);
                        }, 100);
                      }}
                    >
                      <div className="max-h-80 overflow-y-auto">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all duration-200 rounded-lg group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/50 group-hover:bg-[#14B8A6] transition-colors" />
                            {service.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 mt-2 pt-2 px-2">
                        <Link
                          href="/services"
                          className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-lg transition-colors"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Technologies Dropdown */}
                  {isTechnologies && isTechnologiesOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 py-2 bg-white/95 rounded-xl border border-slate-200/90 shadow-xl shadow-black/10 z-[100]"
                      style={{ backdropFilter: 'blur(18px)' }}
                      onMouseEnter={() => {
                        if (technologiesTimeoutRef.current) clearTimeout(technologiesTimeoutRef.current);
                        setIsTechnologiesOpen(true);
                      }}
                      onMouseLeave={() => {
                        technologiesTimeoutRef.current = setTimeout(() => {
                          setIsTechnologiesOpen(false);
                        }, 100);
                      }}
                    >
                      <div className="max-h-80 overflow-y-auto">
                        {technologyItems.map((tech) => (
                          <Link
                            key={tech.href}
                            href={tech.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all duration-200 rounded-lg group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]/50 group-hover:bg-[#14B8A6] transition-colors" />
                            {tech.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-white/10 mt-2 pt-2 px-2">
                        <Link
                          href="/technologies"
                          className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-lg transition-colors"
                        >
                          View All Technologies
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  active 
                    ? 'text-[#14B8A6] bg-[#14B8A6]/10 font-semibold' 
                    : 'text-slate-800/80 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Contact Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden lg:flex items-center gap-2 bg-[#14B8A6] text-white font-semibold rounded-lg transition-all duration-200 hover:bg-[#0D9488] hover:scale-105 active:scale-[0.98] shadow-lg hover:shadow-xl ${
              isScrolled ? 'h-10 px-5 text-sm' : 'h-11 px-6 text-sm'
            }`}
          >
              Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button 
                  aria-label="Open menu" 
                  className="p-2.5 text-slate-800/80 hover:text-slate-900 hover:bg-slate-950/5 rounded-lg transition-colors"
                >
                  <Menu size={22} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="bg-white/95 backdrop-blur-xl border-l border-slate-200 text-slate-900 p-0 w-full max-w-sm"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-5 border-b border-slate-200">
                    <SheetClose asChild>
                      <Link href="/" className="relative h-10">
                        <Image
                          src="/logo image/loading12/1234.png"
                          alt="TechnoRealm"
                          width={180}
                          height={54}
                          className="h-full w-auto object-contain"
                        />
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <button 
                        aria-label="Close menu" 
                        className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-950/5 rounded-lg transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </SheetClose>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto py-6 px-4">
                    <div className="space-y-1">
                      {navLinks.map((link) => {
                      const active = isActive(link.href);
                      const isTechnologies = link.href === "/technologies";
                        
                        if (link.hasDropdown) {
                          return (
                            <div key={link.href}>
                              <button
                                onClick={() => {
                                  if (isTechnologies) {
                                    setIsMobileTechnologiesOpen(!isMobileTechnologiesOpen);
                                  } else {
                                    setIsMobileServicesOpen(!isMobileServicesOpen);
                                  }
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                                  active
                                    ? 'text-[#14B8A6] bg-[#14B8A6]/10'
                                    : 'text-slate-800/80 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10'
                                }`}
                              >
                                {link.label}
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                                  (isTechnologies ? isMobileTechnologiesOpen : isMobileServicesOpen) ? 'rotate-180' : ''
                                }`} />
                              </button>
                              
                              {/* Services Dropdown */}
                              {!isTechnologies && isMobileServicesOpen && (
                                <div className="mt-1 ml-4 pl-4 border-l border-slate-200 space-y-1">
                                  {serviceItems.map((service) => (
                                    <SheetClose asChild key={service.href}>
                                      <Link
                                        href={service.href}
                                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-lg transition-all duration-200"
                                      >
                                        {service.label}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                  <SheetClose asChild>
                                    <Link
                                      href="/services"
                                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#14B8A6] rounded-lg"
                                    >
                                      View All Services
                                      <ArrowRight className="w-4 h-4" />
                                    </Link>
                                  </SheetClose>
                                </div>
                              )}

                              {/* Technologies Dropdown */}
                              {isTechnologies && isMobileTechnologiesOpen && (
                                <div className="mt-1 ml-4 pl-4 border-l border-slate-200 space-y-1">
                                  {technologyItems.map((tech) => (
                                    <SheetClose asChild key={tech.href}>
                                      <Link
                                        href={tech.href}
                                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-lg transition-all duration-200"
                                      >
                                        {tech.label}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                  <SheetClose asChild>
                                    <Link
                                      href="/technologies"
                                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-lg transition-all duration-200"
                                    >
                                      View All Technologies
                                      <ArrowRight className="w-4 h-4" />
                                    </Link>
                                  </SheetClose>
                                </div>
                              )}
                            </div>
                          );
                        }
                        
                      return (
                        <SheetClose asChild key={link.href}>
                          <Link 
                            href={link.href} 
                              className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                              active
                                  ? 'text-[#14B8A6] bg-[#14B8A6]/10'
                                  : 'text-slate-800/80 hover:text-[#14B8A6] hover:bg-[#14B8A6]/10'
                              }`}
                            >
                              {link.label}
                          </Link>
                        </SheetClose>
                      );
                    })}
                    </div>
                  </nav>
                  
                  {/* Mobile Contact Button */}
                  <div className="p-5 border-t border-slate-200">
                    <SheetClose asChild>
                      <Link 
                        href="/contact" 
                        className="flex items-center justify-center gap-2 w-full h-12 bg-[#14B8A6] text-white text-base font-semibold rounded-xl hover:bg-[#0D9488] transition-colors shadow-lg"
                      >
                          Contact Us
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
