import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About({ withHeader = true }) {
  return (
    <section
      className="section section--alt"
      id="about"
      aria-labelledby={withHeader ? "about-title" : undefined}
      aria-label={withHeader ? undefined : "About"}
    >
      <div className="container">
        <Reveal className="about__layout">
          <Reveal className="about__photo-wrap reveal--mask" delay={120}>
            <Image
              className="about__photo"
              src="/assets/mohon.jpg"
              alt="Portrait of Md. Mohon"
              width={480}
              height={480}
              priority
            />
          </Reveal>

          <div className="about__body">
            {withHeader ? (
              <>
                <span className="eyebrow">About</span>
                <h2 className="section-title" id="about-title">
                  Learning in public, building things that work.
                </h2>
              </>
            ) : null}
            <Reveal as="p" delay={80}>
              I&apos;m a computer science student and self-taught{" "}
              <strong>full-stack web developer</strong> from Bangladesh. Most of
              my time goes into learning by building: turning ideas into{" "}
              <strong>practical web applications</strong>, breaking them, and
              putting them back together better than before.
            </Reveal>
            <Reveal as="p" delay={170}>
              On the interface side I care about <strong>responsive UI</strong>{" "}
              &mdash; layouts that hold together on a 360px phone just as well
              as on a desktop. Behind it, I keep my code{" "}
              <strong>maintainable</strong>: small components, clear data flow,
              and naming that still makes sense a month later.
            </Reveal>
            <Reveal as="p" delay={260}>
              The projects I&apos;ve shipped are real applications I designed,
              built and deployed. Each one taught me something I couldn&apos;t
              have picked up from a tutorial alone.
            </Reveal>

            <dl className="about__facts">
              <Reveal as="div" className="about__fact" delay={320}>
                <dt className="about__fact-label">Focus</dt>
                <dd className="about__fact-value">
                  React &amp; Next.js full-stack
                </dd>
              </Reveal>
              <Reveal as="div" className="about__fact" delay={390}>
                <dt className="about__fact-label">Based in</dt>
                <dd className="about__fact-value">Bangladesh</dd>
              </Reveal>
              <Reveal as="div" className="about__fact" delay={460}>
                <dt className="about__fact-label">Currently</dt>
                <dd className="about__fact-value">Studying CSE &amp; building</dd>
              </Reveal>
              <Reveal as="div" className="about__fact" delay={530}>
                <dt className="about__fact-label">Status</dt>
                <dd className="about__fact-value">Open to opportunities</dd>
              </Reveal>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
