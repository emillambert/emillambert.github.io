export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  status: string;
  year: string;
  summary: string;
  role: string;
  facts: { value: string; label: string }[];
  tags: string[];
  visual: "millie" | "cascade" | "vista" | "overlap" | "aerodelft" | "newton";
  github?: string;
  live?: string;
  note?: string;
};

export const flagshipProjects: Project[] = [
  {
    slug: "millie",
    index: "01",
    title: "Millie",
    kicker: "Space instrumentation",
    status: "Active",
    year: "2026",
    summary: "Compact, low-cost instrumentation for proliferated measurements of the upper atmosphere.",
    role: "Concept · systems · evidence",
    facts: [
      { value: "THERMOSPHERE", label: "Domain" },
      { value: "PROLIFERATED", label: "Architecture" },
      { value: "MODELED → TEST", label: "Evidence path" }
    ],
    tags: ["Aerospace", "Instrumentation", "Systems engineering", "Python"],
    visual: "millie",
    note: "Development work is ongoing; modeled, measured and target claims are kept explicitly separated."
  },
  {
    slug: "cascade",
    index: "02",
    title: "CASCADE",
    kicker: "Autonomous Earth observation",
    status: "Research software",
    year: "2026",
    summary: "An onboard decision engine for deciding which Earth-observation data is worth sending home.",
    role: "Research · modeling · software",
    facts: [
      { value: "99.1%", label: "Simulated downlink reduction" },
      { value: "38.3%", label: "Simulated energy saving" },
      { value: "100", label: "Monte Carlo seeds" }
    ],
    tags: ["SmallSat", "Earth observation", "MDP", "MODIS", "Python"],
    visual: "cascade",
    github: "https://github.com/emillambert/CASCADE",
    note: "Headline reductions are synthetic-benchmark results; the real-scene replay is treated separately from labeled drought validation."
  },
  {
    slug: "vista",
    index: "03",
    title: "Team VISTA",
    kicker: "Venus aerobot",
    status: "TU Delft DSE",
    year: "2026",
    summary: "Deployment architecture for a Venus aerobot, from atmospheric entry through parachute sequencing to float.",
    role: "Deployment subsystem · N₂/ISRU interface",
    facts: [
      { value: "~689 KG", label: "Entry mass baseline" },
      { value: "200 G", label: "Design cap" },
      { value: "56 KM", label: "Target float altitude" }
    ],
    tags: ["Venus", "Entry systems", "Reliability", "Systems engineering"],
    visual: "vista"
  },
  {
    slug: "overlap",
    index: "04",
    title: "Overlap",
    kicker: "Travel product",
    status: "Shipped",
    year: "2026",
    summary: "Personalized travel guides built around the person taking the trip, not a generic itinerary template.",
    role: "Founder · product · engineering",
    facts: [
      { value: "FOUNDER", label: "Role" },
      { value: "PRODUCTION", label: "Product status" },
      { value: "PAID", label: "Customer validation" }
    ],
    tags: ["Startup", "Product", "Astro", "Cloudflare"],
    visual: "overlap",
    live: "https://overlaptrips.com"
  },
  {
    slug: "aerodelft",
    index: "05",
    title: "AeroDelft",
    kicker: "Aerospace leadership",
    status: "Experience",
    year: "2 years",
    summary: "Two years helping build and lead a student aerospace organization across management, partnerships and operations.",
    role: "Business Manager · partnerships",
    facts: [
      { value: "~5 FTE", label: "Managed" },
      { value: "BOARD", label: "Leadership" },
      { value: "2 YEARS", label: "Team experience" }
    ],
    tags: ["Leadership", "Partnerships", "Finance", "Aerospace"],
    visual: "aerodelft"
  },
  {
    slug: "newton",
    index: "06",
    title: "Newton",
    kicker: "AI × aerospace",
    status: "Early stage",
    year: "2026",
    summary: "Exploring how AI can shorten aerospace development cycles and make systems engineering less painfully slow.",
    role: "Founder · product exploration",
    facts: [
      { value: "AI", label: "Tooling" },
      { value: "SYSTEMS", label: "Focus" },
      { value: "EARLY", label: "Stage" }
    ],
    tags: ["AI", "Systems engineering", "Aerospace", "Product"],
    visual: "newton"
  }
];

export type LabProject = {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  href?: string;
  accent: string;
};

export const labProjects: LabProject[] = [
  {
    title: "MOON",
    eyebrow: "Lunar systems",
    description: "Research ingestion, world modeling, architecture trades and optimization for a staged lunar economy.",
    tags: ["Python", "Optimization", "Systems"],
    accent: "moon"
  },
  {
    title: "Earth Guide",
    eyebrow: "AI field guide",
    description: "A phone-first electronic field guide to Earth that deliberately behaves like a Guide, not a chatbot.",
    tags: ["Next.js", "OpenAI", "PWA"],
    href: "https://github.com/emillambert/earth-guide",
    accent: "guide"
  },
  {
    title: "QATIS",
    eyebrow: "OSINT + AI",
    description: "Multi-source collection and AI-assisted evaluation with PMESII tags, Admiralty codes and structured exports.",
    tags: ["Python", "OSINT", "LLM"],
    href: "https://github.com/emillambert/QATIS",
    accent: "qatis"
  },
  {
    title: "Artemis II HRP",
    eyebrow: "Space health",
    description: "Statistical methodology for sparse multimodal human-performance data using hierarchical Bayesian models and Stan.",
    tags: ["R", "Stan", "Bayesian"],
    accent: "artemis"
  },
  {
    title: "RSNA Knee",
    eyebrow: "Medical imaging ML",
    description: "Cross-validated knee abnormality detection experiments with a self-hosted GPU validation harness.",
    tags: ["ML", "PyTorch", "Validation"],
    accent: "rsna"
  },
  {
    title: "EMT Drill",
    eyebrow: "Learning tool",
    description: "Scenario-based clinical decision practice for EMT students: choose what to do next, then review the sequence.",
    tags: ["Next.js", "Education", "UX"],
    href: "https://github.com/emillambert/emt-drill",
    accent: "emt"
  },
  {
    title: "SA2 Chokepoint",
    eyebrow: "Analysis tooling",
    description: "A compact application for exploring strategic chokepoints and structured intelligence-analysis outputs.",
    tags: ["Python", "Analysis", "OSINT"],
    href: "https://github.com/emillambert/sa2_chokepoint_app",
    accent: "sa2"
  },
  {
    title: "WriteWise",
    eyebrow: "AI writing",
    description: "An early full-stack experiment around AI-assisted writing, including browser-extension and web surfaces.",
    tags: ["JavaScript", "Extension", "AI"],
    href: "https://github.com/emillambert/WriteWise",
    accent: "writewise"
  },
  {
    title: "Workflow Orchestrator",
    eyebrow: "Agent infrastructure",
    description: "A tailnet-local orchestration experiment for structured, resumable AI build workflows.",
    tags: ["TypeScript", "Agents", "Automation"],
    accent: "workflow"
  },
  {
    title: "Costa Rica I-Spy",
    eyebrow: "Tiny side quest",
    description: "A family wildlife checklist built for a Costa Rica trip because a spreadsheet would have been boring.",
    tags: ["TypeScript", "Travel", "Wildlife"],
    accent: "costarica"
  }
];

export function getProject(slug: string) {
  return flagshipProjects.find((project) => project.slug === slug);
}
