import type { Metadata } from "next";
import { Scanner } from "@/components/Scanner";

export const metadata: Metadata = { title: "Identify" };

export default function IdentifyPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Photo identification</p>
          <h1>Find the connection between butterflies and plants.</h1>
          {/*  The included scanner is intentionally in demo mode until live APIs are configured. */}
          <p>
            {/* Choose a direction, take a photo, and use the result to understand
            host relationships. */}
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
          </p>
        </div>
        <Scanner />
        <div className="info-grid">
          <article>
            <h2>Identification is probabilistic</h2>
            <p>
              {/* Show confidence and alternate possibilities. Never present an
              automated image classification as guaranteed. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </p>
          </article>
          <article>
            <h2>Relationships need sources</h2>
            <p>
              {/* Store host-plant claims with source, region, relationship type,
              and verification status so they can be reviewed later. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </p>
          </article>
          <article>
            <h2>Location should refine results</h2>
            <p>
              {/* A future ZIP-code or approximate-location filter can prioritize
              plants and butterflies appropriate to the user&apos;s region. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
