import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { QuickEnquiryForm } from "@/components/forms/quick-enquiry-form";
import { PartEnquiryForm } from "@/components/forms/part-enquiry-form";
import { siteConfig } from "@/lib/site-config";
import { waLink, whatsappDesks } from "@/lib/whatsapp";
import { Phone, Mail, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enquire About Parts | SSS Auto Spares Chennai",
  description:
    "Submit a part or vehicle enquiry to SSS Auto Spares Chennai — share vehicle, part, and contact details for a same-day fitment-matched quotation.",
};

export default function EnquirePage() {
  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "Enquire", href: "/enquire" }]}
        eyebrow="Part & Vehicle Enquiries"
        title="Get a Fitment-Matched Quotation"
        description="Tell us the vehicle and part — our Chennai technical desk verifies fitment, availability, and price before responding."
      />

      <section className="section-pad bg-white">
        <div className="container-sss grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionReveal>
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-3xl border border-line bg-paleblue p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">Quick Enquiry</p>
                <h2 className="mt-1 text-xl font-extrabold text-navy">Just the essentials</h2>
                <p className="mt-2 text-sm text-body-text">
                  Vehicle + part + number. We call back to confirm details.
                </p>
                <QuickEnquiryForm className="mt-5" />
              </div>
              <div className="rounded-3xl border border-line bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">Prefer to Talk?</p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Phone className="size-4 text-royal" aria-hidden />
                    <span className="font-semibold text-navy">{siteConfig.phone}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="size-4 text-royal" aria-hidden />
                    <span className="font-semibold text-navy break-all">{siteConfig.email}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="size-4 text-royal" aria-hidden />
                    <span className="font-semibold text-navy">{siteConfig.hours}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="size-4 shrink-0 text-royal" aria-hidden />
                    <a
                      href={waLink(whatsappDesks.partsDesk, "Hi SSS Auto Spares — I have a part enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy transition-colors hover:text-royal"
                    >
                      WhatsApp 9840527931
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MessageCircle className="size-4 shrink-0 text-royal" aria-hidden />
                    <a
                      href={waLink(whatsappDesks.enquiryDesk, "Hi SSS Auto Spares — I have an enquiry.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-navy transition-colors hover:text-royal"
                    >
                      WhatsApp 7708066686
                    </a>
                  </li>
                </ul>
                <p className="mt-4 flex items-center gap-1.5 text-[12px] text-muted-text">
                  <ArrowUpRight className="size-3.5 text-royal" aria-hidden />
                  Tamil & English support available.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">Detailed Enquiry</p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy">Submit the Full Requirement</h2>
              <p className="mt-2 text-sm text-body-text">
                For SKU-based purchasing, used-parts sourcing, or legacy vehicle needs,
                use the detailed form below.
              </p>
              <PartEnquiryForm className="mt-5" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}