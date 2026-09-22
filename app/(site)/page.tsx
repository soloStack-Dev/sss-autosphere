import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/home-content";

export const metadata: Metadata = {
  title: "Car Spare Parts in Chennai",
  description:
    "SSS Auto Spares in Pudupet, Chennai supplies car spare parts, body parts, quality used spares and vehicle components. Contact Salaudeen for enquiries.",
  keywords: [
    "car spare parts Chennai",
    "auto spare parts Chennai",
    "car body parts Chennai",
    "used car spare parts Chennai",
    "car spare parts Pudupet",
    "auto spare parts Pudupet",
  ],
};

export default function HomePage() {
  return <HomeContent />;
}