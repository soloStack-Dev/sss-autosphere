"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { feedbackSchema, parseError } from "@/lib/validation";
import { normalizePhone } from "@/lib/utils";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import type { Feedback } from "@/lib/data/feedback";
import { Send, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Errors = Record<string, string>;

export function FeedbackForm({
  className,
  onSubmitted,
}: {
  className?: string;
  onSubmitted?: (entry: Feedback) => void;
}) {
  const pushToast = useUIStore((s) => s.pushToast);
  const t = useT();
  const starLabels = [
    t("forms.stars.0"),
    t("forms.stars.1"),
    t("forms.stars.2"),
    t("forms.stars.3"),
    t("forms.stars.4"),
  ];
  const [form, setForm] = useState({ name: "", phone: "", email: "", rating: 0, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [reference, setReference] = useState("");

  const set = (key: "name" | "phone" | "email" | "message") => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const parsed = feedbackSchema.safeParse({
      ...form,
      phone: normalizePhone(form.phone),
      email: form.email || undefined,
    });
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as {
        ok: boolean;
        reference?: string;
        feedback?: Feedback;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        setErrors({ _root: json.error ?? t("forms.waErr") });
        setStatus("error");
        return;
      }
      setReference(json.reference ?? "");
      setStatus("sent");
      if (json.feedback) onSubmitted?.(json.feedback);
      pushToast({
        title: t("toasts.thankYou"),
        description: t("toasts.feedbackReceived"),
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
            <p className="text-base font-bold text-emerald-900">{t("forms.fSentTitle")}</p>
            <p className="mt-1 text-emerald-700">
              {t("forms.refLabel")} <span className="font-mono font-bold">{reference || "SSS-REF"}</span>. {t("forms.fSentDesc")}
            </p>
            <p className="mt-2 font-semibold text-emerald-800">{t("forms.fLive")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="fb-name">{t("forms.name")}</Label>
                <Input id="fb-name" value={form.name} onChange={set("name")} placeholder={t("forms.namePh")} required aria-invalid={!!errors.name} autoComplete="name" />
                {errors.name ? <p className="text-xs font-medium text-red-600">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="fb-phone">{t("forms.phone")}</Label>
                <Input id="fb-phone" type="tel" inputMode="numeric" maxLength={12} value={form.phone} onChange={set("phone")} placeholder={t("forms.phonePh")} required aria-invalid={!!errors.phone} autoComplete="tel" />
                {errors.phone ? <p className="text-xs font-medium text-red-600">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="fb-email">{t("forms.emailOpt")}</Label>
              <Input id="fb-email" type="email" value={form.email} onChange={set("email")} placeholder={t("forms.emailPh")} aria-invalid={!!errors.email} autoComplete="email" />
              {errors.email ? <p className="text-xs font-medium text-red-600">{errors.email}</p> : null}
            </div>

            <fieldset className="grid gap-2">
              <legend className="text-sm font-medium text-foreground">
                {t("forms.exp")}
              </legend>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, rating: n }))}
                    aria-label={`${n} star${n > 1 ? "s" : ""} — ${starLabels[n - 1]}`}
                    aria-pressed={form.rating === n}
                    className="rounded-md p-1 transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Star
                      className={cn(
                        "size-7 transition-colors",
                        n <= form.rating ? "fill-warmorange text-warmorange" : "text-line",
                      )}
                      aria-hidden
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm font-semibold text-navy">
                  {form.rating ? starLabels[form.rating - 1] : t("forms.tapToRate")}
                </span>
              </div>
              {errors.rating ? <p className="text-xs font-medium text-red-600">{errors.rating}</p> : null}
            </fieldset>

            <div className="grid gap-1.5">
              <Label htmlFor="fb-message">{t("forms.fMsg")}</Label>
              <Textarea id="fb-message" rows={4} value={form.message} onChange={set("message")} placeholder={t("forms.fMsgPh")} required aria-invalid={!!errors.message} />
              {errors.message ? <p className="text-xs font-medium text-red-600">{errors.message}</p> : null}
            </div>

            {errors._root ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{errors._root}</p>
            ) : null}

            <Button type="submit" disabled={status === "submitting"} className="w-full bg-royal text-white hover:bg-royal/90 sm:max-w-xs">
              <Send className="size-4" aria-hidden />
              {status === "submitting" ? t("common.sending") : t("forms.fSubmit")}
            </Button>
            <p className="flex items-center gap-1.5 text-[11.5px] text-muted-text">
              <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
              {t("forms.fHint")}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}