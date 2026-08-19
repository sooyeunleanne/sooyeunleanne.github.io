import { extracurriculars, posts, profile, projects, recognition, skills, work } from "./data";
import { Sidebar } from "./components/Sidebar";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "extracurriculars", label: "Extracurriculars" },
  { id: "awards", label: "Awards" },
  { id: "more", label: "More" },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Sidebar
        initials={profile.initials}
        name={profile.name}
        email={profile.email}
        links={profile.links}
        items={navItems}
      />

      <main className="main-content">
        <section className="hero content-grid" id="about">
          <p className="eyebrow">{profile.role} <span className="dot" /> {profile.location}</p>
          <div className="hero-copy">
            <h1>{profile.intro}</h1>
            <div className="hero-footer">
              <p>{profile.bio}</p>
              <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="status-note"><span className="pulse" /> {profile.availability}</div>
        </section>

        <section className="section content-grid" id="skills">
          <div className="section-heading"><span className="section-number">01</span><h2>Toolkit</h2></div>
          <div className="skills-grid">{skills.map((skill) => <div className="skill-group" key={skill.group}><h3>{skill.group}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
        </section>

        <section className="section content-grid" id="work">
          <div className="section-heading"><span className="section-number">02</span><h2>Selected work</h2></div>
          <div className="work-list">
            {work.map((item) => (
              <article className="work-item" key={`${item.org}-${item.title}`}>
                <p className="item-year">{item.year}</p>
                <div><h3>{item.title}</h3><p className="item-org">{item.org}</p><p className="item-description">{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <span className="item-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section content-grid" id="projects">
          <div className="section-heading"><span className="section-number">03</span><h2>Projects</h2></div>
          <div className="work-list">
            {projects.map((item) => (
              <article className="work-item" key={item.title}>
                <p className="item-year">{item.year}</p>
                <div><h3>{item.title}</h3><p className="item-org">{item.role}</p><p className="item-description">{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <span className="item-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section content-grid" id="extracurriculars">
          <div className="section-heading"><span className="section-number">04</span><h2>Extracurriculars</h2></div>
          <div className="activity-list">{extracurriculars.map((activity) => <div className="activity" key={activity.title}><span className="activity-meta">{activity.meta}</span><div><h3>{activity.title}</h3><p>{activity.detail}</p></div></div>)}</div>
        </section>

        <section className="section content-grid" id="awards">
          <div className="section-heading"><span className="section-number">05</span><h2>Awards &amp; recognition</h2></div>
          <div className="recognition-list">{recognition.map((item) => <div className="recognition" key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.issuer}</p></div></div>)}</div>
        </section>

        <section className="section writing-section content-grid" id="more">
          <div className="section-heading"><span className="section-number">06</span><h2>More — notes &amp; writing</h2></div>
          <div className="post-list">{posts.map((post) => <article className="post" key={post.title}><div><p className="post-date">{post.date} <span>/</span> {post.readTime}</p><h3>{post.title}</h3></div><p className="post-category">{post.category} <span aria-hidden="true">↗</span></p></article>)}</div>
        </section>

        <footer className="footer content-grid">
          <div><p className="eyebrow">Have a question, idea, or good book?</p><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span></div>
        </footer>
      </main>
    </div>
  );
}
