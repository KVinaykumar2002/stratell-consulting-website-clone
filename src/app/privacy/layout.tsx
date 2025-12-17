import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TechnoRealm",
  description: "Read TechnoRealm's Privacy Policy to understand how we collect, use, and protect your personal information when you use our IT consulting services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://technorealm.com"}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

