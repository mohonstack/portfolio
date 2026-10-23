import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main id="main" className="page">
      <section className="page-head not-found">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1 className="page-head__title">This page went off the grid.</h1>
          <p className="page-head__intro">
            The link you followed doesn&apos;t exist — but the work does.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href="/">
              Back home
              <ArrowRightIcon />
            </Link>
            <Link className="btn btn--ghost" href="/projects">
              View projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
