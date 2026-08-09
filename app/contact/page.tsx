import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro narrow">
          <p className="eyebrow">Contact</p>
          <h1>Contact {site.name}</h1>

          {/* All identity details below are placeholders provided for layout and
            should be replaced before launch. */}
        </div>
        <div className="contact-grid">
          <div>
            <h2>Organization information</h2>
            <p>
              <strong>Address</strong>
              <br />
              {site.address}
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
              />
            </label>
            <label>
              Message
              <textarea name="message" rows={6} placeholder="Your Message" />
            </label>
            <button className="button button-dark" type="button">
              Submit
            </button>
            {/* This form is visual only. Connect it to a secure form/email
              backend before launch. */}
          </form>
        </div>
      </div>
    </section>
  );
}
