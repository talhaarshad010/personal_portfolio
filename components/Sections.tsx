import { experience, process, services, techStack, testimonials } from "@/data/site";
import Reveal from "./Reveal";

export function Services() {
  return (
    <section id="services" className="container section">
      <h2 className="section-title">What I do</h2>
      <div className="grid">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="card lift">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TechStack() {
  return (
    <section id="stack" className="container section">
      <h2 className="section-title">Tech stack</h2>
      <div className="grid perspective">
        {techStack.map((g, i) => (
          <Reveal key={g.label} delay={i * 80} className="card">
            <span className="label">{g.label}</span>
            <div className="chips">
              {g.items.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container section">
      <h2 className="section-title">Experience &amp; education</h2>
      <ol className="timeline">
        {experience.map((j, i) => (
          <li key={i} className="job">
            <div className="job-card">
              <div className="job-main">
                <h3>{j.role}</h3>
                <p>{j.body}</p>
              </div>
              <span className="job-period">{j.period}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="container section">
      <h2 className="section-title">How I work</h2>
      <div className="grid perspective">
        {process.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="step">
            <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
            <div className="step-text">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="container section">
      <h2 className="section-title">Kind words</h2>
      <div className="grid grid-wide">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 80} className="card lift quote">
            <blockquote>“{t.quote}”</blockquote>
            <div className="person">
              <span className="avatar" aria-hidden="true" />
              <div>
                <strong>{t.name}</strong>
                <span className="muted small">{t.title}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
