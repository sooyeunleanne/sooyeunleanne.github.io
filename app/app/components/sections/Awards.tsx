import { recognition } from "../../data";

export function Awards() {
  return (
    <section className="section content-grid" id="awards">
      <div className="section-heading">
        <span className="section-number">05</span>
        <h2>Awards &amp; recognition</h2>
      </div>
      <div className="recognition-list">
        {recognition.map((item) => (
          <div className="recognition" key={item.title}>
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
