"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import type { IdentificationResult } from "@/lib/demo-data";

type Mode = "butterfly" | "plant";

export function Scanner() {
  const [mode, setMode] = useState<Mode>("butterfly");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [result, setResult] = useState<IdentificationResult | null>(null);
  const [zip, setZip] = useState("");

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  function switchMode(next: Mode) {
    setMode(next);
    setFile(null);
    setResult(null);
    setStatus("idle");
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!file) return;
    setStatus("loading");
    setResult(null);

    try {
      const body = new FormData();
      body.set("mode", mode);
      body.set("image", file);
      if (zip.trim()) body.set("zip", zip.trim());

      const response = await fetch("/api/identify", { method: "POST", body });
      if (!response.ok) throw new Error("Identification request failed");
      const data = (await response.json()) as IdentificationResult;
      setResult(data);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="scanner-shell">
      <div
        className="scanner-tabs"
        role="group"
        aria-label="Choose identification type"
      >
        <button
          className={mode === "butterfly" ? "active" : ""}
          type="button"
          onClick={() => switchMode("butterfly")}
        >
          Butterfly → Plants
        </button>
        <button
          className={mode === "plant" ? "active" : ""}
          type="button"
          onClick={() => switchMode("plant")}
        >
          Plant → Butterflies
        </button>
      </div>

      <div className="scanner-layout">
        <form className="upload-panel" onSubmit={submit}>
          <p className="eyebrow">
            {mode === "butterfly" ? "Identify a butterfly" : "Identify a plant"}
          </p>
          <h2>
            {mode === "butterfly"
              ? "Photograph the butterfly clearly."
              : "Photograph the plant clearly."}
          </h2>
          {/* This starter runs in demonstration mode until a live identification provider is connected. */}
          <p className="muted">Use a sharp, well-lit photo.</p>

          <label className="upload-box">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
            />
            {preview ? (
              <span className="preview-wrap">
                <Image
                  src={preview}
                  alt="Selected identification photo"
                  fill
                  unoptimized
                  sizes="(max-width: 700px) 100vw, 440px"
                />
              </span>
            ) : (
              <span>
                <strong>Take a photo or choose one</strong>
                <small>JPG, PNG, WEBP</small>
              </span>
            )}
          </label>

          <label className="field-label scanner-location" htmlFor="scanner-zip">
            ZIP code <span className="optional">optional</span>
          </label>
          <input
            id="scanner-zip"
            className="standard-input"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={10}
            placeholder="68005"
            value={zip}
            onChange={(event) => setZip(event.target.value)}
          />
          <p className="microcopy">
            Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah. This
            is to prioritize region specific.
            {/* Production use: use this to prioritize region-appropriate species
            and host plants without requiring precise GPS. */}
          </p>

          <button
            className="button button-dark button-wide"
            type="submit"
            disabled={!file || status === "loading"}
          >
            {status === "loading"
              ? "Identifying…"
              : `Identify ${mode === "butterfly" ? "Butterfly" : "Plant"}`}
          </button>
          {status === "error" && (
            <p className="error" role="alert">
              We could not process that image. Please try another photo.
            </p>
          )}
        </form>

        <div className="result-panel" aria-live="polite">
          {!result && status !== "loading" && (
            <div className="empty-result">
              <span className="result-icon" aria-hidden="true">
                {mode === "butterfly" ? "🦋" : "🌿"}
              </span>
              <h2>Your result will appear here.</h2>
              <p className="muted">
                Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
                This will pair AI ident with verified relationship data (between
                butterflies and plants and vice versa).
                {/* The final system should pair AI identification with verified
                host-plant relationship data. */}
              </p>
            </div>
          )}
          {status === "loading" && (
            <div className="empty-result">
              <div className="spinner" aria-hidden="true" />
              <h2>Checking your photo…</h2>
            </div>
          )}
          {result && (
            <div>
              <div className="result-heading">
                <p className="eyebrow">Identification</p>
                <h2>{result.commonName}</h2>
                <p className="scientific">{result.scientificName}</p>
                <p className="confidence">
                  {Math.round(result.confidence * 100)}% example confidence
                </p>
              </div>

              <div className="notice">
                <strong>Data:</strong>
                {/* This starter does not claim your
                uploaded photo is actually this species. Connect a live
                classifier before launch. */}
                Blah blah blah. Blah blah blah. Blah blah blah. Blah blah blah.
                DATA.
              </div>

              <h3 className="result-subheading">
                {result.kind === "butterfly"
                  ? "Plants associated with this butterfly"
                  : "Butterflies associated with this plant"}
              </h3>
              <div className="relationship-list">
                {result.relationships.map((item) => (
                  <article
                    key={`${item.scientificName}-${item.relationship}`}
                    className="relationship-card"
                  >
                    <div>
                      <h4>{item.commonName}</h4>
                      <p className="scientific">{item.scientificName}</p>
                    </div>
                    <span className="tag">{item.relationship}</span>
                    <p>{item.note}</p>
                  </article>
                ))}
              </div>
              <div className="pesticide-callout">
                <strong>Before spraying:</strong> check plants for eggs,
                caterpillars, pollinators, and other beneficial insects. Follow
                verified local guidance and the pesticide label. OR DON'T
                FUCKING SPRAY AT ALL, PUSSY!
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
