"use client";

import { paymentMethods, paymentWorkflow, paymentSafetyItems } from "@/lib/data/payment";
import { useCatalog } from "@/lib/i18n";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PaymentEnquiryForm } from "@/components/forms/payment-enquiry-form";
import {
  QrCode,
  Smartphone,
  CreditCard,
  Landmark,
  ClipboardList,
  FileCheck2,
  ReceiptText,
  Send,
  ShieldAlert,
  CircleAlert,
} from "lucide-react";

const methodIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  qr: QrCode,
  smartphone: Smartphone,
  "credit-card": CreditCard,
  bank: Landmark,
};

const workflowIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  clipboard: ClipboardList,
  "file-check": FileCheck2,
  smartphone: Smartphone,
  receipt: ReceiptText,
  send: Send,
};

type PaymentCatalog = {
  bannerEyebrow: string;
  bannerTitle: string;
  bannerDesc: string;
  fraudCaution: string;
  fraudCautionDesc: string;
  stayAlert: string;
  waysEyebrow: string;
  waysTitle: string;
  waysDesc: string;
  howEyebrow: string;
  howTitle: string;
  howDesc: string;
  staySafeEyebrow: string;
  staySafeTitle: string;
  helpEyebrow: string;
  helpTitle: string;
  helpDesc: string;
  helpNote: string;
  methods: Array<{ badge: string; title: string; desc: string }>;
  workflows: Array<{ title: string; desc: string }>;
  safetyItems: Array<{ title: string; desc: string }>;
};

export function PaymentContent() {
  const catalog = useCatalog();
  const payment = catalog.payment as PaymentCatalog;
  const nav = catalog.nav as { payment: string };

  return (
    <>
      <PageBanner
        breadcrumb={[{ label: nav.payment, href: "/payment" }]}
        eyebrow={payment.bannerEyebrow}
        title={payment.bannerTitle}
        description={payment.bannerDesc}
      />

      <div className="container-sss -mt-10 relative z-10 flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
        <p className="flex items-start gap-2 text-[13px] font-semibold leading-relaxed text-amber-800">
          <CircleAlert className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden />
          <span>
            <strong>{payment.fraudCaution}</strong> {payment.fraudCautionDesc}
          </span>
        </p>
        <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-700 shadow-sm">
          {payment.stayAlert}
        </span>
      </div>

      {/* Methods */}
      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow={payment.waysEyebrow}
            title={payment.waysTitle}
            description={payment.waysDesc}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {paymentMethods.map((m, i) => {
              const Icon = methodIcons[m.icon] ?? CreditCard;
              const info = payment.methods[i] ?? {
                badge: m.badge,
                title: m.title,
                desc: m.description,
              };
              return (
                <SectionReveal key={m.id} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-softblue text-royal">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                        {info.badge}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[16px] font-extrabold text-navy">{info.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-body-text">{info.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow={payment.howEyebrow}
            title={payment.howTitle}
            description={payment.howDesc}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3 xl:grid-cols-5">
            {paymentWorkflow.map((step, i) => {
              const Icon = workflowIcons[step.icon];
              const info = payment.workflows[i] ?? {
                title: step.title,
                desc: step.description,
              };
              return (
                <SectionReveal key={step.number} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-full bg-royal text-sm font-extrabold text-white">
                        {step.number}
                      </span>
                      {Icon ? <Icon className="size-5 text-royal" aria-hidden /> : null}
                    </div>
                    <h3 className="mt-4 text-[15px] font-extrabold text-navy">{info.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-body-text">{info.desc}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-pad bg-paleblue">
        <div className="container-sss">
          <SectionReveal>
            <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{payment.staySafeEyebrow}</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">{payment.staySafeTitle}</h2>
              <ul className="mt-6 space-y-4">
                {paymentSafetyItems.map((item, i) => {
                  const info = payment.safetyItems[i] ?? {
                    title: item.title,
                    desc: item.description,
                  };
                  return (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-softblue text-royal">
                        <ShieldAlert className="size-3.5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-[15px] font-bold text-navy">{info.title}</p>
                        <p className="text-[13px] leading-relaxed text-body-text">{info.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Payment enquiry form */}
      <section className="section-pad bg-white">
        <div className="container-sss grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                align="left"
                eyebrow={payment.helpEyebrow}
                title={payment.helpTitle}
                description={payment.helpDesc}
              />
              <p className="mt-4 text-sm text-body-text">
                {payment.helpNote}
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <PaymentEnquiryForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}