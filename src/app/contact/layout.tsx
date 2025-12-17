import type { Metadata } from "next";
import { contactMetadata } from "../metadata";
import { LocalBusinessSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = contactMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LocalBusinessSchema()),
        }}
      />
      {children}
    </>
  );
}

