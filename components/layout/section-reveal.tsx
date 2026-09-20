"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Fades / lifts a section into view with GSAP ScrollTrigger.
 * The initial hidden state lives in CSS (.reveal-hidden) so content is
 * visible by default if JS or animation is disabled.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay,
      ease: "power2.out",
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => tween.play(),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn("reveal-hidden", className)}>
      {children}
    </div>
  );
}