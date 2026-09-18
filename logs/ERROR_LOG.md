# SSS Auto Spares — Runtime Notes & Error Log

Live file for issues observed while developing the site. Each entry is
appended when a problem is seen in `next dev` / production, with the fix.

## 2026-09-18 — Initial build fixes (see BUILD_LOG.md)
Grouped root causes: Tailwind v4/startup CSS mismatch, base-ui
`asChild` removal, ESLint scanning `.next`, prerender `Date`/`Date.now`
flags, `--spacing()` utility crash.

## Open items (by design, not bugs)
- Supabase connection not configured. After the user provides
  `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in
  `.env.local`, run the migration in `supabase/migrations/` (SQL editor).
  Forms and data tables will then read/write real data.
- `[Confirm ...]` placeholders live in `lib/site-config.ts`
  (`phone`, `email`, `hours`, `address`, `warehouseAddress`, `upiId`,
  `paymentPhone`, `txReference`, `businessName`, `heroStats.years`, …).
  Replace them when the owner confirms the values — no code changes needed.
- Product fitment + pricing are mocked as `[Confirm Fitment]` /
  `Contact for Price` until the owner supplies the real catalogue.
- WhatsApp share link is `#` in `siteConfig.socials.whatsapp` — swap it for
  a `wa.me/91…` link when the business number is confirmed.
### 2026-09-18 � Build regression after Supabase env wiring
- /gallery failed prerender: 'uncached or runtime data during prerendering'
  once .env.local activated the Supabase fetch in the static gallery page.
- Fixed by making the route dynamic (wait connection() + export const instant = false),
  same pattern already used by /products.
