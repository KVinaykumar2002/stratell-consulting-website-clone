'use client';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/services-data';

interface RelatedServicesProps {
  currentSlug: string;
  maxItems?: number;
  className?: string;
}

// Define related services mapping for better internal linking
const relatedServicesMap: Record<string, string[]> = {
  'ai-ml': ['data-analytics', 'application-development', 'digital-transformation'],
  'cloud-infrastructure': ['devops', 'cybersecurity', 'system-integration'],
  'cybersecurity': ['cloud-infrastructure', 'it-consulting', 'devops'],
  'devops': ['cloud-infrastructure', 'application-development', 'system-integration'],
  'application-development': ['ai-ml', 'devops', 'digital-transformation'],
  'data-analytics': ['ai-ml', 'business-strategy', 'digital-transformation'],
  'system-integration': ['cloud-infrastructure', 'devops', 'it-consulting'],
  'it-consulting': ['business-strategy', 'digital-transformation', 'cybersecurity'],
  'digital-transformation': ['it-consulting', 'cloud-infrastructure', 'ai-ml'],
  'business-strategy': ['it-consulting', 'operations-optimization', 'digital-transformation'],
  'operations-optimization': ['business-strategy', 'devops', 'data-analytics'],
  'financial-advisory': ['business-strategy', 'operations-optimization', 'it-consulting'],
};

export function RelatedServices({ 
  currentSlug, 
  maxItems = 3,
  className = '' 
}: RelatedServicesProps) {
  // Get related service slugs or fallback to random services
  const relatedSlugs = relatedServicesMap[currentSlug] || 
    Object.keys(servicesData)
      .filter(slug => slug !== currentSlug)
      .slice(0, maxItems);

  const relatedServices = relatedSlugs
    .slice(0, maxItems)
    .map(slug => servicesData[slug])
    .filter(Boolean);

  if (relatedServices.length === 0) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1E3A5F] mb-2">
          Related <span className="text-[#14B8A6]">Services</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Explore other services that complement your needs
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group block p-6 rounded-xl bg-white border border-gray-200 hover:border-[#14B8A6]/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-[#14B8A6]/5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2 group-hover:text-[#14B8A6] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {service.shortDescription}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-[#14B8A6] font-medium">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#14B8A6]/30 text-[#14B8A6] hover:bg-[#14B8A6]/10 transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Quick links component for sidebar or footer
export function ServiceQuickLinks({ 
  currentSlug,
  className = '' 
}: { 
  currentSlug?: string;
  className?: string;
}) {
  const services = Object.values(servicesData).filter(s => s.slug !== currentSlug);
  
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold text-[#1E3A5F] uppercase tracking-wider mb-4">
        Our Services
      </h3>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              to={`/services/${service.slug}`}
              className="text-sm text-gray-600 hover:text-[#14B8A6] transition-colors"
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// CTA section with internal links
export function CTAWithLinks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1E3A5F] mb-4">
          Ready to Transform Your <span className="text-[#14B8A6]">Business</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Partner with TechnoRealm for expert IT consulting. From{' '}
          <Link to="/services/cloud-infrastructure" className="text-[#14B8A6] hover:underline">
            cloud infrastructure
          </Link>{' '}
          to{' '}
          <Link to="/services/ai-ml" className="text-[#14B8A6] hover:underline">
            AI solutions
          </Link>
          , we deliver results.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#14B8A6] text-[#0f1729] font-semibold rounded-lg hover:bg-[#0D9488] transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 border border-[#14B8A6]/30 text-[#1E3A5F] rounded-lg hover:bg-[#14B8A6]/10 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

