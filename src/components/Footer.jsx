import { siteConfig, navLinks } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a className="footer__brand" href="#top">
            MOHON<span className="nav__brand-dot">.DEV</span>
          </a>

          <nav className="footer__menu" aria-label="Footer">
            {navLinks.map((link) => (
              <a className="footer__link" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__socials">
            <a
              className="nav__social"
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span className="visually-hidden">GitHub profile</span>
            </a>
            <a
              className="nav__social"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <span className="visually-hidden">LinkedIn profile</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed &amp; built by {siteConfig.name} with Next.js and custom
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
