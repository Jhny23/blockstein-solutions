"use client";

const TRUST = [
  { label: "No commitment required" },
  { label: "30-minute focused call"  },
  { label: "Response within 24h"     },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Large accent glow — bottom left */}
      <div
        className="orb absolute w-[700px] h-[700px] -bottom-40 -left-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,200,255,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      {/* Warm orb — top right */}
      <div
        className="orb absolute w-[400px] h-[400px] -top-20 right-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,155,106,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-site relative z-10">

        {/* ── Top rule + label ── */}
        <div className="reveal flex items-center gap-4 mb-20">
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <span className="type-label">Let's Talk</span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border-subtle)", maxWidth: "80px" }}
          />
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-end">

          {/* Left — headline */}
          <div className="reveal">
            <h2 className="mb-10">
              <span
                className="block"
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    300,
                  fontSize:      "clamp(3rem, 8vw, 6.5rem)",
                  lineHeight:    0.95,
                  letterSpacing: "-0.02em",
                  color:         "var(--text-primary)",
                }}
              >
                Ready to
              </span>
              <span
                className="block"
                style={{
                  fontFamily:    "var(--font-display)",
                  fontStyle:     "italic",
                  fontWeight:    300,
                  fontSize:      "clamp(3rem, 8vw, 6.5rem)",
                  lineHeight:    0.95,
                  letterSpacing: "-0.02em",
                  color:         "var(--accent)",
                }}
              >
                scale?
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize:   "1rem",
                lineHeight: 1.75,
                color:      "var(--text-secondary)",
                maxWidth:   "440px",
                marginBottom: "2.5rem",
              }}
            >
              No pitch decks, no fluff — just a focused 30-minute conversation
              about your growth challenges and whether we're the right fit to
              solve them.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col gap-3">
              {TRUST.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent)", opacity: 0.8 }}
                  />
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontWeight:    300,
                      fontSize:      "0.8rem",
                      color:         "var(--text-muted)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — action panel */}
          <div className="reveal">
            <div
              className="border-shimmer"
              style={{
                background:   "var(--bg-elevated)",
                border:       "1px solid var(--border-visible)",
                borderRadius: "4px",
                overflow:     "hidden",
              }}
            >
              {/* Panel header */}
              <div
                className="px-8 py-6 flex items-center justify-between"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                <span
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontWeight:    400,
                    fontSize:      "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color:         "var(--text-secondary)",
                  }}
                >
                  Book Strategy Call
                </span>
                {/* Live indicator */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#22c55e",
                      boxShadow:  "0 0 6px rgba(34,197,94,0.6)",
                      animation:  "pulse 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontWeight:    300,
                      fontSize:      "0.65rem",
                      letterSpacing: "0.08em",
                      color:         "var(--text-muted)",
                    }}
                  >
                    Accepting clients
                  </span>
                </div>
              </div>

              {/* Panel body */}
              <div className="px-8 py-8 flex flex-col gap-4">

                {/* Primary CTA */}
                <a
                  href="mailto:hello@blockstein.co"
                  className="btn-primary w-full justify-center text-center"
                  style={{ fontSize: "0.8125rem" }}
                >
                  Book a Strategy Call
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "0.35rem" }}>
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontWeight:    300,
                      fontSize:      "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color:         "var(--text-muted)",
                    }}
                  >
                    or
                  </span>
                  <div className="flex-1 h-px" style={{ background: "var(--border-subtle)" }} />
                </div>

                {/* Email link */}
                <a
                  href="mailto:hello@blockstein.co"
                  className="btn-ghost w-full justify-center text-center"
                  style={{ fontSize: "0.8125rem" }}
                >
                  hello@blockstein.co
                </a>

                {/* Response time note */}
                <p
                  className="text-center pt-2"
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontWeight:    300,
                    fontSize:      "0.7rem",
                    color:         "var(--text-muted)",
                    letterSpacing: "0.01em",
                  }}
                >
                  We respond within 24 hours.
                </p>
              </div>

              {/* Panel footer — social links */}
              <div
                className="px-8 py-5 flex items-center gap-5"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <span
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontWeight:    300,
                    fontSize:      "0.65rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color:         "var(--text-muted)",
                  }}
                >
                  Also on
                </span>
                {["LinkedIn", "Twitter", "Dribbble"].map(s => (
                  <a
                    key={s}
                    href="#"
                    className="link-line"
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontWeight:    300,
                      fontSize:      "0.72rem",
                      color:         "var(--text-muted)",
                      textDecoration: "none",
                      transition:    "color 0.3s ease",
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Below panel — stat */}
            <div
              className="mt-5 flex items-center gap-4 px-1"
            >
              <div
                className="flex-1 h-px"
                style={{ background: "var(--border-subtle)" }}
              />
              <span
                style={{
                  fontFamily:    "var(--font-body)",
                  fontWeight:    300,
                  fontSize:      "0.68rem",
                  letterSpacing: "0.06em",
                  color:         "var(--text-muted)",
                  whiteSpace:    "nowrap",
                }}
              >
                47+ brands scaled globally
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "var(--border-subtle)" }}
              />
            </div>
          </div>
        </div>

        {/* ── Large watermark — bottom ── */}
        <div
          aria-hidden
          className="pointer-events-none select-none mt-16 overflow-hidden"
          style={{
            fontFamily:    "var(--font-display)",
            fontWeight:    300,
            fontSize:      "clamp(4rem, 14vw, 12rem)",
            lineHeight:    0.9,
            color:         "var(--text-primary)",
            opacity:       0.025,
            letterSpacing: "-0.03em",
            whiteSpace:    "nowrap",
          }}
        >
          Blockstein
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}