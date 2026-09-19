"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { paymentEnquirySchema, parseError } from "@/lib/validation";
import { normalizePhone } from "@/lib/utils";
import { waLink, whatsappDesks, paymentEnquiryMessage } from "@/lib/whatsapp";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { Send, ShieldCheck } from "lucide-react";

type Errors = Record<string, string>;

const enquiryTypes = [
  { value: "payment-method", labelKey: "payment-method" },
  { value: "transaction", labelKey: "transaction" },
  { value: "refund", labelKey: "refund" },
  { value: "invoice", labelKey: "invoice" },
  { value: "other", labelKey: "other" },
];

export function PaymentEnquiryForm({ className }: { className?: string }) {
  const pushToast = useUIStore((s) => s.pushToast);
  const t = useT();
  const pTypes = [
    t("forms.pTypes.0"),
    t("forms.pTypes.1"),
    t("forms.pTypes.2"),
    t("forms.pTypes.3"),
    t("forms.pTypes.4"),
  ];
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "payment-method",
    utr: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [reference, setReference] = useState("");

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const parsed = paymentEnquirySchema.safeParse({
      ...form,
      phone: normalizePhone(form.phone),
      email: form.email || undefined,
      utr: form.utr || undefined,
    });
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      setStatus("error");
      return;
    }
    setStatus("submitting");
    window.open(
      waLink(whatsappDesks.enquiryDesk, paymentEnquiryMessage(parsed.data)),
      "_blank",
      "noopener,noreferrer",
    );
    try {
      const res = await fetch("/api/enquiries?type=payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as { ok: boolean; reference?: string; error?: string };
      if (!res.ok || !json.ok) {
        setErrors({ _root: json.error ?? t("forms.waErr") });
        setStatus("error");
        return;
      }
      setReference(json.reference ?? "");
      setStatus("sent");
      pushToast({
        title: t("toasts.paymentSent"),
        description: t("toasts.paymentSentDesc").replace(
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
            <p className="text-base font-bold text-emerald-900">{t("forms.pfSentTitle")}</p>
            <p className="mt-1 text-emerald-700">
              {t("forms.refLabel")} <span className="font-mono font-bold">{reference || "SSS-REF"}</span>. {t("forms.pfSentDesc")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pf-name">{t("forms.name")}</Label>
                <Input id="pf-name" value={form.name} onChange={set("name")} placeholder={t("forms.namePh")} required aria-invalid={!!errors.name} autoComplete="name" />
                {errors.name ? <p className="text-xs font-medium text-red-600">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pf-phone">{t("forms.phone")}</Label>
                <Input id="pf-phone" type="tel" inputMode="numeric" maxLength={12} value={form.phone} onChange={set("phone")} placeholder={t("forms.phonePh")} required aria-invalid={!!errors.phone} autoComplete="tel" />
                {errors.phone ? <p className="text-xs font-medium text-red-600">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pf-type">{t("forms.pType")}</Label>
                <Select id="pf-type" value={form.enquiryType} onChange={set("enquiryType")}>
                  {enquiryTypes.map((opt) => (
                    <option key={opt.value} value={opt.value}>{pTypes[enquiryTypes.indexOf(opt)] ?? opt.value}</option>
                  ))}
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pf-utr">{t("forms.utr")}</Label>
                <Input id="pf-utr" value={form.utr} onChange={set("utr")} placeholder={t("forms.utrPh")} aria-invalid={!!errors.utr} />
                {errors.utr ? <p className="text-xs font-medium text-red-600">{errors.utr}</p> : null}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="pf-email">{t("forms.emailOpt")}</Label>
              <Input id="pf-email" type="email" value={form.email} onChange={set("email")} placeholder={t("forms.emailPh")} aria-invalid={!!errors.email} autoComplete="email" />
              {errors.email ? <p className="text-xs font-medium text-red-600">{errors.email}</p> : null}
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="pf-message">{t("forms.pDescribe")}</Label>
              <Textarea id="pf-message" rows={4} value={form.message} onChange={set("message")} placeholder={t("forms.pDescribePh")} required aria-invalid={!!errors.message} />
              {errors.message ? <p className="text-xs font-medium text-red-600">{errors.message}</p> : null}
            </div>

            {errors._root ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{errors._root}</p>
            ) : null}

            <Button type="submit" disabled={status === "submitting"} className="w-full bg-royal text-white hover:bg-royal/90 sm:max-w-xs">
              <Send className="size-4" aria-hidden />
              {status === "submitting" ? t("common.sending") : t("forms.pfSubmit")}
            </Button>
            <p className="flex items-center gap-1.5 text-[11.5px] text-muted-text">
              <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
              {t("forms.pfWaHint")}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}