import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { HeartHandshake, MessageSquareHeart, UserCheck, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Feedback & Reviews | SSS Auto Spares Chennai",
  description:
    "Tell SSS Auto Spares Chennai about your experience — parts quality, pricing, dispatch, and support. Every review helps us serve Chennai garages better.",
};

const focusAreas = [
  {
    icon: Gauge,
    title: "Part Quality",
    description: "Was the part new/OEM-grade as described and mechanically sound?",
  },
  {
    icon: UserCheck,
    title: "Customer Support",
    description: "Was the fitment advice, quoting, and follow-up helpful?",
  },
  {
    icon: MessageSquareHeart,
    title: "Communication",
    description: "Did we respond clearly and in reasonable time on WhatsApp/phone?",
  },
  {
    icon: HeartHandshake,
    title: "Overall Experience",
    description: "Would you buy again — and would you recommend us to another owner?",
  },
];

export default function FeedbackPage() {
  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "Feedback", href: "/feedback" }]}
        eyebrow="Customer Feedback"
        title="Your Honest Review Keeps Our Racks Honest"
        description="Share your experience with SSS Auto Spares — the good, the bad, and the could-be-better. We read every submission."
      />

      <section className="section-pad bg-white">
        <div className="container-sss grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionReveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Why Feedback Matters"
                title="What We Measure Ourselves Against"
                description="Our Chennai desk improves by the same standards we promise: genuine parts, honest pricing, and respectful service."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="rounded-2xl border border-line bg-paleblue p-4">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-white text-royal shadow-card">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <p className="mt-2 text-[14px] font-extrabold text-navy">{area.title}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-body-text">{area.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <FeedbackForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}