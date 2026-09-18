import { z } from "zod";

/** Indian ten-digit mobile number (loose tolerance for later formatting). */
export const phoneSchema = z
  .string()
  .trim()
  .min(1, "Contact number is required")
  .refine((v) => /^[6-9]\d{9}$/.test(v.replace(/[\s-]/g, "")), {
    message: "Enter a valid 10-digit Indian mobile number",
  });

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .refine((v) => v === "" || z.email().safeParse(v).success, {
    message: "Enter a valid email address",
  });

export const nameSchema = z
  .string()
  .trim()
  .min(2, "Your name must be at least 2 characters")
  .max(120, "Name is too long");

/** Quick home / drawer enquiry. */
export const enquirySchema = z.object({
  vehicle: z
    .string()
    .trim()
    .min(2, "Vehicle make & model is required")
    .max(180, "Vehicle details are too long"),
  part: z
    .string()
    .trim()
    .min(3, "Please describe the required part")
    .max(500, "Part description is too long"),
  phone: phoneSchema,
});
export type EnquiryInput = z.infer<typeof enquirySchema>;

/** Product / part enquiry with optional email, condition and year. */
export const partEnquirySchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  vehicle: z
    .string()
    .trim()
    .min(2, "Vehicle make & model is required")
    .max(180, "Vehicle details are too long"),
  year: z
    .string()
    .trim()
    .max(10, "Invalid manufacturing year")
    .refine((v) => v === "" || /^(19|20)\d{2}$/.test(v), {
      message: "Enter a valid year (e.g. 2019)",
    })
    .optional(),
  part: z.string().trim().min(3, "Please describe the required part"),
  sku: z.string().trim().max(40).optional(),
  email: emailSchema.optional(),
  condition: z
    .enum(["new", "second-hand", "any"], {
      error: "Select a part condition",
    })
    .default("any"),
  notes: z.string().trim().max(2000).optional(),
});
export type PartEnquiryInput = z.infer<typeof partEnquirySchema>;

/** Payment help / resolution enquiry. */
export const paymentEnquirySchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema.optional(),
  enquiryType: z
    .enum(["payment-method", "transaction", "refund", "invoice", "other"], {
      error: "Select an enquiry type",
    })
    .default("payment-method"),
  utr: z
    .string()
    .trim()
    .max(20, "Transaction reference is too long")
    .optional(),
  message: z
    .string()
    .trim()
    .min(4, "Please describe your query")
    .max(2000, "Message is too long"),
});
export type PaymentEnquiryInput = z.infer<typeof paymentEnquirySchema>;

/** Customer feedback submission. */
export const feedbackSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema.optional(),
  rating: z
    .number()
    .int()
    .min(1, "Please pick a star rating")
    .max(5),
  message: z
    .string()
    .trim()
    .min(4, "Please write a short feedback")
    .max(2000, "Feedback is too long"),
});
export type FeedbackInput = z.infer<typeof feedbackSchema>;

/** Demo payment status simulation (UTR / reference input). */
export const utrSchema = z
  .string()
  .trim()
  .min(8, "At least 8 characters")
  .max(20, "Too long")
  .regex(/^[A-Za-z0-9]+$/, "Use letters and digits only");

/** Catalogue "Add New Part" submission. */
export const productSchema = z.object({
  sku: z
    .string()
    .trim()
    .min(3, "SKU must be at least 3 characters")
    .max(20, "SKU is too long")
    .regex(/^[A-Za-z0-9][A-Za-z0-9-]*$/, "Use letters, digits, and dashes only"),
  name: z
    .string()
    .trim()
    .min(3, "Part name must be at least 3 characters")
    .max(120, "Part name is too long"),
  category: z
    .string()
    .trim()
    .min(2, "Category is required")
    .max(60, "Category is too long"),
  badge: z.string().trim().max(40, "Badge is too long").default("Verified"),
  condition: z
    .string()
    .trim()
    .min(2, "Condition is required")
    .max(40, "Condition is too long")
    .default("New"),
  image: z
    .string()
    .trim()
    .max(1000)
    .refine(
      (v) =>
        v === "" ||
        /^\/(images|uploads)\//.test(v) ||
        /^https?:\/\/.+\.supabase\.co\//.test(v),
      { message: "Use a site path like /images/product/..." },
    )
    .default(""),
  vehicleCompatibility: z
    .string()
    .trim()
    .min(2, "Fitment details are required")
    .max(160, "Fitment is too long")
    .default("[Confirm Fitment]"),
  price: z
    .string()
    .trim()
    .min(2, "Price indication is required")
    .max(40, "Price is too long")
    .default("Contact for Price"),
  stockStatus: z
    .string()
    .trim()
    .min(2, "Status is required")
    .max(60, "Status is too long")
    .default("Enquire for Availability"),
  description: z
    .string()
    .trim()
    .min(3, "Write a short description")
    .max(600, "Description is too long"),
});
export type ProductInput = z.infer<typeof productSchema>;

export function parseError(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "_root";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}