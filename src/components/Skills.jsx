import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
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

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-card__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="skill-card__title">{group.title}</h3>
              <ul className="skill-card__list">
                {group.items.map((item) => (
                  <li className="skill-tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
