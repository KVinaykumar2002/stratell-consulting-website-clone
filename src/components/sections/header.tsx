"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'top-2 w-[90%] max-w-[1000px]' 
        : 'top-4 w-[95%] max-w-[1200px]'
    }`}>
      <div
        className={`flex items-center justify-between rounded-xl border border-white/10 transition-all duration-300 ${
          isScrolled 
            ? 'h-14 px-4 md:px-6' 
            : 'h-16 md:h-[72px] px-5 md:px-8'
        }`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-32.png"
            alt="TechnoRealm Logo"
            width={500}
            height={150}
            className={`object-contain transition-all duration-300 ${
              isScrolled ? 'h-24 w-auto' : 'h-36 md:h-44 w-auto'
            }`}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-8 xl:gap-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm xl:text-base font-medium text-white hover:text-white/70 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center justify-center bg-white text-[#0F1828] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 ${
              isScrolled 
                ? 'text-sm h-9 px-5' 
                : 'text-sm h-10 px-6'
            }`}
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2 text-white hover:text-white/70 transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0F1828] border-l border-white/10 text-white p-0 w-full max-w-sm">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <SheetClose asChild>
                      <Link href="/">
                        <Image
                          src="/logo-32.png"
                          alt="TechnoRealm Logo"
                          width={200}
                          height={60}
                          className="h-14 w-auto object-contain"
                        />
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <button aria-label="Close menu" className="p-2 hover:text-white/70 transition-colors">
                        <X size={24} />
                      </button>
                    </SheetClose>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-y-4 pt-8 px-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-xl font-medium hover:text-white/70 transition-colors py-2"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  
                  {/* Mobile Contact Button */}
                  <div className="mt-auto p-6">
                    <SheetClose asChild>
                      <Link 
                        href="/contact" 
                        className="flex items-center justify-center w-full bg-white text-[#0F1828] text-base font-semibold h-12 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        Contact Us
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
  );
}