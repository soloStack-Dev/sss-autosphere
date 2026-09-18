import { siteConfig } from "@/lib/site-config";
import { Smartphone, Clock, Mail } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-[hsl(226_50%_24%/0.6)] bg-footer-navy text-white">
      <div className="container-sss flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-[11.5px] font-medium tracking-wide sm:justify-between">
        <span className="inline-flex items-center gap-1.5">
          <Smartphone className="size-3.5 text-orange-300/90" aria-hidden />
          {siteConfig.topBar.left}
        </span>
        <div className="inline-flex items-center gap-x-6">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-orange-300/90" aria-hidden />
            {siteConfig.topBar.hours}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Mail className="size-3.5 text-orange-300/90" aria-hidden />
            {siteConfig.topBar.right}
          </span>
        </div>
      </div>
    </div>
  );
}