"use client";

import { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import {
  productCategories,
  brandOptions,
  vehicleTypeOptions,
  conditionOptions,
  type Product,
} from "@/lib/data/products";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { Empty } from "@/components/products/empty";
import { ProductCreateDialog } from "@/components/products/product-create-dialog";
import { Search, PackageSearch, SlidersHorizontal, Plus } from "lucide-react";

type Filters = {
  search: string;
  category: string;
  brand: string;
  vehicleType: string;
  condition: string;
};

type Props = {
  initialProducts: Product[];
  canRefresh: boolean;
};

export function CatalogExplorer({ initialProducts, canRefresh }: Props) {
  const openEnquiryDrawer = useUIStore((s) => s.openEnquiryDrawer);
  const t = useT();
  const queryClient = useQueryClient();
  const [createOpen, setCreateOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    search: "",
    category: "all",
    brand: "All Brands",
    vehicleType: "All Types",
    condition: "All Conditions",
  });

  const { data: liveProducts } = useQuery({
    queryKey: ["catalogue", "products"],
    queryFn: async () => {
      const res = await fetch("/api/catalogue");
      const json = (await res.json()) as { products?: Product[] };
      return json.products ?? initialProducts;
    },
    initialData: initialProducts,
    enabled: canRefresh,
  });

  const products = liveProducts ?? initialProducts;

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return products.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.condition !== "All Conditions" && p.condition !== filters.condition) {
        const haystack = `${p.condition} ${p.badge}`.toLowerCase();
        if (!haystack.includes(filters.condition.toLowerCase())) return false;
      }
      if (
        filters.brand !== "All Brands" &&
        !`${p.name} ${p.vehicleCompatibility} ${p.category}`.toLowerCase().includes(filters.brand.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.vehicleType !== "All Types" &&
        !`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(filters.vehicleType.toLowerCase())
      ) {
        return false;
      }
      if (q) {
        const haystack = `${p.name} ${p.sku} ${p.category} ${p.badge} ${p.description}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [products, filters]);

  const set = (key: keyof Filters) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFilters((f) => ({ ...f, [key]: e.target.value }));

  const reset = () =>
    setFilters({ search: "", category: "all", brand: "All Brands", vehicleType: "All Types", condition: "All Conditions" });

  const addProduct = (created: Product) => {
    queryClient.setQueryData<Product[]>(["catalogue", "products"], (old) => [
      created,
      ...(old ?? initialProducts),
    ]);
  };

  const catLabel = (id: string, fallback: string) => {
    const key = `cx.cats.${id}`;
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-muted-text">
          {t("cx.filterBy")}
        </p>
        <Button
          onClick={() => setCreateOpen(true)}
          className="inline-flex items-center gap-1.5 bg-royal px-4 text-white hover:bg-royal/90"
        >
          <Plus className="size-4" aria-hidden />
          {t("products.addNew")}
        </Button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {[{ id: "all", title: "All Categories", icon: "grid" }, ...productCategories].map((cat) => {
          const active = filters.category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilters((f) => ({ ...f, category: cat.id }))}
              aria-pressed={active}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[12.5px] font-bold transition-colors",
                active
                  ? "border-royal bg-royal text-white"
                  : "border-line bg-white text-navy hover:border-royal/40 hover:text-royal",
              )}
            >
              {cat.id === "all" ? t("products.resetAll") : catLabel(cat.id, cat.title)}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl border border-line bg-paleblue p-4 sm:grid-cols-2 lg:grid-cols-5">
        <label className="relative block lg:col-span-2">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-text" aria-hidden />
          <Input
            value={filters.search}
            onChange={set("search")}
            placeholder={t("cx.searchPh")}
            className="h-9 pl-9 bg-white"
            aria-label={t("cx.searchLabel")}
          />
        </label>
        <Select value={filters.brand} onChange={set("brand")} className="h-9 bg-white" aria-label={t("cx.brandLabel")}>
          {brandOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </Select>
        <Select value={filters.condition} onChange={set("condition")} className="h-9 bg-white" aria-label={t("cx.condLabel")}>
          {conditionOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>
        <Select value={filters.vehicleType} onChange={set("vehicleType")} className="h-9 bg-white" aria-label={t("cx.typeLabel")}>
          {vehicleTypeOptions.map((v) => (
            <option key={v} value={v}>{v}</option>
          ))}
        </Select>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-muted-text">
          <SlidersHorizontal className="size-4 text-royal" aria-hidden />
          {t("cx.showing")} <span className="font-extrabold text-navy">{filtered.length}</span> {t("cx.of")} {products.length} {t("cx.items")}
        </p>
        {filtered.length === 0 ? null : (
          <Button variant="outline" size="sm" onClick={reset} className="border-line text-navy">
            {t("cx.reset")}
          </Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <Empty onReset={reset} />
      ) : (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
              <div className="relative aspect-[16/10] overflow-hidden bg-softblue">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  unoptimized={
                    p.image.startsWith("data:") || p.image.startsWith("http")
                  }
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-royal px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
                  {p.condition}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[16px] font-extrabold leading-snug text-navy">{p.name}</h3>
                </div>
                <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wide text-muted-text">
                  SKU {p.sku}
                </p>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-body-text">{p.description}</p>
                <dl className="mt-4 space-y-1.5 border-t border-line pt-3 text-[12.5px]">
                  <div className="flex justify-between gap-2">
                    <dt className="font-semibold text-muted-text">{t("cx.fitment")}</dt>
                    <dd className="text-right font-semibold text-navy">{p.vehicleCompatibility}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="font-semibold text-muted-text">{t("cx.status")}</dt>
                    <dd className="font-semibold text-navy">{p.stockStatus}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="font-semibold text-muted-text">{t("cx.price")}</dt>
                    <dd className="font-semibold text-royal">{p.price}</dd>
                  </div>
                </dl>
                <Button
                  onClick={() =>
                    openEnquiryDrawer()
                  }
                  className="mt-4 w-full bg-royal text-white hover:bg-royal/90"
                  aria-label={t("cx.askAria").replace("{part}", p.name)}
                >
                  <PackageSearch className="size-4" aria-hidden />
                  {t("cx.ask")}
                </Button>
              </div>
            </article>
          ))}
        </div>
      )}

      <ProductCreateDialog
        open={createOpen}
        onOpenChange={setCreateOpen}
        onCreated={addProduct}
      />
    </div>
  );
}