import type { Metadata } from "next";
import { LegalDoc } from "@/components/shared/legal-doc";

export const metadata: Metadata = {
  title: "Warranty Policy",
  description: "Warranty terms for new, OEM-grade, and quality used parts at SSS Auto Spares Chennai.",
};

export default function WarrantyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="OEM Warranty Policy"
      updated="To be confirmed (draft)"
      sections={[
        {
          heading: "1. New & OEM-Grade Parts",
          body: "New and OEM-grade parts carry the manufacturer's standard warranty where applicable. Warranty claims require the original invoice and purchase reference.",
        },
        {
          heading: "2. Quality-Tested Used Parts",
          body: "Used and second-hand parts are individually bench-tested and graded. Any service guarantee offered is stated in writing on the quotation at the time of sale.",
        },
        {
          heading: "3. What Voided the Warranty",
          body: "Tampering, improper installation, electrical overloads caused by third-party modifications, accident damage, and normal wear consumables are not covered.",
        },
        {
          heading: "4. Claim Procedure",
          body: "Contact us with the invoice number, UTR/reference, and a clear description of the issue. We will arrange inspection at our Chennai hub before deciding repair, replacement, or refund.",
        },
      ]}
    />
  );
}