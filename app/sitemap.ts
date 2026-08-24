import type { MetadataRoute } from "next";
import { flagshipProjects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://emilwl.me";
  return [
    { url: base, priority: 1 },
    { url: `${base}/about/`, priority: 0.8 },
    { url: `${base}/cv/`, priority: 0.8 },
    { url: `${base}/lab/`, priority: 0.7 },
    ...flagshipProjects.map((project) => ({ url: `${base}/work/${project.slug}/`, priority: 0.7 }))
  ];
}
