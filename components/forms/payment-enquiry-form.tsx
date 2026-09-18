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
import { Send, ShieldCheck } from "lucide-react";

type Errors = Record<string, string>;

const enquiryTypes = [
  { value: "payment-method", label: "Payment method help" },
  { value: "transaction", label: "Transaction not received" },
  { value: "refund", label: "Refund / cancellation" },
  { value: "invoice", label: "Invoice & billing" },
  { value: "other", label: "Other payment query" },
];

export function PaymentEnquiryForm({ className }: { className?: string }) {
  const pushToast = useUIStore((s) => s.pushToast);
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
        setErrors({ _root: json.error ?? "Something went wrong. Try again." });
        setStatus("error");
        return;
      }
      setReference(json.reference ?? "");
      setStatus("sent");
      pushToast({
        title: "Payment ticket sent to WhatsApp",
        description: `Reference ${json.reference ?? ""} — the billing desk will resolve your query.`,
        tone: "success",
      });
    } catch {
      setErrors({ _root: "Network error. Please try again." });
      setStatus("error");
    }
  }

  return (
    <div className={className}>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-7">
        {status === "sent" ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm">
            <p className="text-base font-bold text-emerald-900">Payment ticket sent to WhatsApp</p>
            <p className="mt-1 text-emerald-700">
              Reference <span className="font-mono font-bold">{reference || "SSS-REF"}</span>. Our billing desk will verify and respond.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pf-name">Your Name</Label>
                <Input id="pf-name" value={form.name} onChange={set("name")} placeholder="Full name" required aria-invalid={!!errors.name} autoComplete="name" />
                {errors.name ? <p className="text-xs font-medium text-red-600">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pf-phone">Mobile Number</Label>
                <Input id="pf-phone" type="tel" inputMode="numeric" maxLength={12} value={form.phone} onChange={set("phone")} placeholder="10-digit number" required aria-invalid={!!errors.phone} autoComplete="tel" />
                {errors.phone ? <p className="text-xs font-medium text-red-600">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="pf-type">Enquiry Type</Label>
                <Select id="pf-type" value={form.enquiryType} onChange={set("enquiryType")}>
                  {enquiryTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </Select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="pf-utr">UTR / Reference (optional)</Label>
                <Input id="pf-utr" value={form.utr} onChange={set("utr")} placeholder="e.g. UTR139123456789" aria-invalid={!!errors.utr} />
                {errors.utr ? <p className="text-xs font-medium text-red-600">{errors.utr}</p> : null}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="pf-email">Email (optional)</Label>
              <Input id="pf-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" aria-invalid={!!errors.email} autoComplete="email" />
              {errors.email ? <p className="text-xs font-medium text-red-600">{errors.email}</p> : null}
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="pf-message">Describe Your Query</Label>
              <Textarea id="pf-message" rows={4} value={form.message} onChange={set("message")} placeholder="Paid on [date] via [method], amount ₹…, transaction screenshot attached…" required aria-invalid={!!errors.message} />
              {errors.message ? <p className="text-xs font-medium text-red-600">{errors.message}</p> : null}
            </div>

            {errors._root ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{errors._root}</p>
            ) : null}

            <Button type="submit" disabled={status === "submitting"} className="w-full bg-royal text-white hover:bg-royal/90 sm:max-w-xs">
              <Send className="size-4" aria-hidden />
              {status === "submitting" ? "Sending…" : "Raise Payment Ticket"}
            </Button>
            <p className="flex items-center gap-1.5 text-[11.5px] text-muted-text">
              <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
              Opens WhatsApp with a structured message. Never share PINs, OTPs, or passwords.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}