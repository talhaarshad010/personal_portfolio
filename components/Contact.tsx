import Link from "next/link";
import { navLinks, profile } from "@/data/site";
import ContactForm from "./ContactForm";
import { Download } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="container section">
      <div className="contact-card">
        <div className="contact-copy">
          <h2>
            Let&apos;s build something <em>good.</em>
          </h2>
          <div className="actions">
            <a href={`mailto:${profile.email}`} className="btn btn-outline-light">{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">LinkedIn</a>
            <a href={profile.cvUrl} download={profile.cvFileName} className="btn btn-outline-light">
              <Download /> Download CV
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="logo light">{profile.name}</span>
        <nav aria-label="Footer" className="footer-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link href="/#top">Back to top ↑</Link>
        </nav>
        <span className="small">© {new Date().getFullYear()} · Built with Next.js</span>
      </div>
    </footer>
  );
}
