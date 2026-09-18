import { describe, expect, it } from "vitest";
import { normalizePhone, formatPhone, clamp, sleep } from "@/lib/utils";

describe("normalizePhone", () => {
  it("strips spaces, dashes and the plus prefix", () => {
    expect(normalizePhone("+91 98765 43210")).toBe("919876543210");
  });

  it("keeps digits-only phone unchanged", () => {
    expect(normalizePhone("9876543210")).toBe("9876543210");
  });
});

describe("formatPhone", () => {
  it("formats 10 digits as Indian mobile grouping", () => {
    const out = formatPhone("9876543210");
    expect(out).toContain("98765");
    expect(out).toContain("43210");
  });

  it("returns input when it cannot format", () => {
    expect(formatPhone("abc")).toBe("abc");
  });
});

describe("clamp", () => {
  it("clamps within range", () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });
});

describe("sleep", () => {
  it("resolves after the delay", async () => {
    const t0 = Date.now();
    await sleep(30);
    expect(Date.now() - t0).toBeGreaterThanOrEqual(25);
  });
});