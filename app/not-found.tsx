import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">404</p><h1>Wrong orbit.</h1><Link href="/">Back home ↗</Link></main>;
}
