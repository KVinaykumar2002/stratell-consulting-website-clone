export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  images: string[];
  benefits: string[];
  features: string[];
  useCases?: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "business-strategy": {
    slug: "business-strategy",
    title: "Business Strategy",
    shortDescription: "Set the right direction with market insights and actionable roadmaps.",
    fullDescription: "Our business strategy services help organizations navigate complex markets, identify growth opportunities, and develop comprehensive strategic roadmaps. We combine deep industry expertise with data-driven insights to help you make informed decisions that drive sustainable growth and competitive advantage.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Data-driven strategic planning",
      "Market analysis and competitive intelligence",
      "Growth opportunity identification",
      "Risk assessment and mitigation",
      "Strategic roadmap development"
    ],
    features: [
      "Comprehensive market research",
      "SWOT and competitive analysis",
      "Strategic planning workshops",
      "Business model innovation",
      "Performance metrics and KPIs"
    ],
    useCases: [
      "Market entry strategies",
      "Digital transformation planning",
      "Competitive positioning",
      "Product portfolio optimization",
      "Organizational restructuring"
    ]
  },
  "operations-optimization": {
    slug: "operations-optimization",
    title: "Operations Optimization",
    shortDescription: "Streamline workflows, cut costs, and boost efficiency.",
    fullDescription: "Transform your operations with our comprehensive optimization services. We analyze your current processes, identify bottlenecks, and implement solutions that reduce costs, improve efficiency, and enhance productivity. Our data-driven approach ensures measurable results and sustainable improvements.",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Reduced operational costs",
      "Improved process efficiency",
      "Enhanced productivity",
      "Better resource utilization",
      "Faster time-to-market"
    ],
    features: [
      "Process mapping and analysis",
      "Workflow automation",
      "Lean methodology implementation",
      "Performance monitoring",
      "Continuous improvement programs"
    ],
    useCases: [
      "Supply chain optimization",
      "Manufacturing process improvement",
      "Service delivery enhancement",
      "Inventory management",
      "Quality control systems"
    ]
  },
  "digital-transformation": {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Set the right direction with market insights and actionable roadmaps.",
    fullDescription: "Accelerate your digital transformation journey with our comprehensive services. We help organizations modernize their technology stack, digitize processes, and create new digital capabilities that drive innovation and growth. Our holistic approach ensures alignment between technology and business objectives.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Modernized technology infrastructure",
      "Improved customer experience",
      "Increased operational efficiency",
      "Enhanced data-driven decision making",
      "Competitive advantage through innovation"
    ],
    features: [
      "Digital strategy development",
      "Technology architecture design",
      "Legacy system modernization",
      "Cloud migration services",
      "Change management support"
    ],
    useCases: [
      "Enterprise digitalization",
      "Customer experience transformation",
      "Data and analytics enablement",
      "Agile transformation",
      "Platform modernization"
    ]
  },
  "financial-advisory": {
    slug: "financial-advisory",
    title: "Financial Advisory",
    shortDescription: "Improve performance, reduce risk, and unlock growth capital.",
    fullDescription: "Our financial advisory services help organizations optimize their financial performance, manage risks, and unlock growth opportunities. We provide strategic financial guidance, performance analysis, and investment recommendations tailored to your business objectives and market conditions.",
    heroImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Optimized financial performance",
      "Improved cash flow management",
      "Enhanced risk management",
      "Strategic investment guidance",
      "Better financial planning and forecasting"
    ],
    features: [
      "Financial analysis and modeling",
      "Budget planning and forecasting",
      "Risk assessment and mitigation",
      "Investment strategy development",
      "M&A advisory services"
    ],
    useCases: [
      "Financial restructuring",
      "Capital raising strategies",
      "Investment portfolio optimization",
      "Risk management programs",
      "Financial performance improvement"
    ]
  },
  "ai-ml": {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Harness the power of artificial intelligence and machine learning.",
    fullDescription: "Transform your business with cutting-edge AI and ML solutions. From predictive analytics to intelligent automation, we help you leverage artificial intelligence to gain competitive advantages, improve decision-making, and create innovative products and services.",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1676299080923-7c75a5e4d674?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Predictive analytics capabilities",
      "Automated decision-making",
      "Enhanced customer insights",
      "Process automation",
      "Competitive AI advantage"
    ],
    features: [
      "Machine learning model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics platforms",
      "AI strategy and roadmap"
    ]
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure & Management",
    shortDescription: "Scalable cloud infrastructure and migration services.",
    fullDescription: "Build and manage robust cloud infrastructure that scales with your business. Our cloud services cover migration, architecture design, optimization, and ongoing management across AWS, Azure, and GCP platforms.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Scalable infrastructure",
      "Cost optimization",
      "Improved reliability",
      "Enhanced security",
      "Faster deployment"
    ],
    features: [
      "Cloud migration services",
      "Infrastructure as code",
      "Multi-cloud strategies",
      "Cost optimization",
      "24/7 monitoring and support"
    ]
  },
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity & Risk Management",
    shortDescription: "Protect your digital assets with comprehensive security solutions.",
    fullDescription: "Safeguard your organization against evolving cyber threats with our comprehensive cybersecurity services. We provide security assessments, threat protection, compliance support, and ongoing monitoring to keep your digital assets secure.",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Enhanced security posture",
      "Compliance assurance",
      "Threat detection and response",
      "Risk mitigation",
      "Security awareness"
    ],
    features: [
      "Security assessments",
      "Penetration testing",
      "Incident response",
      "Compliance support",
      "Security training"
    ]
  },
  "devops": {
    slug: "devops",
    title: "DevOps Consulting",
    shortDescription: "Accelerate delivery with modern DevOps practices.",
    fullDescription: "Streamline your development and operations with our DevOps expertise. We help organizations implement CI/CD pipelines, infrastructure automation, and best practices that enable faster, more reliable software delivery.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Faster deployment cycles",
      "Improved reliability",
      "Better collaboration",
      "Automated workflows",
      "Continuous improvement"
    ],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Container orchestration",
      "Monitoring and logging",
      "DevOps culture transformation"
    ]
  },
  "application-development": {
    slug: "application-development",
    title: "Application Development",
    shortDescription: "Build scalable, high-performance applications.",
    fullDescription: "Create custom applications tailored to your business needs. From web applications to mobile apps and enterprise software, we deliver solutions that are scalable, secure, and user-friendly.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Custom solutions",
      "Scalable architecture",
      "Modern technology stack",
      "User-centric design",
      "Ongoing support"
    ],
    features: [
      "Web application development",
      "Mobile app development",
      "Enterprise software",
      "API development",
      "UI/UX design"
    ]
  },
  "data-analytics": {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortDescription: "Turn data into actionable insights.",
    fullDescription: "Unlock the value of your data with our analytics services. We help organizations collect, process, analyze, and visualize data to make informed decisions, identify trends, and drive business growth.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Data-driven decisions",
      "Business intelligence",
      "Predictive insights",
      "Performance optimization",
      "Competitive advantage"
    ],
    features: [
      "Data warehousing",
      "Business intelligence dashboards",
      "Predictive analytics",
      "Data visualization",
      "Real-time analytics"
    ]
  },
  "system-integration": {
    slug: "system-integration",
    title: "System Integration",
    shortDescription: "Seamlessly connect your systems and applications.",
    fullDescription: "Integrate your disparate systems and applications to create a unified technology ecosystem. Our integration services ensure seamless data flow, improved efficiency, and better visibility across your organization.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Unified systems",
      "Improved data flow",
      "Enhanced efficiency",
      "Better visibility",
      "Reduced manual work"
    ],
    features: [
      "API integration",
      "Legacy system integration",
      "Cloud integration",
      "Data synchronization",
      "Integration architecture"
    ]
  },
  "it-consulting": {
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription: "Strategic IT guidance for your business.",
    fullDescription: "Get expert IT consulting services to align your technology strategy with business goals. We provide strategic guidance, architecture design, technology selection, and implementation support to help you maximize the value of your IT investments.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Strategic IT alignment",
      "Technology optimization",
      "Cost reduction",
      "Risk mitigation",
      "Innovation enablement"
    ],
    features: [
      "IT strategy development",
      "Technology assessment",
      "Architecture design",
      "Vendor selection",
      "Project management"
    ]
  }
};

// Helper function to get service slug from service name
export function getServiceSlugFromName(serviceName: string): string | null {
  const nameToSlugMap: Record<string, string> = {
    "AI & Machine Learning": "ai-ml",
    "Cloud Infrastructure & Management": "cloud-infrastructure",
    "Cybersecurity & Risk Management": "cybersecurity",
    "DevOps Consulting": "devops",
    "Application Development": "application-development",
    "Data & Analytics": "data-analytics",
    "Salesforce & Centene": "system-integration", // Mapping as system integration
    "System Integration": "system-integration",
    "IT Consulting": "it-consulting",
    "Business Strategy": "business-strategy",
    "Operations Optimization": "operations-optimization",
    "Digital Transformation": "digital-transformation",
    "Financial Advisory": "financial-advisory",
  };
  
  return nameToSlugMap[serviceName] || null;
}

// Helper function to get service detail by slug
export function getServiceBySlug(slug: string): ServiceDetail | null {
  return servicesData[slug] || null;
}

