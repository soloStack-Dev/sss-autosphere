import type { Metadata } from "next";
import { LegalDoc } from "@/components/shared/legal-doc";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SSS Auto Spares Chennai collects, uses, and protects enquiry data.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      updated="To be confirmed (draft)"
      sections={[
        {
          heading: "1. Information We Collect",
          body: `SSS Auto Spares (${siteConfig.name}) collects only the details you choose to share through enquiry forms — name, phone number, email (optional), vehicle and part details, and payment reference information when needed to resolve a ticket.`,
        },
        {
          heading: "2. How We Use Your Information",
          body: "Contact details are used to respond to your part, payment, or feedback enquiry: availability checks, quotations, dispatch status, and transaction confirmation. We do not sell or rent your personal data.",
        },
        {
          heading: "3. Data Storage & Retention",
          body: "Enquiry records are stored for as long as needed to complete and service the enquiry, then retired. Payment references are retained for bookkeeping and invoice-matching purposes as required by applicable law.",
        },
        {
          heading: "4. Cookies",
          body: "This website uses only the platform cookies required for authentication and core functionality. We do not run third-party advertising remarketing on this site.",
        },
        {
          heading: "5. Your Rights",
          body: `You may request a copy of, correction to, or deletion of your data by contacting ${siteConfig.email}.`,
        },
        {
          heading: "6. Security Notice",
          body: "SSS Auto Spares will never ask for your UPI PIN, OTP, card CVV, or online banking password. Report any such request to the business immediately.",
        },
      ]}
    />
  );
}