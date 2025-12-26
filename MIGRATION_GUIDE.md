# Migration from Next.js to Vite + React

This document outlines the migration from Next.js to Vite + React.

## Completed Changes

1. ✅ Vite configuration created (`vite.config.ts`)
2. ✅ Entry point created (`index.html`, `src/main.tsx`)
3. ✅ React Router setup (`src/App.tsx`)
4. ✅ Page components created in `src/pages/`
5. ✅ RootLayout component created
6. ✅ SEO metadata using react-helmet-async
7. ✅ Image utility component created (`src/lib/image-utils.tsx`)
8. ✅ Updated package.json dependencies

## Remaining Tasks

### 1. Update All Image Imports

Replace all instances of:
```tsx
import Image from 'next/image';
```

With:
```tsx
import OptimizedImage from '@/lib/image-utils';
```

Then replace `<Image ... />` with `<OptimizedImage ... />` throughout the codebase.

Files that need updating:
- `src/components/sections/services.tsx`
- `src/components/sections/footer.tsx`
- `src/components/ui/timeline-demo.tsx`
- `src/components/ui/scroll-expansion-hero.tsx`
- `src/components/ui/neon-orbs.tsx`
- `src/components/ui/map.tsx`
- `src/components/logo-exact.tsx`
- `src/app/about/about-content.tsx`
- `src/app/services/[slug]/service-page-content.tsx`

### 2. Update All Link Imports

Replace all instances of:
```tsx
import Link from 'next/link';
```

With:
```tsx
import { Link } from 'react-router-dom';
```

Files that need updating:
- `src/components/sections/hero.tsx`
- `src/components/sections/services.tsx`
- `src/components/sections/footer.tsx`
- `src/components/blocks/shadcnblocks-com-feature108.tsx`
- `src/components/ui/service-grid.tsx`
- `src/components/seo/related-services.tsx`
- `src/components/seo/breadcrumbs.tsx`
- `src/app/services/[slug]/service-page-content.tsx`
- And all other files using `next/link`

### 3. Update Environment Variables

Replace all instances of:
```tsx
process.env.NEXT_PUBLIC_SITE_URL
```

With:
```tsx
import.meta.env.VITE_SITE_URL
```

Files that need updating:
- `src/lib/seo-config.ts`
- `src/components/seo/structured-data.tsx`
- `src/components/seo/breadcrumbs.tsx`

### 4. Remove Next.js Specific Code

- Remove `next/script` imports and replace with direct script injection (already done in RootLayout)
- Remove `next/navigation` imports (usePathname → useLocation from react-router-dom)
- Remove `notFound()` calls (use NotFoundPage component instead)
- Remove `generateStaticParams` and `generateMetadata` functions (not needed in Vite)

### 5. Update CSS

The `globals.css` file has been updated to remove Next.js font references. Fonts are now loaded via Google Fonts in `index.html`.

### 6. Install Dependencies

Run:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 7. Update Build Scripts

The build process is now:
- Development: `npm run dev` (starts Vite dev server)
- Build: `npm run build` (builds for production)
- Preview: `npm run preview` (previews production build)

### 8. Environment Variables

Create a `.env` file with:
```
VITE_SITE_URL=https://technorealm.com
VITE_GOOGLE_VERIFICATION=your_verification_code
VITE_YANDEX_VERIFICATION=your_verification_code
VITE_BING_VERIFICATION=your_verification_code
VITE_FACEBOOK_VERIFICATION=your_verification_code
```

## Key Differences

1. **Routing**: Next.js App Router → React Router v6
2. **Images**: Next.js Image → OptimizedImage utility
3. **Metadata**: Next.js Metadata API → react-helmet-async
4. **Environment Variables**: `process.env.NEXT_PUBLIC_*` → `import.meta.env.VITE_*`
5. **Server Components**: All components are now client components
6. **Static Generation**: No automatic static generation - use React Router for routing

## Testing Checklist

- [ ] All routes work correctly
- [ ] Images load properly
- [ ] SEO metadata is correct
- [ ] Links navigate correctly
- [ ] Environment variables work
- [ ] Build process completes successfully
- [ ] No console errors

