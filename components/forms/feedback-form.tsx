"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { feedbackSchema, parseError } from "@/lib/validation";
import { normalizePhone } from "@/lib/utils";
import { useUIStore } from "@/store/ui-store";
import { Send, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Errors = Record<string, string>;

const starLabels = ["Terrible", "Poor", "Okay", "Good", "Excellent"];

export function FeedbackForm({ className }: { className?: string }) {
  const pushToast = useUIStore((s) => s.pushToast);
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
      const res = await fetch("/api/enquiries?type=feedback", {
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
        title: "Thank you!",
        description: "Your feedback has been recorded. Chennai desk reads every review.",
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
            <p className="text-base font-bold text-emerald-900">Thank you for your feedback</p>
            <p className="mt-1 text-emerald-700">
              Reference <span className="font-mono font-bold">{reference || "SSS-REF"}</span>. We value your time in helping us improve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-1.5">
                <Label htmlFor="fb-name">Your Name</Label>
                <Input id="fb-name" value={form.name} onChange={set("name")} placeholder="Full name" required aria-invalid={!!errors.name} autoComplete="name" />
                {errors.name ? <p className="text-xs font-medium text-red-600">{errors.name}</p> : null}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="fb-phone">Mobile Number</Label>
                <Input id="fb-phone" type="tel" inputMode="numeric" maxLength={12} value={form.phone} onChange={set("phone")} placeholder="10-digit number" required aria-invalid={!!errors.phone} autoComplete="tel" />
                {errors.phone ? <p className="text-xs font-medium text-red-600">{errors.phone}</p> : null}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="fb-email">Email (optional)</Label>
              <Input id="fb-email" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" aria-invalid={!!errors.email} autoComplete="email" />
              {errors.email ? <p className="text-xs font-medium text-red-600">{errors.email}</p> : null}
            </div>

            <fieldset className="grid gap-2">
              <legend className="text-sm font-medium text-foreground">
                How was your experience?
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
                  {form.rating ? starLabels[form.rating - 1] : "Tap to rate"}
                </span>
              </div>
              {errors.rating ? <p className="text-xs font-medium text-red-600">{errors.rating}</p> : null}
            </fieldset>

            <div className="grid gap-1.5">
              <Label htmlFor="fb-message">Your Feedback</Label>
              <Textarea id="fb-message" rows={4} value={form.message} onChange={set("message")} placeholder="How was the part quality, pricing, delivery, or customer support?" required aria-invalid={!!errors.message} />
              {errors.message ? <p className="text-xs font-medium text-red-600">{errors.message}</p> : null}
            </div>

            {errors._root ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">{errors._root}</p>
            ) : null}

            <Button type="submit" disabled={status === "submitting"} className="w-full bg-royal text-white hover:bg-royal/90 sm:max-w-xs">
              <Send className="size-4" aria-hidden />
              {status === "submitting" ? "Sending…" : "Submit Feedback"}
            </Button>
            <p className="flex items-center gap-1.5 text-[11.5px] text-muted-text">
              <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
              Used strictly for service quality improvement.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}