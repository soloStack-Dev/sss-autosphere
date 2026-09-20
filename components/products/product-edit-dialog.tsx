"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/data/products";
import { productSchema, parseError } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import {
  X,
  PackageCheck,
  Loader2,
  GripHorizontal,
} from "lucide-react";

type Errors = Record<string, string>;

const categorySuggestions = [
  "Car Spare Parts",
  "Car Body Parts",
  "Used Spare Parts",
  "Replacement Parts",
  "Old Vehicle Parts",
  "Other Automotive Requirements",
  "LIGHTING & ELECTRICAL",
  "CAR SPARE PARTS (BRAKING)",
];

const conditionOptions = [
  "New",
  "New / OEM Grade",
  "New / Tested",
  "Used / Tested",
  "Reconditioned",
];

export function ProductEditDialog({
  open,
  onOpenChange,
  product,
  onUpdated,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
  onUpdated: (product: Product) => void;
}) {
  const pushToast = useUIStore((s) => s.pushToast);
  const t = useT();
  const [form, setForm] = useState<Omit<Product, "id">>({
    sku: "",
    name: "",
    category: "",
    badge: "Verified",
    condition: "New",
    image: "",
    vehicleCompatibility: "[Confirm Fitment]",
    price: "Contact for Price",
    stockStatus: "Enquire for Availability",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  useEffect(() => {
    if (!open || !product) return;
    setForm({
      sku: product.sku,
      name: product.name,
      category: product.category,
      badge: product.badge,
      condition: product.condition,
      image: product.image,
      vehicleCompatibility: product.vehicleCompatibility,
      price: product.price,
      stockStatus: product.stockStatus,
      description: product.description,
    });
    setErrors({});
    setStatus("idle");
  }, [open, product]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!product) return;
    setErrors({});
    const parsed = productSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      return;
    }
    setStatus("submitting");
    try {
      const payload = { id: product.id, ...parsed.data };
      const res = await fetch("/api/products", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok: boolean;
        product?: Product;
        error?: string;
      };
      if (!res.ok || !json.ok || !json.product) {
        setErrors({ _root: json.error ?? t("ped.saveFail") });
        return;
      }
      onUpdated(json.product);
      setStatus("idle");
      onOpenChange(false);
      pushToast({
        title: t("ped.savedTitle"),
        description: t("ped.savedDesc")
          .replace("{name}", json.product.name)
          .replace("{sku}", json.product.sku),
        tone: "success",
      });
    } catch {
      setErrors({ _root: t("forms.netErr") });
      setStatus("idle");
    }
  }

  if (!open || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
      role="dialog"
      aria-modal="true"
      aria-label={t("ped.dialogAria")}
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-royal">
              <GripHorizontal className="size-4" aria-hidden />
              {t("ped.eyebrow")}
            </p>
            <h2 className="mt-1 text-xl font-extrabold text-navy">
              {t("ped.title")}
            </h2>
            <p className="mt-1 text-sm text-body-text">{product.name}</p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label={t("ped.closeAria")}
            className="rounded-lg border border-line p-2 text-navy transition-colors hover:bg-softblue"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="editp-sku">{t("pcd.sku")}</Label>
              <Input
                id="editp-sku"
                value={form.sku}
                onChange={set("sku")}
                placeholder={t("pcd.skuPh")}
                required
                aria-invalid={!!errors.sku}
              />
              {errors.sku ? (
                <p className="text-xs font-medium text-red-600">{errors.sku}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="editp-name">{t("pcd.partName")}</Label>
              <Input
                id="editp-name"
                value={form.name}
                onChange={set("name")}
                placeholder={t("pcd.partNamePh")}
                required
                aria-invalid={!!errors.name}
              />
              {errors.name ? (
                <p className="text-xs font-medium text-red-600">{errors.name}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="editp-category">{t("pcd.category")}</Label>
              <Input
                id="editp-category"
                list="editp-category-list"
                value={form.category}
                onChange={set("category")}
                placeholder={t("pcd.categoryPh")}
                required
                aria-invalid={!!errors.category}
              />
              <datalist id="editp-category-list">
                {categorySuggestions.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
              {errors.category ? (
                <p className="text-xs font-medium text-red-600">{errors.category}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="editp-condition">{t("pcd.condition")}</Label>
              <Select
                id="editp-condition"
                value={form.condition}
                onChange={set("condition")}
              >
                {conditionOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </Select>
              {errors.condition ? (
                <p className="text-xs font-medium text-red-600">{errors.condition}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="editp-fitment">{t("pcd.fitment")}</Label>
              <Input
                id="editp-fitment"
                value={form.vehicleCompatibility}
                onChange={set("vehicleCompatibility")}
                placeholder={t("pcd.fitmentPh")}
                required
                aria-invalid={!!errors.vehicleCompatibility}
              />
              {errors.vehicleCompatibility ? (
                <p className="text-xs font-medium text-red-600">{errors.vehicleCompatibility}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="editp-price">{t("pcd.price")}</Label>
              <Input
                id="editp-price"
                value={form.price}
                onChange={set("price")}
                placeholder={t("pcd.pricePh")}
                required
                aria-invalid={!!errors.price}
              />
              {errors.price ? (
                <p className="text-xs font-medium text-red-600">{errors.price}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="editp-status">{t("pcd.status")}</Label>
              <Input
                id="editp-status"
                value={form.stockStatus}
                onChange={set("stockStatus")}
                placeholder={t("pcd.statusPh")}
                required
                aria-invalid={!!errors.stockStatus}
              />
              {errors.stockStatus ? (
                <p className="text-xs font-medium text-red-600">{errors.stockStatus}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="editp-badge">{t("pcd.badge")}</Label>
              <Input
                id="editp-badge"
                value={form.badge}
                onChange={set("badge")}
                placeholder={t("pcd.badgePh")}
                aria-invalid={!!errors.badge}
              />
              {errors.badge ? (
                <p className="text-xs font-medium text-red-600">{errors.badge}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="editp-description">{t("pcd.description")}</Label>
            <Textarea
              id="editp-description"
              rows={4}
              value={form.description}
              onChange={set("description")}
              placeholder={t("pcd.descriptionPh")}
              required
              aria-invalid={!!errors.description}
            />
            {errors.description ? (
              <p className="text-xs font-medium text-red-600">{errors.description}</p>
            ) : null}
          </div>

          {errors._root ? (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
              {errors._root}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-line text-navy"
            >
              {t("pcd.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="bg-royal text-white hover:bg-royal/90"
            >
              {status === "submitting" ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : (
                <PackageCheck className="size-4" aria-hidden />
              )}
              {status === "submitting" ? t("ped.saving") : t("ped.save")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}