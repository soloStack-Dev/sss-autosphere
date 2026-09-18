export type PaymentMethod = {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "upi",
    title: "UPI Transfer",
    badge: "Instant",
    description: "Make a payment using a verified UPI ID from any supported app.",
    icon: "qr",
  },
  {
    id: "gpay",
    title: "Google Pay",
    badge: "App Pay",
    description:
      "Use the confirmed Google Pay payment number or merchant identifier.",
    icon: "smartphone",
  },
  {
    id: "phonepe",
    title: "PhonePe",
    badge: "Direct",
    description:
      "Use the confirmed PhonePe payment details linked to authorized accounts.",
    icon: "smartphone",
  },
  {
    id: "paytm",
    title: "Paytm",
    badge: "Merchant",
    description:
      "Use the confirmed Paytm payment details for instant digital clearance.",
    icon: "credit-card",
  },
  {
    id: "bank",
    title: "Bank Transfer",
    badge: "RTGS / NEFT",
    description:
      "Use bank transfer details only if supported by the business (IMPS/NEFT).",
    icon: "bank",
  },
];

export const paymentWorkflow = [
  {
    number: "01",
    icon: "clipboard",
    title: "Confirm Your Requirement",
    description:
      "Discuss the product SKU, fitment, or service requirement with the SSS Auto Spares support team.",
  },
  {
    number: "02",
    icon: "file-check",
    title: "Verify Payment Details",
    description:
      "Confirm the official recipient name and payment details with the business before transferring funds.",
  },
  {
    number: "03",
    icon: "smartphone",
    title: "Complete Your Payment",
    description:
      "Use your preferred supported payment method (UPI, Bank Wire, or Merchant App).",
  },
  {
    number: "04",
    icon: "receipt",
    title: "Save Transaction Details",
    description:
      "Keep your UTR number, payment screenshot, or reference ID for immediate order tagging.",
  },
  {
    number: "05",
    icon: "send",
    title: "Contact the Business",
    description:
      "Share the transaction reference via WhatsApp or enquiry form for invoice and dispatch confirmation.",
  },
];

export const paymentSafetyItems = [
  {
    title: "Verify Recipient Details",
    description:
      "Match the registered business name before authorizing any UPI transfer.",
  },
  {
    title: "Confirm Payable Amount",
    description:
      "Ensure the exact proforma invoice amount is confirmed prior to entering remittance.",
  },
  {
    title: "Keep Credentials Secret",
    description:
      "Do not share your UPI PIN, OTP, or passwords with anyone claiming to be our agent.",
  },
  {
    title: "Avoid Unverified Details",
    description:
      "Do not make payments using unverified personal payment details or random QR codes.",
  },
];

export const paymentStatusOptions = [
  "Payment Pending",
  "Under Review",
  "Payment Confirmed",
  "Requires Action",
];

export function simulatePaymentStatus(utr: string): {
  status: string;
  message: string;
} {
  // Deterministic demo simulation — never implies real bank verification.
  const hash = [...utr].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const state = hash % 4;
  const options = paymentStatusOptions;
  const status = options[state];
  const messages:
    Record<string, string> = {
    "Payment Pending":
      "Your reference is logged but payment confirmation is awaited against the store ledger.",
    "Under Review":
      "Authorized staff are validating your reference against Chennai bank records.",
    "Payment Confirmed":
      "Payment matched. Your order has been tagged for invoice and dispatch confirmation.",
    "Requires Action":
      "We could not match the reference. Please re-check the UTR or contact the payment desk.",
  };
  return { status, message: messages[status] ?? "" };
}