import { cn } from "cn";

/**
 * True once the Supabase project URL + publishable key are present.
 * While false, auth checks, proxy session refresh, and Supabase-backed data
 * access are disabled so the app can be developed without a backend.
 */
export const hasEnvVars =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export { cn };

/** Strip everything that is not a digit from an Indian mobile number. */
export function normalizePhone(value: string): string {
  return value.replace(/[^\d]/g, "");
}

/** English -> Indian locale digits helper (non-breaking, just formatting). */
export function formatPhone(value: string): string {
  const digits = normalizePhone(value);
  if (digits.length === 12 && digits.startsWith("91"))
    return `+91 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
  if (digits.length === 10)
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  return value;
}

/** Clip a value into a closed range. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Wait helper used in simulated async submit paths. */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}