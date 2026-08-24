"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { flagshipProjects } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

export function FlagshipProjects() {
  return (
    <section className="work-section" id="work">
      <div className="section-heading work-heading">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Selected work.</h2></div>
        <p className="section-intro">Six systems across aerospace, software and startups. Different problems, same instinct: make the proof visible.</p>
      </div>
      <div className="flagship-list">
        {flagshipProjects.map((project) => (
          <article className={`flagship project-${project.visual}`} key={project.slug}>
            <div className="project-copy">
              <div className="project-topline"><span>{project.index} / {project.kicker}</span><span>{project.status}</span></div>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <p className="project-role">{project.role}</p>
              <div className="project-facts">
                {project.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
              </div>
              <Link href={`/work/${project.slug}/`} className="project-link"><span>Read the case study</span><b>↗</b></Link>
            </div>
            <motion.div className="project-visual-wrap" whileHover={{ scale: 0.992 }} transition={{ type: "spring", stiffness: 220, damping: 24 }}>
              <ProjectVisual type={project.visual} />
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
}
