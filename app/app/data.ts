import type { Season, SkillIcon } from "./icons";

export const profile = {
  name: "Minh Anh Nguyen",
  initials: "MA",
  role: "Computer Science & Public Policy",
  location: "Boston, MA",
  availability: "Open to research collaborations",
  intro:
    "I study how thoughtful technology can make public systems more legible, accessible, and human.",
  bio:
    "My work sits at the intersection of civic technology, machine learning, and design. I am interested in the small decisions that make complex systems feel more trustworthy.",
  email: "hello@minhanhnguyen.com",
  links: {
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    scholar: "https://scholar.google.com",
  },
};

export const skills: { group: string; items: { name: string; icon: SkillIcon }[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "JavaScript / TypeScript", icon: "js" },
      { name: "SQL", icon: "database" },
      { name: "C / C++", icon: "code" },
      { name: "HTML / CSS", icon: "html5" },
    ],
  },
  {
    group: "Data & Cloud",
    items: [
      { name: "PostgreSQL", icon: "database" },
      { name: "MongoDB", icon: "leaf" },
      { name: "AWS S3", icon: "aws" },
      { name: "Azure", icon: "microsoft" },
      { name: "Red Hat OpenShift", icon: "redhat" },
      { name: "GCP", icon: "google" },
      { name: "Supabase", icon: "bolt" },
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "OpenShift", icon: "redhat" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "github" },
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "send" },
      { name: "JIRA / Confluence", icon: "jira" },
      { name: "Claude Code", icon: "terminal" },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", icon: "leaf" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "layers" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "route" },
      { name: "Angular", icon: "angular" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "React Native", icon: "mobile" },
      { name: "React Query", icon: "rotate" },
      { name: "Django", icon: "server" },
      { name: "Flask", icon: "flask" },
      { name: "FastAPI", icon: "bolt" },
      { name: "TailwindCSS", icon: "wind" },
      { name: "Gemini API", icon: "sparkles" },
    ],
  },
];

/** Bullet copy supports **bold** spans, rendered by the RichText component. */
export const work: {
  term: string;
  season: Season;
  title: string;
  org: string;
  location: string;
  logo: { src: string; width: number; height: number; scale?: number };
  /** Keywords shown while collapsed; the overview replaces them once expanded. */
  summary: string[];
  overview: string;
  bullets: string[];
  tags: string[];
}[] = [
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

export const projects = [
  {
    year: "2025",
    title: "CivicLens",
    role: "Independent project",
    description: "An open dataset and interactive map that translates municipal budget line items into plain-language summaries for residents.",
    tags: ["Next.js", "D3", "Open data"],
  },
  {
    year: "2024",
    title: "Ballot Buddy",
    role: "Hackathon build, HackMIT",
    description: "A text-message assistant that answers plain-language questions about local ballot measures using verified nonpartisan sources.",
    tags: ["Twilio", "NLP", "Civic tech"],
  },
  {
    year: "2023",
    title: "Commute Equity Map",
    role: "Course capstone",
    description: "A visualization comparing public transit access across Boston neighborhoods against commute-time equity benchmarks.",
    tags: ["Python", "GIS", "Data visualization"],
  },
];

export const extracurriculars = [
  { title: "Co-founder, Viet Tech Network", detail: "A peer community for Vietnamese students and early-career technologists.", meta: "2022 - now" },
  { title: "Editor, The Civic Review", detail: "Student publication on technology, cities, and the public good.", meta: "2023 - now" },
  { title: "Volunteer, Boston Public Library", detail: "Digital literacy workshops for first-generation adult learners.", meta: "Monthly" },
];

export const posts = [
  { date: "May 14, 2025", title: "What makes a public dashboard trustworthy?", category: "Notes on civic technology", readTime: "6 min read" },
  { date: "February 02, 2025", title: "Learning to design for the question behind the question", category: "Field notes", readTime: "4 min read" },
  { date: "October 18, 2024", title: "A beginner's guide to reading a city budget", category: "Civic literacy", readTime: "8 min read" },
];

export const recognition = [
  { year: "2025", title: "Public Interest Technology Fellowship", issuer: "Ford Foundation" },
  { year: "2024", title: "Dean's Global Scholarship", issuer: "Northeastern University" },
  { year: "2023", title: "Finalist, Hult Prize Campus", issuer: "Hult International Business School" },
];
