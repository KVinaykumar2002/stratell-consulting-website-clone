"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { TechnoRealmLogo } from "@/components/logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolled down more than 50px, shrink navbar
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'top-2 w-[85%] max-w-[900px]' 
        : 'top-6 w-[95%] max-w-[1152px]'
    }`}>
      <div
        className={`flex items-center justify-between rounded-2xl border border-white/10 transition-all duration-300 ${
          isScrolled 
            ? 'h-14 md:h-16 px-3 md:px-4' 
            : 'h-16 md:h-18 px-4 md:px-6'
        }`}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        <Link href="/" className="flex-shrink-0">
          <TechnoRealmLogo 
            width={600} 
            height={178} 
            className={`w-auto transition-all duration-300 ${
              isScrolled 
                ? 'h-36 md:h-40' 
                : 'h-40 md:h-48'
            }`}
            imageSrc="/logo image/31.png"
            variant="light"
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-x-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-base font-medium text-white hover:text-[#2639ED] transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center justify-center bg-white text-[#0F1828] font-medium rounded-xl hover:bg-gray-200 transition-all duration-300 ${
              isScrolled 
                ? 'text-sm h-9 px-5' 
                : 'text-base h-12 px-8'
            }`}
          >
            Contact Us
          </Link>

          <div className="lg:hidden ml-4">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button aria-label="Open menu" className="p-2 text-white">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0F1828] border-l-0 text-white p-0 w-full max-w-sm">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-white/20">
                      <SheetClose asChild>
                        <Link href="/" className="flex-shrink-0">
                          <TechnoRealmLogo 
                            width={480} 
                            height={142} 
                            className="h-[130px] w-auto"
                            imageSrc="/logo image/31.png"
                            variant="light"
                          />
                        </Link>
                      </SheetClose>
                    <SheetClose asChild>
                       <button aria-label="Close menu"><X size={24} /></button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-y-6 pt-10 px-6">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                           <Link href={link.href} className="text-2xl font-medium hover:text-[#2639ED] transition-colors">
                              {link.label}
                           </Link>
                      </SheetClose>
                    ))}
                  </nav>
                   <div className="mt-auto p-6">
                     <SheetClose asChild>
                      <Link href="/contact" className="flex items-center justify-center w-full bg-primary text-primary-foreground text-base font-medium h-12 rounded-xl hover:bg-primary/90 transition-colors">
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