"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function ZoomParallaxDemo() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=800&fit=crop&q=80",
      alt: "Cloud services",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&q=80",
      alt: "Software development",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&q=80",
      alt: "AI and machine learning",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&q=80",
      alt: "Data analytics",
    },
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop&q=80",
      alt: "Cybersecurity",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&q=80",
      alt: "Cloud infrastructure",
    },
    {
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=800&fit=crop&q=80",
      alt: "Technology solutions",
    },
  ];

  return <ZoomParallax images={images} />;
}

