import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Data Review" };

const exampleRows = [
  [
    "Monarch",
    "Common milkweed",
    "Egg laying + larval host",
    "Verified example",
  ],
  ["Monarch", "Swamp milkweed", "Egg laying + larval host", "Verified example"],
  ["Example butterfly", "Example plant", "Pending", "Needs source"],
];

export default function AdminPage() {
  return (
    <section className="page-section">
      {/* <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Admin scaffold</p>
          <h1>Biological relationship review.</h1>
          <p>
            This route is intentionally not linked in the public navigation. Add
            real authentication and authorization before putting any
            administrative tools online.
          </p>
        </div>
        <div className="notice admin-warning">
          <strong>Not production-secure yet:</strong> this page is a
          visual/data-model scaffold only. Protect the entire admin area with
          organization-controlled authentication before deployment.
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Butterfly</th>
                <th>Plant</th>
                <th>Relationship</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {exampleRows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="feature-grid three admin-actions">
          <article className="feature-card">
            <h2>Add relationship</h2>
            <p>
              Future form: scientific names, relationship type, geography,
              source, notes, and verification status.
            </p>
          </article>
          <article className="feature-card">
            <h2>Review pending</h2>
            <p>
              Future queue for records awaiting biological review before they
              become public.
            </p>
          </article>
          <article className="feature-card">
            <h2>Correct taxonomy</h2>
            <p>
              Future tools for synonyms, scientific-name normalization, merges,
              and provider-ID mappings.
            </p>
          </article>
        </div>
      </div> */}
    </section>
  );
}
