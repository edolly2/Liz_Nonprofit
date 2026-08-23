import Link from "next/link";
import { ButterflyMark } from "./ButterflyMark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <ButterflyMark />
            {/* <span>{site.name}</span> */}
          </div>

          {/* Placeholder nonprofit identity. Replace this text and all
            organization details before launch. */}
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <Link href="/identify">Identify a butterfly or plant</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/our-work">Our work</Link>
          <Link href="/get-involved">Get involved</Link>
        </div>
        <div>
          <h2 className="footer-heading">Organization</h2>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/donate">Donate</Link>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <p>{site.address}</p>
          <p>
            <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>{site.ein}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          {/* Placeholder content */}© {new Date().getFullYear()} {site.name}.
        </span>
        <span>Built for accessibility, privacy, and data verification.</span>
      </div>
    </footer>
  );
}
