"use client";

import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { QuickEnquiryForm } from "@/components/forms/quick-enquiry-form";
import { PartEnquiryForm } from "@/components/forms/part-enquiry-form";
import { LocationMap } from "@/components/enquire/location-map";
import { EmailContact } from "@/components/shared/email-contact";
import { siteConfig } from "@/lib/site-config";
import { waLink, whatsappDesks } from "@/lib/whatsapp";
import { Phone, Clock, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";

type EnquireCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  quickEyebrow: string;
  quickTitle: string;
  quickDesc: string;
  preferTalkTitle: string;
  waLabel: string;
  waPartsLink: string;
  waEnqLink: string;
  detailedEyebrow: string;
  detailedTitle: string;
  detailedDesc: string;
  languageSupport: string;
  mapEyebrow: string;
  mapTitle: string;
  openMaps: string;
};

export function EnquireContent() {
  const catalog = useCatalog();
  const enquire = catalog.enquire as EnquireCatalog;
  const nav = catalog.nav as { enquire: string };

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.enquire, href: "/enquire" }]}
        eyebrow={enquire.bannerEyebrow}
        title={enquire.bannerTitle}
        description={enquire.bannerDesc}
      />

      <section className="section-pad bg-white">
        <div className="container-sss grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionReveal>
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-3xl border border-line bg-paleblue p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{enquire.quickEyebrow}</p>
                <h2 className="mt-1 text-xl font-extrabold text-navy">{enquire.quickTitle}</h2>
                <p className="mt-2 text-sm text-body-text">
                  {enquire.quickDesc}
                </p>
                <QuickEnquiryForm className="mt-5" />
              </div>
              <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{enquire.preferTalkTitle}</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Phone className="size-4 text-royal" aria-hidden />
                    <span className="font-semibold text-navy">{siteConfig.phone}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <EmailContact
                      email={siteConfig.email}
                      showIcon={false}
                      className="text-sm text-navy hover:text-royal"
                    />
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="size-4 text-royal" aria-hidden />
                    <span className="font-semibold text-navy">{siteConfig.hours}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="size-4 shrink-0 text-royal" aria-hidden />
                    <a
                      href={waLink(whatsappDesks.partsDesk, enquire.waPartsLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy transition-colors hover:text-royal"
                    >
                      {enquire.waLabel.replace("{number}", "9840527931")}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="size-4 shrink-0 text-royal" aria-hidden />
                    <a
                      href={waLink(whatsappDesks.enquiryDesk, enquire.waEnqLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy transition-colors hover:text-royal"
                    >
                      {enquire.waLabel.replace("{number}", "7708066686")}
                    </a>
                  </li>
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-[12px] text-muted-text">
                  <ArrowUpRight className="size-3.5 text-royal" aria-hidden />
                  {enquire.languageSupport}
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{enquire.detailedEyebrow}</p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy">{enquire.detailedTitle}</h2>
              <p className="mt-2 text-sm text-body-text">
                {enquire.detailedDesc}
              </p>
              <PartEnquiryForm className="mt-5" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Location + Map */}
      <section className="section-pad bg-white">
        <div className="container-sss grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <SectionReveal>
            <LocationMap
              lat={siteConfig.map.lat}
              lng={siteConfig.map.lng}
              name={siteConfig.displayName}
              address={siteConfig.address}
              phone={siteConfig.phone}
              hours={siteConfig.hours}
            />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="rounded-3xl border border-line bg-white p-7 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{enquire.mapEyebrow}</p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy">{enquire.mapTitle}</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-softblue">
                    <MapPin className="size-5 text-royal" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy">{siteConfig.address.split(",")[0]}</p>
                    <p className="text-[13px] text-body-text">{siteConfig.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-softblue">
                    <Phone className="size-5 text-royal" aria-hidden />
                  </span>
                  <p className="text-[13.5px] font-semibold text-navy">{siteConfig.phone} · {siteConfig.phoneAlt}</p>
                </div>
                <div className="flex items-center gap-3">
                  <EmailContact
                    email={siteConfig.email}
                    showIcon={false}
                    className="text-[13.5px] text-navy hover:text-royal"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-softblue">
                    <Clock className="size-5 text-royal" aria-hidden />
                  </span>
                  <p className="text-[13.5px] font-semibold text-navy">{siteConfig.hours}</p>
                </div>
              </div>
              <a
                href={siteConfig.map.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-royal px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-royal/90"
              >
                {enquire.openMaps} <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}