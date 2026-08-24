"use client";

import type { Project } from "@/data/projects";

export function ProjectVisual({ type }: { type: Project["visual"] }) {
  const visuals = {
    millie: { code: "01 / STRATOSPHERE", label: "INSTRUMENTATION", mark: "M", metric: "LOW-COST", detail: "PROLIFERATED MEASUREMENTS", bars: ["bar-strong", "bar-mid", "bar-short"] },
    cascade: { code: "02 / ORBITAL DATA", label: "EARTH OBSERVATION", mark: "99.1", metric: "DOWNLINK", detail: "SIMULATED REDUCTION", bars: ["bar-long", "bar-strong", "bar-mid"] },
    vista: { code: "03 / VENUS DSE", label: "DEPLOYMENT", mark: "56", metric: "KM", detail: "TARGET FLOAT ALTITUDE", bars: ["bar-mid", "bar-short", "bar-long"] },
    overlap: { code: "04 / PRODUCT", label: "TRAVEL SYSTEM", mark: "24H", metric: "PRIVATE GUIDE", detail: "BUILT FOR THE PERSON", bars: ["bar-long", "bar-mid", "bar-strong"] },
    aerodelft: { code: "05 / ORGANIZATION", label: "AEROSPACE LEADERSHIP", mark: "2Y", metric: "MANAGEMENT", detail: "PARTNERSHIPS / OPERATIONS", bars: ["bar-strong", "bar-mid", "bar-short"] },
    newton: { code: "06 / EXPLORATION", label: "AI × AEROSPACE", mark: "→", metric: "REQ / MODEL", detail: "VERIFY THE NEXT MOVE", bars: ["bar-short", "bar-mid", "bar-long"] }
  } as const;
  const visual = visuals[type];

  return (
    <div className={`visual visual-${type}`}>
      <div className="visual-topline"><span>{visual.code}</span><span>EMIL LAMBERT / 2026</span></div>
      <div className="visual-core">
        <span className="visual-label">{visual.label}</span>
        <strong className="visual-mark">{visual.mark}</strong>
        <div className="visual-reading"><b>{visual.metric}</b><span>{visual.detail}</span></div>
      </div>
      <div className="visual-bars" aria-hidden="true">{visual.bars.map((bar) => <i className={bar} key={bar} />)}</div>
      <div className="visual-bottom"><span>FIELD NOTE</span><span>VIEW PROJECT ↗</span></div>
    </div>
  );
}
