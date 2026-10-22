import Image from "next/image";

export default function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__layout">
          <div className="about__photo-wrap">
            <Image
              className="about__photo"
              src="/assets/mohon.jpg"
              alt="Portrait of Md. Mohon"
              width={480}
              height={480}
              priority
            />
          </div>

          <div className="about__body">
            <span className="eyebrow">About</span>
            <h2 className="section-title" id="about-title">
              Learning in public, building things that work.
            </h2>
            <p>
              I&apos;m a computer science student and self-taught{" "}
              <strong>full-stack web developer</strong> from Bangladesh. Most of
              my time goes into learning by building: turning ideas into{" "}
              <strong>practical web applications</strong>, breaking them, and
              putting them back together better than before.
            </p>
            <p>
              On the interface side I care about <strong>responsive UI</strong>{" "}
              &mdash; layouts that hold together on a 360px phone just as well
              as on a desktop. Behind it, I keep my code{" "}
              <strong>maintainable</strong>: small components, clear data flow,
              and naming that still makes sense a month later.
            </p>
            <p>
              The projects below are real applications I designed, built and
              deployed. Each one taught me something I couldn&apos;t have picked
              up from a tutorial alone.
            </p>

            <dl className="about__facts">
              <div className="about__fact">
                <dt className="about__fact-label">Focus</dt>
                <dd className="about__fact-value">
                  React &amp; Next.js full-stack
                </dd>
              </div>
              <div className="about__fact">
                <dt className="about__fact-label">Based in</dt>
                <dd className="about__fact-value">Bangladesh</dd>
              </div>
              <div className="about__fact">
                <dt className="about__fact-label">Currently</dt>
                <dd className="about__fact-value">Studying CSE &amp; building</dd>
              </div>
              <div className="about__fact">
                <dt className="about__fact-label">Status</dt>
                <dd className="about__fact-value">Open to opportunities</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
