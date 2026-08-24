"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  const reduceMotion = useReducedMotion();
  const drift = reduceMotion ? undefined : { y: [0, -8, 0] };

  if (type === "cascade") {
    return <div className="visual visual-cascade"><div className="satellite-grid" /><motion.div className="scan-line" animate={reduceMotion ? undefined : { y: [0, 210, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} /><div className="cascade-label">CSC / PRIORITY</div></div>;
  }
  if (type === "vista") {
    return <div className="visual visual-vista"><div className="venus-disc" /><div className="altitude"><span>125 KM</span><span>100</span><span>75</span><strong>56 KM</strong></div><motion.div className="probe" animate={drift} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>V</motion.div></div>;
  }
  if (type === "overlap") {
    return <div className="visual visual-overlap"><motion.div className="phone" animate={drift} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}><div className="phone-map"><i /><i /><i /><i /></div><div className="phone-copy"><b>VALLETTA</b><span>Today · 4 stops</span></div></motion.div><div className="travel-stamp">PRIVATE GUIDE / 24H</div></div>;
  }
  if (type === "aerodelft") {
    return <div className="visual visual-aerodelft"><motion.div className="aircraft" animate={drift} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} aria-hidden="true">✦</motion.div><div className="runway"><span>TEAM</span><span>PARTNERSHIPS</span><span>OPERATIONS</span></div></div>;
  }
  if (type === "newton") {
    return <div className="visual visual-newton"><div className="blueprint-grid" /><div className="newton-node n1">REQ</div><div className="newton-node n2">MODEL</div><div className="newton-node n3">VERIFY</div><svg viewBox="0 0 600 360" aria-hidden="true"><path d="M130 180 C220 60 380 60 470 180 C380 300 220 300 130 180Z" /></svg></div>;
  }
  return <div className="visual visual-millie"><div className="atmosphere" /><motion.div className="sensor" animate={drift} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}><span>M</span><i /></motion.div><div className="orbit orbit-1" /><div className="orbit orbit-2" /><div className="millie-label">UPPER ATMOSPHERE / LOW COST / PROLIFERATED</div></div>;
}
