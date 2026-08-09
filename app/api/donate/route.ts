import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const MIN_CENTS = 100;
const MAX_CENTS = 5_000_000;
type Frequency = "one_time" | "monthly";

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe is not configured yet. Add the nonprofit's own Stripe credentials when ready." }, { status: 503 });
  }

  let body: { amountCents?: unknown; frequency?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const amountCents = Number(body.amountCents);
  const frequency: Frequency = body.frequency === "monthly" ? "monthly" : "one_time";

  if (!Number.isSafeInteger(amountCents) || amountCents < MIN_CENTS || amountCents > MAX_CENTS) {
    return NextResponse.json({ error: "Donation amount must be between $1 and $50,000." }, { status: 400 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: frequency === "monthly" ? "subscription" : "payment",
    line_items: [{
      quantity: 1,
      price_data: {
        currency: "usd",
        unit_amount: amountCents,
        product_data: { name: frequency === "monthly" ? "Monthly donation" : "Donation" },
        ...(frequency === "monthly" ? { recurring: { interval: "month" as const } } : {}),
      },
    }],
    success_url: `${origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/donate`,
  });

  return NextResponse.json({ url: session.url });
}
