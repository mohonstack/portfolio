"use client";

import { useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Subtle pointer parallax: the wrapper drifts a few pixels opposite the mouse,
// giving the wrapped card a gentle depth effect. Desktop pointers only, and
// disabled entirely for prefers-reduced-motion. Movement is written to CSS
// custom properties inside one rAF so React never re-renders.
// ---------------------------------------------------------------------------

export default function ParallaxTilt({ strength = 10, className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof window.matchMedia !== "function") return undefined;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return undefined;

    let frame = 0;
    const onMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--px", `${(-x * strength).toFixed(2)}px`);
        el.style.setProperty("--py", `${(-y * strength).toFixed(2)}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`parallax ${className}`.trim()}>
      {children}
    </div>
  );
}
