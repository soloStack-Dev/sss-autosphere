import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
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

export const metadata: Metadata = {
  title: "About Us | SSS Auto Spares Chennai",
  description:
    "Learn about SSS Auto Spares — a Chennai auto-spares hub supplying genuine parts, quality used spares, and trusted vehicle purchasing services.",
};

const values = [
  {
    icon: BadgeCheck,
    title: "Authenticity First",
    description:
      "Every part is sourced from verified tier-1 suppliers and OEM manufacturers, with grade disclosure on second-hand stock.",
  },
  {
    icon: Gem,
    title: "Honest Grading",
    description:
      "Used parts are bench-tested, tolerance-checked, and graded before they reach the shelf — no surprises at billing.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Driven",
    description:
      "Garage owners, technicians, and drivers get fitment-matched advice in Tamil and English at our part desk.",
  },
];

const workflow = [
  {
    icon: Search,
    title: "Identify the Need",
    description: "Share make, model, year, and part requirement with our Chennai desk.",
  },
  {
    icon: ClipboardList,
    title: "We Match & Quote",
    description: "We verify fitment, condition, availability, and price — transparent and itemized.",
  },
  {
    icon: Truck,
    title: "Dispatch or Pickup",
    description: "Fast Chennai-wide dispatch or hands-on inspection before you pay at our hub.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "About Us" }]}
        eyebrow="About SSS Auto Spares"
        title="The Car-Parts Desk Chennai Gears Up With"
        description="From everyday brake kits to hard-to-find legacy spares — we keep genuine parts honest, priced fairly, and ready to roll."
        image="/images/about/about-img-1.png"
        alt="SSS Auto Spares workshop and parts service center"
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-sss grid items-center gap-10 lg:grid-cols-2">
          <SectionReveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A Spares Business Built on Trust & Fitment"
              description="A Chennai hub that pairs every enquiry with verified suppliers, honest grading, and fitment-matched parts."
            />
            <p className="mt-4 text-[15px] leading-relaxed text-body-text">
              {siteConfig.establishedNote}. We are a Chennai-based automotive
              spares hub connecting vehicle owners, workshops, and garages with
              the right parts — new, OEM-grade, or quality-tested used.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-body-text">
              {siteConfig.heroStats.parts} in regular catalog rotation, bench-tested
              quality checks, and a dedicated part desk that validates chassis
              compatibility before dispatch. When we don&apos;t have a part, we source
              it through verified suppliers — rather than pushing an &quot;almost right&quot;
              fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
              >
                View Our Gallery <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-softblue"
              >
                Parts Directory
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
                Verified Sourcing Network
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-paleblue">
        <div className="container-sss">
          <SectionHeading
            eyebrow="Our Values"
            title="What We Stand For, Under the Bonnet"
            description="Three principles drive every part that leaves our Chennai facility."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <SectionReveal key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-softblue text-royal">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-[17px] font-extrabold text-navy">{v.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">{v.description}</p>
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
            eyebrow="How We Work"
            title="From Enquiry to Dispatch"
            description="A simple, transparent flow — whether you visit our hub in Chennai or enquire online."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workflow.map((step, i) => {
              const Icon = step.icon;
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
                    <p className="text-[13.5px] leading-relaxed text-body-text">{step.description}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="relative overflow-hidden bg-footer-navy text-white">
        <div className="container-sss grid items-center gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">SSS Auto Spares at a Glance</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Numbers our customers actually experience
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["Parts", siteConfig.heroStats.parts],
                ["Categories", siteConfig.heroStats.categories],
                ["Years", siteConfig.heroStats.years],
                ["Fitment", "Chassis-matched"],
              ].map(([label, value]) => (
                <li key={label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5">
                  <p className="text-xl font-extrabold text-orange-300">{value}</p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-blue-100/70">{label}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-base font-bold">Have a vehicle in mind?</p>
            <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
              Tell us the make, model, and part — our desk confirms fitment and quotes transparently.
            </p>
            <Link
              href="/enquire"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-5 py-3 text-sm font-bold text-navy transition-transform hover:-translate-y-0.5"
            >
              <PhoneCall className="size-4" aria-hidden /> Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}