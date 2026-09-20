"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  /** How strongly the element follows the cursor (0–1). */
  strength?: number;
  className?: string;
};

/**
 * Magnetic hover micro-interaction: the wrapped element eases toward the
 * cursor and springs back on leave. Disabled for `prefers-reduced-motion`.
 */
export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const xTo = gsap.quickTo(node, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(node, "y", { duration: 0.3, ease: "power2.out" });

    const onMove = (e: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      xTo((e.clientX - cx) * strength);
      yTo((e.clientY - cy) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      xTo(0);
      yTo(0);
      gsap.killTweensOf(node);
    };
  }, [strength]);

  return (
    <span ref={ref} className={cn("inline-flex", className)}>
      {children}
    </span>
  );
}