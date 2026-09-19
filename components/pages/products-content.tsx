"use client";

import type { Product } from "@/lib/data/products";
import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { CatalogExplorer } from "@/components/products/catalog-explorer";
import { PartEnquiryForm } from "@/components/forms/part-enquiry-form";
import { sourcingBenefits } from "@/lib/data/products";
import { ShieldCheck, Clock, Wrench } from "lucide-react";

const benefitIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  clock: Clock,
  wrench: Wrench,
};

type SourcingItem = {
  subtitle: string;
  title: string;
  desc: string;
  footer: string;
};

type ProductsCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  att: string;
  browseEyebrow: string;
  browseTitle: string;
  browseDesc: string;
  sourcingEyebrow: string;
  sourcingTitle: string;
  sourcingDesc: string;
  sourcing: SourcingItem[];
  fitEyebrow: string;
  fitTitle: string;
  fitDesc: string;
  fitPoints: string[];
};

export function ProductsContent({
  products,
  canRefresh,
}: {
  products: Product[];
  canRefresh: boolean;
}) {
  const catalog = useCatalog();
  const productsCat = catalog.products as ProductsCatalog;

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: productsCat.bannerEyebrow, href: "/products" }]}
        eyebrow={productsCat.bannerEyebrow}
        title={productsCat.bannerTitle}
        description={productsCat.bannerDesc}
        image="/images/product/product-img-one.png"
        alt={productsCat.att}
      />

      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            align="left"
            eyebrow={productsCat.browseEyebrow}
            title={productsCat.browseTitle}
            description={productsCat.browseDesc}
          />

          <SectionReveal>
            <CatalogExplorer initialProducts={products} canRefresh={canRefresh} />
          </SectionReveal>
        </div>
      </section>

      {/* Sourcing benefits */}
      <section className="section-pad bg-paleblue">
        <div className="container-sss">
          <SectionHeading
            eyebrow={productsCat.sourcingEyebrow}
            title={productsCat.sourcingTitle}
            description={productsCat.sourcingDesc}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {sourcingBenefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              const info = productsCat.sourcing[i] ?? {
                subtitle: b.subtitle,
                title: b.title,
                desc: b.description,
                footer: b.footer,
              };
              return (
                <SectionReveal key={b.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-softblue text-royal">
                      {Icon ? <Icon className="size-6" aria-hidden /> : null}
                    </span>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-royal">{info.subtitle}</p>
                    <h3 className="mt-1 text-[17px] font-extrabold text-navy">{info.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">{info.desc}</p>
                    <p className="mt-3 border-t border-line pt-3 text-[11.5px] font-bold uppercase tracking-wide text-muted-text">
                      {info.footer}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part enquiry */}
      <section className="section-pad bg-white">
        <div className="container-sss grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                align="left"
                eyebrow={productsCat.fitEyebrow}
                title={productsCat.fitTitle}
                description={productsCat.fitDesc}
              />
              <ul className="mt-6 space-y-3 text-sm text-body-text">
                {(productsCat.fitPoints ?? []).map((point, i) => {
                  const Icon = i === 0 ? ShieldCheck : i === 1 ? Clock : Wrench;
                  const tone = i === 0 ? "text-emerald-600" : "text-royal";
                  return (
                    <li key={point} className="flex gap-2">
                      <Icon className={`mt-0.5 size-4 shrink-0 ${tone}`} aria-hidden />
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <PartEnquiryForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}