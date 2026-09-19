"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { EmailContact } from "@/components/shared/email-contact";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useT } from "@/lib/i18n";
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "/", key: "nav.home" },
  { label: "About Us", href: "/about", key: "nav.about" },
  { label: "Product Directory", href: "/products", key: "nav.products" },
  { label: "Parts Gallery", href: "/gallery", key: "nav.gallery" },
];

const supportLinks = [
  { label: "Part Quotation & Enquire", href: "/enquire", key: "nav.enquire" },
  { label: "Customer Feedback", href: "/feedback", key: "nav.feedback" },
  { label: "Payment Gateway & Billing", href: "/payment", key: "nav.payment" },
  { label: "Share Website Profile", href: "/share", key: "nav.share" },
];

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="border-t border-[hsl(224_50%_16%/0.8)] bg-footer-navy text-blue-100/80">
      <div className="container-sss grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-bold tracking-wide text-white">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
            {t("footer.blurb")}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-blue-50">
            <ShieldCheck className="size-3.5" aria-hidden />
            {t("brand.trust")}
          </span>
        </div>

        <nav aria-label="Footer quick links">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300/80">
            {t("footer.quickLinks")}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-blue-100/75 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 text-royal" aria-hidden />
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer support links">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300/80">
            {t("footer.support")}
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {supportLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-blue-100/75 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 text-royal" aria-hidden />
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300/80">
            {t("footer.contact")}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-royal" aria-hidden />
              {siteConfig.warehouseAddress}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-royal" aria-hidden />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-royal" aria-hidden />
              <a href={`tel:${siteConfig.phoneAlt}`} className="hover:text-white">
                {siteConfig.phoneAlt}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <EmailContact
                email={siteConfig.email}
                showIcon={false}
                className="text-sm text-blue-100/80 hover:text-white"
              />
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-royal" aria-hidden />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sss flex flex-col items-center justify-between gap-3 py-4 text-xs text-blue-100/60 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/privacy" className="hover:text-white">
              {t("footer.privacy")}
            </Link>
            <span aria-hidden>•</span>
            <Link href="/terms" className="hover:text-white">
              {t("footer.terms")}
            </Link>
            <span aria-hidden>•</span>
            <Link href="/warranty" className="hover:text-white">
              {t("footer.warranty")}
            </Link>
            <span className="mx-1 hidden sm:inline" aria-hidden>•</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}