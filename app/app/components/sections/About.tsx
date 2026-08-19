import { profile } from "../../data";

export function About() {
  return (
    <section className="hero content-grid" id="about">
      <p className="eyebrow">
        {profile.role} <span className="dot" /> {profile.location}
      </p>
      <div className="hero-copy">
        <h1>{profile.intro}</h1>
        <div className="hero-footer">
          <p>{profile.bio}</p>
          <a className="text-link" href={`mailto:${profile.email}`}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="status-note">
        <span className="pulse" /> {profile.availability}
      </div>
    </section>
  );
}
