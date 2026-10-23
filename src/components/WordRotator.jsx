"use client";

import { useEffect, useState } from "react";

// ---------------------------------------------------------------------------
// Cycles through phrases in the headline with a slide-up fade and a blinking
// terminal-style caret. The visible span is decorative (aria-hidden) and a
// visually-hidden static phrase keeps screen readers and reduced-motion users
// on the first, canonical wording.
// ---------------------------------------------------------------------------

export default function WordRotator({ words, interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !words?.length) return undefined;
    // Static text for reduced-motion users — no rotation at all.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const id = window.setInterval(
      () => setIndex((v) => (v + 1) % words.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [interval, words?.length]);

  if (!words?.length) return null;

  return (
    <span className="rotator" aria-hidden="true">
      <span className="rotator__word" key={index}>
        {words[index]}
      </span>
      <span className="rotator__caret" />
    </span>
  );
}
