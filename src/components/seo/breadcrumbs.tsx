'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

// Map of path segments to readable names
const pathNameMap: Record<string, string> = {
  'services': 'Services',
  'about': 'About Us',
  'contact': 'Contact',
  'faqs': 'FAQs',
  'privacy': 'Privacy Policy',
  'terms': 'Terms & Conditions',
  'ai-ml': 'AI & Machine Learning',
  'cloud-infrastructure': 'Cloud Infrastructure',
  'cybersecurity': 'Cybersecurity',
  'devops': 'DevOps Consulting',
  'application-development': 'Application Development',
  'data-analytics': 'Data & Analytics',
  'system-integration': 'System Integration',
  'it-consulting': 'IT Consulting',
  'digital-transformation': 'Digital Transformation',
  'business-strategy': 'Business Strategy',
  'operations-optimization': 'Operations Optimization',
  'financial-advisory': 'Financial Advisory',
};

export function Breadcrumbs({ items, className = '', showHome = true }: BreadcrumbsProps) {
  const pathname = usePathname();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://technorealm.com';
  
  // Auto-generate breadcrumbs from pathname if items not provided
  const breadcrumbItems: BreadcrumbItem[] = items || (() => {
    const segments = pathname.split('/').filter(Boolean);
    const generatedItems: BreadcrumbItem[] = [];
    
    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      generatedItems.push({
        name: pathNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        href: currentPath,
      });
    });
    
    return generatedItems;
  })();

  // Don't render on homepage
  if (pathname === '/' || breadcrumbItems.length === 0) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      ...(showHome ? [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }] : []),
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": showHome ? index + 2 : index + 1,
        "name": item.name,
        "item": `${siteUrl}${item.href}`
      }))
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className={`py-3 ${className}`}
      >
        <ol 
          className="flex items-center flex-wrap gap-1 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {showHome && (
            <li 
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <Link 
                href="/" 
                className="flex items-center text-zinc-400 hover:text-[#14B8A6] transition-colors"
                itemProp="item"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only" itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
              <ChevronRight className="w-4 h-4 mx-2 text-zinc-600" />
            </li>
          )}
          
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const position = showHome ? index + 2 : index + 1;
            
            return (
              <li 
                key={item.href}
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span 
                    className="text-white font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link 
                      href={item.href}
                      className="text-zinc-400 hover:text-[#14B8A6] transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-zinc-600" />
                  </>
                )}
                <meta itemProp="position" content={String(position)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// Simple inline breadcrumb for service pages
export function ServiceBreadcrumb({ serviceName }: { serviceName: string }) {
  return (
    <Breadcrumbs 
      items={[
        { name: 'Services', href: '/services' },
        { name: serviceName, href: '#' }
      ]}
      className="mb-4"
    />
  );
}
