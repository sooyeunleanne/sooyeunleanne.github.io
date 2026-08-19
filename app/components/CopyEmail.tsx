"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard is unavailable outside secure contexts; fall back to mail client.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="copy-email" onClick={copy} data-copied={copied}>
      <FontAwesomeIcon icon={copied ? faCheck : faEnvelope} aria-hidden="true" />
      Email
      <span className="copy-tip" aria-hidden="true">
        {copied ? "Copied!" : "Copy email"}
      </span>
      <span className="sr-only" role="status">
        {copied ? `Copied ${email} to clipboard` : ""}
      </span>
    </button>
  );
}
