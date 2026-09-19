"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/lib/i18n";

export function Breadcrumb({
  items,
  tone = "light",
}: {
  items: Array<{ label: string; href?: string }>;
  tone?: "light" | "dark";
}) {
  const t = useT();
  const list = [{ label: t("nav.home"), href: "/" }, ...items];
  const last = list.length - 1;
  return (
    <nav aria-label={t("common.breadcrumb")}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
        {list.map((item, i) => {
          const current = i === last;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i === 0 ? (
                <Home
                  className={cn("size-3.5", tone === "light" ? "text-orange-300" : "text-royal")}
                  aria-hidden
                />
              ) : (
                <ChevronRight
                  className={cn("size-3.5", tone === "light" ? "text-blue-100/40" : "text-muted-text/60")}
                  aria-hidden
                />
              )}
              {current || !item.href ? (
                <span
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    current && tone === "light" ? "text-blue-100/90" : "text-blue-100/55",
                    current && tone === "dark" ? "text-navy" : "text-muted-text",
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    tone === "light"
                      ? "text-blue-100/70 hover:text-white"
                      : "text-muted-text hover:text-royal",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}