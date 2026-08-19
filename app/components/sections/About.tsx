import { Fragment } from "react";
import { profile } from "@/data/profile";
import { ProfileLinks } from "@/components/ProfileLinks";
import { FootnoteRef } from "@/components/FootnoteRef";

export function About() {
  const { hobbies } = profile;

  return (
    <section className="hero content-grid" id="about">
      <h1>{profile.name}</h1>
      <p className="hero-headline">
        {profile.program}{" "}
        <span className="hero-specialization">({profile.specialization})</span>
        <FootnoteRef id={profile.programNote} /> @ {profile.school}
      </p>
      <p className="hero-interest">{profile.interest}</p>
      <p className="hero-hobbies">
        Outside of Work:{" "}
        {hobbies.map((hobby, index) => (
          <Fragment key={hobby.label}>
            {index > 0 && (index === hobbies.length - 1 ? ", and " : ", ")}
            {hobby.label}
            {hobby.note && <FootnoteRef id={hobby.note} />}
          </Fragment>
        ))}
        .
      </p>
      <ProfileLinks className="hero-links" />
    </section>
  );
}
