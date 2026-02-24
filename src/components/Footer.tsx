"use client";

const LINKS = {
  Company:  [
    { label: "About",      href: "#about"    },
    { label: "Services",   href: "#services" },
    { label: "Work",       href: "#work"     },
    { label: "Process",    href: "#process"  },
    { label: "Contact",    href: "#contact"  },
  ],
  Services: [
    { label: "Brand Strategy",        href: "#services" },
    { label: "Strategic Distribution",href: "#services" },
    { label: "Performance Marketing", href: "#services" },
    { label: "Growth Engineering",    href: "#services" },
  ],
  Connect:  [
    { label: "Twitter / X", href: "#" },
    { label: "LinkedIn",    href: "#" },
    { label: "Dribbble",    href: "#" },
    { label: "Email",       href: "mailto:hello@blockstein.co" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background:   "var(--bg-secondary)",
        borderTop:    "1px solid var(--border-subtle)",
        position:     "relative",
        overflow:     "hidden",
      }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Warm orb — bottom right */}
      <div
        className="orb absolute w-[500px] h-[500px] -bottom-32 -right-32 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,155,106,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-site relative z-10">

        {/* ── Top section: large wordmark + tagline ── */}
        <div
          className="py-16 lg:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
        >
          {/* Wordmark */}
          <div>
            <div
              style={{
                fontFamily:    "var(--font-display)",
                fontWeight:    300,
                fontSize:      "clamp(3rem, 8vw, 6rem)",
                lineHeight:    0.9,
                letterSpacing: "-0.02em",
                color:         "var(--text-primary)",
                opacity:       0.9,
              }}
            >
              Blockstein
            </div>
            <div
              style={{
                fontFamily:    "var(--font-display)",
                fontStyle:     "italic",
                fontWeight:    300,
                fontSize:      "clamp(1rem, 2.5vw, 1.5rem)",
                lineHeight:    1,
                letterSpacing: "-0.01em",
                color:         "var(--accent)",
                marginTop:     "0.5rem",
                opacity:       0.7,
              }}
            >
              Global Digital Agency
            </div>
          </div>

          {/* Right — tagline + CTA */}
          <div className="lg:max-w-xs flex flex-col gap-6">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize:   "0.875rem",
                lineHeight: 1.7,
                color:      "var(--text-muted)",
              }}
            >
              Strategic growth partner for tech companies and modern brands ready
              to scale with precision.
            </p>
            <a
              href="#contact"
              className="btn-primary self-start"
              style={{ fontSize: "0.75rem", padding: "0.75rem 1.5rem" }}
            >
              Start a Project
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "0.3rem" }}>
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Middle section: link columns ── */}
        <div
          className="py-14 grid grid-cols-2 md:grid-cols-3 gap-10"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
        >
          {(Object.entries(LINKS) as [string, { label: string; href: string }[]][]).map(([col, links]) => (
            <div key={col}>
              <div
                className="type-label mb-6"
                style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
              >
                {col}
              </div>
              <ul className="space-y-3.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-line group/fl"
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontWeight:    300,
                        fontSize:      "0.825rem",
                        color:         "var(--text-secondary)",
                        textDecoration: "none",
                        transition:    "color 0.3s ease",
                        display:       "inline-block",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Left — copyright */}
          <div className="flex items-center gap-6">
            {/* Logo mark */}
            <div className="relative w-5 h-5 flex-shrink-0">
              <div
                style={{
                  position:     "absolute",
                  inset:        0,
                  border:       "1px solid var(--border-visible)",
                  borderRadius: "2px",
                  opacity:      0.6,
                }}
              />
              <div
                style={{
                  position:     "absolute",
                  inset:        "4px",
                  background:   "var(--accent)",
                  borderRadius: "1px",
                  opacity:      0.25,
                }}
              />
            </div>
            <span
              style={{
                fontFamily:    "var(--font-body)",
                fontWeight:    300,
                fontSize:      "0.72rem",
                color:         "var(--text-muted)",
                letterSpacing: "0.01em",
              }}
            >
              © {year} Blockstein Solutions. All rights reserved.
            </span>
          </div>

          {/* Right — legal + location */}
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily:    "var(--font-body)",
                  fontWeight:    300,
                  fontSize:      "0.72rem",
                  color:         "var(--text-muted)",
                  textDecoration: "none",
                  transition:    "color 0.3s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l}
              </a>
            ))}

            {/* Separator */}
            <div
              className="hidden md:block w-px h-3"
              style={{ background: "var(--border-visible)" }}
            />

            {/* Location indicator */}
            <div className="hidden md:flex items-center gap-1.5">
              <div
                className="w-1 h-1 rounded-full"
                style={{ background: "var(--accent)", opacity: 0.6 }}
              />
              <span
                style={{
                  fontFamily:    "var(--font-body)",
                  fontWeight:    300,
                  fontSize:      "0.68rem",
                  color:         "var(--text-muted)",
                  letterSpacing: "0.04em",
                }}
              >
                Global Operations
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}