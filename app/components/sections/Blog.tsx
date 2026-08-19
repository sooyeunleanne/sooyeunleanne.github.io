import Link from "next/link";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { formatDate, getPostIndex } from "@/lib/posts";

/** Newest few posts on the home page; the rest live at /blog. */
const PREVIEW_COUNT = 4;

export async function Blog() {
  const posts = await getPostIndex();
  const preview = posts.slice(0, PREVIEW_COUNT);

  return (
    <CollapsibleSection id="blog" number="06" title="Blog posts" className="writing-section">
      {preview.length === 0 ? (
        <div className="coming-soon">
          <p className="coming-soon-title">Coming soon!</p>
          <p className="coming-soon-copy">
            I&apos;m working on writing up what I&apos;ve been building and learning. Check back shortly.
          </p>
        </div>
      ) : (
        <>
          <div className="post-list">
            {preview.map((post) => (
              <Link className="post" key={post.slug} href={`/blog/${post.slug}`}>
                <div>
                  <p className="post-date">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    {post.readingMinutes} min read
                  </p>
                  <h3>{post.title}</h3>
                  {post.summary && <p className="post-summary">{post.summary}</p>}
                </div>
                <p className="post-category">
                  <span>→</span>
                </p>
              </Link>
            ))}
          </div>
          {posts.length > preview.length && (
            <Link className="post-more" href="/blog">
              All {posts.length} posts →
            </Link>
          )}
        </>
      )}
    </CollapsibleSection>
  );
}
