# sss-autosphere

SSS Auto Spares — Chennai automotive spare-parts website (Next.js 16 + Supabase).

Catalogue, part enquiries (with WhatsApp delivery), payment info, and gallery
for the SSS Auto Spares business in Pudupet, Chennai. The whole site is
browsable anonymously — no login or auth.

## Stack

- Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 3
- shadcn/ui (base-ui style), zod validation, TanStack Query, zustand
- GSAP + ScrollTrigger, lucide-react, vitest + Testing Library
- Package manager: **bun** (do not use npm/yarn)

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, categories, services, video showcase |
| `/about` | Business story, values, workflow, stats |
| `/products` | Catalogue with search/filters, "Add New Part" popup, part enquiry form |
| `/payment` | Authorized payment modes, workflow, safety checklist |
| `/gallery` | Filterable parts & facility gallery |
| `/feedback` | Star-rating feedback form |
| `/enquire` | Quick + detailed part enquiry forms (WhatsApp + Supabase) |
| `/share` | Share/copy/WhatsApp website links |
| `/privacy`, `/terms`, `/warranty` | Legal pages |

## Getting started

From `my-app/`:

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build + type-check
bun run lint     # eslint .
bun run test     # vitest
```

Copy `.env.example` to `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and
`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Without env vars the app still boots
on sample data (`hasEnvVars` in `lib/utils.ts`).

## Database

Run `supabase/migrations/20260101000000_sss_auto_spares_init.sql` (or
`supabase db push`) to create:

- `products`, `gallery_items`, `enquiries` tables (RLS: public read for the
  catalogue, public insert for the "Add New Part" form and enquiries) with
  seed data matching the sample catalogue
- a `product-images` public storage bucket for catalogue image uploads

## Project layout

```
app/(site)/                  public site pages + layout (global chrome)
app/api/products|enquiries   zod-validated POST endpoints
components/forms             enquiry / feedback form components
components/products          catalogue explorer + Add New dialog
components/payment           payment modes & checklist
components/gallery           filterable gallery
components/shared            video showcase, page banner, section heading
lib/                         utils, site-config, validation, whatsapp, data
supabase/migrations          schema + seed SQL + storage bucket
public/images, videos        assets copied from Context/asserts
logs/                        build / runtime error logs
```

## Proxy note

Route guarding lives in `proxy.ts` (Next 16, not `middleware.ts`). The
Supabase agent only refreshes the session cookie — it guards no routes, and
`/products`/`/gallery` are dynamic. Do not re-add `middleware.ts` or auth
pages.