import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = { title: "CV", description: "Curriculum vitae of Emil Lambert." };

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => <section className="cv-section"><h2>{title}</h2><div>{children}</div></section>;

export default function CvPage() {
  return (
    <main>
      <Nav />
      <section className="cv-page">
        <header className="cv-header">
          <p className="eyebrow">CURRICULUM VITAE</p>
          <h1>Emil Wes Lambert</h1>
          <p>Aerospace engineering · systems · AI · startups</p>
          <div className="cv-links"><a href="mailto:E.W.Lambert@student.tudelft.nl">Email</a><a href="https://www.linkedin.com/in/emilwl/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/emillambert" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </header>

        <Section title="Experience">
          <article className="cv-item"><div><strong>Overlap</strong><span>Founder</span></div><p>Product strategy, software development, destination-research methodology, business development and commercial validation for personalized travel guides.</p></article>
          <article className="cv-item"><div><strong>AeroDelft</strong><span>Business Manager · Partnerships</span></div><p>Management-board experience spanning team leadership, partnerships, financial planning, operations and organizational work in a student aerospace team.</p></article>
        </Section>

        <Section title="Education">
          <article className="cv-item"><div><strong>TU Delft</strong><span>BSc Aerospace Engineering</span></div><p>Aerospace systems design, controls, flight dynamics, production, simulation and the Team VISTA Design Synthesis Exercise.</p></article>
        </Section>

        <Section title="Selected engineering & research">
          <article className="cv-item"><div><strong>Millie</strong><span>Compact thermosphere instrumentation</span></div><p>Systems architecture, evidence planning, modeling, verification structure, manufacturability and hosted-flight concept development.</p></article>
          <article className="cv-item"><div><strong>CASCADE</strong><span>Autonomous Earth-observation research software</span></div><p>Onboard scheduling and triage framework using MODIS-derived crop-stress signals, reproducible synthetic benchmarks and real-scene replay tooling.</p></article>
          <article className="cv-item"><div><strong>Team VISTA</strong><span>Venus aerobot deployment subsystem</span></div><p>Entry-to-float deployment architecture, parachute sequencing, packaging, reliability and N₂/ISRU interface work.</p></article>
          <article className="cv-item"><div><strong>Newton</strong><span>AI × systems engineering</span></div><p>Early-stage product exploration around reducing aerospace development time with AI-enabled engineering workflows.</p></article>
        </Section>

        <Section title="Technical">
          <div className="skills-grid"><span>Python</span><span>TypeScript</span><span>React / Next.js</span><span>Systems engineering</span><span>Simulation & validation</span><span>ML / data workflows</span><span>Cloudflare</span><span>Git / GitHub</span><span>LaTeX</span><span>Technical research</span></div>
        </Section>
      </section>
      <Footer />
    </main>
  );
}
