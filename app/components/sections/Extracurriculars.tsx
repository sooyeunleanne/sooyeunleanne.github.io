import { involvements } from "@/data/extracurriculars";
import { InvolvementItem } from "@/components/InvolvementItem";

export function Extracurriculars() {
  return (
    <section className="section content-grid" id="extracurriculars">
      <div className="section-heading">
        <span className="section-number">04</span>
        <h2>Extracurriculars</h2>
      </div>
      <div className="involvement-list">
        {involvements.map((involvement, index) => (
          <InvolvementItem
            key={involvement.org}
            involvement={involvement}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
