import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../../data";
import { skillIcons } from "../../icons";

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
                <li key={item.name}>
                  <FontAwesomeIcon icon={skillIcons[item.icon]} aria-hidden="true" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
