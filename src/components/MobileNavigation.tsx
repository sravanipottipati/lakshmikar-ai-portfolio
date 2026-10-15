"use client";

import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Expertise", "#expertise"],
  ["Research & Publications", "#publications"],
  ["News & Recognition", "#recognition"],
  ["Contact", "#contact"],
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/95 backdrop-blur-2xl md:hidden">
      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <a href="#home" className="shrink-0 text-xl font-bold tracking-tight text-white">
          LR<span className="text-cyan-400">.</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="mailto:lakshmikarpolamreddy@gmail.com"
            className="whitespace-nowrap rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-white transition hover:border-cyan-400"
          >
            Get in touch ↗
          </a>

          <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation-links"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-white transition hover:border-cyan-400"
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation-links"
          aria-label="Mobile navigation"
          className="grid gap-1 border-t border-white/10 px-6 py-3"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
