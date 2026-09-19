import type { Metadata } from "next";
import { ShareContent } from "@/components/pages/share-content";

export const metadata: Metadata = {
  title: "Share Website | SSS Auto Spares Chennai",
  description:
    "Share the SSS Auto Spares Chennai website with anyone who needs genuine car parts, quality used spares, or vehicle purchasing services.",
};

export default function SharePage() {
  return <ShareContent />;
}