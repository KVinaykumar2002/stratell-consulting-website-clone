import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { ThemeProvider } from "@/components/providers";
import Script from "next/script";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/structured-data";

// Optimize font loading with next/font - eliminates render-blocking CSS
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechnoRealm - Expert IT Consulting & Technology Solutions",
    template: "%s | TechnoRealm"
  },
  description: "Transform your business with TechnoRealm's cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, application development, and digital transformation. Drive innovation and accelerate growth.",
  keywords: [
    "IT consulting",
    "technology consulting",
    "cloud infrastructure",
    "AI machine learning",
    "cybersecurity services",
    "DevOps consulting",
    "application development",
    "digital transformation",
    "IT strategy",
    "system integration",
    "data analytics",
    "business technology solutions"
  ],
  authors: [{ name: "TechnoRealm" }],
  creator: "TechnoRealm",
  publisher: "TechnoRealm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TechnoRealm",
    title: "TechnoRealm - Expert IT Consulting & Technology Solutions",
    description: "Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation.",
    images: [
      {
        url: `${siteUrl}/logo-33.png`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm - IT Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechnoRealm - Expert IT Consulting & Technology Solutions",
    description: "Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation.",
    images: [`${siteUrl}/logo-33.png`],
    creator: "@technorealm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace these with your actual verification codes when available
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    // yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorReporter />
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(OrganizationSchema()),
            }}
          />
          <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(WebsiteSchema()),
            }}
          />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
