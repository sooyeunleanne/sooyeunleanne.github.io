import { Fragment } from "react";

/** Renders **bold** spans in copy without reaching for dangerouslySetInnerHTML. */
export function RichText({ children }: { children: string }) {
  return (
    <>
      {children.split(/\*\*(.+?)\*\*/g).map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index}>{part}</strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
