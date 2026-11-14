"use client";

import { useMemo, useState } from "react";
import { categories, projects, type Category } from "@/data/site";
import { ArrowUpRight, Code, Search } from "./Icons";
import ProjectMedia from "./ProjectMedia";

type Filter = "All" | Category;

/** Filterable, searchable grid of every project, for the /projects page. */
export default function ProjectsBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const cat of categories) c[cat] = projects.filter((p) => p.category === cat).length;
    return c;
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (filter === "All" || p.category === filter) &&
        (!q || `${p.title} ${p.summary} ${p.stack.join(" ")}`.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  const filters: Filter[] = ["All", ...categories];

  return (
    <>
      <div className="toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} type="button" className="filter" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f} <span className="count">{counts[f]}</span>
            </button>
          ))}
        </div>
        <label className="search">
          <Search />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or tech…"
          />
        </label>
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} project{visible.length === 1 ? "" : "s"} shown
      </p>

      {visible.length === 0 ? (
        <div className="empty">
          <h2>No projects match</h2>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setFilter("All");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="project-grid">
          {visible.map((p) => (
            <article key={p.slug} className="project-card">
              <div className="card-media">
                <ProjectMedia src={p.image} alt={`${p.title} screenshot`} label={p.title} sizes="(max-width: 760px) 100vw, 400px" />
                {p.status === "Live" && <span className="tag tag-live"><span className="live-dot" />Live</span>}
                {p.status === "In progress" && <span className="tag tag-live is-progress">In progress</span>}
                <span className="tag tag-cat">{p.category}</span>
                {p.featured && <span className="tag tag-featured">Featured</span>}
              </div>
              <div className="card-body">
                <h2>{p.title}</h2>
                <p>{p.summary}</p>
                <span className="stack-line small">{p.stack.join(" · ")}</span>
              </div>
              {(p.links.length > 0 || p.repoUrl) && (
                <div className="card-actions">
                  {p.links.map((l, j) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={`btn ${j === 0 ? "btn-dark btn-demo" : "btn-outline"}`}>
                      {l.label} <ArrowUpRight />
                    </a>
                  ))}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label={`${p.title} source code`}>
                      <Code />
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </>
  );
}
