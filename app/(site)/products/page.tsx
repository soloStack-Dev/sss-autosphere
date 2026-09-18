import type { Metadata } from "next";
import { connection } from "next/server";
import { fetchProducts } from "@/lib/data-access";
import { hasEnvVars } from "@/lib/utils";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { CatalogExplorer } from "@/components/products/catalog-explorer";
import { PartEnquiryForm } from "@/components/forms/part-enquiry-form";
import { sourcingBenefits } from "@/lib/data/products";
import { ShieldCheck, Clock, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Products & Spare Parts | SSS Auto Spares Chennai",
  description:
    "Browse car spare parts, body parts, replacement components, and quality used spares at SSS Auto Spares Chennai. Enquire with part number for fitment-matched quotes.",
};

export const instant = false;

const benefitIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  clock: Clock,
  wrench: Wrench,
};

export default async function ProductsPage() {
  await connection();
  const products = await fetchProducts();
  const canRefresh = hasEnvVars;

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "Product", href: "/products" }]}
        eyebrow="Product Directory"
        title="Parts Catalog & Availability"
        description="New, OEM-grade, and quality-tested used automotive spares. Search, filter, and enquire — every listing is verified before handoff."
        image="/images/product/product-img-one.png"
        alt="SSS Auto Spares catalogue and parts warehouse"
      />

      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            align="left"
            eyebrow="Browse the Catalog"
            title="Find the Part You Need"
            description="Use the filters to narrow by category, brand, condition, or vehicle type. Prices are quoted per fitment by our Chennai desk."
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
            eyebrow="Sourcing Standards"
            title="Why Enquire Through SSS Auto Spares"
            description="Because every part is backed by the same sourcing and verification discipline — whether new, OEM-grade, or bench-tested used."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {sourcingBenefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              return (
                <SectionReveal key={b.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-softblue text-royal">
                      {Icon ? <Icon className="size-6" aria-hidden /> : null}
                    </span>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-wide text-royal">{b.subtitle}</p>
                    <h3 className="mt-1 text-[17px] font-extrabold text-navy">{b.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">{b.description}</p>
                    <p className="mt-3 border-t border-line pt-3 text-[11.5px] font-bold uppercase tracking-wide text-muted-text">
                      {b.footer}
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
                eyebrow="Can't Find It?"
                title="Submit a Detailed Part Enquiry"
                description="Not every part is listed — especially for legacy vehicles. Provide the details and our technical desk will source, verify, and quote."
              />
              <ul className="mt-6 space-y-3 text-sm text-body-text">
                <li className="flex gap-2">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                  Fitment confirmed against your vehicle&apos;s chassis &amp; engine.
                </li>
                <li className="flex gap-2">
                  <Clock className="mt-0.5 size-4 shrink-0 text-royal" aria-hidden />
                  Usual quotation turnaround within same business day.
                </li>
                <li className="flex gap-2">
                  <Wrench className="mt-0.5 size-4 shrink-0 text-royal" aria-hidden />
                  Bench verification on all second-hand recommendations.
                </li>
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