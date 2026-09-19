import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About Us | SSS Auto Spares Chennai",
  description:
    "Learn about SSS Auto Spares — a Chennai auto-spares hub supplying genuine parts, quality used spares, and trusted vehicle purchasing services.",
};

export default function AboutPage() {
  return <AboutContent />;
}