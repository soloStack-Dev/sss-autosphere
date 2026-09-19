import type { Metadata } from "next";
import { connection } from "next/server";
import { fetchFeedback } from "@/lib/data-access";
import { FeedbackContent } from "@/components/pages/feedback-content";

export const metadata: Metadata = {
  title: "Feedback & Reviews | SSS Auto Spares Chennai",
  description:
    "Tell SSS Auto Spares Chennai about your experience — parts quality, pricing, dispatch, and support. Every review helps us serve Chennai garages better.",
};

export const instant = false;

export default async function FeedbackPage() {
  await connection();
  const feedback = await fetchFeedback();

  return <FeedbackContent feedback={feedback} />;
}
