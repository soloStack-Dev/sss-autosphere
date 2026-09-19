import { useT } from "@/lib/i18n";
import { Car, HeartHandshake, Recycle } from "lucide-react";

const lineIcons = [Car, HeartHandshake, Recycle];

export function VehicleServicesBand() {
  const t = useT();
  const lines = [0, 1, 2].map((i) => t(`common.buyingLines.${i}`));
  return (
    <section className="border-b border-line bg-softblue/50">
      <div className="container-sss grid gap-4 py-8 sm:grid-cols-3">
        {lines.map((text, i) => {
          const Icon = lineIcons[i] ?? Car;
          return (
            <div
              key={text}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-4 shadow-card"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-royal text-white">
                <Icon className="size-5" aria-hidden />
              </span>
              <p className="text-[14px] font-bold leading-snug text-navy">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}