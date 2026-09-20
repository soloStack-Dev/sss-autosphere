-- SSS Auto Spares — initial schema (products, gallery, enquiries)
-- Run this in the Supabase SQL editor after connecting the project.

-- ============================================================
-- PRODUCTS
-- ============================================================
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  sku text not null unique,
  name text not null,
  category text not null,
  badge text not null default 'Verified',
  condition text not null default 'New',
  image text not null default '/images/product/product-img-two.png',
  vehicle_compatibility text not null default '[Confirm Fitment]',
  price text not null default 'Contact for Price',
  stock_status text not null default 'Enquire for Availability',
  description text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products (category);
create index if not exists products_sku_idx on public.products (sku);

alter table public.products enable row level security;

drop policy if exists "Products are publicly readable" on public.products;
create policy "Products are publicly readable"
  on public.products for select
  using (true);

-- Listed parts are submitted anonymously via the catalogue "Add New" form.
drop policy if exists "Products can be inserted by anyone" on public.products;
create policy "Products can be inserted by anyone"
  on public.products for insert
  with check (true);

-- The catalogue edit button updates existing listings anonymously.
drop policy if exists "Products can be updated by anyone" on public.products;
create policy "Products can be updated by anyone"
  on public.products for update
  using (true) with check (true);

-- ============================================================
-- GALLERY ITEMS
-- ============================================================
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  category text not null default 'Products',
  title text not null,
  description text not null default '',
  metadata text not null default '',
  image text not null,
  alt text not null default '',
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists gallery_items_category_idx on public.gallery_items (category);

alter table public.gallery_items enable row level security;

drop policy if exists "Gallery items are publicly readable" on public.gallery_items;
create policy "Gallery items are publicly readable"
  on public.gallery_items for select
  using (true);

-- ============================================================
-- ENQUIRIES (forms submit here: quick, part, payment, feedback)
-- ============================================================
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  enquiry_type text not null default 'enquiry',
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists enquiries_type_idx on public.enquiries (enquiry_type);
create index if not exists enquiries_created_idx on public.enquiries (created_at desc);

alter table public.enquiries enable row level security;

-- Site visitors can submit; only authenticated/staff can read.
drop policy if exists "Enquiries can be inserted by anyone" on public.enquiries;
create policy "Enquiries can be inserted by anyone"
  on public.enquiries for insert
  with check (true);

drop policy if exists "Enquiries are readable by authenticated users only" on public.enquiries;
create policy "Enquiries are readable by authenticated users only"
  on public.enquiries for select
  using (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE: product-images bucket (Add New part uploads)
-- ============================================================
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

drop policy if exists "Anyone can view product images" on storage.objects;
create policy "Anyone can view product images"
  on storage.objects for select
  using (bucket_id = 'product-images');

drop policy if exists "Anyone can upload product images" on storage.objects;
create policy "Anyone can upload product images"
  on storage.objects for insert
  with check (bucket_id = 'product-images');

-- ============================================================
-- OPTIONAL SEED DATA (matches lib/data sample catalogue)
-- ============================================================
insert into public.products
  (id, sku, name, category, badge, condition, image, vehicle_compatibility, price, stock_status, description, sort_order)
values
  (gen_random_uuid(), 'BMP-7701', 'Car original all spares Available', 'CAR BODY PARTS', 'New / OEM Grade', 'New / OEM Grade', '/images/product/product-one-ssauto.jpeg', '[Confirm Vehicle Fitment]', 'Contact for Price', 'Enquire for Availability', 'Complete front bumper assembly with grille and lower air-intake provisions, prepared for precise OEM fitment.', 1),
  (gen_random_uuid(), 'HLP-8920', 'Car Alaiwheel', 'LIGHTING & ELECTRICAL', 'New', 'New', '/images/product/product-two-ssauto.jpeg', '[Confirm Fitment]', 'Contact for Price', 'Enquire for Availability', 'Modern dual-projector headlight unit with integrated turn-signal element and authentic mounting brackets.', 2),
  (gen_random_uuid(), 'BRK-4412', 'Car Alaiwheel', 'CAR SPARE PARTS (BRAKING)', 'New / Tested', 'New / Tested', '/images/product/product-three-ssauto.jpeg', '[Confirm Fitment]', 'Contact for Price', 'Enquire for Availability', 'Ventilated high-carbon rotor with machined surfaces, checked for run-out and dimensional tolerance before dispatch.', 3)
on conflict (sku) do nothing;

insert into public.gallery_items
  (id, category, title, description, metadata, image, alt, sort_order)
values
  (gen_random_uuid(), 'Shop & Showroom', 'SSS Auto Spares Store & Display Shelf', 'Showroom display with precision brake components, calipers, and gear assemblies ready for over-the-counter inspection.', 'SKU Inspection Rack', '/images/gallery/gallery-img-one.png', 'Automotive spare parts displayed on showroom shelving', 1),
  (gen_random_uuid(), 'Workshop', 'Technicians Bench-Testing Automotive Assemblies', 'Technical verification desk equipped with digital micrometers, fitment schematics, and testing fixtures.', 'Tolerance Check Bench', '/images/gallery/gallery-img-two.png', 'Technicians bench-testing automotive assemblies', 2),
  (gen_random_uuid(), 'Spare Parts', 'High-Performance Carbon Ceramic Brake System', 'Ventilated disc rotor with precision multi-piston caliper mount for high-performance sedans and SUVs.', 'Braking Systems', '/images/gallery/gallery-img-three.png', 'High-performance ventilated brake rotor with red performance caliper', 3),
  (gen_random_uuid(), 'Products', 'Heavy-Duty Suspension & Coil Springs', 'OEM and aftermarket gas-pressurized shock absorbers organized by vehicle model fitment and load rating.', 'Suspension Range', '/images/gallery/gallery-img-four.png', 'Heavy-duty automotive suspension shocks and coil springs', 4),
  (gen_random_uuid(), 'Products', 'Precision Engine Internals & Turbochargers', 'Camshafts, forged pistons, and cylinder head gaskets strictly inspected for micrometer durability and OEM tolerances.', 'Engine Core Components', '/images/gallery/gallery-img-five.png', 'Precision engine internals and turbocharger components', 5),
  (gen_random_uuid(), 'Customer Services', 'Vehicle Parts Consultation & Fitment Validation', 'Dedicated Chennai engineering desk assisting garage owners, technicians, and car owners with chassis-level part lookups.', 'Fitment Assistance', '/images/gallery/gallery-img-six.png', 'Automotive parts consultation and fitment validation at Chennai service counter', 6)
on conflict do nothing;