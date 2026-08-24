import { Footer } from "@/components/Footer";
import { LabGrid } from "@/components/LabGrid";
import { Nav } from "@/components/Nav";

export const metadata = { title: "Lab", description: "Experiments and side projects by Emil Lambert." };

export default function LabPage() {
  return <main><Nav /><section className="lab-page"><div className="section-heading"><p className="eyebrow">LAB / EXPERIMENTS</p><h1>Useful oddities.</h1><p className="section-intro">Smaller builds, research systems and experiments that do not need a case study.</p></div><LabGrid /></section><Footer /></main>;
}
