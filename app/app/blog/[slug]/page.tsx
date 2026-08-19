import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { formatDate, getPost, getPostIndex } from "@/lib/posts";
import { BlogChrome } from "@/components/blog/BlogChrome";
import { NotionBlocks } from "@/components/notion/NotionBlocks";
import { PostToc } from "@/components/blog/PostToc";
import { collectHeadings } from "@/lib/notion/toc";

/* Every post is known at build time, so no slug outside this list is valid —
   which is also what a static export needs in order to emit nothing else. */
export const dynamicParams = false;

/* `output: export` refuses to build a dynamic route with zero paths, but the
   blog is legitimately empty until the first post is published (and on any
   clone without Notion credentials). One unlinked, noindexed stub keeps the
   route valid; it stops being generated as soon as a real post exists. */
const EMPTY_SLUG = "no-posts-yet";

export async function generateStaticParams() {
  const posts = await getPostIndex();
  if (posts.length === 0) return [{ slug: EMPTY_SLUG }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPost(slug);
  if (!post) return { title: `Blog — ${profile.name}`, robots: { index: false, follow: false } };

  const description = post.summary || `A post by ${profile.name}.`;

  return {
    title: `${post.title} — ${profile.name}`,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      publishedTime: post.date,
      authors: [profile.name],
      images: post.cover ? [post.cover.src] : undefined,
    },
    twitter: { card: post.cover ? "summary_large_image" : "summary", title: post.title, description },
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <BlogChrome>
        <header className="post-page-head">
          <h1>Nothing here yet</h1>
          <p className="post-page-lede">
            This post isn&apos;t published.{" "}
            <Link className="prose-link" href="/blog">
              Back to the blog
            </Link>
            .
          </p>
        </header>
      </BlogChrome>
    );
  }

  /* One heading is a section of one — the rail would just be a lone dash. */
  const toc = collectHeadings(post.blocks);

  return (
    <BlogChrome>
      {toc.length > 1 && <PostToc entries={toc} />}

      <article className="post-article">
        <header className="post-page-head">
          <Link className="post-back" href="/blog">
            ← All posts
          </Link>
          <h1>{post.title}</h1>
          <p className="post-page-meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            {post.readingMinutes} min read
          </p>
          {post.tags.length > 0 && (
            <div className="tag-list">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </header>

        {post.cover?.width && post.cover.height && (
          <Image
            className="post-cover"
            src={post.cover.src}
            alt=""
            width={post.cover.width}
            height={post.cover.height}
            sizes="(max-width: 760px) 100vw, 720px"
            priority
          />
        )}

        <div className="prose">
          <NotionBlocks blocks={post.blocks} />
        </div>
      </article>
    </BlogChrome>
  );
}
