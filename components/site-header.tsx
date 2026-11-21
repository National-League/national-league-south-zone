"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" }, { href: "/clubs", label: "Clubs" },
  { href: "/fixtures", label: "Fixtures & results" }, { href: "/table", label: "League table" },
  { href: "/news", label: "News" }
];

export function SiteHeader() {
  const pathname = usePathname();
  return <>
    <div className="top-strip"><div className="container top-strip-inner"><span>INDEPENDENT NATIONAL LEAGUE SOUTH FAN SITE</span><span className="season-label">2026/27 SEASON</span></div></div>
    <header className="masthead"><div className="container masthead-inner">
      <Link className="brand" href="/" aria-label="National League South Zone home">
        <span className="brand-mark">NL<span>Z</span></span>
        <span className="brand-words"><strong>NATIONAL LEAGUE</strong><b>SOUTH <i>ZONE</i></b></span>
      </Link>
      <div className="masthead-note"><span className="masthead-note-rule" /><span>THE HOME OF THE SOUTH</span></div>
    </div></header>
    <nav className="main-nav"><div className="container nav-inner">
      {links.map(link => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return <Link key={link.href} href={link.href} className={active ? "nav-link active" : "nav-link"}>{link.label}</Link>;
      })}
      <a className="nav-link fan-zone-link" href="/#fan-zone">Fan zone</a>
    </div></nav>
  </>;
}
