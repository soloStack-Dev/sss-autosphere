"use client";

import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/data/products";
import { productSchema, parseError } from "@/lib/validation";
import { hasEnvVars } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useUIStore } from "@/store/ui-store";
import {
  X,
  PackagePlus,
  Loader2,
  ImageUp,
  GripHorizontal,
  Trash2,
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

const initialForm = {
  name: "",
  sku: "",
  category: "",
  badge: "Verified",
  condition: "New",
  image: "",
  vehicleCompatibility: "[Confirm Fitment]",
  price: "Contact for Price",
  stockStatus: "Enquire for Availability",
  description: "",
};

const MAX_DRAG_FACTOR = 0.4;

function dragBounds() {
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;
  const h = typeof window !== "undefined" ? window.innerHeight : 800;
  return { x: w * MAX_DRAG_FACTOR, y: h * 0.35 };
}

export function ProductCreateDialog({
  open,
  onOpenChange,
  onCreated,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreated: (product: Product) => void;
}) {
  const pushToast = useUIStore((s) => s.pushToast);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    baseX: number;
    baseY: number;
  } | null>(null);

  useEffect(() => {
    if (!open) return;
    setOffset({ x: 0, y: 0 });
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

  function pickImage(file: File) {
    if (!file.type.startsWith("image/")) {
      setErrors((e) => ({ ...e, image: "Choose an image file (JPG/PNG/WebP)." }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
      setImageFile(file);
      setErrors((e) => ({ ...e, image: "" }));
    };
    reader.readAsDataURL(file);
  }

  async function uploadImage(): Promise<string> {
    if (!imageFile) return form.image;
    const ext = (imageFile.name.split(".").pop() || "jpg")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const path = `${form.sku.replace(/[^A-Za-z0-9-]/g, "").toUpperCase()}-${crypto.randomUUID()}.${ext}`;
    const supabase = createClient();
    const { error } = await supabase.storage
      .from("product-images")
      .upload(path, imageFile, { upsert: true });
    if (error) {
      const message =
        (error as { message?: string }).message || "";
      const hint = message.toLowerCase().includes("not found")
        ? "The product-images storage bucket is missing — run the updated migration SQL in Supabase."
        : message.toLowerCase().includes("row level security")
          ? "Image upload is blocked by storage permissions — check the bucket policies in the migration."
          : "Image upload failed. The part will be saved without the photo.";
      pushToast({ title: "Image not uploaded", description: hint, tone: "info" });
      return form.image;
    }
    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    return data.publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const parsed = productSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      return;
    }
    setStatus("submitting");
    try {
      let image = form.image;
      if (imageFile && hasEnvVars) {
        setImageUploading(true);
        image = await uploadImage();
        setImageUploading(false);
      }
      const payload = { ...parsed.data, image };
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok: boolean;
        product?: Product;
        error?: string;
      };
      if (!res.ok || !json.ok || !json.product) {
        setErrors({ _root: json.error ?? "Could not save the part. Try again." });
        return;
      }
      onCreated(json.product);
      setForm(initialForm);
      setImageFile(null);
      setImagePreview(null);
      setStatus("idle");
      onOpenChange(false);
      pushToast({
        title: "Part added to catalogue",
        description: `${json.product.name} (${json.product.sku}) is now listed.`,
        tone: "success",
      });
    } catch {
      setErrors({ _root: "Network error. Please try again." });
      setStatus("idle");
    }
  }

  function onDragStart(e: React.PointerEvent) {
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: offset.x,
      baseY: offset.y,
    };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }

  function onDragMove(e: React.PointerEvent) {
    const drag = dragRef.current;
    if (!drag) return;
    const { x: maxX, y: maxY } = dragBounds();
    const x = clamp(drag.baseX + (e.clientX - drag.startX), -maxX, maxX);
    const y = clamp(drag.baseY + (e.clientY - drag.startY), -maxY, maxY);
    setOffset({ x, y });
  }

  function onDragEnd() {
    dragRef.current = null;
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Add a new part to the catalogue"
    >
<div
          ref={panelRef}
          className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
        <div
          className="flex cursor-grab select-none items-start justify-between gap-4 touch-none active:cursor-grabbing"
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
        >
          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-royal">
              <GripHorizontal className="size-4" aria-hidden />
              New Catalogue Entry
            </p>
            <h2 className="mt-1 text-xl font-extrabold text-navy">
              Add a New Part
            </h2>
            <p className="mt-1 text-sm text-body-text">
              Drag this header to move the panel — the page behind stays scrollable.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
            className="rounded-lg border border-line p-2 text-navy transition-colors hover:bg-softblue"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="newp-sku">SKU / Part Number</Label>
              <Input
                id="newp-sku"
                value={form.sku}
                onChange={set("sku")}
                placeholder="e.g. HLP-8920"
                required
                aria-invalid={!!errors.sku}
              />
              {errors.sku ? (
                <p className="text-xs font-medium text-red-600">{errors.sku}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="newp-name">Part Name</Label>
              <Input
                id="newp-name"
                value={form.name}
                onChange={set("name")}
                placeholder="e.g. Dual Projector Headlamp Assembly"
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
              <Label htmlFor="newp-category">Category</Label>
              <Input
                id="newp-category"
                list="newp-category-list"
                value={form.category}
                onChange={set("category")}
                placeholder="e.g. LIGHTING & ELECTRICAL"
                required
                aria-invalid={!!errors.category}
              />
              <datalist id="newp-category-list">
                {categorySuggestions.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
              {errors.category ? (
                <p className="text-xs font-medium text-red-600">{errors.category}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="newp-condition">Condition</Label>
              <Select
                id="newp-condition"
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
              <Label htmlFor="newp-fitment">Fitment</Label>
              <Input
                id="newp-fitment"
                value={form.vehicleCompatibility}
                onChange={set("vehicleCompatibility")}
                placeholder="e.g. [Confirm Fitment]"
                required
                aria-invalid={!!errors.vehicleCompatibility}
              />
              {errors.vehicleCompatibility ? (
                <p className="text-xs font-medium text-red-600">{errors.vehicleCompatibility}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="newp-price">Price</Label>
              <Input
                id="newp-price"
                value={form.price}
                onChange={set("price")}
                placeholder="e.g. Contact for Price"
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
              <Label htmlFor="newp-status">Status</Label>
              <Input
                id="newp-status"
                value={form.stockStatus}
                onChange={set("stockStatus")}
                placeholder="e.g. Enquire for Availability"
                required
                aria-invalid={!!errors.stockStatus}
              />
              {errors.stockStatus ? (
                <p className="text-xs font-medium text-red-600">{errors.stockStatus}</p>
              ) : null}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="newp-badge">Badge (optional)</Label>
              <Input
                id="newp-badge"
                value={form.badge}
                onChange={set("badge")}
                placeholder="e.g. New"
                aria-invalid={!!errors.badge}
              />
              {errors.badge ? (
                <p className="text-xs font-medium text-red-600">{errors.badge}</p>
              ) : null}
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label>Device Image</Label>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) pickImage(file);
              }}
            />
            <div className="flex items-center gap-3">
              {imagePreview ? (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-line bg-softblue">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imagePreview}
                    alt="Selected product preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : null}
              <Button
                type="button"
                variant="outline"
                onClick={() => fileRef.current?.click()}
                className="border-line text-navy"
              >
                <ImageUp className="size-4" aria-hidden />
                {imagePreview ? "Change Image" : "Access Device Image"}
              </Button>
              {imagePreview ? (
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(null);
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="border-line text-navy"
                  aria-label="Remove image"
                >
                  <Trash2 className="size-4" aria-hidden />
                </Button>
              ) : null}
              {imageUploading ? (
                <Loader2 className="size-4 animate-spin text-royal" aria-hidden />
              ) : null}
            </div>
            <p className="text-[11.5px] text-muted-text">
              {imageFile
                ? `Attached: ${imageFile.name}${
                    hasEnvVars
                      ? " — uploaded to the product-images bucket on save."
                      : " — preview only (dev mode, no storage configured)."
                  }`
                : "Picks a photo from your device / camera. Uploaded to Supabase Storage when saving."}
            </p>
            {errors.image ? (
              <p className="text-xs font-medium text-red-600">{errors.image}</p>
            ) : null}
          </div>

          <div className="grid gap-1.5">
            <Label htmlFor="newp-description">Description</Label>
            <Textarea
              id="newp-description"
              rows={4}
              value={form.description}
              onChange={set("description")}
              placeholder="e.g. Modern dual-projector headlight unit with integrated turn-signal element and authentic mounting brackets."
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
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="bg-royal text-white hover:bg-royal/90"
            >
              {status === "submitting" ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              ) : (
                <PackagePlus className="size-4" aria-hidden />
              )}
              {status === "submitting" ? "Saving…" : "Add New Part"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}