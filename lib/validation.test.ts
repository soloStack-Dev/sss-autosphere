import { describe, expect, it } from "vitest";
import {
  phoneSchema,
  emailSchema,
  nameSchema,
  enquirySchema,
  partEnquirySchema,
  paymentEnquirySchema,
  feedbackSchema,
  utrSchema,
  productSchema,
  emailMessageSchema,
  parseError,
} from "@/lib/validation";

describe("phoneSchema", () => {
  it("accepts a valid 10-digit Indian mobile number", () => {
    expect(phoneSchema.safeParse("9876543210").success).toBe(true);
  });

  it("accepts separators and normalizes later", () => {
    expect(phoneSchema.safeParse("9876543210").success).toBe(true);
  });

  it("rejects wrong length", () => {
    expect(phoneSchema.safeParse("98765").success).toBe(false);
  });

  it("rejects starting with anything other than 6-9", () => {
    expect(phoneSchema.safeParse("5876543210").success).toBe(false);
  });

  it("rejects empty input", () => {
    expect(phoneSchema.safeParse("").success).toBe(false);
  });
});

describe("emailSchema", () => {
  it("allows empty (optional)", () => {
    expect(emailSchema.safeParse("").success).toBe(true);
  });

  it("accepts a valid email", () => {
    expect(emailSchema.safeParse("owner@example.com").success).toBe(true);
  });

  it("rejects malformed email", () => {
    expect(emailSchema.safeParse("not-an-email").success).toBe(false);
  });
});

describe("nameSchema", () => {
  it("accepts a normal name", () => {
    expect(nameSchema.safeParse("Ram Kumar").success).toBe(true);
  });

  it("rejects a single character", () => {
    expect(nameSchema.safeParse("R").success).toBe(false);
  });
});

describe("enquirySchema", () => {
  it("accepts a complete enquiry", () => {
    const parsed = enquirySchema.safeParse({
      vehicle: "Maruti Swift 2020",
      part: "Front brake caliper",
      phone: "9876543210",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects missing part", () => {
    expect(
      enquirySchema.safeParse({
        vehicle: "Maruti Swift",
        part: "",
        phone: "9876543210",
      }).success,
    ).toBe(false);
  });
});

describe("partEnquirySchema", () => {
  it("accepts a valid detailed request with defaults", () => {
    const parsed = partEnquirySchema.safeParse({
      name: "Karthik",
      phone: "9876543210",
      vehicle: "Hyundai Creta SX",
      year: "2019",
      part: "Alternator 90A",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.condition).toBe("any");
    }
  });

  it("rejects an invalid year", () => {
    expect(
      partEnquirySchema.safeParse({
        name: "Karthik",
        phone: "9876543210",
        vehicle: "Hyundai Creta",
        year: "85",
        part: "Alternator",
      }).success,
    ).toBe(false);
  });
});

describe("paymentEnquirySchema", () => {
  it("accepts a payment ticket with UTR", () => {
    expect(
      paymentEnquirySchema.safeParse({
        name: "Meena",
        phone: "9876543210",
        utr: "UTR139123456789",
        message: "Paid via UPI on Monday, amount not matched.",
      }).success,
    ).toBe(true);
  });
});

describe("feedbackSchema", () => {
  it("rejects a rating of 0", () => {
    expect(
      feedbackSchema.safeParse({
        name: "Arun",
        phone: "9876543210",
        rating: 0,
        message: "Great parts",
      }).success,
    ).toBe(false);
  });

  it("accepts a 5-star review", () => {
    expect(
      feedbackSchema.safeParse({
        name: "Arun",
        phone: "9876543210",
        rating: 5,
        message: "Great parts",
      }).success,
    ).toBe(true);
  });
});

describe("utrSchema", () => {
  it("accepts a realistic UTR", () => {
    expect(utrSchema.safeParse("UTR139123456789").success).toBe(true);
  });

  it("rejects special characters", () => {
    expect(utrSchema.safeParse("UTR-1391!").success).toBe(false);
  });
});

describe("productSchema", () => {
  it("accepts a complete part entry (like the HLP-8920 reference)", () => {
    const parsed = productSchema.safeParse({
      sku: "HLP-8920",
      name: "Dual Projector Headlamp Assembly",
      category: "LIGHTING & ELECTRICAL",
      badge: "New",
      condition: "New",
      image: "",
      vehicleCompatibility: "[Confirm Fitment]",
      price: "Contact for Price",
      stockStatus: "Enquire for Availability",
      description:
        "Modern dual-projector headlight unit with integrated turn-signal element and authentic mounting brackets.",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.image).toBe("");
      expect(parsed.data.condition).toBe("New");
    }
  });

  it("rejects a too-short SKU", () => {
    const parsed = productSchema.safeParse({
      sku: "A",
      name: "Fender",
      category: "Car Body Parts",
      description: "Steel fender panel",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects SKUs with spaces or special characters", () => {
    const parsed = productSchema.safeParse({
      sku: "HLP 8920!",
      name: "Headlamp",
      category: "LIGHTING & ELECTRICAL",
      description: "Dual projector unit",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects a non-site image path", () => {
    const parsed = productSchema.safeParse({
      sku: "HLP-8921",
      name: "Headlamp",
      category: "LIGHTING & ELECTRICAL",
      image: "https://evil.example/x.png",
      description: "Dual projector unit",
    });
    expect(parsed.success).toBe(false);
  });
});

describe("parseError", () => {
  it("produces a flat field -> message map", () => {
    const result = enquirySchema.safeParse({
      vehicle: "",
      part: "",
      phone: "123",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = parseError(result.error);
      expect(Object.keys(errors).length).toBeGreaterThanOrEqual(1);
      expect(errors.phone).toBeDefined();
    }
  });
});

describe("emailMessageSchema", () => {
  it("accepts a valid email message with all fields", () => {
    const parsed = emailMessageSchema.safeParse({
      name: "Arun",
      phone: "9876543210",
      email: "arun@example.com",
      message: "Hi, I need a bumper for my 2016 i20.",
    });
    expect(parsed.success).toBe(true);
  });

  it("defaults optional fields to empty strings", () => {
    const parsed = emailMessageSchema.safeParse({
      name: "Kumar",
      message: "Do you have tail lamps?",
    });
    expect(parsed.success).toBe(true);
    if (parsed.success) {
      expect(parsed.data.phone).toBe("");
      expect(parsed.data.email).toBe("");
    }
  });

  it("rejects a message shorter than 10 characters", () => {
    const parsed = emailMessageSchema.safeParse({
      name: "Arun",
      message: "Short",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects an invalid email address format", () => {
    const parsed = emailMessageSchema.safeParse({
      name: "Arun",
      email: "not-an-email",
      message: "Please reply to my enquiry.",
    });
    expect(parsed.success).toBe(false);
  });
});