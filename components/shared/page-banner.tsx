"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SplitTitle } from "@/components/animations/split-title";
import { gsap } from "@/lib/gsap";

export function PageBanner({
  breadcrumb,
  eyebrow,
  title,
  description,
  image,
  alt,
  children,
}: {
  breadcrumb: Array<{ label: string; href?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-banner-fade]",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "power3.out", delay: 0.15 },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-footer-navy"
    >
      {image ? (
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-footer-navy via-footer-navy/90 to-navy/60" aria-hidden />
      <div className="container-sss relative py-14 sm:py-20">
        <Breadcrumb items={breadcrumb} tone="light" />
        <p
          data-banner-fade
          className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-orange-300"
        >
          {eyebrow}
        </p>
        <SplitTitle
          segments={[{ text: title }]}
          as="h1"
          className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        />
        <p
          data-banner-fade
          className="mt-4 max-w-2xl text-[15px] leading-relaxed text-blue-100/80 sm:text-base"
        >
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}