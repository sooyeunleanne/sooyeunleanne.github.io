import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { formatDate, getPostIndex } from "@/lib/posts";
import { BlogChrome } from "@/components/blog/BlogChrome";

export const metadata: Metadata = {
  title: `Blog — ${profile.name}`,
  description: `Writing by ${profile.name} on software, systems, and what she's building.`,
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getPostIndex();

  return (
    <BlogChrome>
      <header className="post-page-head">
        <p className="post-page-eyebrow">Writing</p>
        <h1>Blog</h1>
        <p className="post-page-lede">
          Notes on what I&apos;ve been building and learning. Written in Notion, published here.
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="coming-soon">
          <p className="coming-soon-title">Coming soon!</p>
          <p className="coming-soon-copy">
            I&apos;m working on writing up what I&apos;ve been building and learning. Check back shortly.
          </p>
        </div>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <Link className="post" key={post.slug} href={`/blog/${post.slug}`}>
              <div>
                <p className="post-date">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  {post.readingMinutes} min read
                </p>
                <h3>{post.title}</h3>
                {post.summary && <p className="post-summary">{post.summary}</p>}
                {post.tags.length > 0 && (
                  <div className="tag-list">
                    {post.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <p className="post-category">
                <span>→</span>
              </p>
            </Link>
          ))}
        </div>
      )}
    </BlogChrome>
  );
}
