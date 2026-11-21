import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "National League South Zone", template: "%s | National League South Zone" },
  description: "Your home for National League South football: clubs, fixtures, results, news and a supporters' fan zone.",
  applicationName: "National League South Zone"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
