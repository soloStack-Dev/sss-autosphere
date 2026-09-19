import type { Metadata } from "next";
import { FeedbackContent } from "@/components/pages/feedback-content";

export const metadata: Metadata = {
  title: "Feedback & Reviews | SSS Auto Spares Chennai",
  description:
    "Tell SSS Auto Spares Chennai about your experience — parts quality, pricing, dispatch, and support. Every review helps us serve Chennai garages better.",
};

export default function FeedbackPage() {
  return <FeedbackContent />;
}