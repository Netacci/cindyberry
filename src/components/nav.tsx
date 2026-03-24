"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <a
          href="#"
          className="font-display text-base font-semibold tracking-wide text-white"
        >
          <span className="gold-shine">CINDY</span>
          <span className="text-white">BERRY</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-white/70 transition-colors hover:text-[#f2d18a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full border border-[#d1a854]/50 px-4 py-2 text-sm text-[#f2d18a] transition-colors hover:border-[#d1a854] hover:text-[#fcebc0] md:inline-flex"
        >
          Start sourcing
        </a>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-[#d1a854]/50 px-4 py-2 text-sm text-[#f2d18a] transition-colors hover:border-[#d1a854] md:hidden"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
