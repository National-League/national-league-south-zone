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

**Important:** live scores, standings, news feeds, club crests and supporter accounts are not connected yet. The site deliberately displays connection states rather than made-up scores, tables or articles.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

1. Import this repository into Vercel.
2. Keep the framework preset as Next.js.
3. Deploy with the default build settings.

## Planned integrations

- Supabase for database, authentication, fan discussions, polls and scheduled jobs.
- A free data provider with confirmed National League South coverage for fixtures, results, standings and match events.
- Official club RSS/news sources where available.
- Official club crest assets or permitted media sources.

Do not put private API keys in client-side code or commit secrets to GitHub.

## Club allocation source

The club list is based on the published 2026/27 allocation announcement:
https://www.sloughtownfc.com/article/3888/fa-confirms-national-league-south-allocations-for-2026-27

## Disclaimer

National League South Zone is an independent fan project and is not affiliated with The National League or any participating club. Club names and marks belong to their respective owners.
