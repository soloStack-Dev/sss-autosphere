import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product Directory", href: "/products" },
  { label: "Parts Gallery", href: "/gallery" },
];

const supportLinks = [
  { label: "Part Quotation & Enquire", href: "/enquire" },
  { label: "Customer Feedback", href: "/feedback" },
  { label: "Payment Gateway & Billing", href: "/payment" },
  { label: "Share Website Profile", href: "/share" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[hsl(224_50%_16%/0.8)] bg-footer-navy text-blue-100/80">
      <div className="container-sss grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-base font-bold tracking-wide text-white">
            {siteConfig.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
            Chennai tactile auto spares hub — {siteConfig.tagline.toLowerCase()} —
            supplying genuine parts, quality used spares, and vehicle solutions.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-blue-50">
            <ShieldCheck className="size-3.5" aria-hidden />
            GST & TRADE ACCREDITED
          </span>
        </div>

        <nav aria-label="Footer quick links">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300/80">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-blue-100/75 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 text-royal" aria-hidden />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer support links">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300/80">
            Customer Support
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {supportLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-blue-100/75 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-3.5 text-royal" aria-hidden />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-orange-300/80">
            Contact & Location
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
              <Mail className="size-4 shrink-0 text-royal" aria-hidden />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0 text-royal" aria-hidden />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-sss flex flex-col items-center justify-between gap-2 py-4 text-xs text-blue-100/60 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
            Chennai, Tamil Nadu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden>•</span>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <span aria-hidden>•</span>
            <Link href="/warranty" className="hover:text-white">
              OEM Warranty Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}