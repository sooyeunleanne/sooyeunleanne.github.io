import { profile } from "../../data";
import { ProfileLinks } from "../ProfileLinks";

export function About() {
  return (
    <section className="hero content-grid" id="about">
      <h1>{profile.name}</h1>
      <p className="hero-headline">{profile.headline}</p>
      <p className="hero-interest">{profile.interest}</p>
      <ProfileLinks className="hero-links" />
    </section>
  );
}
