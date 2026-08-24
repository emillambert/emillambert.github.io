import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emilwl.me"),
  title: {
    default: "Emil Lambert — Aerospace engineer & product builder",
    template: "%s — Emil Lambert"
  },
  description: "Emil Lambert is an aerospace engineer and product builder working across aerospace, AI, software and startups.",
  openGraph: {
    title: "Emil Lambert — Aerospace engineer & product builder",
    description: "Aerospace engineering, AI, software and startups.",
    url: "https://emilwl.me",
    siteName: "Emil Lambert",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
