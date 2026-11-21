-- National League South Zone: initial football data schema
-- Run this file in Supabase SQL Editor. Public users can read football data;
-- only trusted server-side jobs/admins should write to these tables.

create extension if not exists pgcrypto;

create table if not exists public.clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  short_name text not null,
  slug text not null unique,
  initials text not null,
  crest_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.fixtures (
  id uuid primary key default gen_random_uuid(),
  season text not null default '2026/27',
  home_club_id uuid not null references public.clubs(id),
  away_club_id uuid not null references public.clubs(id),
  kickoff_at timestamptz,
  status text not null default 'scheduled'
    check (status in ('scheduled', 'live', 'half_time', 'finished', 'postponed', 'abandoned')),
  home_score integer check (home_score is null or home_score >= 0),
  away_score integer check (away_score is null or away_score >= 0),
  source_url text,
  updated_at timestamptz not null default now(),
  constraint fixtures_different_clubs check (home_club_id <> away_club_id)
);

create table if not exists public.match_events (
  id uuid primary key default gen_random_uuid(),
  fixture_id uuid not null references public.fixtures(id) on delete cascade,
  club_id uuid references public.clubs(id),
  minute text,
  event_type text not null,
  player_name text,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.league_standings (
  id uuid primary key default gen_random_uuid(),
  season text not null default '2026/27',
  club_id uuid not null references public.clubs(id),
  position integer not null check (position > 0),
  played integer not null default 0 check (played >= 0),
  won integer not null default 0 check (won >= 0),
  drawn integer not null default 0 check (drawn >= 0),
  lost integer not null default 0 check (lost >= 0),
  goals_for integer not null default 0,
  goals_against integer not null default 0,
  goal_difference integer not null default 0,
  points integer not null default 0,
  updated_at timestamptz not null default now(),
  unique (season, club_id),
  unique (season, position)
);

create table if not exists public.news_articles (
  id uuid primary key default gen_random_uuid(),
  club_id uuid references public.clubs(id),
  title text not null,
  excerpt text,
  source_url text not null unique,
  image_url text,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists fixtures_kickoff_idx on public.fixtures(kickoff_at);
create index if not exists fixtures_status_idx on public.fixtures(status);
create index if not exists match_events_fixture_idx on public.match_events(fixture_id);
create index if not exists standings_season_position_idx on public.league_standings(season, position);
create index if not exists news_published_idx on public.news_articles(published_at desc);

alter table public.clubs enable row level security;
alter table public.fixtures enable row level security;
alter table public.match_events enable row level security;
alter table public.league_standings enable row level security;
alter table public.news_articles enable row level security;

drop policy if exists "Public can read clubs" on public.clubs;
create policy "Public can read clubs" on public.clubs for select to anon, authenticated using (true);

drop policy if exists "Public can read fixtures" on public.fixtures;
create policy "Public can read fixtures" on public.fixtures for select to anon, authenticated using (true);

drop policy if exists "Public can read match events" on public.match_events;
create policy "Public can read match events" on public.match_events for select to anon, authenticated using (true);

drop policy if exists "Public can read league standings" on public.league_standings;
create policy "Public can read league standings" on public.league_standings for select to anon, authenticated using (true);

drop policy if exists "Public can read news articles" on public.news_articles;
create policy "Public can read news articles" on public.news_articles for select to anon, authenticated using (true);

-- No public INSERT, UPDATE or DELETE policies are created. Data ingestion
-- will be performed later by a trusted server-side process using a secret key
-- stored only in server-side environment variables, never NEXT_PUBLIC_*.

-- Seed the published 2026/27 club allocation. This is reference data only;
-- crests and live football data are added after sources are verified.
insert into public.clubs (name, short_name, slug, initials) values
  ('AFC Totton', 'AFC Totton', 'afc-totton', 'TOT'),
  ('Billericay Town', 'Billericay', 'billericay-town', 'BIL'),
  ('Braintree Town', 'Braintree', 'braintree-town', 'BRA'),
  ('Chelmsford City', 'Chelmsford', 'chelmsford-city', 'CHE'),
  ('Chesham United', 'Chesham', 'chesham-united', 'CHU'),
  ('Dagenham & Redbridge', 'Dagenham & Redbridge', 'dagenham-and-redbridge', 'D&R'),
  ('Dorking Wanderers', 'Dorking', 'dorking-wanderers', 'DOR'),
  ('Dover Athletic', 'Dover', 'dover-athletic', 'DOV'),
  ('Ebbsfleet United', 'Ebbsfleet', 'ebbsfleet-united', 'EBB'),
  ('Farnborough', 'Farnborough', 'farnborough', 'FAR'),
  ('Farnham Town', 'Farnham', 'farnham-town', 'FAT'),
  ('Folkestone Invicta', 'Folkestone', 'folkestone-invicta', 'FOI'),
  ('Hampton & Richmond Borough', 'Hampton & Richmond', 'hampton-and-richmond-borough', 'HRB'),
  ('Hemel Hempstead Town', 'Hemel Hempstead', 'hemel-hempstead-town', 'HHT'),
  ('Horsham', 'Horsham', 'horsham', 'HOR'),
  ('Maidenhead United', 'Maidenhead', 'maidenhead-united', 'MAI'),
  ('Maidstone United', 'Maidstone', 'maidstone-united', 'MAD'),
  ('Salisbury', 'Salisbury', 'salisbury', 'SAL'),
  ('Slough Town', 'Slough', 'slough-town', 'SLO'),
  ('Tonbridge Angels', 'Tonbridge', 'tonbridge-angels', 'TON'),
  ('Torquay United', 'Torquay', 'torquay-united', 'TOR'),
  ('Truro City', 'Truro', 'truro-city', 'TRU'),
  ('Walton & Hersham', 'Walton & Hersham', 'walton-and-hersham', 'WAH'),
  ('Weston-super-Mare', 'Weston-super-Mare', 'weston-super-mare', 'WSM')
on conflict (slug) do update set
  name = excluded.name,
  short_name = excluded.short_name,
  initials = excluded.initials;
