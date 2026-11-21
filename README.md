# National League South Zone

An independent supporters' hub for the 2026/27 National League South.

## Current build

The first Next.js App Router foundation is in place:

- Home page and navigation
- All 24 clubs from the published 2026/27 allocation
- Fixtures and results page, ready for a verified data provider
- League table page, ready for a verified data provider
- News centre page, ready for official club feeds
- Responsive classic football-publication styling
- Supabase JavaScript client helper and initial database schema

**Important:** live scores, standings, news feeds, club crests and supporter accounts are not connected yet. The site deliberately displays connection states rather than made-up scores, tables or articles.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Supabase setup

1. In Supabase, open **SQL Editor**.
2. Open `supabase/migrations/20261121170000_initial_schema.sql` from this repository and copy its full contents.
3. Paste it into a new SQL query and click **Run**.
4. In Vercel → Project → Settings → Environment Variables, set:
   - `NEXT_PUBLIC_SUPABASE_URL` = the project URL (without `/rest/v1/`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = the Supabase publishable key
5. Redeploy after environment variable changes.

The publishable key is intended for browser use. Row Level Security is enabled on all tables in the supplied schema. Never expose a Supabase secret/service-role key in a `NEXT_PUBLIC_*` variable or commit it to GitHub.

## Deploy

1. Import this repository into Vercel.
2. Keep the framework preset as Next.js.
3. Deploy with the default build settings.

## Planned integrations

- Supabase for database, authentication, fan discussions, polls and scheduled jobs.
- A free data provider with confirmed National League South coverage for fixtures, results, standings and match events.
- Official club RSS/news sources where available.
- Official club crest assets or permitted media sources.

## Club allocation source

The club list is based on the published 2026/27 allocation announcement:
https://www.sloughtownfc.com/article/3888/fa-confirms-national-league-south-allocations-for-2026-27

## Disclaimer

National League South Zone is an independent fan project and is not affiliated with The National League or any participating club. Club names and marks belong to their respective owners.
