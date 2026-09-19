import type { Metadata } from "next";
import { EnquireContent } from "@/components/pages/enquire-content";

export const metadata: Metadata = {
  title: "Enquire About Parts | SSS Auto Spares Chennai",
  description:
    "Submit a part or vehicle enquiry to SSS Auto Spares Chennai — share vehicle, part, and contact details for a same-day fitment-matched quotation.",
};

export default function EnquirePage() {
  return <EnquireContent />;
}