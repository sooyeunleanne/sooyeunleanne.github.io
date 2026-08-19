import { work } from "../../data";
import { seasonIcons } from "../../icons";
import { ExperienceItem } from "../ExperienceItem";

export function Work() {
  return (
    <section className="section content-grid" id="work">
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2>Experience</h2>
      </div>
      <div className="work-list">
        {work.map((item, index) => (
          <ExperienceItem
            key={`${item.org}-${item.title}`}
            term={item.term}
            seasonIcon={seasonIcons[item.season]}
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
    </section>
  );
}
