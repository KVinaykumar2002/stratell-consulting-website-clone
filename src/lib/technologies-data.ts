export interface TechnologyDetail {
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

export const technologiesData: Record<string, TechnologyDetail> = {
  "ai-ml": {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    shortDescription: "Harness the power of artificial intelligence and machine learning to drive intelligent automation, predictive analytics, and data-driven decision making.",
    fullDescription: "Transform your business with cutting-edge AI and ML solutions. From predictive analytics to intelligent automation, we help you leverage artificial intelligence to gain competitive advantages, improve decision-making, and create innovative products and services. Our expertise spans natural language processing, computer vision, deep learning, and reinforcement learning to solve complex business challenges.",
    heroImage: "https://t4.ftcdn.net/jpg/15/72/20/69/240_F_1572206982_moz0RXTqXCiyOWrMVChdaozyNz8tMpYU.jpg",
    images: [
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&q=80",
      "https://t4.ftcdn.net/jpg/02/97/62/87/240_F_297628716_9bKovbG8vNcJV4QaWicTrfcmpV0OrTSr.jpg",
      "https://t3.ftcdn.net/jpg/07/79/96/26/240_F_779962600_2k1JURjTAsP1VJ8X0PCMBv4QTU4gkm0I.jpg"
    ],
    benefits: [
      "Predictive analytics capabilities",
      "Automated decision-making systems",
      "Enhanced customer insights",
      "Process automation and optimization",
      "Competitive AI advantage"
    ],
    features: [
      "Machine learning model development",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics platforms",
      "AI strategy and roadmap"
    ],
    useCases: [
      "Customer behavior prediction",
      "Fraud detection and prevention",
      "Recommendation engines",
      "Chatbots and virtual assistants",
      "Image and video recognition"
    ]
  },
  "cloud-infrastructure": {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortDescription: "Scalable, secure, and resilient cloud solutions across AWS, Azure, and GCP. Transform your infrastructure with cloud-native architectures.",
    fullDescription: "Build and manage robust cloud infrastructure that scales with your business. Our cloud services cover migration, architecture design, optimization, and ongoing management across AWS, Azure, and GCP platforms. We help organizations leverage cloud computing to reduce costs, improve agility, and enable innovation through modern cloud-native architectures.",
    heroImage: "https://t3.ftcdn.net/jpg/05/29/73/10/240_F_529731004_UaoYV7jskuWv59UBAW379oNlvB7eFSXQ.jpg",
    images: [
      "https://t4.ftcdn.net/jpg/05/84/71/53/240_F_584715352_PajwBHBUOBdsORbzPg99lmLdnu0ZNPL4.jpg",
      "https://t3.ftcdn.net/jpg/05/99/28/96/240_F_599289609_q89N5DgCBeJqdEz3D1ULzMG5XGhTaTp6.jpg",
      "https://t4.ftcdn.net/jpg/06/20/15/33/240_F_620153327_yspRZ2WcILsmDRjp0tjvdAjA4mErmfdp.jpg"
    ],
    benefits: [
      "Scalable infrastructure on-demand",
      "Cost optimization and efficiency",
      "Improved reliability and uptime",
      "Enhanced security and compliance",
      "Faster deployment and time-to-market"
    ],
    features: [
      "Cloud migration services",
      "Infrastructure as code",
      "Multi-cloud strategies",
      "Cost optimization",
      "24/7 monitoring and support"
    ],
    useCases: [
      "Cloud migration projects",
      "Scalable application hosting",
      "Disaster recovery solutions",
      "Global content delivery",
      "Hybrid cloud architectures"
    ]
  },
  "cybersecurity": {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription: "Comprehensive security solutions to protect your digital assets. From threat detection to compliance, we keep your business secure.",
    fullDescription: "Safeguard your organization against evolving cyber threats with our comprehensive cybersecurity services. We provide security assessments, threat protection, compliance support, and ongoing monitoring to keep your digital assets secure. Our proactive approach helps identify vulnerabilities before they become threats and ensures your systems meet industry compliance standards.",
    heroImage: "https://t3.ftcdn.net/jpg/15/83/30/52/240_F_1583305283_wyfW0WekhFv2Ye6THHoU5fldkMKBpqkZ.jpg",
    images: [
      "https://t4.ftcdn.net/jpg/03/62/07/47/240_F_362074732_j0l660xPemFu4NPxapPxkkAwUaQ2sAyS.jpg",
      "https://t3.ftcdn.net/jpg/05/23/62/52/240_F_523625234_LbxOHj5GOeiOPFP8TfbikgqM2qK7XNKh.jpg",
      "https://t4.ftcdn.net/jpg/04/39/16/65/240_F_439166548_rYObR3HwqMoOTNN5Bzc1EWlmgpzKkZHS.jpg"
    ],
    benefits: [
      "Enhanced security posture",
      "Compliance assurance (GDPR, HIPAA, SOC 2)",
      "Threat detection and response",
      "Risk mitigation and management",
      "Security awareness training"
    ],
    features: [
      "Security assessments and audits",
      "Penetration testing",
      "Incident response planning",
      "Compliance support",
      "Security training and awareness"
    ],
    useCases: [
      "Security audits and assessments",
      "Data breach prevention",
      "Compliance certification",
      "Vulnerability management",
      "Security operations center setup"
    ]
  },
  "devops": {
    slug: "devops",
    title: "DevOps Consulting",
    shortDescription: "Accelerate delivery with CI/CD pipelines, infrastructure automation, containerization, and automation. Achieve faster time-to-market.",
    fullDescription: "Streamline your development and operations with our DevOps expertise. We help organizations implement CI/CD pipelines, infrastructure automation, and best practices that enable faster, more reliable software delivery. Our DevOps solutions reduce deployment times, improve collaboration between teams, and ensure consistent, repeatable processes across your development lifecycle.",
    heroImage: "https://t3.ftcdn.net/jpg/15/88/61/10/240_F_1588611086_2tpSAbRoDeLvky7HpGKjyvGebBT9nnrW.jpg",
    images: [
      "https://t4.ftcdn.net/jpg/16/06/41/09/240_F_1606410942_j6wt9dv4y9E9BVA49ehZv5zEtXUiVnOU.jpg",
      "https://t3.ftcdn.net/jpg/11/75/61/80/240_F_1175618042_owy2F2y4hZc6PLGFnJz1Szc4BL723Z3B.jpg",
      "https://t4.ftcdn.net/jpg/12/52/01/23/240_F_1252012310_Ju3jjRewNKHxX3S1gKnXgXeFJZyF4Zo2.jpg"
    ],
    benefits: [
      "Faster deployment cycles",
      "Improved reliability and stability",
      "Better collaboration between teams",
      "Automated workflows and processes",
      "Continuous improvement culture"
    ],
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Container orchestration",
      "Monitoring and logging",
      "DevOps culture transformation"
    ],
    useCases: [
      "Continuous integration setup",
      "Automated deployment pipelines",
      "Infrastructure as code adoption",
      "Container orchestration",
      "DevOps maturity assessment"
    ]
  },
  "data-analytics": {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortDescription: "Transform raw data into actionable insights. Advanced analytics, data visualization, and business intelligence solutions.",
    fullDescription: "Unlock the value of your data with our analytics services. We help organizations collect, process, analyze, and visualize data to make informed decisions, identify trends, and drive business growth. Our data analytics solutions enable real-time insights, predictive modeling, and comprehensive business intelligence dashboards that transform how you make decisions.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
    ],
    benefits: [
      "Data-driven decision making",
      "Business intelligence and insights",
      "Predictive analytics capabilities",
      "Performance optimization",
      "Competitive advantage through data"
    ],
    features: [
      "Data warehousing solutions",
      "Business intelligence dashboards",
      "Predictive analytics",
      "Data visualization",
      "Real-time analytics platforms"
    ],
    useCases: [
      "Business intelligence dashboards",
      "Customer analytics and segmentation",
      "Sales forecasting and prediction",
      "Operational performance monitoring",
      "Data-driven product development"
    ]
  }
};

// Helper function to get technology slug from name
export function getTechnologySlugFromName(technologyName: string): string | null {
  const nameToSlugMap: Record<string, string> = {
    "AI & Machine Learning": "ai-ml",
    "Cloud Infrastructure": "cloud-infrastructure",
    "Cybersecurity": "cybersecurity",
    "DevOps Consulting": "devops",
    "Data & Analytics": "data-analytics",
  };
  
  return nameToSlugMap[technologyName] || null;
}

// Helper function to get technology detail by slug
export function getTechnologyBySlug(slug: string): TechnologyDetail | null {
  return technologiesData[slug] || null;
}

