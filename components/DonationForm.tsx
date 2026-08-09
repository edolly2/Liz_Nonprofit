"use client";

import { useState } from "react";

const presets = [2500, 5000, 10000, 25000];
type Frequency = "one_time" | "monthly";

export function DonationForm() {
  const [amount, setAmount] = useState(5000);
  const [other, setOther] = useState("");
  const [frequency, setFrequency] = useState<Frequency>("one_time");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function donate() {
    setError("");
    setLoading(true);
    const amountCents = other ? Math.round(Number(other) * 100) : amount;

    try {
      const response = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountCents, frequency }),
      });
      const data = await response.json();
      if (!response.ok || !data.url)
        throw new Error(
          data.error || "Donation checkout is not configured yet.",
        );
      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to begin checkout.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="donation-box">
      <div
        className="frequency-tabs"
        role="group"
        aria-label="Donation frequency"
      >
        <button
          type="button"
          className={frequency === "one_time" ? "selected" : ""}
          onClick={() => setFrequency("one_time")}
        >
          One-time
        </button>
        <button
          type="button"
          className={frequency === "monthly" ? "selected" : ""}
          onClick={() => setFrequency("monthly")}
        >
          Monthly
        </button>
      </div>

      <div className="amount-grid" aria-label="Donation amount">
        {presets.map((value) => (
          <button
            key={value}
            type="button"
            className={amount === value && !other ? "selected" : ""}
            onClick={() => {
              setAmount(value);
              setOther("");
            }}
          >
            ${value / 100}
          </button>
        ))}
      </div>
      <label className="field-label" htmlFor="other-amount">
        Other amount
      </label>
      <div className="money-input">
        <span>$</span>
        <input
          id="other-amount"
          inputMode="decimal"
          min="1"
          max="50000"
          type="number"
          value={other}
          placeholder="Other"
          onChange={(event) => setOther(event.target.value)}
        />
      </div>
      <button
        className="button button-dark button-wide"
        type="button"
        onClick={donate}
        disabled={loading}
      >
        {loading
          ? "Opening secure checkout…"
          : `Donate ${frequency === "monthly" ? "monthly" : "securely"}`}
      </button>
      <p className="microcopy">
        Will use stripe.
        {/* Secure payment processing is scaffolded for Stripe. Add live keys only
        after the nonprofit owns and verifies its Stripe account. */}
      </p>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
