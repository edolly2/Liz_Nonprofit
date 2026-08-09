import Link from "next/link";
import { ButterflyMark } from "@/components/ButterflyMark";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Protect habitat. Understand relationships. Reduce unnecessary
              pesticide exposure.
            </p>
            <h1>Protect the plants butterflies depend on.</h1>
            <p className="hero-copy">
              Learn which plants butterflies need for eggs and caterpillars,
              identify the species in front of you, and make more informed
              choices before spraying. OR DON'T FUCKING SPRAY
            </p>
            <div className="button-row">
              <Link className="button button-dark" href="/identify">
                Identify a butterfly or plant
              </Link>
              <Link className="button button-light" href="/learn">
                Learn why host plants matter
              </Link>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Generic black and white butterfly mark"
          >
            <ButterflyMark size={210} />
            <p>Liz Nonprofit</p>
          </div>
        </div>
      </section>

      <section className="section section-rule">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Built around action</p>
            <h2>Start with what you see.</h2>
            <p>Use the identification tools in either direction.</p>
          </div>
          <div className="feature-grid two">
            <article className="feature-card">
              <span className="step">01</span>
              <h3>Butterfly → host plants</h3>
              <p>
                Take or upload a butterfly photo, identify likely species, then
                show verified plants used for egg laying and larval feeding.
              </p>
              <Link href="/identify">Try butterfly identification →</Link>
            </article>
            <article className="feature-card">
              <span className="step">02</span>
              <h3>Plant → butterflies</h3>
              <p>
                Take or upload a plant photo, identify the plant, then show
                which butterflies are documented using it as a host.
              </p>
              <Link href="/identify">Try plant identification →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split-content">
          <div>
            <p className="eyebrow light">The core distinction</p>
            <h2>Host plants are not the same thing as nectar plants.</h2>
          </div>
          <div>
            <p>
              Adult butterflies may visit many flowers for nectar. Caterpillars
              are often much more selective.
              {/* The website should clearly
              distinguish larval host, egg-laying, nectar, and shelter
              relationships so people know what a plant actually does. */}
              Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
              Distinguish host plants from nectar plants.
            </p>
            <Link className="text-link-light" href="/learn">
              Learn the difference →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Blah blah. How the platform should work</p>
            <h2>
              Blah AI for identification. Blah Blah Verified data for ecological
              claims.
            </h2>
          </div>
          <div className="feature-grid three">
            <article className="feature-card">
              <span className="step">01</span>
              <h3>Identify</h3>
              <p>
                Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
                Will use plant and insect image recon API.
                {/* Use a plant or insect image-recognition provider to return
                likely species with a confidence score. */}
              </p>
            </article>
            <article className="feature-card">
              <span className="step">02</span>
              <h3>Verify</h3>
              <p>
                {/* Match the species against a curated relationship database
                instead of asking generative AI to invent host-plant claims. */}
                Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
                Match species against a curated relationship database.
              </p>
            </article>
            <article className="feature-card">
              <span className="step">03</span>
              <h3>Act</h3>
              <p>
                {/* Show useful next steps: preserve host plants, check before
                spraying, add native habitat, volunteer, or support the mission. */}
                Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
                Useful next steps.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section gray-section">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Help protect habitat</p>
            <h2>Give better choice over spray.</h2>
          </div>
          <div className="button-row">
            <Link className="button button-dark" href="/get-involved">
              Get involved
            </Link>
            <Link className="button button-light" href="/donate">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
