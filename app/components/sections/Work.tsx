import { work } from "@/data/work";
import { ExperienceItem } from "@/components/ExperienceItem";
import { CollapsibleSection } from "@/components/CollapsibleSection";

export function Work() {
  return (
    <CollapsibleSection id="work" number="01" title="Work Experience">
      <div className="work-list">
        {work.map((item, index) => (
          <ExperienceItem
            key={`${item.org}-${item.title}`}
            term={item.term}
            title={item.title}
            org={item.org}
            location={item.location}
            logo={item.logo}
            summary={item.summary}
            overview={item.overview}
            bullets={item.bullets}
            tags={item.tags}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </CollapsibleSection>
  );
}
