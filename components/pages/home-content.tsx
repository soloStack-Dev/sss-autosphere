"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { homeCategories, services, trustMetrics, trustPoints } from "@/lib/data/home";
import { useCatalog, useT } from "@/lib/i18n";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { VideoShowcase } from "@/components/shared/video-showcase";
import { SpecialisationsBand } from "@/components/shared/specialisations-band";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  PhoneCall,
  Boxes,
  Recycle,
  Car,
  History,
  Leaf,
  Wallet,
  Wrench,
  PanelsTopLeft,
  Headset,
  BadgeCheck,
  Timer,
  Star,
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  disc: Boxes,
  car: Car,
  recycle: Recycle,
  history: History,
  leaf: Leaf,
  wallet: Wallet,
};

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  panels: PanelsTopLeft,
  recycle: Recycle,
  headset: Headset,
};

const metricIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  box: Boxes,
  shield: ShieldCheck,
  timer: Timer,
};

type CatalogItem = {
  badge: string;
  title: string;
  metadata: string;
  action: string;
};

type ServiceItem = { title: string; desc: string; link: string };
type TrustPoint = { title: string; desc: string };

type HomeCatalog = {
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoriesDesc: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDesc: string;
  videoTitle: string;
  videoCaption: string;
  genuine: string;
  genuineSub: string;
  tested: string;
  testedSub: string;
  focused: string;
  focusedSub: string;
  teaserEyebrow: string;
  teaserTitle: string;
  teaserDesc: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDesc: string;
  categories: CatalogItem[];
  categoryDescs: string[];
  services: ServiceItem[];
  trustPoints: TrustPoint[];
};

export function HomeContent() {
  const t = useT();
  const catalog = useCatalog();
  const home = catalog.home as HomeCatalog;
  const hero = catalog.hero as {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    desc: string;
    rated: string;
    delivery: string;
    quickAvailability: string;
    enquireForVehicle: string;
  };
  const metrics = catalog.metrics as {
    partsTitle: string;
    partsSub: string;
    oemTitle: string;
    oemSub: string;
    quickTitle: string;
    quickSub: string;
  };

  const metricRows = [
    { title: metrics.partsTitle, subtitle: metrics.partsSub },
    { title: metrics.oemTitle, subtitle: metrics.oemSub },
    { title: metrics.quickTitle, subtitle: metrics.quickSub },
  ];

  const teaserBadges = [
    { icon: ShieldCheck, title: home.genuine, sub: home.genuineSub },
    { icon: Wrench, title: home.tested, sub: home.testedSub },
    { icon: Timer, title: home.focused, sub: home.focusedSub },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-footer-navy text-white">
        <Image
          src="/images/home/home-img-1.png"
          alt="SSS Auto Spares Chennai warehouse and parts showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-footer-navy via-footer-navy/85 to-royal/40" aria-hidden />
        <div className="container-sss relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-300/40 bg-white/5 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-orange-300">
              <BadgeCheck className="size-4" aria-hidden />
              {hero.badge}
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
              {hero.titlePart1}{" "}
              <span className="text-orange-300">{hero.titlePart2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-blue-100/85 sm:text-base">
              {siteConfig.description}. {hero.desc}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white shadow-card-hover transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
              >
                {t("common.browseParts")} <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                {t("common.ourStory")}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-semibold text-blue-100/80">
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-4 fill-orange-300 text-orange-300" aria-hidden />
                {hero.rated}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="size-4 text-orange-300" aria-hidden />
                {hero.delivery}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <PhoneCall className="size-4 text-orange-300" aria-hidden />
                {siteConfig.phone}
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
                {hero.quickAvailability}
              </p>
              <div className="mt-4 space-y-3">
                {[
                  ["Brake disc & caliper sets", "BRK-4412"],
                  ["Suspension shock absorbers", "SUS-2031"],
                  ["Alternators & starters", "ALT-1190"],
                ].map(([name, sku]) => (
                  <div
                    key={sku}
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3"
                  >
                    <span className="text-sm font-semibold">{name}</span>
                    <span className="font-mono text-[11px] text-blue-100/70">{sku}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/enquire"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-300 hover:text-orange-200"
              >
                {hero.enquireForVehicle} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick metrics */}
      <section className="border-b border-line bg-paleblue">
        <div className="container-sss grid gap-6 py-10 sm:grid-cols-3">
          {trustMetrics.map((m, i) => {
            const Icon = metricIcons[m.icon];
            const row = metricRows[i];
            return (
              <div key={m.title} className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-royal shadow-card">
                  <Icon className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="text-lg font-extrabold leading-tight text-navy">{row.title}</p>
                  <p className="text-[13px] font-medium text-muted-text">{row.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Specialist band */}
      <SpecialisationsBand />

      {/* Categories */}
      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow={home.categoriesEyebrow}
            title={home.categoriesTitle}
            description={home.categoriesDesc}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon];
              const info = home.categories[i] ?? {
                badge: cat.badge,
                title: cat.title,
                metadata: cat.metadata,
                action: cat.action,
              };
              return (
                <SectionReveal key={cat.id} delay={i * 0.05}>
                  <Link
                    href="/products"
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-md bg-royal px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
                        {info.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        {Icon ? <Icon className="size-5 text-royal" aria-hidden /> : null}
                        <h3 className="text-[16px] font-extrabold text-navy">{info.title}</h3>
                      </div>
                      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-body-text">
                        {home.categoryDescs[i] ?? cat.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11.5px] font-bold uppercase tracking-wide text-muted-text">
                          {info.metadata}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[13px] font-bold text-royal">
                          {info.action}
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-paleblue">
        <div className="container-sss">
          <SectionHeading
            eyebrow={home.servicesEyebrow}
            title={home.servicesTitle}
            description={home.servicesDesc}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              const info = home.services[i] ?? {
                title: s.title,
                desc: s.description,
                link: s.link,
              };
              return (
                <SectionReveal key={s.title} delay={i * 0.05}>
                  <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-card-hover">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-softblue text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                      {Icon ? <Icon className="size-6" aria-hidden /> : null}
                    </span>
                    <h3 className="mt-4 text-[16px] font-extrabold text-navy">{info.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">
                      {info.desc}
                    </p>
                    <p className="mt-3 text-[11.5px] font-bold uppercase tracking-wide text-royal">
                      {info.link}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-pad bg-white">
        <div className="container-sss grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionReveal>
            <VideoShowcase
              src="/videos/home-intro.mp4"
              poster="/images/home/home-image-9.png"
              title={home.videoTitle}
              caption={home.videoCaption}
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {teaserBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="flex items-center gap-2 rounded-2xl bg-paleblue px-3 py-3"
                >
                  <badge.icon className="size-5 shrink-0 text-royal" aria-hidden />
                  <div>
                    <p className="text-[13px] font-extrabold leading-tight text-navy">{badge.title}</p>
                    <p className="text-[10.5px] font-semibold text-muted-text">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow={home.teaserEyebrow}
              title={home.teaserTitle}
              description={home.teaserDesc}
            />
            <ul className="mt-6 space-y-4">
              {trustPoints.map((point, i) => {
                const info = home.trustPoints[i] ?? {
                  title: point.title,
                  desc: point.description,
                };
                return (
                  <li key={point.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <ShieldCheck className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-navy">{info.title}</p>
                      <p className="text-[13.5px] leading-relaxed text-body-text">{info.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
            >
              {t("common.moreAboutUs")} <ArrowRight className="size-4" aria-hidden />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-footer-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_80%_0%,rgba(36,86,216,0.45),transparent)]" aria-hidden />
        <div className="container-sss relative grid items-center gap-8 py-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">{home.ctaEyebrow}</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {home.ctaTitle}
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-blue-100/80">
              {home.ctaDesc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
            >
              <PhoneCall className="size-4" aria-hidden /> {t("common.startEnquiry")}
            </Link>
            <Link
              href="/payment"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {t("common.paymentDetails")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}