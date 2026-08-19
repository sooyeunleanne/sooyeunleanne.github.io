import { CollapsibleSection } from "@/components/CollapsibleSection";

export function Blog() {
  return (
    <CollapsibleSection id="blog" number="06" title="Blog posts" className="writing-section">
      <div className="coming-soon">
        <p className="coming-soon-title">Coming soon!</p>
        <p className="coming-soon-copy">
          I&apos;m working on writing up what I&apos;ve been building and learning. Check back shortly.
        </p>
      </div>
    </CollapsibleSection>
  );
}
