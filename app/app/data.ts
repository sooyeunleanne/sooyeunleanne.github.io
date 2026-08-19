import type { SkillIcon } from "./icons";

export const profile = {
  name: "Leanne Kim",
  initials: "LK",
  /** Split so the footnote marker can attach to the program name alone. */
  program: "Systems Design Engineering",
  programNote: 1,
  school: "University of Waterloo",
  interest: "Interests in Software Engineering: Full Stack, Software Architecture, DevOps",
  /** `note` points at an appendix entry in footnotes.ts. */
  hobbies: [
    { label: "reading", note: 2 },
    { label: "swimming" },
    { label: "travelling", note: 3 },
  ] as { label: string; note?: number }[],
  email: "leanne.kim.tech@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sooyeunleanne/",
    github: "https://github.com/sooyeunleanne",
    // Served from public/ so the link survives a static export to Pages.
    resume: "/resume.pdf",
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
