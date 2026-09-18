import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { connection } from "next/server";
import { fetchGalleryItems } from "@/lib/data-access";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";
import { facilityCards } from "@/lib/data/gallery";
import { ArrowRight, PhoneCall, Landmark, Cpu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | SSS Auto Spares Chennai",
  description:
    "Inside SSS Auto Spares — showroom displays, warehousing, bench-testing workstations, and verified brake & performance parts from our Chennai hub.",
};

export const instant = false;

export default async function GalleryPage() {
  await connection();
  const gallery = await fetchGalleryItems();
  const primary = facilityCards.primary;
  const rightCards = [facilityCards.topRight, facilityCards.bottomRight];

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
        eyebrow="Parts Gallery"
        title="Inside SSS Auto Spares"
        description="Real shelves, real benches, real parts — a visual tour of how we store, verify, and hand over components in Chennai."
        image="/images/gallery/gallery-img-one.png"
        alt="SSS Auto Spares showroom with stocked parts shelves"
      />

      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow="Browse the Collection"
            title="Display & Case Gallery"
            description="Filter by category to explore products, used spares, showroom, and workshop benchmarks."
          />
          <SectionReveal>
            <GalleryExplorer items={gallery} />
          </SectionReveal>
        </div>
      </section>

      {/* Facility feature */}
      <section className="section-pad bg-paleblue">
        <div className="container-sss grid items-start gap-8 lg:grid-cols-2">
          <SectionReveal>
            <div className="group overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={primary.image}
                  alt={primary.alt}
                  fill
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-navy shadow-card">
                  <Landmark className="size-3.5 text-royal" aria-hidden />
                  {primary.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy">{primary.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-text">{primary.description}</p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                  {primary.stats.map((s) => (
                    <div key={s.title} className="rounded-xl bg-softblue p-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-text">{s.title}</dt>
                      <dd className="mt-0.5 text-[13px] font-extrabold text-navy">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </SectionReveal>

          <div className="grid gap-6">
            {rightCards.map((card, i) => (
              <SectionReveal key={card.title} delay={i * 0.08}>
                <div className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card sm:flex-row">
                  <div className="relative aspect-[16/9] w-full shrink-0 sm:aspect-auto sm:w-52">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width:1024px) 200px, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-royal">
                      {i === 0 ? <Cpu className="size-3.5" aria-hidden /> : <ShieldCheck className="size-3.5" aria-hidden />}
                      {card.eyebrow}
                    </p>
                    <h3 className="mt-1 text-[17px] font-extrabold text-navy">{card.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-body-text">{card.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.16}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-royal p-6 text-white">
                <div>
                  <p className="text-lg font-extrabold">Want a live video tour?</p>
                  <p className="mt-1 text-sm text-blue-100/85">
                    Message our Chennai desk — we&apos;ll show the exact part on video.
                  </p>
                </div>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-royal transition-transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="size-4" aria-hidden /> Enquire
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}