import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { homeCategories, services, trustMetrics, trustPoints } from "@/lib/data/home";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { VideoShowcase } from "@/components/shared/video-showcase";
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

export const metadata: Metadata = {
  title: "SSS Auto Spares | Chennai Automobile Spare Parts Dealers",
  description:
    "SSS Auto Spares Chennai — genuine car spare parts, body parts, quality used spares, old vehicle parts, scrap vehicle & old car purchasing with fast dispatch.",
  keywords: [
    "car spare parts Chennai",
    "auto parts dealer",
    "used car spares",
    "old vehicle purchasing",
    "scrap car buyer Chennai",
  ],
};

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

export default function HomePage() {
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
              Chennai&apos;s Trusted Auto-Spares Hub
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
              Genuine Spares,{" "}
              <span className="text-orange-300">Old &amp; New.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-blue-100/85 sm:text-base">
              {siteConfig.description}. From everyday car spares to rare legacy
              parts — authentic ranges, transparent pricing, and fast Chennai
              dispatch.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white shadow-card-hover transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
              >
                Browse Parts Directory <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                Our Story
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-semibold text-blue-100/80">
              <span className="inline-flex items-center gap-1.5">
                <Star className="size-4 fill-orange-300 text-orange-300" aria-hidden />
                Rated for part accuracy
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck className="size-4 text-orange-300" aria-hidden />
                Chennai counter pickup & delivery
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
                Quick Availability
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
                Enquire for your vehicle <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick metrics */}
      <section className="border-b border-line bg-paleblue">
        <div className="container-sss grid gap-6 py-10 sm:grid-cols-3">
          {trustMetrics.map((m) => {
            const Icon = metricIcons[m.icon];
            return (
              <div key={m.title} className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-royal shadow-card">
                  <Icon className="size-6" aria-hidden />
                </span>
                <div>
                  <p className="text-lg font-extrabold leading-tight text-navy">{m.title}</p>
                  <p className="text-[13px] font-medium text-muted-text">{m.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow="What We Supply"
            title="Everything Your Vehicle Needs"
            description="A complete range of new, OEM-grade, and quality used spares, plus genuine vehicle purchasing services — all under one trusted Chennai roof."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon];
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
                        {cat.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2">
                        {Icon ? <Icon className="size-5 text-royal" aria-hidden /> : null}
                        <h3 className="text-[16px] font-extrabold text-navy">{cat.title}</h3>
                      </div>
                      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-body-text">
                        {cat.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11.5px] font-bold uppercase tracking-wide text-muted-text">
                          {cat.metadata}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[13px] font-bold text-royal">
                          {cat.action}
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
            eyebrow="Why SSS Auto Spares"
            title="Parts Service, Done Right"
            description="Direct sourcing, honest condition disclosure, and quick Chennai dispatch keep garage owners and car owners coming back."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <SectionReveal key={s.title} delay={i * 0.05}>
                  <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-royal/30 hover:shadow-card-hover">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-softblue text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                      {Icon ? <Icon className="size-6" aria-hidden /> : null}
                    </span>
                    <h3 className="mt-4 text-[16px] font-extrabold text-navy">{s.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">
                      {s.description}
                    </p>
                    <p className="mt-3 text-[11.5px] font-bold uppercase tracking-wide text-royal">
                      {s.link}
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
              title="A quick walk through SSS Auto Spares"
              caption="Shelves, benches, and the parts that keep Chennai rolling."
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-2xl bg-paleblue px-3 py-3">
                <ShieldCheck className="size-5 shrink-0 text-royal" aria-hidden />
                <div>
                  <p className="text-[13px] font-extrabold leading-tight text-navy">Genuine</p>
                  <p className="text-[10.5px] font-semibold text-muted-text">Sourced parts</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-paleblue px-3 py-3">
                <Wrench className="size-5 shrink-0 text-royal" aria-hidden />
                <div>
                  <p className="text-[13px] font-extrabold leading-tight text-navy">Tested</p>
                  <p className="text-[10.5px] font-semibold text-muted-text">Used stock</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-paleblue px-3 py-3">
                <Timer className="size-5 shrink-0 text-royal" aria-hidden />
                <div>
                  <p className="text-[13px] font-extrabold leading-tight text-navy">Focused</p>
                  <p className="text-[10.5px] font-semibold text-muted-text">Fitment help</p>
                </div>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="The SSS Advantage"
              title="A Spares Desk That Genuinely Knows Cars"
              description="We match parts to chassis, keep used stock bench-tested and graded, and quote honestly — so your vehicle gets the right part the first time."
            />
            <ul className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <li key={point.title} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <ShieldCheck className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-navy">{point.title}</p>
                    <p className="text-[13.5px] leading-relaxed text-body-text">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
            >
              More About Us <ArrowRight className="size-4" aria-hidden />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-footer-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_80%_0%,rgba(36,86,216,0.45),transparent)]" aria-hidden />
        <div className="container-sss relative grid items-center gap-8 py-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Ready When You Are</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Need a part? Send the vehicle details &amp; get pricing fast.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-blue-100/80">
              Share your make, model, year, and the part you need. Our Chennai desk confirms availability, condition, and price — then you decide.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              href="/enquire"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
            >
              <PhoneCall className="size-4" aria-hidden /> Start an Enquiry
            </Link>
            <Link
              href="/payment"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Payment Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}