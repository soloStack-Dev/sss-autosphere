"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { SplitTitle } from "@/components/animations/split-title";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fades = gsap.utils.toArray<HTMLElement>("[data-sh-fade]", el);
    if (fades.length === 0) return;

    gsap.set(fades, { opacity: 0, y: 16 });
    const tween = gsap.to(fades, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
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
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        data-sh-fade
        className={cn(
          "text-xs font-bold uppercase tracking-[0.18em]",
          dark ? "text-orange-300" : "text-royal",
        )}
      >
        {eyebrow}
      </p>
      <SplitTitle
        segments={[{ text: title }]}
        as="h2"
        className={cn(
          "mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-[34px]",
          dark ? "text-white" : "text-navy",
        )}
      />
      {description ? (
        <p
          data-sh-fade
          className={cn(
            "mt-3 text-[15px] leading-relaxed",
            dark ? "text-blue-100/75" : "text-body-text",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}