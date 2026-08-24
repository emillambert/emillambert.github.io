import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectVisual } from "@/components/ProjectVisual";
import { flagshipProjects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return flagshipProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <Nav />
      <section className={`project-page project-page-${project.visual}`}>
        <div className="project-page-head">
          <p className="eyebrow">{project.index} / {project.kicker}</p>
          <h1>{project.title}</h1>
          <p className="project-page-summary">{project.summary}</p>
          <div className="project-page-meta"><span>{project.status}</span><span>{project.year}</span><span>{project.role}</span></div>
        </div>
        <div className="project-page-visual"><ProjectVisual type={project.visual} /></div>
        <div className="project-page-body">
          <div className="project-page-facts">
            {project.facts.map((fact) => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}
          </div>
          <div className="project-page-copy">
            <p>{project.note ?? "A compact project overview. Detailed technical artifacts are linked where public."}</p>
            <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-actions">
              {project.github ? <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a> : null}
              {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live project ↗</a> : null}
              <Link href="/#work">Back to work</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
