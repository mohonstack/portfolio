"use client";

import { useEffect, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Scroll-reveal wrapper: fades/slides children up the first time they enter
// the viewport. Pure CSS transitions + one IntersectionObserver, so it stays
// tiny and respects prefers-reduced-motion through the global CSS override.
// ---------------------------------------------------------------------------

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Show immediately when the user prefers reduced motion or the browser
    // lacks IntersectionObserver — content must never be stuck invisible.
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);

    // Safety net: some browsers count an element's own clip-path toward its
    // intersection rect, which could starve the observer forever. Guarantee
    // the content shows up no matter what.
    const safety = window.setTimeout(() => setVisible(true), 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""} ${className}`.trim()}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
