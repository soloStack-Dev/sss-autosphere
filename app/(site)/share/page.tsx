import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/page-banner";
import { SectionReveal } from "@/components/layout/section-reveal";
import { ShareWebsite } from "@/components/share/share-website";
import { siteConfig } from "@/lib/site-config";
import { QrCode, Users, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Share Website | SSS Auto Spares Chennai",
  description:
    "Share the SSS Auto Spares Chennai website with anyone who needs genuine car parts, quality used spares, or vehicle purchasing services.",
};

const benefits = [
  {
    icon: QrCode,
    title: "Instant Access to Catalog",
    description: "Parts, gallery, payment details, and enquiry forms all in one link.",
  },
  {
    icon: Users,
    title: "Help Your Network",
    description: "Garage owners, drivers, and parts-traders can reach a verified Chennai desk.",
  },
  {
    icon: Truck,
    title: "Backed by Verified Goods",
    description: "Every shared part link is backed by the same bench-tested quality promise.",
  },
];

export default function SharePage() {
  return (
    <>
      <PageBanner
        breadcrumb={[{ label: "Share", href: "/share" }]}
        eyebrow="Spread the Word"
        title="Send Parts, Pricing & Peace of Mind"
        description="Share the SSS Auto Spares page with anyone who needs trustworthy automotive spares in Chennai."
      />
      <section className="section-pad bg-white">
        <div className="container-sss grid gap-10 lg:grid-cols-2">
          <SectionReveal>
            <ShareWebsite />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <div className="grid gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="flex items-start gap-4 rounded-2xl border border-line bg-paleblue p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-royal shadow-card">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-[15px] font-extrabold text-navy">{b.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-body-text">{b.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-[12.5px] leading-relaxed text-amber-800">
              {siteConfig.name} — {siteConfig.address}. Verify official payment details on
              the Payment page before any transaction.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}