"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/lib/site-config";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  X,
  Wrench,
  MessageCircleQuestion,
  ChevronDown,
} from "lucide-react";

const navLabelKeys: Record<string, string> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/products": "nav.products",
  "/payment": "nav.payment",
  "/gallery": "nav.gallery",
  "/feedback": "nav.feedback",
  "/enquire": "nav.enquire",
  "/share": "nav.share",
};

const inlineLinks = ["/", "/about", "/products"];
const moreLinks = ["/payment", "/gallery", "/feedback", "/enquire", "/share"];

function isActive(href: string, pathname: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { mobileMenuOpen, setMobileMenuOpen, openEnquiryDrawer } = useUIStore();
  const t = useT();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-sss flex h-[64px] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="SSS Auto Spares home"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-royal text-white shadow-md">
            <Wrench className="size-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-navy">
              SSS AUTO SPARES
            </span>
            <span className="block text-[9.5px] font-semibold uppercase tracking-[0.18em] text-muted-text">
              {t("brand.tagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks
            .filter((link) => inlineLinks.includes(link.href))
            .map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-[13.5px] font-semibold transition-colors",
                    active
                      ? "bg-royal text-white"
                      : "text-navy hover:bg-softblue hover:text-royal",
                  )}
                >
                  {t(navLabelKeys[link.href] ?? "nav.home")}
                </Link>
              );
            })}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-[13.5px] font-semibold transition-colors outline-none cursor-pointer",
                moreLinks.some((href) => isActive(href, pathname))
                  ? "bg-royal text-white"
                  : "text-navy hover:bg-softblue hover:text-royal",
              )}
            >
              {t("nav.more")}
              <ChevronDown className="size-4" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-52">
              {navLinks
                .filter((link) => moreLinks.includes(link.href))
                .map((link) => {
                  const active = isActive(link.href, pathname);
                  return (
                    <DropdownMenuItem
                      key={link.href}
                      onClick={() => router.push(link.href)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "cursor-pointer",
                        active ? "font-bold text-royal" : "text-navy",
                      )}
                    >
                      {t(navLabelKeys[link.href] ?? "nav.home")}
                    </DropdownMenuItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden md:inline-flex" />
          <Button
            onClick={openEnquiryDrawer}
            className="hidden items-center gap-1.5 bg-royal px-4 text-white hover:bg-royal/90 sm:inline-flex"
            aria-label={t("nav.openEnquiry")}
          >
            <MessageCircleQuestion className="size-4" aria-hidden />
            {t("nav.enquireNow")}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg border-line text-navy xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {mobileMenuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <nav
          className="border-t border-line bg-white px-4 pb-5 pt-2 xl:hidden"
          aria-label="Mobile"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold",
                    active
                      ? "bg-royal text-white"
                      : "text-navy hover:bg-softblue",
                  )}
                >
                  {t(navLabelKeys[link.href] ?? "nav.home")}
                </Link>
              );
            })}
          </div>
          <div className="mt-3">
            <LanguageSwitcher className="w-full justify-center" />
          </div>
          <Button
            onClick={openEnquiryDrawer}
            className="mt-3 w-full bg-royal text-white hover:bg-royal/90"
          >
            <MessageCircleQuestion className="size-4" aria-hidden />
            {t("nav.enquireNow")}
          </Button>
        </nav>
      ) : null}
    </header>
  );
}