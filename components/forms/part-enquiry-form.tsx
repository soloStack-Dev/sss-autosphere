"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { partEnquirySchema, parseError } from "@/lib/validation";
import { normalizePhone } from "@/lib/utils";
import { waLink, whatsappDesks, partEnquiryMessage } from "@/lib/whatsapp";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { Send, ShieldCheck } from "lucide-react";

type Errors = Record<string, string>;

export function PartEnquiryForm({ className }: { className?: string }) {
  const pushToast = useUIStore((s) => s.pushToast);
  const t = useT();
  const partConditions = [
    { value: "any", label: t("forms.condAny") },
    { value: "new", label: t("forms.condNew") },
    { value: "second-hand", label: t("forms.condUsed") },
  ];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    year: "",
    part: "",
    sku: "",
    condition: "any",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");
  const [reference, setReference] = useState("");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const parsed = partEnquirySchema.safeParse({
      ...form,
      phone: normalizePhone(form.phone),
      email: form.email || undefined,
      year: form.year || undefined,
      sku: form.sku || undefined,
      notes: form.notes || undefined,
    });
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      setStatus("error");
      return;
    }
    setStatus("submitting");
    window.open(
      waLink(whatsappDesks.partsDesk, partEnquiryMessage(parsed.data)),
      "_blank",
      "noopener,noreferrer",
    );
    try {
      const res = await fetch("/api/enquiries?type=part", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as {
        ok: boolean;
        reference?: string;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setErrors({ _root: json.error ?? t("forms.waErr") });
        setStatus("error");
        return;
      }
      setReference(json.reference ?? "");
      setStatus("sent");
      pushToast({
        title: t("toasts.partSent"),
        description: t("toasts.partSentDesc").replace(
          "{ref}",
          json.reference ?? "",
        ),
        tone: "success",
      });
    } catch {
      setErrors({ _root: t("forms.netErr") });
      setStatus("error");
    }
  }

  return (
    <div className={className}>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7">
        {status === "sent" ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm">
            <p className="text-base font-bold text-emerald-900">
            {t("forms.pSentTitle")}
            </p>
            <p className="mt-1 text-emerald-700">
              {t("forms.refLabel")} <span className="font-mono font-bold">{reference || "SSS-REF"}</span>.{" "}
            {t("forms.pSentDesc")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pe-name">{t("forms.name")}</Label>
                <Input id="pe-name" value={form.name} onChange={set("name")} placeholder={t("forms.namePh")} required aria-invalid={!!errors.name} />
                {errors.name ? <p className="text-xs font-medium text-red-600">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pe-phone">{t("forms.phone")}</Label>
                <Input id="pe-phone" type="tel" inputMode="numeric" maxLength={12} value={form.phone} onChange={set("phone")} placeholder={t("forms.phonePh")} required aria-invalid={!!errors.phone} />
                {errors.phone ? <p className="text-xs font-medium text-red-600">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pe-vehicle">{t("forms.vehicle")}</Label>
                <Input id="pe-vehicle" value={form.vehicle} onChange={set("vehicle")} placeholder={t("forms.vehiclePh")} required aria-invalid={!!errors.vehicle} />
                {errors.vehicle ? <p className="text-xs font-medium text-red-600">{errors.vehicle}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pe-year">{t("forms.year")}</Label>
                <Input id="pe-year" inputMode="numeric" maxLength={4} value={form.year} onChange={set("year")} placeholder={t("forms.yearPh")} aria-invalid={!!errors.year} />
                {errors.year ? <p className="text-xs font-medium text-red-600">{errors.year}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pe-part">{t("forms.partName")}</Label>
                <Input id="pe-part" value={form.part} onChange={set("part")} placeholder={t("forms.partNamePh")} required aria-invalid={!!errors.part} />
                {errors.part ? <p className="text-xs font-medium text-red-600">{errors.part}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pe-sku">{t("forms.sku")}</Label>
                <Input id="pe-sku" value={form.sku} onChange={set("sku")} placeholder={t("forms.skuPh")} aria-invalid={!!errors.sku} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pe-condition">{t("forms.condLabel")}</Label>
                <Select id="pe-condition" value={form.condition} onChange={set("condition")}>
                  {partConditions.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pe-email">{t("forms.emailOpt")}</Label>
                <Input id="pe-email" type="email" value={form.email} onChange={set("email")} placeholder={t("forms.emailPh")} aria-invalid={!!errors.email} />
                {errors.email ? <p className="text-xs font-medium text-red-600">{errors.email}</p> : null}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="pe-notes">{t("forms.notes")}</Label>
              <Textarea id="pe-notes" rows={4} value={form.notes} onChange={set("notes")} placeholder={t("forms.notesPh")} />
            </div>

            {errors._root ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{errors._root}</p>
            ) : null}

            <Button type="submit" disabled={status === "submitting"} className="w-full bg-royal text-white hover:bg-royal/90 sm:max-w-xs">
              <Send className="size-4" aria-hidden />
              {status === "submitting" ? t("common.sending") : t("forms.pSubmit")}
            </Button>
            <p className="flex items-center gap-1.5 text-[11.5px] text-muted-text">
              <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
              {t("forms.pWaHint")}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}