"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.12]);

  return (
    <section ref={ref} className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-copy" style={{ scale, opacity }}>
        <p className="hero-kicker">AEROSPACE · AI · SYSTEMS · STARTUPS</p>
        <h1>
          <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>I BUILD</motion.span>
          <motion.span className="hero-outline" initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>SYSTEMS.</motion.span>
        </h1>
        <div className="hero-bottom">
          <p>Spacecraft. Software. Companies.<br />Occasionally things that do not fit a category.</p>
          <p className="hero-meta">DELFT, NL<br />2026</p>
        </div>
      </motion.div>
      <div className="scroll-cue" aria-hidden="true"><span>SCROLL</span><i /></div>
    </section>
  );
}
