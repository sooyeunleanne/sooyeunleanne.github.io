export const profile = {
  name: "Leanne Kim",
  initials: "LK",
  /** Split so the footnote marker and the muted specialization can be styled apart. */
  program: "Systems Design Engineering",
  specialization: "Specialization: Software Engineering",
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
