import type { Season } from "@/lib/icons";

export type Experience = {
  term: string;
  season: Season;
  title: string;
  org: string;
  location: string;
  logo: { src: string; width: number; height: number; scale?: number };
  /** Keywords shown while collapsed; the overview replaces them once expanded. */
  summary: string[];
  overview: string;
  /** Bullet copy supports **bold** spans, rendered by the RichText component. */
  bullets: string[];
  tags: string[];
};

export const work: Experience[] = [
  {
    term: "Jan – Apr 2026",
    season: "winter",
    title: "Software Engineer Intern",
    org: "CIBC",
    location: "Toronto, ON",
    logo: { src: "/logo/CIBC.svg.webp", width: 1280, height: 325 },
    summary: ["CI/CD automation", "Kubernetes", "Cloud infrastructure", "Release engineering"],
    overview:
      "Automating deployment and release validation for a national bank, and standing up the cloud infrastructure behind its enterprise data exchange platform.",
    bullets: [
      "Accelerated the full deployment pipeline from a **5h to 30min** process, automating CI/CD workflows across **4 environments** with GitHub Actions, Docker, and Kubernetes.",
      "Cut recurring deployment validation time by **92%**, automating release and security checks with Linux scripting.",
      "Architected **EDIx DevOps infrastructure** across **4 environments**, provisioning ARO, PostgreSQL, SSO, SPN authentication, and DNS for production deployment.",
    ],
    tags: ["GitHub Actions", "Docker", "Kubernetes", "ARO", "PostgreSQL", "Linux"],
  },
  {
    term: "May – Aug 2025",
    season: "summer",
    title: "Software Engineer Intern",
    org: "CI Technologies",
    location: "Vancouver, BC",
    logo: { src: "/logo/Versaterm.png", width: 1200, height: 198 },
    summary: ["Platform development", "Data modeling", "Performance", "Mentorship"],
    overview:
      "Shipped a template marketplace end to end and solo, unifying five schemas across four enterprise applications while mentoring two developers.",
    bullets: [
      "Cut template setup time from **2h to 10min**, independently shipping a marketplace platform across **4 enterprise applications** in 2 months.",
      "Unified **5 heterogeneous template schemas** into a reusable data model, enabling cross-application sharing and reducing maintenance overhead.",
      "Reduced dashboard load time by **65%** by replacing **10K+ record queries** with 50-record pagination and caching.",
      "Mentored **2 developers** in debugging, Git, and system design, codifying workflows into **reusable onboarding guides** for future co-ops.",
    ],
    tags: ["Schema design", "Caching", "Pagination", "Mentorship"],
  },
  {
    term: "Sep 2024 – Apr 2025",
    season: "fall",
    title: "Full Stack Developer Intern",
    org: "InvestMint",
    location: "Toronto, ON",
    logo: { src: "/logo/InvestMint.png", width: 1048, height: 238, scale: 1.15 },
    summary: ["Full-stack development", "Fintech", "Workflow automation", "Data visualization"],
    overview:
      "Turned an internal Python ETF engine into a self-serve client portal with real-time portfolio and cash liquidity analysis.",
    bullets: [
      "Expedited client onboarding from **3 days to 5min**, replacing CEO-mediated emails and manual Python execution with a **self-service workflow**.",
      "Integrated InvestMint's **Python ETF recommendation engine** into a real-time portfolio dashboard for **$10K+ investment decisions**.",
      "Built a **cash liquidity calculator** that transformed imported Excel cash-flow data into real-time asset, liability, and liquidity analysis.",
    ],
    tags: ["Python", "Fintech", "Real-time dashboards", "Full stack"],
  },
  {
    term: "Jan – Apr 2024",
    season: "winter",
    title: "Software Developer Intern",
    org: "Ministry of Transportation",
    location: "Mississauga, ON",
    // The Ontario asset carries wide internal padding, so it needs scaling up to
    // sit at the same optical weight as the tightly-cropped wordmarks.
    logo: { src: "/logo/Ontario.png", width: 3600, height: 1440, scale: 1.7 },
    summary: ["Full-stack development", "Spring Boot", "Public sector", "Data pipelines"],
    overview:
      "Built two public-facing portals for Ontario's new towing legislation, spanning frontend, backend, and data pipelines through launch.",
    bullets: [
      "Full-stack engineered **2 portal applications** for Ontario's new towing legislation, spanning frontend and backend development through launch.",
      "Optimized **Spring Boot data pipelines by 25%** with state management, validation, and real-time alerting to process **3K+ complaint filings** into structured PDF outputs.",
    ],
    tags: ["Angular", "TypeScript", "Spring Boot", "Node.js", "Oracle"],
  },
];
