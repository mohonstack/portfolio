import { skillGroups } from "@/data/site";
import TechIcon from "@/components/TechIcons";
import Reveal from "@/components/Reveal";

export default function Skills({ withHeader = true }) {
  return (
    <section
      className="section"
      id="skills"
      aria-labelledby={withHeader ? "skills-title" : undefined}
      aria-label={withHeader ? undefined : "Skills"}
    >
      <div className="container">
        {withHeader ? (
          <div className="section-head">
            <span className="eyebrow">Skills</span>
            <h2 className="section-title" id="skills-title">
              The tools I build with.
            </h2>
            <p className="section-intro">
              Grouped by where they sit in the stack &mdash; everything listed
              here is something I have used to ship one of the projects below.
            </p>
          </div>
        ) : null}

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal
              as="article"
              className="skill-card"
              key={group.title}
              delay={i * 90}
            >
              <span className="skill-card__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="skill-card__title">{group.title}</h3>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li className="skill-tag" key={item.label}>
                    {item.icon ? (
                      <TechIcon name={item.icon} className="skill-tag__icon" />
                    ) : null}
                    {item.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
