"use client";

import { useState } from "react";
import { utrSchema } from "@/lib/validation";
import { simulatePaymentStatus } from "@/lib/data/payment";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchCheck, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function PaymentStatusChecker() {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ReturnType<typeof simulatePaymentStatus> | null>(null);

  const stage = result?.status.toLowerCase();
  const confirmed = stage?.includes("confirm");

  function check(e: React.FormEvent) {
    e.preventDefault();
    const parsed = utrSchema.safeParse(value);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid reference");
      setResult(null);
      return;
    }
    setError(null);
    setResult(simulatePaymentStatus(parsed.data));
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
      <div className="flex items-center gap-2">
        <SearchCheck className="size-5 text-royal" aria-hidden />
        <h3 className="text-lg font-extrabold text-navy">Demo Payment Reference Check</h3>
      </div>
      <p className="mt-1 text-[13px] text-body-text">
        Enter a transaction reference (UTR) to preview the status flow. This is a demo
        simulation shown by the design — always confirm status with the billing desk.
      </p>

      <form onSubmit={check} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. UTR139123456789"
          aria-label="Transaction reference"
          aria-invalid={!!error}
          className="h-10 flex-1 bg-paleblue sm:h-9"
        />
        <Button type="submit" className="h-10 bg-royal text-white hover:bg-royal/90 sm:h-9">
          Check Status
        </Button>
      </form>
      {error ? <p className="mt-2 text-xs font-semibold text-red-600">{error}</p> : null}

      {result ? (
        <div
          className={cn(
            "mt-4 rounded-xl border px-4 py-3",
            confirmed ? "border-emerald-200 bg-emerald-50" : "border-amber-200 bg-amber-50",
          )}
        >
          <p
            className={cn(
              "text-sm font-extrabold",
              confirmed ? "text-emerald-800" : "text-amber-800",
            )}
          >
            {result.status}
          </p>
          <p
            className={cn(
              "mt-1 text-[13px] leading-relaxed",
              confirmed ? "text-emerald-700" : "text-amber-700",
            )}
          >
            {result.message}
          </p>
        </div>
      ) : null}

      <p className="mt-4 flex items-start gap-1.5 text-[11.5px] leading-snug text-muted-text">
        <ShieldAlert className="mt-0.5 size-3.5 shrink-0 text-amber-600" aria-hidden />
        For real payment confirmation, contact the billing desk with your UTR. Matching with
        bank records happens only on the business side.
      </p>
    </div>
  );
}