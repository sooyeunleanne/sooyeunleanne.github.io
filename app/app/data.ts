import type { SkillIcon } from "./icons";

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
