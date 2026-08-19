import { awards } from "@/data/awards";

export function Awards() {
  return (
    <section className="section content-grid" id="awards">
      <div className="section-heading">
        <span className="section-number">05</span>
        <h2>Awards &amp; recognition</h2>
      </div>
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
    </section>
  );
}
