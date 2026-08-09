import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Privacy</p>
          <h1>Privacy policy placeholder</h1>
          <p>
            This is not a finished legal policy.Will Replace it with a policy
            tailored to the nonprofit.
            {/* s actual analytics, photo processing,
            donations, email tools, storage, cookies, location use, and
            data-retention practices. */}
          </p>
        </div>
        {/* <div className="article-layout">
          <article>
            <h2>Photo uploads</h2>
            <p>
              The production policy should explain whether photos are deleted
              immediately after identification, retained temporarily, or kept
              for research or account history. Do not retain user images without
              a defined purpose and disclosure.
            </p>
            <h2>Location</h2>
            <p>
              If approximate location or ZIP code is used to improve
              native-plant results, explain what is collected and how long it is
              kept.
            </p>
            <h2>Donations</h2>
            <p>
              Payment details should be handled by the selected payment
              processor rather than stored directly by this website.
            </p>
          </article>
        </div> */}
      </div>
    </section>
  );
}
