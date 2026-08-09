import type { Metadata } from "next";
import { DonationForm } from "@/components/DonationForm";

export const metadata: Metadata = { title: "Donate" };

export default function DonatePage() {
  return (
    <section className="page-section">
      <div className="container donate-layout">
        <div className="page-intro">
          <p className="eyebrow">Support the mission</p>
          <h1>Help protect habitat and improve public understanding.</h1>
          <p>
            {/* Replace this with a verified explanation of how donations are used.
            Do not publish tax-deductibility claims until the
            organization&apos;s legal status is confirmed. */}
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. HOW
            DONATIONS ARE USED. Blah blah blah. Blah blah blah. Blah blah blah.
            Blah
          </p>
          <ul className="check-list">
            <li>Education and outreach Blah blah blah</li>
            <li>Identification technology Blah blah blah</li>
            <li>Habitat and community program Blah blah blah</li>
          </ul>
        </div>
        <DonationForm />
      </div>
    </section>
  );
}
