"use client";

import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, Info, AlertCircle, X } from "lucide-react";

export function Toaster() {
  const { toasts, dismissToast } = useUIStore();

  return (
    <div className="pointer-events-none fixed bottom-20 right-4 z-[60] flex w-[min(92vw,360px)] flex-col gap-2 md:bottom-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          role="status"
          className={cn(
            "pointer-events-auto flex items-start gap-2.5 rounded-xl border bg-white p-3.5 shadow-card",
            toast.tone === "success" && "border-emerald-200",
            toast.tone === "error" && "border-red-200",
            toast.tone === "info" && "border-softblue",
          )}
        >
          {toast.tone === "success" && (
            <CheckCircle2 className="size-5 shrink-0 text-emerald-600" aria-hidden />
          )}
          {toast.tone === "error" && (
            <AlertCircle className="size-5 shrink-0 text-red-600" aria-hidden />
          )}
          {toast.tone === "info" && (
            <Info className="size-5 shrink-0 text-royal" aria-hidden />
          )}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-navy">{toast.title}</p>
            {toast.description ? (
              <p className="mt-0.5 text-[13px] leading-snug text-muted-text">
                {toast.description}
              </p>
            ) : null}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-6 text-muted-text"
            onClick={() => dismissToast(toast.id)}
            aria-label="Dismiss notification"
          >
            <X className="size-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}