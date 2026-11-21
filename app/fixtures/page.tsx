import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = { title: "Fixtures & results", description: "National League South fixtures, results and match centre." };
export default function FixturesPage() {
  return <><SiteHeader /><main className="container page-wrap">
    <p className="eyebrow">The matchday hub</p><h1 className="page-title">Fixtures & results</h1><p className="page-intro">Upcoming games, completed matches and live action from across the division.</p>
    <section className="section"><div className="section-heading"><h2>Match centre</h2><span className="status-tag">Feed not connected</span></div>
      <div className="empty-state"><div className="empty-state-mark">90'</div><h3>Scores will appear here</h3><p>No scores or fixtures are being invented or displayed as live. The next step is to connect a permitted data source that covers the National League South, then schedule updates and show the source's last-updated time.</p></div>
    </section>
    <section className="section feature-list">
      <article className="feature-item"><h3>Live scores</h3><p>Refresh automatically when a verified live feed is available.</p></article>
      <article className="feature-item"><h3>Match events</h3><p>Goals, cards and substitutions where supplied by the data provider.</p></article>
      <article className="feature-item"><h3>Fixtures</h3><p>Full season schedule, with postponements and changes clearly marked.</p></article>
      <article className="feature-item"><h3>Match details</h3><p>Line-ups and player statistics when a source makes them available.</p></article>
    </section>
  </main><SiteFooter /></>;
}
