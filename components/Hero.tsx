"use client";

import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero-shell">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-kicker-row"><p className="hero-kicker">AEROSPACE ENGINEER / PRODUCT BUILDER</p><span>00 — HOME</span></div>
          <h1><span>EMIL</span><span className="hero-accent">LAMBERT</span></h1>
          <div className="hero-bottom"><p>Aerospace engineer and product builder based in Delft.</p><p className="hero-meta">DELFT, NL<br />2026</p></div>
        </motion.div>
        <motion.aside className="hero-panel" initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }} aria-label="Current focus">
          <div className="panel-topline"><span>CURRENT FOCUS</span><span className="status-live"><i /> LIVE</span></div>
          <strong className="hero-panel-number">03</strong>
          <p className="hero-panel-title">Where I&apos;m spending time</p>
          <div className="focus-list">
            <div><span>01</span><b>Overlap</b><em>product / founder</em></div>
            <div><span>02</span><b>Aerospace</b><em>systems / research</em></div>
            <div><span>03</span><b>Newton</b><em>AI / engineering</em></div>
          </div>
          <a href="#work" className="panel-link">See the work <span>↓</span></a>
        </motion.aside>
      </div>
      <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  );
}
