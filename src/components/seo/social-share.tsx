'use client';

import { FaTwitter, FaLinkedinIn, FaFacebookF, FaLink, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export function SocialShare({ 
  url, 
  title, 
  description = '', 
  className = '',
  variant = 'horizontal'
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  
  const shareLinks = [
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: '#1DA1F2',
      ariaLabel: 'Share on Twitter'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: '#0A66C2',
      ariaLabel: 'Share on LinkedIn'
    },
    {
      name: 'Facebook',
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: '#1877F2',
      ariaLabel: 'Share on Facebook'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: '#25D366',
      ariaLabel: 'Share on WhatsApp'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      color: '#EA4335',
      ariaLabel: 'Share via Email'
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`${className}`}>
      <p className="text-sm font-medium text-zinc-400 mb-3">Share this page:</p>
      <div className={`flex ${variant === 'vertical' ? 'flex-col' : 'flex-row'} gap-2`}>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={link.ariaLabel}
            title={`Share on ${link.name}`}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-110"
            style={{ '--hover-color': link.color } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = link.color + '20';
              e.currentTarget.style.color = link.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '';
              e.currentTarget.style.color = '';
            }}
          >
            <link.icon className="w-4 h-4" />
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          aria-label="Copy link to clipboard"
          title="Copy link"
          className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-200 hover:scale-110 ${
            copied 
              ? 'bg-green-500/20 border-green-500/50 text-green-400' 
              : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30'
          }`}
        >
          <FaLink className="w-4 h-4" />
        </button>
      </div>
      {copied && (
        <p className="text-xs text-green-400 mt-2 animate-pulse">Link copied!</p>
      )}
    </div>
  );
}

// Floating share sidebar for blog/article pages
export function FloatingShareBar({ url, title }: { url: string; title: string }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareLinks = [
    { icon: FaTwitter, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, color: '#1DA1F2', name: 'Twitter' },
    { icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, color: '#0A66C2', name: 'LinkedIn' },
    { icon: FaFacebookF, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, color: '#1877F2', name: 'Facebook' },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3">
      <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1 -rotate-90 origin-center whitespace-nowrap" style={{ marginLeft: '-20px' }}>
        Share
      </span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={`Share on ${link.name}`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110 hover:border-zinc-600"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = link.color;
            e.currentTarget.style.borderColor = link.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '';
            e.currentTarget.style.borderColor = '';
          }}
        >
          <link.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

