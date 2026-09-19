"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "@/store/ui-store";
import { useT } from "@/lib/i18n";
import { emailMessageSchema, parseError } from "@/lib/validation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X, Mail, Loader2, Send, CheckCircle2 } from "lucide-react";

type Errors = Record<string, string>;

const initialForm = { name: "", phone: "", email: "", message: "" };

export function EmailDialog() {
  const open = useUIStore((s) => s.emailDialogOpen);
  const close = useUIStore((s) => s.closeEmailDialog);
  const pushToast = useUIStore((s) => s.pushToast);
  const t = useT();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setErrors({});
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const parsed = emailMessageSchema.safeParse(form);
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setErrors({ _root: json.error ?? t("emailDialog.sendErr") });
        setStatus("idle");
        return;
      }
      setStatus("done");
      pushToast({
        title: t("emailDialog.sentTitle"),
        description: t("emailDialog.sentDesc"),
        tone: "success",
      });
    } catch {
      setErrors({ _root: t("forms.netErr") });
      setStatus("idle");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={t("emailDialog.dialogAria")}
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-royal">
              <Mail className="size-4" aria-hidden />
              {t("emailDialog.eyebrow")}
            </p>
            <h2 className="mt-1 text-xl font-extrabold text-navy">{t("emailDialog.title")}</h2>
            <p className="mt-1 text-sm text-body-text">
              {t("emailDialog.desc")}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={t("emailDialog.closeAria")}
            className="rounded-lg border border-line p-2 text-navy transition-colors hover:bg-softblue"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        {status === "done" ? (
          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
            <CheckCircle2 className="mx-auto size-10 text-emerald-600" aria-hidden />
            <p className="mt-3 text-[15px] font-bold text-navy">{t("emailDialog.doneTitle")}</p>
            <p className="mt-1 text-[13px] text-body-text">
              {t("emailDialog.doneDesc").replace(
                "{name}",
                form.name.split(" ")[0] || t("emailDialog.doneFallback"),
              )}
            </p>
            <Button
              type="button"
              onClick={() => {
                setForm(initialForm);
                close();
              }}
              className="mt-4 bg-royal text-white hover:bg-royal/90"
            >
              {t("emailDialog.done")}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-5 grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="ed-name">{t("emailDialog.name")}</Label>
              <Input
                id="ed-name"
                value={form.name}
                onChange={set("name")}
                placeholder={t("emailDialog.namePh")}
                required
                aria-invalid={!!errors.name}
              />
              {errors.name ? (
                <p className="text-xs font-medium text-red-600">{errors.name}</p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="ed-phone">{t("emailDialog.phone")}</Label>
                <Input
                  id="ed-phone"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder={t("emailDialog.phonePh")}
                  inputMode="numeric"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone ? (
                  <p className="text-xs font-medium text-red-600">{errors.phone}</p>
                ) : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="ed-email">{t("emailDialog.email")}</Label>
                <Input
                  id="ed-email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder={t("emailDialog.emailPh")}
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
                {errors.email ? (
                  <p className="text-xs font-medium text-red-600">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="ed-message">{t("emailDialog.message")}</Label>
              <Textarea
                id="ed-message"
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder={t("emailDialog.messagePh")}
                required
                aria-invalid={!!errors.message}
              />
              {errors.message ? (
                <p className="text-xs font-medium text-red-600">{errors.message}</p>
              ) : null}
            </div>

            {errors._root ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
                {errors._root}
              </p>
            ) : null}

            <div className="flex justify-end gap-3 pt-1">
              <Button
                type="button"
                variant="outline"
                onClick={close}
                className="border-line text-navy"
              >
                {t("emailDialog.cancel")}
              </Button>
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="bg-royal text-white hover:bg-royal/90"
              >
                {status === "submitting" ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                ) : (
                  <Send className="size-4" aria-hidden />
                )}
                {status === "submitting" ? t("common.sending") : t("emailDialog.send")}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}