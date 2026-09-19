"use client";

import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { ShareWebsite } from "@/components/share/share-website";
import { siteConfig } from "@/lib/site-config";
import { QrCode, Users, Truck } from "lucide-react";

const benefitIcons = [QrCode, Users, Truck];

type ShareCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  benefits: Array<{ title: string; desc: string }>;
  note: string;
};

export function ShareContent() {
  const catalog = useCatalog();
  const share = catalog.share as ShareCatalog;
  const nav = catalog.nav as { share: string };

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.share, href: "/share" }]}
        eyebrow={share.bannerEyebrow}
        title={share.bannerTitle}
        description={share.bannerDesc}
      />
      <section className="section-pad bg-white">
        <div className="container-sss grid gap-10 lg:grid-cols-2">
          <SectionReveal>
            <ShareWebsite />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="grid gap-4">
              {share.benefits.map((b, i) => {
                const Icon = benefitIcons[i] ?? QrCode;
                return (
                  <div key={b.title} className="flex items-start gap-4 rounded-2xl border border-line bg-paleblue p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-royal shadow-card">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-extrabold text-navy">{b.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-body-text">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-[12.5px] leading-relaxed text-amber-800">
              {share.note
                .replace("{name}", siteConfig.name)
                .replace("{address}", siteConfig.address)}
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}