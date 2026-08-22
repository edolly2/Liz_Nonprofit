import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">About Save Our Butterflies</p>
          <h1>
            {/* Replace this with the nonprofit&apos;s real story. */}
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. Real
            story goes here.
          </h1>
          <p>
            {/* This page intentionally avoids inventing a founder story, history,
            legal status, statistics, board, service area, or accomplishments. */}
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            Founder, history, legal status, blah, blah, blah.
          </p>
        </div>
        <div className="feature-grid two">
          <article className="feature-card">
            <h2>Mission</h2>
            <p>
              {/* Placeholder mission statement describing the nonprofit&apos;s
              actual purpose in one or two specific sentences. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Actual mission statement.
            </p>
          </article>
          <article className="feature-card">
            <h2>Vision</h2>
            <p>
              {/* Placeholder vision statement describing the future condition the
              nonprofit wants its work to help create. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Actual vision statement.
            </p>
          </article>

          <article className="feature-card">
            <h2>Leadership</h2>
            <p>
              {/* Placeholder leadership and board content. Add names, roles,
              biographies, and photos only when supplied and approved. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Actual leadership and board content.
            </p>
          </article>
          <article className="feature-card">
            <h2>Transparency</h2>
            <p>
              {/* Placeholder space for annual reports, Form 990, financial
              statements, policies, registrations, and other verified records. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Actual transparency content.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
