"use client";

import { motion, useReducedMotion } from "motion/react";
import { labProjects } from "@/data/projects";

export function LabGrid() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="lab-grid">
      {labProjects.map((project, index) => {
        const card = (
          <motion.article
            className={`lab-card lab-${project.accent}`}
            whileHover={reduceMotion ? undefined : { y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
          >
            <span className="lab-index">{String(index + 1).padStart(2, "0")}</span>
            <p className="lab-eyebrow">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="lab-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            {project.href ? <span className="lab-open">Open ↗</span> : <span className="lab-open muted">Private / internal</span>}
          </motion.article>
        );
        return project.href ? <a key={project.title} href={project.href} target="_blank" rel="noreferrer" className="lab-card-link">{card}</a> : <div key={project.title} className="lab-card-link">{card}</div>;
      })}
    </div>
  );
}
