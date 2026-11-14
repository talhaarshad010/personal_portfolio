"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/data/site";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

const GENERIC_ERROR = "Your message couldn't be sent.";

/** Posts to /api/contact. Every failure offers direct email as a way out. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const sending = status.state === "sending";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !result?.ok) {
        setStatus({ state: "error", message: result?.error ?? GENERIC_ERROR });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: GENERIC_ERROR });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" required maxLength={100} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} />
      </div>

      {/* Honeypot: hidden from people, filled in by bots. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-accent" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite">
        {status.state === "sent" && <p className="form-status success">Thanks, your message is on its way. I&apos;ll reply by email.</p>}
        {status.state === "error" && (
          <p className="form-status error">
            {status.message} You can also email me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
