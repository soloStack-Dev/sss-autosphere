import type { Metadata } from "next";
import { LegalDoc } from "@/components/shared/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the SSS Auto Spares Chennai website.",
};

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms of Service"
      updated="To be confirmed (draft)"
      sections={[
        {
          heading: "1. Website Use",
          body: "This website presents part listings, gallery images, and enquiry channels for SSS Auto Spares. Listing details are indicative; final fitment and price are confirmed by our desk for your specific vehicle.",
        },
        {
          heading: "2. Pricing & Availability",
          body: "Prices shown as 'Contact for Price' and stock statuses are not guarantees. Confirm availability, condition grading, fitment, and the final payable amount with the business before payment.",
        },
        {
          heading: "3. Payments",
          body: "Payments are accepted only through the official channels published on the Payment page. Always verify the payee name and amount, and retain your UTR number. SSS Auto Spares is not responsible for payments sent to unverified details.",
        },
        {
          heading: "4. Used Parts Warranty Policy",
          body: "Used and second-hand parts are bench-tested and graded before sale. Warranty terms, when offered, are communicated individually at the time of quotation. See the Warranty Policy page.",
        },
        {
          heading: "5. Limitation of Liability",
          body: "SSS Auto Spares makes reasonable efforts to match parts to vehicles but does not accept liability for misuse, improper fitment, or installation errors by third parties.",
        },
      ]}
    />
  );
}