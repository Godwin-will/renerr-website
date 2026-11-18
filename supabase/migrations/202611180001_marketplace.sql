create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.energy_projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  country text not null,
  state text,
  city text,
  category text not null,
  description text not null,
  energy_problem text,
  proposed_solution text,
  capacity_kw numeric,
  beneficiaries_households integer,
  beneficiaries_businesses integer,
  beneficiaries_institutions integer,
  total_cost numeric,
  capital_required numeric,
  capital_committed numeric,
  currency_code text,
  financial_details jsonb not null default '{}'::jsonb,
  development_stage text not null default 'under_assessment',
  funding_status text not null default 'not_open',
  investment_terms jsonb not null default '{}'::jsonb,
  technical_details jsonb not null default '{}'::jsonb,
  impact_details jsonb not null default '{}'::jsonb,
  milestones jsonb not null default '[]'::jsonb,
  public_documents jsonb not null default '[]'::jsonb,
  cover_image_path text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint project_nonnegative_costs check (
    coalesce(total_cost, 0) >= 0 and coalesce(capital_required, 0) >= 0
    and coalesce(capital_committed, 0) >= 0
  )
);

create table if not exists public.professional_applications (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  full_name text not null,
  email text not null,
  phone text not null,
  country text not null,
  state text,
  city text,
  experience_years integer not null,
  title text not null,
  biography text not null,
  expertise text[] not null default '{}',
  services text[] not null default '{}',
  qualifications text[] not null default '{}',
  previous_experience text,
  attachment_paths jsonb not null default '[]'::jsonb,
  consent_at timestamptz not null,
  status text not null default 'pending',
  internal_notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.solar_professionals (
  id uuid primary key default gen_random_uuid(),
  application_id uuid unique references public.professional_applications(id),
  slug text not null unique,
  full_name text not null,
  title text not null,
  country text not null,
  state text,
  city text,
  service_coverage text[] not null default '{}',
  biography text not null,
  experience_years integer not null,
  expertise text[] not null default '{}',
  services text[] not null default '{}',
  qualifications text[] not null default '{}',
  public_portfolio_paths jsonb not null default '[]'::jsonb,
  private_document_paths jsonb not null default '[]'::jsonb,
  verified boolean not null default false,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  professional_id uuid not null references public.solar_professionals(id),
  full_name text not null,
  email text not null,
  phone text not null,
  location text not null,
  service_type text not null,
  description text not null,
  preferred_date date,
  attachment_paths jsonb not null default '[]'::jsonb,
  consent_at timestamptz not null,
  status text not null default 'new',
  internal_notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.investment_enquiries (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  project_id uuid not null references public.energy_projects(id),
  full_name text not null,
  email text not null,
  country_of_residence text not null,
  phone text,
  intended_amount numeric,
  participation text not null check (participation in ('individual', 'collective')),
  comments text,
  consent_at timestamptz not null,
  status text not null default 'new',
  internal_notes text,
  created_at timestamptz not null default now(),
  constraint investment_amount_nonnegative check (intended_amount is null or intended_amount >= 0)
);

create table if not exists public.professional_reviews (
  id uuid primary key default gen_random_uuid(),
  professional_id uuid not null references public.solar_professionals(id),
  service_request_id uuid not null unique references public.service_requests(id),
  rating integer not null check (rating between 1 and 5),
  feedback text not null,
  review_date date not null default current_date,
  approved_by uuid references auth.users(id),
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists energy_projects_public_idx on public.energy_projects (is_published, created_at desc);
create index if not exists professionals_public_idx on public.solar_professionals (status, verified, created_at desc);
create index if not exists applications_status_idx on public.professional_applications (status, created_at desc);
create index if not exists service_requests_status_idx on public.service_requests (status, created_at desc);
create index if not exists investment_enquiries_status_idx on public.investment_enquiries (status, created_at desc);

alter table public.admin_users enable row level security;
alter table public.energy_projects enable row level security;
alter table public.professional_applications enable row level security;
alter table public.solar_professionals enable row level security;
alter table public.service_requests enable row level security;
alter table public.investment_enquiries enable row level security;
alter table public.professional_reviews enable row level security;

drop policy if exists published_projects_read on public.energy_projects;
create policy published_projects_read on public.energy_projects for select to anon, authenticated
  using (is_published = true);

drop policy if exists published_professionals_read on public.solar_professionals;
create policy published_professionals_read on public.solar_professionals for select to anon, authenticated
  using (status = 'published' and verified = true);

drop policy if exists approved_reviews_read on public.professional_reviews;
create policy approved_reviews_read on public.professional_reviews for select to anon, authenticated
  using (approved_at is not null);

revoke all on public.admin_users, public.energy_projects, public.professional_applications,
  public.solar_professionals, public.service_requests, public.investment_enquiries,
  public.professional_reviews from anon, authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('marketplace-private', 'marketplace-private', false, 3145728,
  array['image/jpeg','image/png','image/webp','application/pdf'])
on conflict (id) do update set public = false, file_size_limit = 3145728,
  allowed_mime_types = excluded.allowed_mime_types;

-- After creating the first admin in Supabase Auth, grant access explicitly:
-- insert into public.admin_users (user_id) values ('<auth-user-uuid>');
