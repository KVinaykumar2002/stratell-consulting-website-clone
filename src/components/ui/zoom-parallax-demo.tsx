"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallax";

export default function ZoomParallaxDemo() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&q=80",
      alt: "AI and machine learning - Robot",
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=800&fit=crop&q=80",
      alt: "Software development - Laptop",
    },
    {
      src: "/images/services/11.png",
      alt: "Service 11",
    },
    {
      src: "/images/services/12.png",
      alt: "Service 12",
    },
    {
      src: "/images/13.png",
      alt: "Service 13",
    },
    {
      src: "/images/14.png",
      alt: "Service 14",
    },
    {
      src: "/images/15.png",
      alt: "Service 15",
    },
  ];

  return <ZoomParallax images={images} />;
}

