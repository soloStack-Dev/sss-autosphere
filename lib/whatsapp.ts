import type {
  EnquiryInput,
  PartEnquiryInput,
  PaymentEnquiryInput,
} from "@/lib/validation";

/**
 * Business WhatsApp targets (country code 91 + 10-digit mobile).
 * Product part enquiries go to the parts desk; quick/payment enquiries use
 * the enquiry desk number.
 */
export const whatsappDesks = {
  partsDesk: "919840527931",
  enquiryDesk: "917708066686",
} as const;

const LINE = "------------------------------------";

export function waLink(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

const conditionLabels: Record<string, string> = {
  any: "Any / No Preference",
  new: "New / OEM",
  "second-hand": "Used / Tested",
};

const enquiryTypeLabels: Record<string, string> = {
  "payment-method": "Payment method help",
  transaction: "Transaction not received",
  refund: "Refund / cancellation",
  invoice: "Invoice & billing",
  other: "Other payment query",
};

/** Structured WhatsApp message for the product "Detailed Part Enquiry" form. */
export function partEnquiryMessage(data: PartEnquiryInput): string {
  return [
    "SSS AUTO SPARES - PART ENQUIRY",
    LINE,
    "Name: " + data.name,
    "Phone: " + data.phone,
    "Email: " + (data.email || "-"),
    "Vehicle: " + data.vehicle + (data.year ? " (" + data.year + ")" : ""),
    "Part: " + data.part,
    "SKU / Part No.: " + (data.sku || "-"),
    "Condition: " + (conditionLabels[data.condition] ?? data.condition),
    "Notes: " + (data.notes || "-"),
  ].join("\n");
}

/** Structured WhatsApp message for the "Just the essentials" quick form. */
export function quickEnquiryMessage(data: EnquiryInput): string {
  return [
    "SSS AUTO SPARES - QUICK ENQUIRY",
    LINE,
    "Vehicle: " + data.vehicle,
    "Part / Service: " + data.part,
    "Phone: " + data.phone,
  ].join("\n");
}

/** Structured WhatsApp message for the full payment enquiry form. */
export function paymentEnquiryMessage(data: PaymentEnquiryInput): string {
  return [
    "SSS AUTO SPARES - PAYMENT TICKET",
    LINE,
    "Name: " + data.name,
    "Phone: " + data.phone,
    "Email: " + (data.email || "-"),
    "Enquiry type: " + (enquiryTypeLabels[data.enquiryType] ?? data.enquiryType),
    "UTR / Reference: " + (data.utr || "-"),
    "Message: " + data.message,
  ].join("\n");
}