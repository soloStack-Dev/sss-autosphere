"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SplitTitleProps = {
  /** One or more text segments; `accent` segments get the highlight color. */
  segments: Array<{ text: string; accent?: boolean }>;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClassName?: string;
  /** Play when scrolled into view (true) or immediately on mount. */
  onView?: boolean;
  delay?: number;
};

/**
 * Split-text entrance: every word rises out of an overflow-mask with a
 * subtle stagger. Fades to final state under `prefers-reduced-motion`.
 */
export function SplitTitle({
  segments,
  as = "h1",
  className,
  accentClassName = "text-orange-300",
  onView = false,
  delay = 0,
}: SplitTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = gsap.utils.toArray<HTMLElement>("[data-split-word]", el);
    if (words.length === 0) return;

    gsap.set(words, { yPercent: 120, opacity: 0 });

    if (onView) {
      const tween = gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.06,
        duration: 0.7,
        ease: "power3.out",
        delay,
        paused: true,
      });
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => tween.play(),
      });
      return () => {
        trigger.kill();
        tween.kill();
      };
    }

    const tween = gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 0.7,
      ease: "power3.out",
      delay,
    });
    return () => {
      tween.kill();
    };
    // Re-animates only when the animation mode/timing changes; the word markup
    // is derived from `segments` on each render already.
  }, [onView, delay]);

  const content = segments.map((segment, sIdx) => {
    const words = segment.text.split(" ");
    return (
      <span key={sIdx}>
        <span className="inline-block">
          {words.map((word, wIdx) => (
            <span key={wIdx} className="inline-block overflow-hidden align-bottom">
              <span
                data-split-word
                className={cn(
                  "inline-block will-change-transform",
                  segment.accent && accentClassName,
                )}
              >
                {word}
                {wIdx < words.length - 1 ? "\u00A0" : ""}
              </span>
            </span>
          ))}
        </span>
        {sIdx < segments.length - 1 ? " " : null}
      </span>
    );
  });

  if (as === "h2") {
    return (
      <h2 ref={ref} className={className}>
        {content}
      </h2>
    );
  }
  if (as === "h3") {
    return (
      <h3 ref={ref} className={className}>
        {content}
      </h3>
    );
  }
  return (
    <h1 ref={ref} className={className}>
      {content}
    </h1>
  );
}