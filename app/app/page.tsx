import { profile } from "@/data/profile";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Extracurriculars } from "@/components/sections/Extracurriculars";
import { Awards } from "@/components/sections/Awards";
import { Blog } from "@/components/sections/Blog";

/* Order here drives the rail's numbering; each section repeats its own number,
   so the two lists have to be reordered together. */
const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "extracurriculars", label: "Extracurriculars" },
  { id: "awards", label: "Awards" },
  { id: "blog", label: "Blog" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Sidebar name={profile.name} items={navItems} />

      <main className="main-content">
        <About />
        <Work />
        <Projects />
        <Skills />
        <Extracurriculars />
        <Awards />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}
