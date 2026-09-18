"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, parseError } from "@/lib/validation";
import { useUIStore } from "@/store/ui-store";
import { normalizePhone } from "@/lib/utils";
import { waLink, whatsappDesks, quickEnquiryMessage } from "@/lib/whatsapp";
import { Send, ShieldCheck } from "lucide-react";

type Errors = Record<string, string>;

export function QuickEnquiryForm({
  onSubmitted,
  className,
}: {
  onSubmitted?: () => void;
  className?: string;
}) {
  const pushToast = useUIStore((s) => s.pushToast);
  const [vehicle, setVehicle] = useState("");
  const [part, setPart] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle",
  );
  const [reference, setReference] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const payload = { vehicle, part, phone: normalizePhone(phone) };
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(parseError(parsed.error));
      setStatus("error");
      return;
    }
    setStatus("submitting");
    window.open(
      waLink(whatsappDesks.enquiryDesk, quickEnquiryMessage(parsed.data)),
      "_blank",
      "noopener,noreferrer",
    );
    try {
      const res = await fetch("/api/enquiries", {
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
        setErrors({ _root: json.error ?? "Something went wrong. Try again." });
        setStatus("error");
        return;
      }
      setReference(json.reference ?? "");
      setStatus("sent");
      pushToast({
        title: "Enquiry sent to WhatsApp",
        description: `Reference ${json.reference ?? ""} — our Chennai desk will follow up.`,
        tone: "success",
      });
      onSubmitted?.();
    } catch {
      setErrors({ _root: "Network error. Please try again." });
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={className}>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm">
          <p className="font-semibold text-emerald-800">Enquiry sent to WhatsApp</p>
          <p className="mt-1 text-emerald-700">
            Reference <span className="font-mono font-bold">{reference || "SSS-REF"}</span>.
            Our desk got your details — we usually respond during business hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      <div className="grid gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="qe-vehicle">Vehicle Make &amp; Model</Label>
          <Input
            id="qe-vehicle"
            name="vehicle"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            placeholder="e.g. Maruti Swift VXi 2020"
            required
            aria-invalid={!!errors.vehicle}
          />
          {errors.vehicle ? (
            <p className="text-xs font-medium text-red-600">{errors.vehicle}</p>
          ) : null}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="qe-part">Required Part / Service</Label>
          <Textarea
            id="qe-part"
            name="part"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            placeholder="e.g. Front left brake caliper (OEM / best price)"
            rows={3}
            required
            aria-invalid={!!errors.part}
          />
          {errors.part ? (
            <p className="text-xs font-medium text-red-600">{errors.part}</p>
          ) : null}
        </div>

        <div className="grid gap-1.5">
          <Label htmlFor="qe-phone">WhatsApp / Mobile Number</Label>
          <Input
            id="qe-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={12}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile number"
            required
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? (
            <p className="text-xs font-medium text-red-600">{errors.phone}</p>
          ) : null}
        </div>

        {errors._root ? (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
            {errors._root}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="mt-1 w-full bg-royal text-white hover:bg-royal/90"
        >
          <Send className="size-4" aria-hidden />
          {status === "submitting" ? "Sending…" : "Submit Enquiry"}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-center text-[11.5px] text-muted-text">
          <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
          Opens WhatsApp with your details pre-filled — no spam.
        </p>
      </div>
    </form>
  );
}