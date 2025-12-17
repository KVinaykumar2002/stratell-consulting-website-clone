import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - TechnoRealm",
  description: "Read TechnoRealm's Terms & Conditions to understand the terms of use for our website and IT consulting services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com"}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

