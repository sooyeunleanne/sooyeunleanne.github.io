import type { SkillIcon } from "@/lib/icons";

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
