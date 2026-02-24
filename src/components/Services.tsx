"use client";

import { useState } from "react";

const SERVICES = [
  {
    index:       "01",
    title:       "Structured Branding",
    subtitle:    "Identity that scales",
    description: "We build brand systems that compound your market position. From identity architecture to messaging frameworks, every element is engineered to work harder over time — not just look good at launch.",
    features:    ["Brand Strategy", "Visual Identity", "Messaging Architecture", "Brand Guidelines"],
    accent:      "var(--accent)",
  },
  {
    index:       "02",
    title:       "Strategic Distribution",
    subtitle:    "Reach that compounds",
    description: "Get in front of the right people, in the right places, at the right time. We engineer distribution channels that create sustainable growth loops — not dependency on a single platform or tactic.",
    features:    ["Channel Strategy", "Partnership Development", "Community Building", "Content Distribution"],
    accent:      "var(--gold)",
  },
  {
    index:       "03",
    title:       "Performance Marketing",
    subtitle:    "Revenue, not vanity metrics",
    description: "Data-driven campaigns that convert. We optimise every touchpoint from impression to revenue, with full-funnel attribution, predictable scaling, and zero tolerance for spend that doesn't earn.",
    features:    ["Paid Acquisition", "Conversion Optimisation", "Analytics & Attribution", "Growth Engineering"],
    accent:      "var(--silver)",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  return (
    <section
      id="services"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div
        className="orb absolute w-[600px] h-[600px] right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
              <span className="type-label">What We Do</span>
            </div>
            <h2>
              <span className="block" style={{
                fontFamily: "var(--font-display)", fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.05,
                letterSpacing: "-0.01em", color: "var(--text-primary)",
              }}>
                Three pillars of
              </span>
              <span className="block" style={{
                fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.05,
                letterSpacing: "-0.01em", color: "var(--text-secondary)",
              }}>
                systematic growth.
              </span>
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end gap-1.5">
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.65rem",
              letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)",
            }}>
              Currently viewing
            </span>
            <span key={active.index} style={{
              fontFamily: "var(--font-display)", fontStyle: "italic",
              fontWeight: 300, fontSize: "1.1rem", color: active.accent,
            }}>
              {active.subtitle}
            </span>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-14 items-start">

          {/* Service rows */}
          <div className="reveal" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {SERVICES.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={s.index}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className="group w-full text-left"
                  style={{
                    background: "none", border: "none",
                    borderBottom: "1px solid var(--border-subtle)",
                    cursor: "none", padding: 0,
                  }}
                >
                  <div
                    className="relative flex items-center gap-6 py-7 lg:py-9 transition-all duration-500"
                    style={{ paddingLeft: isActive ? "1.25rem" : "0" }}
                  >
                    {/* Active bar */}
                    <div
                      className="absolute left-0 top-0 w-px transition-all duration-500"
                      style={{ height: isActive ? "100%" : "0%", background: s.accent, opacity: 0.8 }}
                    />

                    {/* Index */}
                    <span className="flex-shrink-0 transition-colors duration-300" style={{
                      fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.6rem",
                      letterSpacing: "0.1em", color: isActive ? s.accent : "var(--text-muted)",
                      lineHeight: 1, width: "22px",
                    }}>
                      {s.index}
                    </span>

                    {/* Title */}
                    <span className="flex-1 transition-colors duration-300" style={{
                      fontFamily: "var(--font-display)", fontWeight: 300,
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    }}>
                      {s.title}
                    </span>

                    {/* Subtitle */}
                    <span className="hidden md:block flex-shrink-0" style={{
                      fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.75rem",
                      color: isActive ? s.accent : "transparent",
                      opacity: isActive ? 1 : 0,
                      transition: "color 0.4s ease, opacity 0.4s ease",
                    }}>
                      {s.subtitle}
                    </span>

                    {/* Arrow */}
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none"
                      className="flex-shrink-0 transition-all duration-400"
                      style={{
                        color: isActive ? s.accent : "var(--text-muted)",
                        transform: isActive ? "rotate(0deg)" : "rotate(-45deg)",
                        opacity: isActive ? 1 : 0.35,
                      }}
                    >
                      <path d="M3 17L17 3M17 3H7M17 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="reveal lg:sticky lg:top-28">
            <div
              key={active.index}
              className="border-shimmer glint"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border-visible)",
                borderRadius: "4px",
                overflow: "hidden",
                animation: "panel-in 0.4s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {/* Top section */}
              <div className="relative p-8 pb-0 overflow-hidden">
                {/* Large watermark index */}
                <div aria-hidden style={{
                  fontFamily: "var(--font-display)", fontWeight: 300,
                  fontSize: "8rem", lineHeight: 0.85, color: active.accent,
                  opacity: 0.07, position: "absolute", top: "0.5rem", right: "1rem",
                  userSelect: "none", letterSpacing: "-0.04em",
                }}>
                  {active.index}
                </div>

                {/* Label */}
                <div className="flex items-center gap-2.5 mb-5 relative z-10">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: active.accent }} />
                  <span style={{
                    fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.62rem",
                    letterSpacing: "0.16em", textTransform: "uppercase", color: active.accent,
                  }}>
                    {active.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative z-10 mb-4" style={{
                  fontFamily: "var(--font-display)", fontWeight: 300,
                  fontSize: "1.55rem", lineHeight: 1.2,
                  color: "var(--text-primary)", letterSpacing: "-0.01em",
                }}>
                  {active.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 pb-7" style={{
                  fontFamily: "var(--font-body)", fontWeight: 300,
                  fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-secondary)",
                }}>
                  {active.description}
                </p>
              </div>

              {/* Features */}
              <div className="mx-7 py-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {active.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 5h8M5 1l4 4-4 4" stroke={active.accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{
                        fontFamily: "var(--font-body)", fontWeight: 400,
                        fontSize: "0.78rem", color: "var(--text-secondary)",
                      }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mx-7 pb-7 pt-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <a href="#contact" className="inline-flex items-center gap-2 group/cta"
                  style={{
                    fontFamily: "var(--font-body)", fontWeight: 400,
                    fontSize: "0.72rem", letterSpacing: "0.1em",
                    textTransform: "uppercase", color: active.accent, textDecoration: "none",
                  }}
                >
                  Start this service
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                  >
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes panel-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}