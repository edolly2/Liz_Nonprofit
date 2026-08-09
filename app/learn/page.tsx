import type { Metadata } from "next";

export const metadata: Metadata = { title: "Learn" };

export default function LearnPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Learn</p>
          <h1>
            Understand what butterflies need before changing the habitat around
            them.
          </h1>
          <p>
            {/* This section is built for future educational articles, verified
            references, printable guides, and local recommendations. */}
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            Educational content/articles/references/printables/etc.
          </p>
        </div>
        <div className="article-layout">
          <article>
            <h2>Host plants</h2>
            <p>
              {/* Host plants are plants used during the immature life stages of a
              butterfly or moth. In many species, females choose particular
              plants for egg laying because the caterpillars that hatch depend
              on those plants for food. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Host plant description.
            </p>
            <h2>Nectar plants</h2>
            <p>
              {/* Nectar plants are food sources for adult butterflies. A plant can
              be useful for nectar without being a larval host, and a host plant
              may or may not be a major nectar source. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Nectar plant description.
            </p>
            <h2>Before using pesticides</h2>
            <p>
              {/* Future educational content should encourage users to identify the
              plant, check for eggs and larvae, understand which insects are
              present, read the pesticide label, and consider lower-impact
              options appropriate to the situation. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
            </p>
          </article>
          <aside className="side-note">
            <p className="eyebrow">Content rule</p>
            <h2>Source the biology.</h2>
            <p>
              {/* Every butterfly ↔ plant relationship shown by the production site
              should include a source, geographic scope, and verification
              status. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Sources.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
