import { useEffect } from 'react';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  children?: React.ReactNode;
}

export function useHead({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
}: Omit<HeadProps, 'children'>) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tag
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta tags
    if (description) {
      updateMetaTag('description', description);
    }
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    if (ogTitle) {
      updateMetaTag('og:title', ogTitle, 'property');
    }
    if (ogDescription) {
      updateMetaTag('og:description', ogDescription, 'property');
    }
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property');
    }
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, 'property');
    }

    // Twitter tags
    if (twitterTitle) {
      updateMetaTag('twitter:title', twitterTitle);
    }
    if (twitterDescription) {
      updateMetaTag('twitter:description', twitterDescription);
    }
    if (twitterImage) {
      updateMetaTag('twitter:image', twitterImage);
    }

    // Update canonical link
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage]);
}

// Component version for easier migration
export function Head({ title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, children }: HeadProps) {
  useHead({ title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage });

  // Handle script tags and other children
  useEffect(() => {
    if (children) {
      // This is a simplified version - for complex children, you might need more handling
      console.warn('Head component children are not fully supported. Use useHead hook for better control.');
    }
  }, [children]);

  return null;
}

