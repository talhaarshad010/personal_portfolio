"use client";

import { useEffect, useRef, useState } from "react";

/** Fades and lifts its children into view once they scroll on screen. */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  as?: "div" | "section";
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      id={id}
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
