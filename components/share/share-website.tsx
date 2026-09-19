"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";

export function ShareWebsite() {
  const pushToast = useUIStore((s) => s.pushToast);
  const t = useT();
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    const url = window.location.origin;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      pushToast({ title: t("share.copyToast"), description: url, tone: "success" });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      pushToast({ title: t("share.copyErr"), tone: "error" });
    }
  }

  async function shareNative() {
    const url = window.location.origin;
    if (navigator.share) {
      try {
        await navigator.share({
          title: t("share.nativeTitle"),
          text: t("share.nativeText"),
          url,
        });
      } catch {
        // user dismissed share sheet
      }
      return;
    }
    await copyLink();
  }

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(
    t("share.waText").replace(
      "{url}",
      typeof window !== "undefined" ? window.location.origin : "",
    ),
  )}`;

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-center gap-2">
        <Share2 className="size-5 text-royal" aria-hidden />
        <h2 className="text-xl font-extrabold text-navy">{t("share.siteTitle")}</h2>
      </div>
      <p className="mt-2 text-sm text-body-text">
        {t("share.intro")}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Button
          onClick={shareNative}
          className="h-12 w-full bg-royal text-white hover:bg-royal/90"
        >
          <Share2 className="size-4" aria-hidden />
          {t("share.shareBtn")}
        </Button>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 text-sm font-medium text-emerald-800 transition-all hover:bg-emerald-100"
        >
          <MessageCircle className="size-4" aria-hidden />
          {t("share.waBtn")}
        </a>
        <Button
          onClick={copyLink}
          variant="outline"
          className="h-12 w-full border-line text-navy"
        >
          {copied ? <Check className="size-4 text-emerald-600" aria-hidden /> : <Copy className="size-4" aria-hidden />}
          {copied ? t("share.copied") : t("share.copyBtn")}
        </Button>
      </div>
    </div>
  );
}