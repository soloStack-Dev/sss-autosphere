"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, type GalleryItem } from "@/lib/data/gallery";
import { cn } from "@/lib/utils";
import { Camera, Grid2X2, Image as ImageIcon, FolderOpen, Backpack, Building, Wrench, Users } from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  all: Grid2X2,
  Products: ImageIcon,
  "Spare Parts": Backpack,
  "Shop & Showroom": Building,
  Workshop: Wrench,
  "Customer Services": Users,
};

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? items : items.filter((g) => g.category === active)),
    [items, active],
  );

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((cat) => {
          const Icon = categoryIcons[cat.key] ?? ImageIcon;
          const selected = active === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(cat.key)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12.5px] font-bold transition-colors",
                selected
                  ? "border-royal bg-royal text-white"
                  : "border-line bg-white text-navy hover:border-royal/40 hover:text-royal",
              )}
            >
              {Icon ? <Icon className="size-4" aria-hidden /> : null}
              {cat.label}
              <span
                className={cn(
                  "rounded-full px-1.5 text-[10.5px]",
                  selected ? "bg-white/20" : "bg-softblue text-royal",
                )}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel">
        {visible.map((item) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-softblue">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md bg-navy/85 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white backdrop-blur">
                <Camera className="size-3.5 text-orange-300" aria-hidden />
                {item.category}
              </span>
            </div>
            <figcaption className="p-5">
              <h3 className="text-[16px] font-extrabold text-navy">{item.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-body-text">{item.description}</p>
              <p className="mt-3 border-t border-line pt-3 text-[11.5px] font-bold uppercase tracking-wide text-muted-text">
                <FolderOpen className="mr-1 inline size-3.5 text-royal" aria-hidden />
                {item.metadata}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-2xl border border-dashed border-line bg-paleblue px-6 py-12 text-center text-sm text-body-text">
          No images under this category — ask about facility photos on WhatsApp.
        </p>
      ) : null}
    </div>
  );
}