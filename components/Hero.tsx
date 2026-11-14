import Link from "next/link";
import { profile, projects } from "@/data/site";
import { Download } from "./Icons";

/** Hero copy + three project cards fanned in 3D that spread apart on hover. */
export default function Hero() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  // Back-to-front: third, second, first (first sits on top).
  const fan = [featured[2], featured[1], featured[0]].filter(Boolean);

  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <h1>
          {profile.headline} <em>{profile.headlineAccent}</em>
        </h1>
        <p className="lead">{profile.intro}</p>
        <div className="actions">
          <Link href="/#projects" className="btn btn-accent">See my projects</Link>
          <Link href="/#contact" className="btn btn-outline">Get in touch</Link>
          <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-outline">
            <Download /> Download CV
          </a>
        </div>
      </div>

      <div className="fan-stage" aria-hidden="true">
        <div className="fan">
          {fan.map((p, i) => (
            <div key={p.slug} className={`fan-card c${i + 1}`}>
              <div className="fan-thumb" style={p.image ? { backgroundImage: `url(${p.image})` } : undefined} />
              <span className="fan-title">{p.title}</span>
              <span className="fan-meta">{p.category} · {p.stack[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
