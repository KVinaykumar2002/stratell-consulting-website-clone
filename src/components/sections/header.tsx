"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/faqs", label: "FAQs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1152px]">
      <div
        className="flex items-center justify-between h-20 rounded-2xl px-4 border border-white/10"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        }}
      >
        <Link href="/" className="relative h-[48px] w-[164px] flex-shrink-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/ln32nYbqWvSJBoA7GRhGM437VII-1.svg"
            alt="Stratwell Consulting Logo"
            fill
            className="object-contain"
            priority
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
            className="hidden lg:inline-flex items-center justify-center bg-white text-[#0F1828] text-base font-medium h-12 px-8 rounded-xl hover:bg-gray-200 transition-colors"
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
                        <Link href="/" className="h-[40px] w-[140px] relative">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9b84987e-5fc0-480d-bd08-54bddc2234ce-stratwell-consulting-framer-website/assets/svgs/ln32nYbqWvSJBoA7GRhGM437VII-1.svg"
                            alt="Stratwell Consulting Logo"
                            fill
                            className="object-contain"
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