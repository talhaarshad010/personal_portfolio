"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { faqs } from "@/data/site";
import { Plus } from "./Icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section id="faq" className="container section faq">
      <div className="faq-intro">
        <h2 className="section-title">Questions</h2>
        <p className="body-lg">
          Anything else? <Link href="/#contact">Send me a message.</Link>
        </p>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          const panelId = `${uid}-panel-${i}`;
          return (
            <div key={f.q} className="faq-item" data-open={isOpen}>
              <h3>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <Plus />
                </button>
              </h3>
              <div id={panelId} className="faq-a" role="region" inert={!isOpen}>
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
