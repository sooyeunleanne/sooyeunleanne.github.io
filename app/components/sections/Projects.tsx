import { projects } from "@/data/projects";
import { ProjectGallery } from "@/components/ProjectGallery";
import { CollapsibleSection } from "@/components/CollapsibleSection";

export function Projects() {
  return (
    <CollapsibleSection id="projects" number="02" title="Projects">
      <ProjectGallery projects={projects} />
    </CollapsibleSection>
  );
}
