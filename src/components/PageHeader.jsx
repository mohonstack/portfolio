import Reveal from "@/components/Reveal";

// Consistent header for every sub-route: animated eyebrow, title and intro.
export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="page-head">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="page-head__title">{title}</h1>
        </Reveal>
        {intro ? (
          <Reveal delay={180}>
            <p className="page-head__intro">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
