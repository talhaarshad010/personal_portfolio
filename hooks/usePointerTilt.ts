"use client";

import { useCallback, useEffect, useState } from "react";
import type { PointerEvent } from "react";

/**
 * Tracks the pointer position over an element as -0.5…0.5 on each axis,
 * so components can turn it into a 3D tilt. Respects prefers-reduced-motion.
 */
export function usePointerTilt() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLElement>) => {
      if (reduced || e.pointerType === "touch") return;
      const r = e.currentTarget.getBoundingClientRect();
      setPos({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
    },
    [reduced],
  );

  const onPointerLeave = useCallback(() => setPos({ x: 0, y: 0 }), []);

  return { x: pos.x, y: pos.y, bind: { onPointerMove, onPointerLeave } };
}
