import { profile } from "@/data/profile";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Extracurriculars } from "@/components/sections/Extracurriculars";
import { Awards } from "@/components/sections/Awards";
import { Blog } from "@/components/sections/Blog";
import { Appendix } from "@/components/sections/Appendix";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
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
        <Skills />
        <Work />
        <Projects />
        <Extracurriculars />
        <Awards />
        <Blog />
        <Appendix />
        <Footer />
      </main>
    </div>
  );
}
