import Link from "next/link";

export default function DonationSuccessPage() {
  return (
    <section className="page-section">
      <div className="container narrow center">
        <p className="eyebrow">Thank you</p>
        <h1>Your checkout returned successfully.</h1>
        <p>
          {/* This page alone must never be treated as proof of payment. Production
          donation records should be created only from a verified Stripe
          webhook. */}
          THIS WAS A TEST BLAH BLAH BLAH.
        </p>
        <Link className="button button-dark" href="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
