import { awards } from "@/data/awards";
import { CollapsibleSection } from "@/components/CollapsibleSection";

export function Awards() {
  return (
    <CollapsibleSection id="awards" number="05" title="Awards & recognition">
      <ul className="award-list">
        {awards.map((award) => (
          <li key={award.title}>
            <span className="award-name">
              {award.title} <span className="award-amount">({award.amount})</span>
            </span>
            <span className="award-meta">
              {award.issuer && `${award.issuer} · `}
              {award.date}
            </span>
            {award.note && <span className="award-note">{award.note}</span>}
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}
