import { work } from "../../data";

export function Work() {
  return (
    <section className="section content-grid" id="work">
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2>Selected work</h2>
      </div>
      <div className="work-list">
        {work.map((item) => (
          <article className="work-item" key={`${item.org}-${item.title}`}>
            <p className="item-year">{item.year}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="item-org">{item.org}</p>
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
