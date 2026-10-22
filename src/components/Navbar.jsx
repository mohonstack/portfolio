"use client";

import { useEffect, useState } from "react";
import { siteConfig, navLinks } from "@/data/site";
import {
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
  CloseIcon,
  FileDownIcon,
} from "@/components/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the drawer with Escape and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the drawer any time the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          MOHON<span className="nav__brand-dot">.DEV</span>
        </a>

        <nav className="nav__menu" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
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
          {siteConfig.resume ? (
            <a
              className="btn btn--ghost nav__resume-btn"
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDownIcon />
              Resume
            </a>
          ) : null}

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span className="visually-hidden">
              {open ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>
      </div>

      <div
        className="nav__mobile"
        id="mobile-menu"
        data-open={open}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="nav__mobile-link"
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav__mobile-socials">
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
    </header>
  );
}
