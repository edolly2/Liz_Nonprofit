"use client";

import Link from "next/link";
import { useState } from "react";
import { ButterflyMark } from "./ButterflyMark";
import { site } from "@/lib/site";

const links = [
  ["Our Work", "/our-work"],
  ["Identify", "/identify"],
  ["Learn", "/learn"],
  ["Get Involved", "/get-involved"],
  ["About", "/about"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <ButterflyMark />
          <span>{site.name}</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
        </button>

        <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="button button-dark nav-donate" href="/donate" onClick={() => setOpen(false)}>Donate</Link>
        </nav>
      </div>
    </header>
  );
}
