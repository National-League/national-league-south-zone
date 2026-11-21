import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { clubs } from "@/lib/clubs";
export const metadata: Metadata = { title: "All 24 clubs", description: "Explore the 24 clubs allocated to the 2026/27 National League South." };
export default function ClubsPage() {
  return <><SiteHeader /><main className="container page-wrap">
    <p className="eyebrow">Know your opposition · 2026/27</p><h1 className="page-title">The 24 clubs</h1>
    <p className="page-intro">Every club in this season's National League South, all together in one place. Club profiles, official links, squad information and verified crests will be added as they are sourced.</p>
    <div className="club-list">{clubs.map(club => <article className="club-list-item" key={club.slug}><span className="club-crest" aria-hidden="true">{club.initials}</span><div><strong>{club.name}</strong><small>Club profile being prepared</small></div></article>)}</div>
    <div className="notice">The club list follows the published 2026/27 allocation. It is not a live league table.</div>
  </main><SiteFooter /></>;
}
