"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/site-config";
import { useUIStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Wrench,
  MessageCircleQuestion,
} from "lucide-react";

export function SiteNavbar() {
  const pathname = usePathname();
  const { mobileMenuOpen, setMobileMenuOpen, openEnquiryDrawer } = useUIStore();

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
              Chennai Automobile Parts
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
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
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={openEnquiryDrawer}
            className="hidden items-center gap-1.5 bg-royal px-4 text-white hover:bg-royal/90 sm:inline-flex"
            aria-label="Open quick enquiry form"
          >
            <MessageCircleQuestion className="size-4" aria-hidden />
            Enquire Now
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-lg border-line text-navy xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Button
            onClick={openEnquiryDrawer}
            className="mt-3 w-full bg-royal text-white hover:bg-royal/90"
          >
            <MessageCircleQuestion className="size-4" aria-hidden />
            Enquire Now
          </Button>
        </nav>
      ) : null}
    </header>
  );
}