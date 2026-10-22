import { siteConfig } from "@/data/site";
import { GitHubIcon, LinkedInIcon, ArrowRightIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__layout">
        <div>
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Junior Full-Stack Developer · Bangladesh
          </p>

          <h1 className="hero__title" id="hero-title">
            Building Digital Experiences That{" "}
            <span className="hero__title-accent">Solve Real Problems.</span>
          </h1>

          <p className="hero__desc">
            I&apos;m <strong>Md. Mohon</strong>, a junior full-stack developer
            focused on <strong>JavaScript</strong>, <strong>React</strong> and{" "}
            <strong>Next.js</strong>. I build responsive, practical web
            applications from the interface all the way to the database.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              Explore My Work
              <ArrowRightIcon />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            <a
              className="hero__social"
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              className="hero__social"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Code-inspired design element */}
        <div className="code-window">
          <div className="code-window__bar">
            <span className="code-window__dot code-window__dot--accent" />
            <span className="code-window__dot" />
            <span className="code-window__dot" />
            <span className="code-window__file">developer.config.js</span>
          </div>
          <div className="code-window__body">
            <code>
              <span className="code-line">
                <span className="tok-key">const</span>{" "}
                <span className="tok-prop">developer</span>{" "}
                <span className="tok-punct">=</span> <span className="tok-punct">{"{"}</span>
              </span>
              <span className="code-line">
                {"  "}
                <span className="tok-prop">name</span>
                <span className="tok-punct">:</span>{" "}
                <span className="tok-str">&quot;Md. Mohon&quot;</span>
                <span className="tok-punct">,</span>
              </span>
              <span className="code-line">
                {"  "}
                <span className="tok-prop">role</span>
                <span className="tok-punct">:</span>{" "}
                <span className="tok-str">&quot;Full-Stack Developer&quot;</span>
                <span className="tok-punct">,</span>
              </span>
              <span className="code-line">
                {"  "}
                <span className="tok-prop">stack</span>
                <span className="tok-punct">:</span> <span className="tok-punct">[</span>
                <span className="tok-str">&quot;React&quot;</span>
                <span className="tok-punct">,</span>{" "}
                <span className="tok-str">&quot;Next.js&quot;</span>
                <span className="tok-punct">,</span>{" "}
                <span className="tok-str">&quot;MongoDB&quot;</span>
                <span className="tok-punct">]</span>
                <span className="tok-punct">,</span>
              </span>
              <span className="code-line">
                {"  "}
                <span className="tok-prop">basedIn</span>
                <span className="tok-punct">:</span>{" "}
                <span className="tok-str">&quot;Bangladesh&quot;</span>
                <span className="tok-punct">,</span>
              </span>
              <span className="code-line">
                {"  "}
                <span className="tok-prop">availableForWork</span>
                <span className="tok-punct">:</span>{" "}
                <span className="tok-key">true</span>
                <span className="tok-punct">,</span>
              </span>
              <span className="code-line">
                {"  "}
                <span className="tok-fn">build</span>
                <span className="tok-punct">()</span>{" "}
                <span className="tok-punct">{"{"}</span>{" "}
                <span className="tok-comment">
                  // ship it, then improve it
                </span>
              </span>
              <span className="code-line">
                <span className="tok-punct">{"}"}</span>
              </span>
            </code>
          </div>
          <p className="code-window__caption">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to internships, junior roles and freelance work
          </p>
        </div>
      </div>
    </section>
  );
}
