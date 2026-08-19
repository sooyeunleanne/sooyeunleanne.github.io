import { involvements } from "@/data/extracurriculars";
import { InvolvementItem } from "@/components/InvolvementItem";
import { CollapsibleSection } from "@/components/CollapsibleSection";

export function Extracurriculars() {
  return (
    <CollapsibleSection id="extracurriculars" number="04" title="Extracurriculars">
      <div className="involvement-list">
        {involvements.map((involvement, index) => (
          <InvolvementItem
            key={involvement.org}
            involvement={involvement}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </CollapsibleSection>
  );
}
