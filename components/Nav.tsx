import Link from "next/link";

export function Nav() {
  return (
    <header className="site-nav">
      <Link className="nav-brand" href="/">
        <span className="nav-mark">EL</span>
        <span className="nav-brand-copy">EMIL LAMBERT <small>/ SYSTEMS BUILDER</small></span>
      </Link>
      <nav aria-label="Primary navigation">
        <a href="/#work">Work</a>
        <a href="/#lab">Lab</a>
        <Link href="/about/">About</Link>
        <Link href="/cv/">CV</Link>
        <a href="https://github.com/emillambert" target="_blank" rel="noreferrer">GitHub ↗</a>
      </nav>
      <a className="nav-cta" href="mailto:E.W.Lambert@student.tudelft.nl">Let&apos;s talk <span>↗</span></a>
    </header>
  );
}
