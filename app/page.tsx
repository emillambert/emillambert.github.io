import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LabGrid } from "@/components/LabGrid";
import { Nav } from "@/components/Nav";
import { FlagshipProjects } from "@/components/FlagshipProjects";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <FlagshipProjects />

      <section className="lab-section" id="lab">
        <div className="section-heading lab-heading">
          <div><p className="eyebrow">02 / LAB / SIDE PROJECTS</p><h2>Side projects.</h2></div>
          <p className="section-intro">Experiments, research systems and tools that did not need a six-month roadmap to become real.</p>
        </div>
        <LabGrid />
      </section>

      <section className="experience-section" id="about">
        <div className="section-heading compact-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h2>Experience across engineering, software and business.</h2>
        </div>
        <div className="timeline">
          <article>
            <span>NOW</span>
            <div><h3>Founder — Overlap</h3><p>Product, software, destination-research systems and commercial validation.</p></div>
          </article>
          <article>
            <span>AERODELFT</span>
            <div><h3>Business Manager</h3><p>Management board, partnerships, finance, operations and team leadership in a student aerospace organization.</p></div>
          </article>
          <article>
            <span>TU DELFT</span>
            <div><h3>Aerospace Engineering</h3><p>Systems design, flight, controls, production and the Team VISTA Venus aerobot DSE.</p></div>
          </article>
        </div>
      </section>

      <section className="about-strip">
        <p className="eyebrow">BEYOND THE WORK</p>
        <div className="about-marquee" aria-label="Interests">
          <span>AVIATION</span><span>SPACE</span><span>TRAVEL</span><span>RUNNING</span><span>READING</span><span>BUILDING RANDOM SHIT</span>
        </div>
      </section>

      <section className="cv-callout">
        <p className="eyebrow">MORE DETAIL</p>
        <a href="/cv/" className="giant-link">View CV <span aria-hidden="true">↗</span></a>
      </section>

      <Footer />
    </main>
  );
}
