import type { Metadata } from "next";
import { homeMetadata } from "./metadata";

export const metadata: Metadata = homeMetadata;

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

