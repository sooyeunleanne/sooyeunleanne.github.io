import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";

export function Projects() {
  return (
    <section className="section content-grid" id="projects">
      <div className="section-heading">
        <span className="section-number">03</span>
        <h2>Projects</h2>
      </div>
      <ProjectGallery projects={projects} />
    </section>
  );
}
