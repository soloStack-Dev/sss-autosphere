"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type CountUpProps = {
  /** A string starting with a number, e.g. "10,000+ Parts". */
  value: string;
  duration?: number;
  className?: string;
};

/**
 * Counts the leading number up to its final value when rendered. Non-numeric
 * values (placeholders) render statically; `prefers-reduced-motion` shows the
 * final value immediately.
 */
export function CountUp({ value, duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = /^(\d[\d,]*(?:\.\d+)?)(.*)$/.exec(value);
    if (!match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = Number(match[1].replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    const state = { n: 0 };
    gsap.to(state, {
      n: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        const formatted = Math.round(state.n).toLocaleString("en-IN");
        el.textContent = `${formatted}${match[2] ?? ""}`;
      },
    });
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}