"use client";

import Image from "next/image";
import { profile } from "@/data/site";
import { usePointerTilt } from "@/hooks/usePointerTilt";

/** Portrait card that tilts toward the pointer, with badges floating in 3D. */
export default function About() {
  const { x, y, bind } = usePointerTilt();
  const { about } = profile;

  return (
    <section id="about" className="container section about">
      <div className="portrait-stage" {...bind}>
        <div className="portrait" style={{ transform: `rotateX(${(-y * 14).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg)` }}>
          <div className="portrait-img">
            {about.portrait ? (
              <Image src={about.portrait} alt={`Portrait of ${profile.name}`} fill sizes="400px" className="media-img" />
            ) : (
              <div className="media-placeholder" aria-hidden="true">{profile.name[0]}</div>
            )}
          </div>
          <div className="float-badge location">
            <span className="muted small">Based in</span>
            <strong>{profile.location}</strong>
          </div>
          {profile.openToWork && (
            <div className="float-badge status">
              <span className="status-dot" />
              Open to work
            </div>
          )}
        </div>
      </div>

      <div className="about-copy">
        <span className="eyebrow">About me</span>
        <h2 className="section-title">{about.title}</h2>
        <p className="body-lg">{about.body}</p>
        <div className="stats">
          {about.stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
