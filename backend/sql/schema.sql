create extension if not exists pgcrypto;

-- app/test-drive/page.tsx
create table if not exists test_drives (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text,
  last_name text,
  phone text,
  email text,
  model_id text,
  dealer_id text,
  preferred_date timestamptz
);

-- app/book/[slug]/page.tsx ("Book Your Car")
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  model_slug text not null,
  first_name text not null,
  last_name text,
  phone text not null,
  email text,
  color text,
  dealer_id text,
  preferred_date date,
  notes text
);

-- app/contact/page.tsx
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  phone text,
  email text,
  subject text,
  message text
);

-- app/exchange/page.tsx — customer requesting the exchange + the EV they want
create table if not exists exchange_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  phone text not null,
  email text,
  desired_model_slug text
);

-- app/exchange/page.tsx — the vehicle being traded in, tied to a request
create table if not exists exchange_vehicles (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  exchange_request_id uuid not null references exchange_requests(id) on delete cascade,
  make text not null,
  model text not null,
  year integer not null,
  mileage integer
);
