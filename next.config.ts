import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // SEO optimizations
  trailingSlash: false,
  
  // External packages for server components (moved from experimental)
  serverExternalPackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'three-globe',
  ],
  
  // Compilation optimizations
  experimental: {
    // Optimize package imports for smaller bundles
    optimizePackageImports: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      'lucide-react',
      'framer-motion',
    ],
    // Optimize CSS
    optimizeCss: true,
  },
  
  // Enable Turbopack (Next.js 16 default)
  turbopack: {},
};

export default nextConfig;
