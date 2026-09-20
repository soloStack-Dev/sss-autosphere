import { siteConfig } from "@/lib/site-config";

/**
 * Server-only Resend email configuration.
 *
 * SENDER / RECIPIENT / REPLY-TO are intentionally separate:
 * - from:    business address on the verified Resend domain (contact.sssautospare.com)
 * - to:      shop owner inbox where enquiries are delivered
 * - replyTo: the customer's submitted email, set by the caller
 *
 * RESEND_API_KEY must stay server-side (never in NEXT_PUBLIC_* variables).
 */
export const resendConfig = {
  from:
    process.env.RESEND_FROM ??
    "SSS Auto Spares <noreply@contact.sssautospare.com>",
  to: process.env.RESEND_TO ?? siteConfig.emailOwner,
} as const;