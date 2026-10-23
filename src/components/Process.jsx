import { processSteps } from "@/data/site";
import Reveal from "@/components/Reveal";
import {
  SearchIcon,
  MapIcon,
  CodeIcon,
  CheckCircleIcon,
  SendIcon,
} from "@/components/Icons";

// One icon per step of the loop — kept in the same 1.9px stroke style.
const stepIcons = {
  understand: SearchIcon,
  plan: MapIcon,
  build: CodeIcon,
  test: CheckCircleIcon,
  deploy: SendIcon,
};

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

        <Reveal as="ol" className="process__steps">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[step.icon] ?? CodeIcon;
            return (
              <Reveal
                as="li"
                className="process-step"
                key={step.title}
                delay={i * 130}
              >
                <span className="process-step__num" aria-hidden="true">
                  <Icon className="process-step__icon" />
                </span>
                <span className="process-step__index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.description}</p>
              </Reveal>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
