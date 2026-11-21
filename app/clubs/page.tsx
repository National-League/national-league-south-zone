import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { clubs as fallbackClubs } from "@/lib/clubs";

export const metadata: Metadata = {
  title: "All 24 clubs",
  description: "Explore the 24 clubs allocated to the 2026/27 National League South."
};

export const revalidate = 60;

type DatabaseClub = {
  name: string;
  short_name: string;
  initials: string;
  slug: string;
  crest_url: string | null;
};

async function getClubs() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return { clubs: fallbackClubs, connected: false };
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from("clubs")
      .select("name, short_name, initials, slug, crest_url")
      .order("name");

    if (error || !data || data.length === 0) {
      return { clubs: fallbackClubs, connected: false };
    }

    return {
      clubs: (data as DatabaseClub[]).map((club) => ({
        name: club.name,
        shortName: club.short_name,
        initials: club.initials || club.short_name.slice(0, 3).toUpperCase(),
        slug: club.slug,
        crestUrl: club.crest_url
      })),
      connected: true
    };
  } catch {
    return { clubs: fallbackClubs, connected: false };
  }
}

export default async function ClubsPage() {
  const { clubs, connected } = await getClubs();

  return <><SiteHeader /><main className="container page-wrap">
    <p className="eyebrow">Know your opposition · 2026/27</p><h1 className="page-title">The 24 clubs</h1>
    <p className="page-intro">Every club in this season's National League South, all together in one place. Club profiles, official links, squad information and verified crests will be added as they are sourced.</p>
    <div className="section-heading"><h2>Club directory</h2><span className="status-tag">{connected ? "Database connected" : "Using backup club list"}</span></div>
    <div className="club-list">{clubs.map(club => <article className="club-list-item" key={club.slug}><span className="club-crest" aria-hidden="true">{club.initials}</span><div><strong>{club.name}</strong><small>Club profile being prepared</small></div></article>)}</div>
    <div className="notice">{connected ? "Club names are being loaded from the National League South Zone database." : "The database could not be reached just now, so the website is showing its built-in club list instead."} Club crests and official links will be added when their current sources and permitted usage have been checked.</div>
  </main><SiteFooter /></>;
}
