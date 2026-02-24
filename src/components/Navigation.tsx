"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services", index: "01" },
  { label: "Work",     href: "#work",     index: "02" },
  { label: "About",    href: "#about",    index: "03" },
  { label: "Contact",  href: "#contact",  index: "04" },
];

export default function Navigation() {
  const [scrolled,      setScrolled]      = useState(false);
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ── Scroll state ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Scroll spy ── */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace("#", ""));
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── Body scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      {/* ─────────────── Main nav bar ─────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          padding:             scrolled ? "1rem 0" : "1.75rem 0",
          background:          scrolled ? "rgba(6,6,10,0.88)" : "transparent",
          backdropFilter:      scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom:        scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        }}
      >
        <div className="container-site flex items-center justify-between">

          {/* Logo / Wordmark */}
          <a href="#" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
            <div className="relative w-7 h-7 flex-shrink-0">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:rotate-45"
                style={{ border: "1.5px solid var(--accent)", borderRadius: "2px" }}
              />
              <div
                className="absolute inset-[5px]"
                style={{ background: "var(--accent)", borderRadius: "1px", opacity: 0.35 }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 500,
                fontSize: "0.9375rem", letterSpacing: "-0.02em",
                color: "var(--text-primary)", lineHeight: 1,
              }}>
                Blockstein
              </span>
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "0.55rem", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--text-muted)",
                lineHeight: 1, marginTop: "3px",
              }}>
                Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => {
              const active = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative group flex items-center gap-1.5"
                  style={{ textDecoration: "none" }}
                >
                  <span style={{
                    fontFamily: "var(--font-body)", fontWeight: 300,
                    fontSize: "0.6rem", letterSpacing: "0.08em",
                    color: active ? "var(--accent)" : "var(--text-muted)",
                    transition: "color 0.3s ease", lineHeight: 1,
                  }}>
                    {link.index}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-body)", fontWeight: 400,
                    fontSize: "0.8125rem",
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    transition: "color 0.3s ease",
                  }}
                    className="group-hover:!text-[var(--text-primary)]"
                  >
                    {link.label}
                  </span>
                  {/* Active indicator */}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-500"
                    style={{ width: active ? "100%" : "0%", background: "var(--accent)" }}
                  />
                  {/* Hover indicator */}
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "var(--border-visible)" }}
                  />
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <a href="#contact" className="hidden md:inline-flex btn-ghost text-xs px-5 py-2.5">
              Start a Project
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              style={{ background: "none", border: "none", cursor: "none", padding: "4px" }}
            >
              <div className="flex flex-col gap-[5px]">
                <span className="block h-px transition-all duration-400 origin-center" style={{
                  width: "22px", background: "var(--text-primary)",
                  transform: mobileOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
                }} />
                <span className="block h-px transition-all duration-300" style={{
                  width: mobileOpen ? "0px" : "14px", background: "var(--accent)",
                  opacity: mobileOpen ? 0 : 1, marginLeft: "auto",
                }} />
                <span className="block h-px transition-all duration-400 origin-center" style={{
                  width: "22px", background: "var(--text-primary)",
                  transform: mobileOpen ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none",
                }} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────────── Full-screen mobile menu ─────────────── */}
      <div
        className="fixed inset-0 z-40 flex flex-col md:hidden"
        style={{
          background:    "var(--bg-primary)",
          opacity:        mobileOpen ? 1 : 0,
          pointerEvents:  mobileOpen ? "all" : "none",
          transform:      mobileOpen ? "translateY(0)" : "translateY(-2%)",
          transition:     "opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="orb orb-accent absolute w-[400px] h-[400px] -bottom-20 -right-20 pointer-events-none" />

        {/* Nav links */}
        <div className="relative z-10 flex flex-col justify-center flex-1 container-site pt-24">
          <div className="w-full h-px mb-10" style={{ background: "var(--border-subtle)" }} />

          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="group flex items-center justify-between py-5"
              style={{
                borderBottom:   "1px solid var(--border-subtle)",
                textDecoration: "none",
                opacity:         mobileOpen ? 1 : 0,
                transform:       mobileOpen ? "translateX(0)" : "translateX(-20px)",
                transition:      `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.07}s`,
              }}
            >
              <div className="flex items-baseline gap-4">
                <span style={{
                  fontFamily: "var(--font-body)", fontWeight: 300,
                  fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em",
                }}>
                  {link.index}
                </span>
                <span
                  className="group-hover:!text-[var(--accent)] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-display)", fontWeight: 300,
                    fontSize: "clamp(2.25rem, 9vw, 3.5rem)",
                    color: "var(--text-primary)", lineHeight: 1.1,
                  }}
                >
                  {link.label}
                </span>
              </div>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"
                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "var(--text-muted)" }}
              >
                <path d="M3 17L17 3M17 3H7M17 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer bar */}
        <div
          className="relative z-10 container-site pb-10 flex items-center justify-between"
          style={{ opacity: mobileOpen ? 1 : 0, transition: "opacity 0.4s ease 0.4s" }}
        >
          <span className="type-label">© 2025 Blockstein</span>
          <a href="#contact" onClick={close} className="btn-primary text-xs px-5 py-3">
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
}