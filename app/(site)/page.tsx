import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/home-content";

export const metadata: Metadata = {
  title: "Car Spare Parts in Chennai",
  description:
    "SSS Auto Spares in Pudupet, Chennai offers car spare parts, body parts, quality used spares and vehicle solutions. Enquire for the parts you need.",
  keywords: [
    "car spare parts Chennai",
    "auto spare parts Chennai",
    "car body parts Chennai",
    "used car spare parts Chennai",
    "old car spares best price",
    "old car spares best price in Pudupet",
    "old car spare mechanic working available",
    "old car and total loss car best price buying and sales",
    "old car genuine spares available best price",
    "old car buying best price",
    "total loss car buying best price",
    "all scrap vehicle buying best price",
  ],
};

export default function HomePage() {
  return <HomeContent />;
}