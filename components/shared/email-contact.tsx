"use client";

import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/ui-store";
import { Mail } from "lucide-react";

/** Clickable email label — opens the "email the shop" popup instead of mailto. */
export function EmailContact({
  email,
  className,
  showIcon = true,
}: {
  email: string;
  className?: string;
  showIcon?: boolean;
}) {
  const openEmailDialog = useUIStore((s) => s.openEmailDialog);
  return (
    <button
      type="button"
      onClick={openEmailDialog}
      className={cn("inline-flex items-center gap-1.5 text-left font-semibold break-all transition-colors hover:underline", className)}
      aria-label={`Send an email to ${email}`}
    >
      {showIcon ? <Mail className="size-4 shrink-0 text-royal" aria-hidden /> : null}
      <span>{email}</span>
    </button>
  );
}