import { posts } from "../../data";

export function More() {
  return (
    <section className="section writing-section content-grid" id="more">
      <div className="section-heading">
        <span className="section-number">06</span>
        <h2>More — notes &amp; writing</h2>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <article className="post" key={post.title}>
            <div>
              <p className="post-date">
                {post.date} <span>/</span> {post.readTime}
              </p>
              <h3>{post.title}</h3>
            </div>
            <p className="post-category">
              {post.category} <span aria-hidden="true">↗</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
