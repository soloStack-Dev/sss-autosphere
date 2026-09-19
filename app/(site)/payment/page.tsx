import type { Metadata } from "next";
import { PaymentContent } from "@/components/pages/payment-content";

export const metadata: Metadata = {
  title: "Payment & Billing | SSS Auto Spares Chennai",
  description:
    "Authorized payment details for SSS Auto Spares Chennai — UPI, Google Pay, PhonePe, Paytm transfers. Verify details before remitting and raise a payment ticket if needed.",
};

export default function PaymentPage() {
  return <PaymentContent />;
}