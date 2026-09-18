"use client";

import { SearchX, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Empty({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-paleblue px-6 py-16 text-center">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-royal shadow-card">
        <SearchX className="size-7" aria-hidden />
      </span>
      <p className="mt-4 text-lg font-extrabold text-navy">No matching parts yet</p>
      <p className="mt-1 max-w-sm text-sm text-body-text">
        Try a broader search, or get in touch — our Chennai desk often sources
        this per your exact vehicle.
      </p>
      <Button onClick={onReset} variant="outline" className="mt-5 border-line text-navy">
        <RotateCcw className="size-4" aria-hidden />
        Clear Filters
      </Button>
    </div>
  );
}