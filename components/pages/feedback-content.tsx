"use client";

import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { HeartHandshake, MessageSquareHeart, UserCheck, Gauge } from "lucide-react";

const focusIcons = [Gauge, UserCheck, MessageSquareHeart, HeartHandshake];

type FeedbackCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  whyEyebrow: string;
  whyTitle: string;
  whyDesc: string;
  areas: Array<{ title: string; desc: string }>;
};

export function FeedbackContent() {
  const catalog = useCatalog();
  const feedback = catalog.feedback as FeedbackCatalog;
  const nav = catalog.nav as { feedback: string };

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.feedback, href: "/feedback" }]}
        eyebrow={feedback.bannerEyebrow}
        title={feedback.bannerTitle}
        description={feedback.bannerDesc}
      />

      <section className="section-pad bg-white">
        <div className="container-sss grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionReveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow={feedback.whyEyebrow}
                title={feedback.whyTitle}
                description={feedback.whyDesc}
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {feedback.areas.map((area, i) => {
                  const Icon = focusIcons[i] ?? Gauge;
                  return (
                    <div key={area.title} className="rounded-2xl border border-line bg-paleblue p-4">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-white text-royal shadow-card">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <p className="mt-2 text-[14px] font-extrabold text-navy">{area.title}</p>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-body-text">{area.desc}</p>
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