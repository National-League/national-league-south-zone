import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { clubs } from "@/lib/clubs";
export const metadata: Metadata = { title: "League table", description: "The 2026/27 National League South standings." };
export default function TablePage() {
  return <><SiteHeader /><main className="container page-wrap">
    <p className="eyebrow">The race for promotion</p><h1 className="page-title">League table</h1><p className="page-intro">The standings will be populated from a verified table feed.</p>
    <section className="section"><div className="section-heading"><h2>2026/27 standings</h2><span className="status-tag">Awaiting data feed</span></div>
      <div className="empty-state"><div className="empty-state-mark">24</div><h3>Table data not connected yet</h3><p>We will not publish guessed positions or points. When a reliable source is connected, this page will show played, won, drawn, lost, goals for, goals against, goal difference and points.</p></div>
    </section>
    <section className="section"><div className="section-heading"><h2>Teams in the division</h2></div><div className="club-list">{clubs.map((club,index) => <div className="club-list-item" key={club.slug}><span className="club-crest" aria-hidden="true">{String(index+1).padStart(2,"0")}</span><div><strong>{club.name}</strong><small>Position not yet loaded</small></div></div>)}</div></section>
  </main><SiteFooter /></>;
}
