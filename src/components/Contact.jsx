import { siteConfig } from "@/data/site";
import { MailIcon, GitHubIcon, LinkedInIcon, ArrowRightIcon } from "@/components/Icons";

export default function Contact() {
  return (
    <section
      className="section section--alt contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title" id="contact-title">
            Let&apos;s build something together.
          </h2>
          <p className="section-intro">
            Have a role, an internship or an idea you&apos;d like a hand with?
            The fastest way to reach me is email &mdash; I read every message.
          </p>
        </div>

        <div className="contact__panel">
          <h3 className="contact__title">Get in touch</h3>
          <p className="contact__text">
            Tell me a little about the opportunity or the problem you&apos;re
            solving, and I&apos;ll get back to you.
          </p>

          <a
            className="contact__email"
            href={`mailto:${siteConfig.email}`}
            aria-label={`Email ${siteConfig.email}`}
          >
            <MailIcon />
            {siteConfig.email}
          </a>

          <div className="contact__socials">
            <a
              className="btn btn--primary"
              href={`mailto:${siteConfig.email}`}
            >
              Write to me
              <ArrowRightIcon />
            </a>
            <a
              className="btn btn--ghost"
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              className="btn btn--ghost"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
