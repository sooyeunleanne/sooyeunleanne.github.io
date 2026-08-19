import { footnotes } from "@/data/footnotes";

export function Appendix() {
  return (
    <section className="section appendix content-grid" id="appendix">
      <div className="section-heading">
        <span className="section-number">*</span>
        <h2>Appendix</h2>
      </div>
      <ol className="footnote-list">
        {footnotes.map((note) => (
          <li key={note.id} id={`note-${note.id}`}>
            <a
              className="footnote-marker"
              href={`#ref-${note.id}`}
              aria-label={`Back to note ${note.id} in the text`}
            >
              [{note.id}]
            </a>
            <span className="footnote-body">
              <span className="footnote-label">{note.label}:</span>{" "}
              {note.body}
              {note.places && (
                <span className="place-list">
                  {note.places.map((place) => (
                    <span className="place" key={place.country}>
                      <span className="place-flag" aria-hidden="true">
                        {place.flag}
                      </span>
                      {place.country}
                      {place.cities && <span className="place-cities"> ({place.cities})</span>}
                    </span>
                  ))}
                </span>
              )}
              {note.outro && <span className="footnote-outro">{note.outro}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
