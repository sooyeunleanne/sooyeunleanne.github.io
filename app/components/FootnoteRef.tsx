/** Jumps to the appendix entry; the entry links back via `#ref-{id}`. */
export function FootnoteRef({ id }: { id: number }) {
  return (
    <a className="footnote-ref" id={`ref-${id}`} href={`#note-${id}`} aria-label={`See note ${id}`}>
      [{id}]
    </a>
  );
}
