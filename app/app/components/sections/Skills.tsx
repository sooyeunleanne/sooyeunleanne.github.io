import { skills } from "../../data";

export function Skills() {
  return (
    <section className="section content-grid" id="skills">
      <div className="section-heading">
        <span className="section-number">01</span>
        <h2>Toolkit</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-group" key={skill.group}>
            <h3>{skill.group}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
