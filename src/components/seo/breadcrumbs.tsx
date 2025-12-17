"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbSchema } from "./structured-data";

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs() {
  const pathname = usePathname();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { name: "Home", url: "/" },
    ];

    if (pathname === "/") {
      return items;
    }

    const pathSegments = pathname.split("/").filter(Boolean);
    
    pathSegments.forEach((segment, index) => {
      const url = "/" + pathSegments.slice(0, index + 1).join("/");
      const name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      
      items.push({ name, url });
    });

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  // Generate structured data
  if (typeof window !== "undefined") {
    const structuredData = BreadcrumbSchema(breadcrumbs);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.id = "breadcrumb-schema";
    
    // Remove existing breadcrumb schema if present
    const existing = document.getElementById("breadcrumb-schema");
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
  }

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className="container mx-auto px-4 py-4"
    >
      <ol className="flex items-center space-x-2 text-sm text-zinc-400">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={item.url} className="flex items-center">
              {index === 0 ? (
                <Link
                  href={item.url}
                  className="hover:text-[#E5B800] transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <ChevronRight className="w-4 h-4 mx-2 text-zinc-600" />
                  {isLast ? (
                    <span className="text-white font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="hover:text-[#E5B800] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

