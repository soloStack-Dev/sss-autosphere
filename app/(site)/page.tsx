import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/home-content";

export const metadata: Metadata = {
  title: "Chennai Automobile Spare Parts Dealers",
  description:
    "SSS Auto Spares Chennai — genuine car spare parts, body parts, quality used spares, old vehicle parts, scrap vehicle & old car purchasing with fast dispatch.",
  keywords: [
    "car spare parts Chennai",
    "auto parts dealer",
    "used car spares",
    "old vehicle purchasing",
    "scrap car buyer Chennai",
  ],
};

export default function HomePage() {
  return <HomeContent />;
}