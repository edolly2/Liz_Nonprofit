import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolvedPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Get involved</p>
          <h1>There should be more than one way to support the mission.</h1>
          <p>
            {/* These are intentionally generic paths. Replace, remove, or expand
            them after the nonprofit decides what it actually offers. */}
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
          </p>
        </div>
        <div className="feature-grid three">
          <article className="feature-card">
            <h2>Volunteer</h2>
            <p>
              {/* Placeholder volunteer opportunities, habitat events, outreach,
              education, data review, or another real program. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </p>
            <Link href="/contact">Ask about volunteering →</Link>
          </article>
          <article className="feature-card">
            <h2>Partner</h2>
            <p>
              {/* Placeholder partnership path for schools, gardens, businesses,
                local government, conservation groups, or property owners. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </p>
            <Link href="/contact">Start a conversation →</Link>
          </article>
          <article className="feature-card">
            <h2>Donate</h2>
            <p>
              {/* Support future education, identification tools, habitat work, and
              whatever programs the organization formally adopts. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Support blah blah blah.
            </p>
            <Link href="/donate">Make a donation →</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
