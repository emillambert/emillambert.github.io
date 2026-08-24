import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata = { title: "About", description: "About Emil Lambert." };

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="about-page">
        <div className="about-title">
          <p className="eyebrow">ABOUT</p>
          <h1>I like complicated systems.</h1>
        </div>
        <div className="about-grid">
          <div className="portrait-wrap">
            <Image src="https://avatars.githubusercontent.com/u/20247134?v=4" alt="Emil Lambert" width={720} height={720} priority />
            <span>DELFT / NL</span>
          </div>
          <div className="about-copy">
            <p>I study aerospace engineering at TU Delft and spend a fairly unreasonable amount of time building things across aerospace, AI, software and startups.</p>
            <p>The common thread is systems: taking a messy problem with interacting constraints, deciding what actually matters, and turning it into something that works.</p>
            <p>Outside the work: aviation, space, travel, running, museums, reading, learning Dutch and an ongoing collection of side quests.</p>
          </div>
        </div>
        <div className="principles">
          <div><span>01</span><h3>Build the proof.</h3><p>Models, tests, users or artifacts beat adjectives.</p></div>
          <div><span>02</span><h3>Keep assumptions visible.</h3><p>Especially when the system is complicated enough to fool you.</p></div>
          <div><span>03</span><h3>Ship before it is precious.</h3><p>Useful feedback arrives after the thing exists.</p></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
