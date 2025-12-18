/**
 * Comprehensive SEO Configuration for TechnoRealm
 * Covers: Keyword Research, On-Page Optimization, Technical SEO, and Off-Page Signals
 */

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com";

// =============================================================================
// 1. KEYWORD RESEARCH - Organized by intent and volume
// =============================================================================

export const keywordStrategy = {
  // High-Volume Primary Keywords (Target for homepage & main pages)
  primary: [
    "IT consulting",
    "IT consulting services", 
    "IT consulting company",
    "technology consulting",
    "IT solutions",
  ],

  // Commercial Intent Keywords (High conversion potential)
  commercial: [
    "hire IT consultants",
    "IT consulting quote",
    "IT consulting pricing",
    "IT consulting near me",
    "best IT consulting company",
    "top IT consultants",
    "enterprise IT consulting",
  ],

  // Service-Specific Keywords
  services: {
    cloud: [
      "cloud consulting services",
      "AWS consulting",
      "Azure consulting",
      "Google Cloud consulting",
      "cloud migration services",
      "cloud infrastructure management",
      "hybrid cloud solutions",
      "cloud cost optimization",
      "multi-cloud strategy",
      "serverless architecture",
    ],
    ai: [
      "AI consulting",
      "machine learning consulting",
      "artificial intelligence services",
      "AI implementation",
      "ChatGPT integration",
      "generative AI consulting",
      "ML model development",
      "AI automation",
      "predictive analytics",
      "NLP solutions",
    ],
    cybersecurity: [
      "cybersecurity consulting",
      "security assessment",
      "penetration testing",
      "SOC 2 compliance",
      "HIPAA compliance",
      "security audit",
      "incident response",
      "zero trust security",
      "ransomware protection",
      "vulnerability assessment",
    ],
    devops: [
      "DevOps consulting",
      "CI/CD pipeline",
      "Kubernetes consulting",
      "Docker consulting",
      "infrastructure as code",
      "Terraform consulting",
      "site reliability engineering",
      "DevOps automation",
      "GitOps implementation",
    ],
    development: [
      "custom software development",
      "web application development",
      "mobile app development",
      "API development",
      "enterprise software",
      "React development",
      "Node.js development",
      "software modernization",
    ],
    analytics: [
      "data analytics consulting",
      "business intelligence",
      "Power BI consulting",
      "Tableau implementation",
      "data engineering",
      "big data analytics",
      "data visualization",
      "ETL development",
    ],
  },

  // Local SEO Keywords
  local: [
    "IT consulting Boston",
    "Boston IT consulting company",
    "Massachusetts IT services",
    "IT consultants Boston MA",
    "technology consulting Boston",
    "IT services near me",
  ],

  // Long-Tail Keywords (Lower competition, higher conversion)
  longTail: [
    "how much does IT consulting cost",
    "best IT consulting company for startups",
    "cloud migration consulting services",
    "AI implementation consulting for business",
    "cybersecurity consulting for small business",
    "DevOps consulting for enterprise",
    "custom software development company Boston",
    "digital transformation consulting services",
  ],

  // Question Keywords (For FAQ & Featured Snippets)
  questions: [
    "what is IT consulting",
    "how to choose an IT consultant",
    "why hire an IT consulting company",
    "what does IT consulting cost",
    "how long does IT consulting take",
    "what services do IT consultants provide",
  ],
};

// =============================================================================
// 2. ON-PAGE OPTIMIZATION - Titles, Descriptions, Headers
// =============================================================================

export const pageOptimization = {
  home: {
    title: "TechnoRealm - #1 IT Consulting Company | Cloud, AI, Cybersecurity",
    description: "TechnoRealm is a leading IT consulting company. Expert services in cloud computing, AI/ML, cybersecurity, DevOps & digital transformation. Trusted by Fortune 500. Free consultation.",
    h1: "Expert IT Consulting & Technology Solutions",
    keywords: [...keywordStrategy.primary, ...keywordStrategy.commercial.slice(0, 5)],
  },
  
  services: {
    title: "IT Consulting Services - Cloud, AI, Cybersecurity, DevOps | TechnoRealm",
    description: "Comprehensive IT consulting services: Cloud Migration, AI Implementation, Cybersecurity, DevOps, Custom Development, Data Analytics. Enterprise solutions with 99.9% uptime SLA.",
    h1: "Our IT Consulting Services",
    keywords: [...keywordStrategy.services.cloud.slice(0, 3), ...keywordStrategy.services.ai.slice(0, 3), ...keywordStrategy.services.cybersecurity.slice(0, 3)],
  },
  
  about: {
    title: "About TechnoRealm - Award-Winning IT Consulting Experts",
    description: "Learn about TechnoRealm - an award-winning IT consulting firm with 50+ experts. Certified AWS, Azure, Google Cloud partners. 100+ successful projects delivered.",
    h1: "About TechnoRealm",
    keywords: ["about TechnoRealm", "IT consulting team", "technology experts", "certified IT consultants"],
  },
  
  contact: {
    title: "Contact TechnoRealm - Free IT Consulting Quote | Boston, MA",
    description: "Contact TechnoRealm for free IT consulting. Boston, MA. Call +1 (555) 867-6543. Response within 24 hours. Get your project assessment today.",
    h1: "Contact Us",
    keywords: [...keywordStrategy.local, "IT consulting quote", "free consultation"],
  },
  
  faqs: {
    title: "IT Consulting FAQs - Common Questions Answered | TechnoRealm",
    description: "Get answers to IT consulting questions: pricing, process, timeline, services. Learn about cloud, AI, cybersecurity consulting from experts.",
    h1: "Frequently Asked Questions",
    keywords: keywordStrategy.questions,
  },
};

// Service page SEO configurations
export const servicePageSEO: Record<string, {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  schema: string;
}> = {
  "ai-ml": {
    title: "AI & Machine Learning Consulting Services | TechnoRealm",
    description: "Expert AI & ML consulting: ChatGPT integration, predictive analytics, NLP, computer vision. Transform your business with AI. Free AI readiness assessment.",
    h1: "AI & Machine Learning Consulting",
    keywords: keywordStrategy.services.ai,
    schema: "Service",
  },
  "cloud-infrastructure": {
    title: "Cloud Consulting Services - AWS, Azure, Google Cloud | TechnoRealm",
    description: "Enterprise cloud consulting: AWS, Azure, GCP migration, optimization & management. Reduce cloud costs 30%. Free cloud assessment available.",
    h1: "Cloud Infrastructure & Management",
    keywords: keywordStrategy.services.cloud,
    schema: "Service",
  },
  "cybersecurity": {
    title: "Cybersecurity Consulting - Security Audits & Compliance | TechnoRealm",
    description: "Comprehensive cybersecurity consulting: penetration testing, SOC 2, HIPAA compliance, incident response. Protect your business. Free security assessment.",
    h1: "Cybersecurity & Risk Management",
    keywords: keywordStrategy.services.cybersecurity,
    schema: "Service",
  },
  "devops": {
    title: "DevOps Consulting Services - CI/CD, Kubernetes, Automation | TechnoRealm",
    description: "Expert DevOps consulting: CI/CD pipelines, Kubernetes, Docker, Terraform. Deploy 10x faster. Free DevOps maturity assessment.",
    h1: "DevOps Consulting",
    keywords: keywordStrategy.services.devops,
    schema: "Service",
  },
  "application-development": {
    title: "Custom Software Development Services | TechnoRealm",
    description: "Custom software development: web apps, mobile apps, APIs, enterprise solutions. Agile delivery. Free project consultation.",
    h1: "Application Development",
    keywords: keywordStrategy.services.development,
    schema: "Service",
  },
  "data-analytics": {
    title: "Data Analytics & Business Intelligence Consulting | TechnoRealm",
    description: "Data analytics consulting: BI dashboards, Power BI, Tableau, data engineering. Turn data into insights. Free data assessment.",
    h1: "Data & Analytics",
    keywords: keywordStrategy.services.analytics,
    schema: "Service",
  },
  "digital-transformation": {
    title: "Digital Transformation Consulting Services | TechnoRealm",
    description: "Digital transformation consulting: modernization strategy, process automation, change management. Transform your business. Free assessment.",
    h1: "Digital Transformation",
    keywords: ["digital transformation consulting", "digital strategy", "business transformation", "IT modernization"],
    schema: "Service",
  },
  "it-consulting": {
    title: "Strategic IT Consulting Services | TechnoRealm",
    description: "Strategic IT consulting: technology roadmap, vendor selection, IT governance. Align IT with business goals. Free IT assessment.",
    h1: "IT Consulting",
    keywords: ["IT strategy consulting", "technology advisory", "IT roadmap", "CTO consulting"],
    schema: "Service",
  },
};

// =============================================================================
// 3. TECHNICAL SEO - Configurations
// =============================================================================

export const technicalSEO = {
  // Canonical URL settings
  canonical: {
    enforceTrailingSlash: false,
    enforceHttps: true,
    enforceLowercase: true,
  },

  // Sitemap configuration
  sitemap: {
    defaultChangeFreq: "weekly" as const,
    priorities: {
      home: 1.0,
      services: 0.95,
      servicePages: 0.85,
      about: 0.8,
      contact: 0.85,
      faqs: 0.7,
      legal: 0.3,
    },
  },

  // Robots configuration
  robots: {
    allowedPaths: ["/", "/about", "/services", "/contact", "/faqs"],
    disallowedPaths: ["/api/", "/_next/", "/admin/", "/private/"],
    crawlDelay: 1,
  },

  // Core Web Vitals targets
  performance: {
    targetLCP: 2.5, // Largest Contentful Paint < 2.5s
    targetFID: 100, // First Input Delay < 100ms
    targetCLS: 0.1, // Cumulative Layout Shift < 0.1
    targetTTFB: 0.8, // Time to First Byte < 800ms
  },

  // Image optimization
  images: {
    formats: ["webp", "avif"],
    sizes: [640, 750, 828, 1080, 1200, 1920],
    lazyLoad: true,
    placeholder: "blur",
  },
};

// =============================================================================
// 4. OFF-PAGE SEO - Link Building & Social Signals
// =============================================================================

export const offPageSEO = {
  // Social profiles for backlinks
  socialProfiles: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/technorealm", priority: "high" },
    { platform: "Twitter", url: "https://twitter.com/technorealm", priority: "high" },
    { platform: "Facebook", url: "https://www.facebook.com/technorealm", priority: "medium" },
    { platform: "Instagram", url: "https://www.instagram.com/technorealm", priority: "medium" },
    { platform: "GitHub", url: "https://github.com/technorealm", priority: "high" },
    { platform: "YouTube", url: "https://www.youtube.com/@technorealm", priority: "medium" },
  ],

  // Directory listings for citations
  directories: [
    "Google Business Profile",
    "Bing Places",
    "Yelp Business",
    "Clutch.co",
    "GoodFirms",
    "UpCity",
    "Expertise.com",
    "Crunchbase",
    "AngelList",
  ],

  // Content for link building
  linkBaitContent: [
    "Industry reports",
    "Case studies",
    "Whitepapers",
    "Infographics",
    "Tools & calculators",
    "Original research",
  ],

  // Guest posting topics
  guestPostTopics: [
    "Cloud migration best practices",
    "AI implementation guide",
    "Cybersecurity trends",
    "DevOps transformation",
    "Digital transformation ROI",
  ],
};

// =============================================================================
// 5. SCHEMA MARKUP TEMPLATES
// =============================================================================

export const schemaTemplates = {
  organization: {
    "@type": "Organization",
    name: "TechnoRealm",
    url: siteUrl,
    logo: `${siteUrl}/logo-33.png`,
    sameAs: offPageSEO.socialProfiles.map(p => p.url),
  },

  localBusiness: {
    "@type": "ProfessionalService",
    name: "TechnoRealm",
    address: {
      "@type": "PostalAddress",
      streetAddress: "420 TechnoRealm Avenue, Suite 300",
      addressLocality: "Boston",
      addressRegion: "MA",
      postalCode: "02116",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.3551",
      longitude: "-71.0656",
    },
    telephone: "+1-555-867-6543",
    email: "contact@technorealm.com",
    priceRange: "$$-$$$",
  },

  service: (name: string, description: string, url: string) => ({
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "TechnoRealm",
    },
    areaServed: "United States",
  }),
};

// =============================================================================
// 6. SEO CHECKLIST
// =============================================================================

export const seoChecklist = {
  onPage: [
    "✓ Unique title tag (50-60 chars)",
    "✓ Meta description (150-160 chars)",
    "✓ H1 tag with primary keyword",
    "✓ URL with target keyword",
    "✓ Internal links to related pages",
    "✓ External links to authority sources",
    "✓ Image alt tags with keywords",
    "✓ Schema markup implemented",
    "✓ Mobile-friendly design",
    "✓ Fast page load (<3s)",
  ],
  technical: [
    "✓ SSL certificate installed",
    "✓ XML sitemap submitted",
    "✓ Robots.txt configured",
    "✓ Canonical URLs set",
    "✓ 404 page optimized",
    "✓ Redirects properly configured",
    "✓ Core Web Vitals passing",
    "✓ Mobile-first indexing ready",
  ],
  offPage: [
    "✓ Google Business Profile claimed",
    "✓ Social profiles created",
    "✓ Directory listings submitted",
    "✓ Backlink strategy in place",
    "✓ Content marketing plan",
    "✓ Guest posting outreach",
  ],
};

