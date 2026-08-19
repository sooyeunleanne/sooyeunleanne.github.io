import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "@/data/skills";
import { skillIcons } from "@/lib/icons";
import { CollapsibleSection } from "@/components/CollapsibleSection";

export function Skills() {
  return (
    <CollapsibleSection id="skills" number="03" title="Toolkit">
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
    </CollapsibleSection>
  );
}
