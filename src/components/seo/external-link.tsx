'use client';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
  sponsored?: boolean;
  ugc?: boolean;
}

/**
 * SEO-optimized external link component
 * Automatically adds proper rel attributes:
 * - noopener: Prevents security vulnerability
 * - noreferrer: Prevents referrer leakage
 * - nofollow: Optional for untrusted links
 * - sponsored: For paid/sponsored links
 * - ugc: For user-generated content links
 */
export function ExternalLink({ 
  href, 
  children, 
  className = '', 
  showIcon = true,
  sponsored = false,
  ugc = false
}: ExternalLinkProps) {
  // Build rel attribute
  const relParts = ['noopener', 'noreferrer'];
  if (sponsored) relParts.push('sponsored');
  if (ugc) relParts.push('ugc');
  
  return (
    <a
      href={href}
      target="_blank"
      rel={relParts.join(' ')}
      className={`inline-flex items-center gap-1 text-[#14B8A6] hover:text-[#0D9488] transition-colors ${className}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="w-3.5 h-3.5" />}
    </a>
  );
}

/**
 * Dofollow external link - Use sparingly for trusted, authoritative sources
 * This passes link equity to the target site
 */
export function TrustedExternalLink({ 
  href, 
  children, 
  className = '',
  showIcon = true 
}: Omit<ExternalLinkProps, 'sponsored' | 'ugc'>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-[#14B8A6] hover:text-[#0D9488] transition-colors ${className}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="w-3.5 h-3.5" />}
    </a>
  );
}

/**
 * Internal link with tracking - for important internal pages
 * Helps with internal link equity distribution
 */
export function InternalLink({ 
  href, 
  children, 
  className = '',
  priority = false 
}: { 
  href: string; 
  children: ReactNode; 
  className?: string;
  priority?: boolean;
}) {
  return (
    <a
      href={href}
      className={`text-[#14B8A6] hover:text-[#0D9488] transition-colors ${priority ? 'font-semibold' : ''} ${className}`}
    >
      {children}
    </a>
  );
}

