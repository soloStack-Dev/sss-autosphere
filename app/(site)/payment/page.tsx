import type { Metadata } from "next";
import { paymentMethods, paymentWorkflow, paymentSafetyItems } from "@/lib/data/payment";
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

export const metadata: Metadata = {
  title: "Payment & Billing | SSS Auto Spares Chennai",
  description:
    "Authorized payment details for SSS Auto Spares Chennai — UPI, Google Pay, PhonePe, Paytm transfers. Verify details before remitting and raise a payment ticket if needed.",
};

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

export default function PaymentPage() {
  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "Payment", href: "/payment" }]}
        eyebrow="Payment & Billing"
        title="Authorized Payment Methods & Terms"
        description="Make payments only through the verified channels listed here. Confirm all details with the business before transferring funds."
      />

      <div className="container-sss -mt-10 relative z-10 flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
        <p className="flex items-start gap-2 text-[13px] font-semibold leading-relaxed text-amber-800">
          <CircleAlert className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden />
          <span>
            <strong>Fraud caution:</strong> SSS Auto Spares never asks for UPI PINs, OTPs,
            or passwords. Trust only the verified channels listed on this page.
          </span>
        </p>
        <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-amber-700 shadow-sm">
          Stay Alert
        </span>
      </div>

      {/* Methods */}
      <section className="section-pad bg-white">
        <div className="container-sss">
          <SectionHeading
            eyebrow="Ways to Pay"
            title="Supported Payment Modes"
            description="Choose any channel below — UTR, screenshot, and reference tagging are handled by our billing desk."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {paymentMethods.map((m, i) => {
              const Icon = methodIcons[m.icon] ?? CreditCard;
              return (
                <SectionReveal key={m.id} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-softblue text-royal">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                        {m.badge}
                      </span>
                    </div>
                    <h3 className="mt-3 text-[16px] font-extrabold text-navy">{m.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-body-text">{m.description}</p>
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
            eyebrow="How It Works"
            title="Five Steps to a Clean Transaction"
            description="A simple, documented flow that keeps both sides traceable — from confirmation to dispatch."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3 xl:grid-cols-5">
            {paymentWorkflow.map((step, i) => {
              const Icon = workflowIcons[step.icon];
              return (
                <SectionReveal key={step.number} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-line bg-white p-5 shadow-card">
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-full bg-royal text-sm font-extrabold text-white">
                        {step.number}
                      </span>
                      {Icon ? <Icon className="size-5 text-royal" aria-hidden /> : null}
                    </div>
                    <h3 className="mt-4 text-[15px] font-extrabold text-navy">{step.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-body-text">{step.description}</p>
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">Stay Safe</p>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">Payment Safety Checklist</h2>
              <ul className="mt-6 space-y-4">
                {paymentSafetyItems.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-softblue text-royal">
                      <ShieldAlert className="size-3.5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-bold text-navy">{item.title}</p>
                      <p className="text-[13px] leading-relaxed text-body-text">{item.description}</p>
                    </div>
                  </li>
                ))}
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
                eyebrow="Need Help With a Payment?"
                title="Raise a Payment Ticket"
                description="Stuck on a failed transfer, missing UTR match, or refund request? Tell the billing desk exactly what happened."
              />
              <p className="mt-4 text-sm text-body-text">
                Include the date, method, amount, and UTR. Response is same-business-day
                during office hours.
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