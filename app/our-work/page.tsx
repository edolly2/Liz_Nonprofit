import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Work" };

export default function OurWorkPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Our work</p>
          <h1>
            Protecting butterfly habitat through information and practical
            action.
          </h1>

          {/* Replace this copy with the nonprofit&apos;s actual programs once
            they are finalized. */}
        </div>
        <div className="feature-grid three">
          <article className="feature-card">
            <span className="step">01</span>
            <h2>Pesticide awareness</h2>
            <p>
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              {/* Placeholder program description explaining when, where, and why
              the nonprofit educates people about avoiding unnecessary pesticide
              use. */}
            </p>
          </article>
          <article className="feature-card">
            <span className="step">02</span>
            <h2>Host-plant education</h2>
            <p>
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              {/* Placeholder program description covering host plants, eggs,
              caterpillars, nectar sources, and habitat. */}
            </p>
          </article>
          <article className="feature-card">
            <span className="step">03</span>
            <h2>Community habitat</h2>
            <p>
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              {/* Placeholder program description for gardens, property owners,
              schools, municipalities, or another future audience. */}
            </p>
          </article>
        </div>
        <div className="cta-band simple">
          <div>
            <h2>Turn education into action.</h2>
            <p>
              Use the identification tool as the bridge between the Liz
              Nonprofit&apos;s mission and what you see in your own backyard.
            </p>
          </div>
          <Link className="button button-dark" href="/identify">
            Open identification tool
          </Link>
        </div>
      </div>
    </section>
  );
}
