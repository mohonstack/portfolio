import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Process</span>
          <h2 className="section-title" id="process-title">
            How a project moves forward.
          </h2>
          <p className="section-intro">
            A compact loop I follow on every build &mdash; small enough to
            remember, structured enough to trust.
          </p>
        </div>

        <ol className="process__steps">
          {processSteps.map((step, i) => (
            <li className="process-step" key={step.title}>
              <span className="process-step__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
