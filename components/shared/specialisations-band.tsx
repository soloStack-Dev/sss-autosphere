"use client";

import { specialisations, brands } from "@/lib/data/home";
import { useCatalog } from "@/lib/i18n";
import { SectionReveal } from "@/components/layout/section-reveal";

type SpecCatalog = {
  eyebrow: string;
  title: string;
  desc: string;
  items: string[];
  brandsLabel: string;
};

export function SpecialisationsBand() {
  const catalog = useCatalog();
  const spec = catalog.home as { specialisations: SpecCatalog };
  const s = spec.specialisations;

  return (
    <section className="relative overflow-hidden bg-footer-navy text-white">
      <div
        className="absolute inset-0 bg-[radial-gradient(55%_120%_at_15%_0%,rgba(36,86,216,0.35),transparent)]"
        aria-hidden
      />
      <div className="container-sss relative py-14 lg:py-16">
        <SectionReveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
            {s.eyebrow}
          </p>
          <h2 className="mt-2 max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl">
            {s.title}
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-blue-100/85">
            {s.desc}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialisations.map((spec2, i) => (
              <div
                key={spec2.id}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  {spec2.emoji}
                </span>
                <p className="text-[14px] font-bold leading-snug">
                  {s.items[i] ?? spec2.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-300">
              {s.brandsLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-blue-100/90"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}