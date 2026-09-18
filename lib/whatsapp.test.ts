import { describe, expect, it } from "vitest";
import {
  waLink,
  whatsappDesks,
  partEnquiryMessage,
  quickEnquiryMessage,
  paymentEnquiryMessage,
} from "@/lib/whatsapp";

describe("waLink", () => {
  it("strips non-digits and builds a valid wa.me url", () => {
    const url = waLink("91 9840527931", "Hello");
    expect(url).toBe(
      "https://wa.me/919840527931?text=" + encodeURIComponent("Hello"),
    );
  });
});

describe("whatsappDesks", () => {
  it("has 91 + 10 digit numbers", () => {
    for (const n of Object.values(whatsappDesks)) {
      expect(/^91[6-9]\d{9}$/.test(n)).toBe(true);
    }
  });
});

describe("message builders", () => {
  it("partEnquiryMessage includes every field", () => {
    const msg = partEnquiryMessage({
      name: "Arun",
      phone: "9840527931",
      email: "arun@example.com",
      vehicle: "Hyundai Creta SX",
      part: "Alternator 90A",
      sku: "ALT-1190",
      condition: "new",
      notes: "Urgent",
    });
    expect(msg).toContain("PART ENQUIRY");
    expect(msg).toContain("Name: Arun");
    expect(msg).toContain("Vehicle: Hyundai Creta SX");
    expect(msg).toContain("Part: Alternator 90A");
    expect(msg).toContain("SKU / Part No.: ALT-1190");
    expect(msg).toContain("Condition: New / OEM");
    expect(msg).toContain("Urgent");
  });

  it("quickEnquiryMessage includes the essentials", () => {
    const msg = quickEnquiryMessage({
      vehicle: "Maruti Swift 2020",
      part: "Front brake caliper",
      phone: "7708066686",
    });
    expect(msg).toContain("QUICK ENQUIRY");
    expect(msg).toContain("Vehicle: Maruti Swift 2020");
    expect(msg).toContain("Part / Service: Front brake caliper");
    expect(msg).toContain("Phone: 7708066686");
  });

  it("paymentEnquiryMessage maps the enquiry type label", () => {
    const msg = paymentEnquiryMessage({
      name: "Kavitha",
      phone: "9840527931",
      email: undefined,
      enquiryType: "refund",
      utr: "UTR13912",
      message: "Paid but not confirmed",
    });
    expect(msg).toContain("PAYMENT TICKET");
    expect(msg).toContain("Enquiry type: Refund / cancellation");
    expect(msg).toContain("UTR / Reference: UTR13912");
    expect(msg).toContain("Message: Paid but not confirmed");
  });
});