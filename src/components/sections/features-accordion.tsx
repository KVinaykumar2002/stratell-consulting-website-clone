"use client";

import { Feature197 } from "@/components/ui/accordion-feature-section";

const featuresData = [
  {
    id: 1,
    title: "Ready-to-Use Digital Solutions",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description:
      "We craft modular, production-ready solutions that accelerate development and reduce time to market—built to integrate seamlessly into your existing ecosystem. Each solution is thoughtfully designed for reliability, responsiveness, and long-term usability across devices.",
  },
  {
    id: 2,
    title: "Modern Tech Stack",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    description:
      "Our solutions are powered by contemporary frameworks and tools, ensuring performance, maintainability, and long-term scalability across platforms. By leveraging industry-proven technologies, we help businesses stay future-ready and competitive.",
  },
  {
    id: 3,
    title: "Customization & Flexibility",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    description:
      "Designed with adaptability in mind, our systems are easy to customize, extend, and optimize as your business evolves. We ensure your digital products can scale and adapt without disrupting ongoing operations.",
  },
  {
    id: 4,
    title: "Security by Design",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    description:
      "From architecture to deployment, security is embedded at every layer—protecting your data, users, and infrastructure. We follow best practices and compliance standards to minimize risks and strengthen trust.",
  },
  {
    id: 5,
    title: "Client-Driven Delivery",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    description:
      "We believe in transparent collaboration, clear communication, and outcomes that align with your business goals—your success defines our success. Our team works closely with you at every stage to deliver solutions that exceed expectations.",
  },
];

export default function FeaturesAccordionSection() {
  return <Feature197 features={featuresData} />;
}

