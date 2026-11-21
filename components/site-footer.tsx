import Link from "next/link";
export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><div className="footer-brand">NATIONAL LEAGUE <strong>SOUTH ZONE</strong></div><p>An independent supporters' hub for all 24 National League South clubs.</p></div>
    <div className="footer-links"><Link href="/clubs">Clubs</Link><Link href="/fixtures">Fixtures</Link><Link href="/table">Table</Link><Link href="/news">News</Link></div>
    <small>Unofficial fan project. Not affiliated with The National League or the clubs.</small>
  </div></footer>;
}
