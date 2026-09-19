"use client";

import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/lib/data/gallery";
import { facilityCards } from "@/lib/data/gallery";
import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";
import { ArrowRight, PhoneCall, Landmark, Cpu, ShieldCheck } from "lucide-react";

type GalleryCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  bannerAlt: string;
  browseEyebrow: string;
  browseTitle: string;
  browseDesc: string;
  facility: {
    badge: string;
    title: string;
    desc: string;
    stats: Array<{ title: string; value: string }>;
  };
  topRight: { eyebrow: string; title: string; desc: string };
  bottomRight: { eyebrow: string; title: string; desc: string };
  liveTitle: string;
  liveDesc: string;
  enquireBtn: string;
};

export function GalleryContent({ items }: { items: GalleryItem[] }) {
  const catalog = useCatalog();
  const gallery = catalog.gallery as GalleryCatalog;
  const nav = catalog.nav as { gallery: string };
  const primary = facilityCards.primary;
  const rightCards = [
    { ...facilityCards.topRight, ...gallery.topRight },
    { ...facilityCards.bottomRight, ...gallery.bottomRight },
  ];

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.gallery, href: "/gallery" }]}
        eyebrow={gallery.bannerEyebrow}
        title={gallery.bannerTitle}
        description={gallery.bannerDesc}
        image="/images/gallery/gallery-img-one.png"
        alt={gallery.bannerAlt}
      />

      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow={gallery.browseEyebrow}
            title={gallery.browseTitle}
            description={gallery.browseDesc}
          />
          <SectionReveal>
            <GalleryExplorer items={items} />
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
                  {gallery.facility.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-navy">{gallery.facility.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body-text">{gallery.facility.desc}</p>
                <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                  {primary.stats.map((s, i) => {
                    const info = gallery.facility.stats[i] ?? { title: s.title, value: s.value };
                    return (
                      <div key={s.title} className="rounded-xl bg-softblue p-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wide text-muted-text">{info.title}</dt>
                        <dd className="mt-0.5 text-[13px] font-extrabold text-navy">{info.value}</dd>
                      </div>
                    );
                  })}
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
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-body-text">{card.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.16}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-royal p-6 text-white">
                <div>
                  <p className="text-lg font-extrabold">{gallery.liveTitle}</p>
                  <p className="mt-1 text-sm text-blue-100/85">
                    {gallery.liveDesc}
                  </p>
                </div>
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-royal transition-transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="size-4" aria-hidden /> {gallery.enquireBtn}
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