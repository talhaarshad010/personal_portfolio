"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/site";
import { Close, Menu } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={close}>
          {profile.name}
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
        <nav id="primary-nav" aria-label="Primary" className={`nav${open ? " open" : ""}`}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-dark" onClick={close}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
