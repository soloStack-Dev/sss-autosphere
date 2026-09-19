"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { QuickEnquiryForm } from "@/components/forms/quick-enquiry-form";
import { X, ArrowUpRight } from "lucide-react";

/** Slide-over quick enquiry used by "Enquire Now" buttons. */
export function EnquiryDrawer() {
  const { enquiryDrawerOpen, closeEnquiryDrawer } = useUIStore();
  const t = useT();

  useEffect(() => {
    if (!enquiryDrawerOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEnquiryDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [enquiryDrawerOpen, closeEnquiryDrawer]);

  return (
    <div aria-hidden={!enquiryDrawerOpen} className={enquiryDrawerOpen ? "" : "pointer-events-none"}>
      <div
        className={`fixed inset-0 z-50 bg-navy/50 backdrop-blur-sm transition-opacity duration-300 ${
          enquiryDrawerOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeEnquiryDrawer}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("enquire.drawer.dialogAria")}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          enquiryDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line bg-navy px-5 py-4 text-white">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">
              {t("enquire.drawer.eyebrow")}
            </p>
            <p className="text-[15px] font-semibold">{t("enquire.drawer.title")}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeEnquiryDrawer}
            aria-label={t("enquire.drawer.closeAria")}
            className="text-white hover:bg-white/10"
          >
            <X className="size-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-5">
          <QuickEnquiryForm onSubmitted={closeEnquiryDrawer} />
        </div>
        <div className="border-t border-line px-5 py-3 text-center text-xs text-muted-text">
          {t("enquire.drawer.prefMore")}{" "}
          <Link
            href="/enquire"
            onClick={closeEnquiryDrawer}
            className="inline-flex items-center gap-1 font-semibold text-royal hover:underline"
          >
            {t("enquire.drawer.openFull")} <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </aside>
    </div>
  );
}