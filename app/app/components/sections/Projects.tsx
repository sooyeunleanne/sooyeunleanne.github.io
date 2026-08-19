import { projects } from "../../data";

export function Projects() {
  return (
    <section className="section content-grid" id="projects">
      <div className="section-heading">
        <span className="section-number">03</span>
        <h2>Projects</h2>
      </div>
      <div className="work-list">
        {projects.map((item) => (
          <article className="work-item" key={item.title}>
            <p className="item-year">{item.year}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="item-org">{item.role}</p>
              <p className="item-description">{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="item-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
