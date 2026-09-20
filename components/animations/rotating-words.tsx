"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type RotatingWordsProps = {
  /** Words to rotate through, e.g. ["Car Spare Parts", "Body Parts"]. */
  words: string[];
  className?: string;
  /** Time each word stays visible before it flips to the next (ms). */
  interval?: number;
};

/**
 * Headline word rotator: the visible word flips out (rotateX) and the next
 * word flips in. Only the current word is announced to screen readers via
 * `aria-live`; `prefers-reduced-motion` keeps the first word static.
 */
export function RotatingWords({
  words,
  className,
  interval = 2600,
}: RotatingWordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (words.length === 0) return;

    node.textContent = words[0];
    indexRef.current = 0;

    if (words.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(node, { transformPerspective: 600 });

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const flip = (next: string) => {
      gsap.to(node, {
        rotateX: -90,
        opacity: 0,
        duration: 0.32,
        ease: "power2.in",
        onComplete: () => {
          if (cancelled) return;
          node.textContent = next;
          gsap.to(node, {
            rotateX: 0,
            opacity: 1,
            duration: 0.38,
            ease: "power2.out",
          });
        },
      });
    };

    const schedule = () => {
      timer = setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % words.length;
        flip(words[indexRef.current]);
        schedule();
      }, interval);
    };

    schedule();

    return () => {
      cancelled = true;
      clearTimeout(timer);
      gsap.killTweensOf(node);
    };
  }, [words, interval]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block" }}
      aria-live="polite"
    >
      {words[0] ?? ""}
    </span>
  );
}