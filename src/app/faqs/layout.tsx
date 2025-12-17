import type { Metadata } from "next";
import { faqsMetadata } from "../metadata";
import { FAQSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = faqsMetadata;

// Sample FAQ data - replace with actual FAQ data from your FAQ component
const faqs = [
  {
    question: "What IT consulting services does TechnoRealm offer?",
    answer: "TechnoRealm offers comprehensive IT consulting services including cloud infrastructure, AI & machine learning, cybersecurity, DevOps, application development, data analytics, system integration, and digital transformation solutions.",
  },
  {
    question: "How can TechnoRealm help with cloud migration?",
    answer: "TechnoRealm provides end-to-end cloud migration services including assessment, planning, architecture design, migration execution, and ongoing management across AWS, Azure, and GCP platforms.",
  },
  {
    question: "What industries does TechnoRealm serve?",
    answer: "TechnoRealm serves multiple industries including finance, SaaS, retail, healthcare, manufacturing, and emerging technology sectors with tailored IT solutions.",
  },
  {
    question: "How long does a typical IT consulting engagement take?",
    answer: "Engagement duration varies based on project scope. We offer both short-term strategic consulting and long-term multi-year transformation partnerships. Most clients engage with us on multi-year, multi-project roadmaps.",
  },
  {
    question: "What makes TechnoRealm different from other IT consulting firms?",
    answer: "TechnoRealm is a boutique technology consulting studio that combines strategy, engineering, and design. We work as embedded partners, co-owning outcomes and delivering tailor-made solutions rather than off-the-shelf products.",
  },
];

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQSchema(faqs)),
        }}
      />
      {children}
    </>
  );
}

