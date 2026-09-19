"use client";

import { useCallback, useEffect, useState } from "react";
import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { FeedbackForm } from "@/components/forms/feedback-form";
import type { Feedback } from "@/lib/data/feedback";
import { cn } from "@/lib/utils";
import {
  HeartHandshake,
  MessageSquareHeart,
  UserCheck,
  Gauge,
  Star,
  Quote,
} from "lucide-react";

const focusIcons = [Gauge, UserCheck, MessageSquareHeart, HeartHandshake];

type FeedbackCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  whyEyebrow: string;
  whyTitle: string;
  whyDesc: string;
  areas: Array<{ title: string; desc: string }>;
  recentEyebrow: string;
  recentTitle: string;
  recentDesc: string;
  newBadge: string;
  emptyMsg: string;
  ratingAria: string;
};

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Review ids that only exist in the browser (database unavailable / demo mode). */
const LOCAL_ID_PREFIX = "local-";

export function FeedbackContent({ feedback }: { feedback: Feedback[] }) {
  const catalog = useCatalog();
  const feedbackText = catalog.feedback as FeedbackCatalog;
  const nav = catalog.nav as { feedback: string };
  const [items, setItems] = useState<Feedback[]>(feedback);
  const [highlightId, setHighlightId] = useState<string | null>(null);

  /**
   * Replace the list with the database snapshot. Optimistic (local-only)
   * reviews are kept; anything that has since been deleted in the database —
   * e.g. a duplicate removed by the shop owner — disappears.
   */
  const applyServerList = useCallback((list: Feedback[]) => {
    setItems((prev) => {
      const serverIds = new Set(list.map((item) => item.id));
      const optimistic = prev.filter(
        (item) => item.id.startsWith(LOCAL_ID_PREFIX) && !serverIds.has(item.id),
      );
      return [...optimistic, ...list].slice(0, 30);
    });
    setHighlightId((current) =>
      current && list.some((item) => item.id === current) ? current : null,
    );
  }, []);

  // Keep the list in step with the server snapshot (navigation / reload).
  useEffect(() => {
    applyServerList(feedback);
  }, [feedback, applyServerList]);

  // Re-sync when the visitor returns to the tab, so deletions made directly in
  // the database show up without a manual reload.
  useEffect(() => {
    let cancelled = false;
    async function refresh() {
      try {
        const res = await fetch("/api/feedback", { cache: "no-store" });
        const json = (await res.json()) as { ok?: boolean; feedback?: Feedback[] };
        if (!cancelled && json.ok && Array.isArray(json.feedback)) {
          applyServerList(json.feedback);
        }
      } catch {
        /* keep the current list on network errors */
      }
    }
    function onVisible() {
      if (document.visibilityState === "visible") refresh();
    }
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [applyServerList]);

  function handleSubmitted(entry: Feedback) {
    setItems((prev) => [
      entry,
      ...prev.filter((item) => item.id !== entry.id),
    ].slice(0, 30));
    setHighlightId(entry.id);
  }

  useEffect(() => {
    if (!highlightId) return;
    const el = document.getElementById(`feedback-${highlightId}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [highlightId]);

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.feedback, href: "/feedback" }]}
        eyebrow={feedbackText.bannerEyebrow}
        title={feedbackText.bannerTitle}
        description={feedbackText.bannerDesc}
      />

      <section className="section-pad bg-white">
        <div className="container-sss grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionReveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow={feedbackText.whyEyebrow}
                title={feedbackText.whyTitle}
                description={feedbackText.whyDesc}
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {feedbackText.areas.map((area, i) => {
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
            <FeedbackForm onSubmitted={handleSubmitted} />
          </SectionReveal>
        </div>
      </section>

      <section className="section-pad bg-paleblue">
        <div className="container-sss">
          <SectionHeading
            eyebrow={feedbackText.recentEyebrow}
            title={feedbackText.recentTitle}
            description={feedbackText.recentDesc}
          />

          {items.length === 0 ? (
            <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-line bg-white px-5 py-6 text-center text-sm text-body-text">
              {feedbackText.emptyMsg}
            </p>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => {
                const isNew = item.id === highlightId;
                const initial = item.name.trim().charAt(0).toUpperCase() || "S";
                return (
                  <article
                    id={`feedback-${item.id}`}
                    key={item.id}
                    className={cn(
                      "relative flex h-full flex-col rounded-2xl border bg-white p-5 shadow-card transition-all",
                      isNew
                        ? "border-royal ring-2 ring-royal/40 shadow-[0_12px_40px_-12px_rgba(23,73,209,0.55)]"
                        : "border-line",
                    )}
                  >
                    {isNew ? (
                      <span className="absolute -top-2.5 right-4 rounded-full bg-royal px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white shadow-card">
                        {feedbackText.newBadge}
                      </span>
                    ) : null}

                    <Quote className="size-5 text-royal/30" aria-hidden />
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-body-text">
                      {item.message}
                    </p>

                    <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-royal/10 text-sm font-extrabold text-royal">
                        {initial}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-extrabold text-navy">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-muted-text">
                          {formatDate(item.createdAt)}
                        </p>
                      </div>
                      <span
                        className="ml-auto flex items-center gap-0.5"
                        aria-label={feedbackText.ratingAria.replace(
                          "{rating}",
                          String(item.rating),
                        )}
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <Star
                            key={n}
                            className={cn(
                              "size-3.5",
                              n <= item.rating
                                ? "fill-warmorange text-warmorange"
                                : "text-line",
                            )}
                            aria-hidden
                          />
                        ))}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
