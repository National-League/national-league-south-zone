import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = { title: "News", description: "National League South club news and supporter stories." };
export default function NewsPage() {
  return <><SiteHeader /><main className="container page-wrap">
    <p className="eyebrow">Around the grounds</p><h1 className="page-title">The news desk</h1><p className="page-intro">Club announcements, match previews, reports and stories from across the National League South.</p>
    <section className="section"><div className="section-heading"><h2>Latest club news</h2><span className="status-tag">Sources to connect</span></div>
      <div className="empty-state"><div className="empty-state-mark">NEWS</div><h3>Bringing all 24 newsrooms together</h3><p>News feeds and official club links are being prepared. Articles will link back to their original publishers, with publication times and clear source attribution.</p></div>
    </section>
    <section className="section feature-list">
      <article className="feature-item"><h3>Club announcements</h3><p>Official statements, signings, departures and manager news.</p></article>
      <article className="feature-item"><h3>Matchday coverage</h3><p>Previews, reports and reaction from the clubs.</p></article>
      <article className="feature-item"><h3>Supporter stories</h3><p>Fan features and community contributions, clearly labelled.</p></article>
      <article className="feature-item"><h3>Transfer watch</h3><p>Rumours will be labelled as rumours; confirmed moves will link to official announcements.</p></article>
    </section>
  </main><SiteFooter /></>;
}
