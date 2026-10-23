import TechIcon from "@/components/TechIcons";

// ---------------------------------------------------------------------------
// Infinite scrolling strip of technology icons. The list is rendered twice and
// the track slides -50%, so the loop is seamless. Pure CSS animation — no JS.
// Decorative by design (aria-hidden), the same tech is listed in Skills.
// ---------------------------------------------------------------------------

export default function TechMarquee({ items, className = "" }) {
  if (!items?.length) return null;

  const group = (copy) => (
    <div className="marquee__group" key={copy} aria-hidden="true">
      {items.map((item) => (
        <span className="marquee__item" key={`${copy}-${item.label}`}>
          <TechIcon name={item.icon} className="marquee__icon" />
          {item.label}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`.trim()} aria-hidden="true">
      <div className="marquee__track">
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
