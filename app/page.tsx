import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { clubs } from "@/lib/clubs";

export default function HomePage() {
  return <>
    <SiteHeader />
    <main className="container page-wrap">
      <section className="hero"><div className="hero-content">
        <span className="hero-kicker">2026 / 27 · THE NATIONAL LEAGUE SOUTH</span>
        <h1>One league.<br /><em>Twenty-four clubs.</em><br />One place to belong.</h1>
        <p>Your independent home for National League South football. Follow the clubs, catch up on the news and join the conversation with supporters from across the division.</p>
        <div className="hero-actions"><Link className="button" href="/clubs">EXPLORE THE CLUBS</Link><Link className="button secondary" href="/fixtures">FIXTURES & RESULTS</Link></div>
      </div></section>
      <section className="stats-strip" aria-label="League facts">
        <div className="stat"><strong>24</strong><span>Clubs in the division</span></div><div className="stat"><strong>2026/27</strong><span>Current season</span></div><div className="stat"><strong>ONE ZONE</strong><span>For every supporter</span></div>
      </section>
      <section className="section home-grid">
        <div><div className="section-heading"><h2>Across the South</h2><Link href="/clubs">ALL 24 CLUBS →</Link></div>
          <div className="club-grid">{clubs.map(club => <Link className="club-tile" href="/clubs" key={club.slug}><span className="club-crest" aria-hidden="true">{club.initials}</span><span>{club.shortName}</span></Link>)}</div>
          <div className="notice">Club initials are temporary placeholders. Official club crests will be added when their current image sources and permitted usage have been checked.</div>
        </div>
        <aside><div className="section-heading"><h2>Match centre</h2></div>
          <div className="panel status-panel"><div className="status-top"><span className="status-dot">Data connection</span><span className="status-tag">Setup required</span></div>
            <h3>Live football is coming to the Zone</h3><p>The site structure is in place. A reliable free scores and fixtures source still needs to be connected before live results can be displayed.</p><Link href="/fixtures">VISIT FIXTURES & RESULTS →</Link>
          </div>
          <div className="section section-heading"><h2>In the Zone</h2></div>
          <div className="quick-grid one-column">
            <Link className="quick-card" href="/news"><strong>Club news desk</strong><span>Updates from around the division, with source links.</span></Link>
            <Link className="quick-card" href="/table"><strong>League table</strong><span>Standings will appear when a verified data feed is connected.</span></Link>
            <a className="quick-card" href="#fan-zone"><strong>Supporters' fan zone</strong><span>Polls, predictions and club conversations are planned next.</span></a>
          </div>
        </aside>
      </section>
      <section className="section" id="fan-zone"><div className="section-heading"><h2>More than a scores website</h2></div>
        <div className="feature-list">
          <article className="feature-item"><h3>Club communities</h3><p>A home for each club, with news, match discussion and supporter posts once member accounts are connected.</p></article>
          <article className="feature-item"><h3>Predictions & polls</h3><p>Have your say on match predictions, player of the month and the big talking points.</p></article>
          <article className="feature-item"><h3>Matchday conversation</h3><p>Follow the action alongside fans of all 24 clubs, with clear community rules and moderation.</p></article>
          <article className="feature-item"><h3>Ground guides</h3><p>Build a useful away-day directory with stadium details and links to official travel and ticket information.</p></article>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
