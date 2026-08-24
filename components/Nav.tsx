import Link from "next/link";

export function Nav() {
  return (
    <header className="site-nav">
      <Link className="nav-brand" href="/">EMIL LAMBERT</Link>
      <nav aria-label="Primary navigation">
        <a href="/#work">Work</a>
        <a href="/#lab">Lab</a>
        <Link href="/about/">About</Link>
        <Link href="/cv/">CV</Link>
        <a href="https://github.com/emillambert" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
    </header>
  );
}
