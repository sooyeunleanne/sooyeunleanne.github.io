import { extracurriculars } from "../../data";

export function Extracurriculars() {
  return (
    <section className="section content-grid" id="extracurriculars">
      <div className="section-heading">
        <span className="section-number">04</span>
        <h2>Extracurriculars</h2>
      </div>
      <div className="activity-list">
        {extracurriculars.map((activity) => (
          <div className="activity" key={activity.title}>
            <span className="activity-meta">{activity.meta}</span>
            <div>
              <h3>{activity.title}</h3>
              <p>{activity.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
