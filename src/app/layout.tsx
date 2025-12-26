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
    default: "TechnoRealm - Expert IT Consulting & Technology Solutions | Boston, MA",
    template: "%s | TechnoRealm - IT Consulting"
  },
  description: "TechnoRealm - Leading IT consulting company in Boston, MA. Expert technology consulting services including cloud computing, AI/ML solutions, cybersecurity, DevOps, custom software development, and digital transformation. Trusted by Fortune 500 companies. Get a free consultation today.",
  keywords: [
    // Primary High-Volume Keywords
    "IT consulting",
    "IT consulting services",
    "IT consulting company",
    "IT consulting firm",
    "technology consulting",
    "tech consulting",
    "IT solutions",
    "IT services company",
    
    // Cloud Computing Keywords
    "cloud consulting",
    "cloud computing services",
    "cloud migration services",
    "AWS consulting",
    "Azure consulting",
    "Google Cloud consulting",
    "cloud infrastructure management",
    "hybrid cloud solutions",
    "cloud cost optimization",
    "multi-cloud strategy",
    
    // AI/ML Keywords
    "AI consulting",
    "artificial intelligence consulting",
    "machine learning consulting",
    "AI solutions for business",
    "AI implementation services",
    "ML model development",
    "generative AI consulting",
    "ChatGPT integration",
    "AI automation services",
    
    // Cybersecurity Keywords
    "cybersecurity consulting",
    "cybersecurity services",
    "IT security consulting",
    "penetration testing services",
    "security audit services",
    "SOC 2 compliance consulting",
    "HIPAA compliance consulting",
    "ransomware protection",
    "zero trust security",
    
    // DevOps Keywords
    "DevOps consulting",
    "DevOps services",
    "CI/CD pipeline setup",
    "Kubernetes consulting",
    "Docker consulting",
    "infrastructure as code",
    "DevOps automation",
    "site reliability engineering",
    "SRE consulting",
    
    // Software Development Keywords
    "custom software development",
    "application development services",
    "web application development",
    "mobile app development",
    "enterprise software development",
    "API development services",
    "software modernization",
    "legacy system migration",
    
    // Digital Transformation Keywords
    "digital transformation consulting",
    "digital transformation services",
    "business digital transformation",
    "enterprise digital transformation",
    "IT modernization services",
    "technology modernization",
    
    // Data & Analytics Keywords
    "data analytics consulting",
    "business intelligence consulting",
    "data engineering services",
    "big data consulting",
    "data warehouse consulting",
    "Power BI consulting",
    "Tableau consulting",
    
    // Strategic IT Keywords
    "IT strategy consulting",
    "technology strategy",
    "IT roadmap development",
    "technology assessment",
    "IT audit services",
    "vendor selection consulting",
    
    // System Integration Keywords
    "system integration services",
    "enterprise integration",
    "API integration services",
    "Salesforce integration",
    "ERP integration",
    "CRM integration",
    
    // Local SEO Keywords
    "IT consulting Boston",
    "Boston IT consulting company",
    "Massachusetts IT consulting",
    "IT consultants near me",
    "technology consulting Boston MA",
    "IT services Boston",
    
    // Industry Keywords
    "healthcare IT consulting",
    "fintech consulting",
    "retail IT consulting",
    "manufacturing IT consulting",
    "enterprise IT consulting",
    "startup technology consulting",
    "SMB IT consulting",
    
    // Service-Specific Keywords
    "managed IT services",
    "IT outsourcing",
    "IT staff augmentation",
    "fractional CTO services",
    "virtual CIO services",
    "IT project management",
    "agile consulting",
    "scrum consulting"
  ],
  authors: [{ name: "TechnoRealm", url: siteUrl }],
  creator: "TechnoRealm",
  publisher: "TechnoRealm",
  generator: "Next.js",
  applicationName: "TechnoRealm",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TechnoRealm",
    title: "TechnoRealm - Expert IT Consulting & Technology Solutions",
    description: "Transform your business with cutting-edge IT consulting services. Expert solutions in cloud infrastructure, AI/ML, cybersecurity, DevOps, and digital transformation. Trusted by 100+ enterprises.",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "TechnoRealm - Expert IT Consulting & Technology Solutions",
        type: "image/png",
      },
    ],
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    site: "@technorealm",
    title: "TechnoRealm - Expert IT Consulting & Technology Solutions",
    description: "Transform your business with cutting-edge IT consulting. Cloud, AI/ML, Cybersecurity, DevOps & Digital Transformation. Trusted by 100+ enterprises.",
    images: {
      url: `${siteUrl}/twitter-image`,
      alt: "TechnoRealm - IT Consulting Services",
    },
    creator: "@technorealm",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
      "facebook-domain-verification": process.env.NEXT_PUBLIC_FACEBOOK_VERIFICATION || "",
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },
  category: "Technology",
  classification: "Business",
  other: {
    "geo.region": "US-MA",
    "geo.placename": "Boston",
    "geo.position": "42.3551;-71.0656",
    "ICBM": "42.3551, -71.0656",
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
  },
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
          enableSystem={false}
          forcedTheme="light"
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
            strategy="lazyOnload"
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
