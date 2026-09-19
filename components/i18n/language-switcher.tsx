"use client";

import { locales, useLocaleStore } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

export function LanguageSwitcher({
  className,
  align = "horizontal",
}: {
  className?: string;
  align?: "horizontal" | "vertical";
}) {
  const locale = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-line bg-white/70",
        align === "horizontal" ? "gap-0.5 p-0.5" : "flex-col gap-0.5 p-0.5",
        className,
      )}
      role="group"
      aria-label="Language/Language switch"
    >
      <Languages className="mr-0.5 hidden size-3.5 text-muted-text sm:block" aria-hidden />
      {locales.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code)}
            aria-pressed={active}
            title={l.label}
            className={cn(
              "rounded-md px-2 py-1 text-[11.5px] font-bold transition-colors",
              active ? "bg-royal text-white" : "text-navy hover:bg-softblue",
            )}
          >
            {l.native}
          </button>
        );
      })}
    </div>
  );
}