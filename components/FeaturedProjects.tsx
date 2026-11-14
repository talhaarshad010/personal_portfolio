import Link from "next/link";
import { projects } from "@/data/site";
import { ArrowRight, ArrowUpRight, Code } from "./Icons";
import ProjectMedia from "./ProjectMedia";
import Reveal from "./Reveal";

const host = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

/** Three featured projects as zig-zag rows, plus a link to the full list. */
export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="container section">
      <div className="section-head">
        <h2 className="section-title">Projects</h2>
        <span className="muted">Production work across web and mobile.</span>
      </div>

      <div className="featured-list">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <article className="project-row">
              <div className="browser">
                <div className="browser-bar">
                  <div className="dots" aria-hidden="true"><span /><span /><span /></div>
                  <span className="url">{p.links[0] ? host(p.links[0].url) : p.title}</span>
                  {p.status === "Live" && <span className="live-badge"><span className="live-dot" />Live</span>}
                </div>
                <div className="browser-screen">
                  <ProjectMedia src={p.image} alt={`${p.title} screenshot`} label={p.title} sizes="(max-width: 900px) 100vw, 640px" />
                </div>
              </div>

              <div className="row-body">
                <div className="row-text">
                  <span className="row-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="stack-line">{p.stack.join(" · ")}</span>
                </div>
                {(p.links.length > 0 || p.repoUrl) && (
                  <div className="actions">
                    {p.links.map((l, j) => (
                      <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={`btn ${j === 0 ? "btn-dark btn-demo" : "btn-outline"}`}>
                        {l.label} <ArrowUpRight />
                      </a>
                    ))}
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <Code /> Source code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="show-all">
        <Link href="/projects" className="btn btn-dark btn-lg">
          Show all projects <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
