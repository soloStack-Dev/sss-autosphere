"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { useCatalog, useT } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpecialisationsBand } from "@/components/shared/specialisations-band";
import { VehicleServicesBand } from "@/components/shared/vehicle-services-band";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Gem,
  Search,
  ClipboardList,
  Truck,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const valueIcons = [BadgeCheck, Gem, HeartHandshake];
const workIcons = [Search, ClipboardList, Truck];

type AboutCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  whoEyebrow: string;
  whoTitle: string;
  whoDesc: string;
  intro1: string;
  intro2: string;
  verified: string;
  valuesEyebrow: string;
  valuesTitle: string;
  valuesDesc: string;
  values: Array<{ title: string; desc: string }>;
  workEyebrow: string;
  workTitle: string;
  workDesc: string;
  work: Array<{ title: string; desc: string }>;
  statsEyebrow: string;
  statsTitle: string;
  statsLabels: string[];
  fitment: string;
  ctaTitle: string;
  ctaDesc: string;
};

export function AboutContent() {
  const t = useT();
  const catalog = useCatalog();
  const about = catalog.about as AboutCatalog;
  const nav = catalog.nav as { about: string };

  const stats = [
    siteConfig.heroStats.parts,
    siteConfig.heroStats.categories,
    siteConfig.heroStats.years,
    about.fitment,
  ];

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.about }]}
        eyebrow={about.bannerEyebrow}
        title={about.bannerTitle}
        description={about.bannerDesc}
        image="/images/about/about-img-1.png"
        alt="SSS Auto Spares workshop and parts service center"
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-sss grid items-center gap-10 lg:grid-cols-2">
          <SectionReveal>
            <SectionHeading
              align="left"
              eyebrow={about.whoEyebrow}
              title={about.whoTitle}
              description={about.whoDesc}
            />
            <p className="mt-4 text-[15px] leading-relaxed text-body-text">
              {about.intro1.replace("{established}", siteConfig.establishedNote)}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-body-text">
              {about.intro2.replace("{parts}", siteConfig.heroStats.parts)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
              >
                {t("common.viewGallery")} <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-softblue"
              >
                {t("common.partsDirectory")}
              </Link>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
              <Image
                src="/images/about/about-img-2.png"
                alt="SSS Auto Spares showroom display of genuine auto parts"
                width={1024}
                height={768}
                sizes="(min-width:1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-navy shadow-card">
                <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
                {about.verified}
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Specialist band */}
      <SpecialisationsBand />

      {/* Values */}
      <section className="section-pad bg-paleblue">
        <div className="container-sss">
          <SectionHeading
            eyebrow={about.valuesEyebrow}
            title={about.valuesTitle}
            description={about.valuesDesc}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {about.values.map((v, i) => {
              const Icon = valueIcons[i] ?? BadgeCheck;
              return (
                <SectionReveal key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-softblue text-royal">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-[17px] font-extrabold text-navy">{v.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">{v.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow={about.workEyebrow}
            title={about.workTitle}
            description={about.workDesc}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {about.work.map((step, i) => {
              const Icon = workIcons[i] ?? Search;
              return (
                <SectionReveal key={step.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-card">
                    <span className="flex size-10 items-center justify-center rounded-full bg-royal text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon className="size-5 text-royal" aria-hidden />
                      <h3 className="text-[16px] font-extrabold text-navy">{step.title}</h3>
                    </div>
                    <p className="text-[13.5px] leading-relaxed text-body-text">{step.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle buying lines */}
      <VehicleServicesBand />

      {/* Stats + CTA */}
      <section className="relative overflow-hidden bg-footer-navy text-white">
        <div className="container-sss grid items-center gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">{about.statsEyebrow}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {about.statsTitle}
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {(about.statsLabels ?? []).map((label, i) => (
                <li key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                  <p className="text-xl font-extrabold text-orange-300">{stats[i]}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-blue-100/70">{label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-base font-bold">{about.ctaTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
              {about.ctaDesc}
            </p>
            <Link
              href="/enquire"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
            >
              <PhoneCall className="size-4" aria-hidden /> {t("common.enquireNow")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}