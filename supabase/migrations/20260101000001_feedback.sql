-- SSS Auto Spares — public customer feedback shown on the /feedback page.
-- Only non-sensitive fields are stored here (no phone/email); contact details
-- continue to be captured privately in public.enquiries.

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  rating int not null check (rating between 1 and 5),
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists feedback_created_idx on public.feedback (created_at desc);

alter table public.feedback enable row level security;

-- Feedback is shown on the public site, so anyone may read the review content.
drop policy if exists "Feedback is publicly readable" on public.feedback;
create policy "Feedback is publicly readable"
  on public.feedback for select
  using (true);

-- Visitors can submit feedback anonymously.
drop policy if exists "Feedback can be inserted by anyone" on public.feedback;
create policy "Feedback can be inserted by anyone"
  on public.feedback for insert
  with check (true);
