"use client";

import Link from "next/link";
import { useUIStore } from "@/store/ui-store";
import { Button } from "@/components/ui/button";
import { Share2, MessageCircleQuestion } from "lucide-react";

/** Floating actions fixed at the bottom-right corner. */
export function FloatingActions() {
  const openEnquiryDrawer = useUIStore((s) => s.openEnquiryDrawer);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        className="size-11 rounded-full border-line bg-white text-navy shadow-card"
        aria-label="Share website"
      >
        <Link
          href="/share"
          aria-label="Share website"
          className="flex size-full items-center justify-center rounded-full"
        >
          <Share2 className="size-5" />
        </Link>
      </Button>
      <Button
        onClick={openEnquiryDrawer}
        size="lg"
        className="h-12 rounded-full bg-royal px-5 text-white shadow-card-hover hover:bg-royal/90"
        aria-label="Open parts enquiry"
      >
        <MessageCircleQuestion className="size-5" aria-hidden />
        Parts Enquiry
      </Button>
    </div>
  );
}