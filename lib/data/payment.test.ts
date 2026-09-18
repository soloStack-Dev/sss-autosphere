import { describe, expect, it } from "vitest";
import { simulatePaymentStatus, paymentStatusOptions } from "@/lib/data/payment";

describe("simulatePaymentStatus", () => {
  it("returns a valid status and a message for any UTR", () => {
    for (const sample of [
      "UTR139123456789",
      "ABC12345",
      "SSSPAY0009",
      "XYZ99887766",
    ]) {
      const result = simulatePaymentStatus(sample);
      expect(paymentStatusOptions).toContain(result.status);
      expect(result.message.length).toBeGreaterThan(0);
    }
  });

  it("is deterministic for the same reference", () => {
    expect(simulatePaymentStatus("UTR139123456789").status).toBe(
      simulatePaymentStatus("UTR139123456789").status,
    );
  });
});