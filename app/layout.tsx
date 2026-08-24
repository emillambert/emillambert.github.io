import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emilwl.me"),
  title: {
    default: "Emil Lambert — I build systems",
    template: "%s — Emil Lambert"
  },
  description: "Aerospace engineering, AI, software and companies. Selected work by Emil Lambert.",
  openGraph: {
    title: "Emil Lambert — I build systems",
    description: "Aerospace engineering, AI, software and companies.",
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
