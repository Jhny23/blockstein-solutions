"use client";

import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    index:   "01",
    quote:   "Blockstein transformed our go-to-market approach. They didn't just run campaigns — they built a system that compounds our growth month over month.",
    author:  "Sarah Chen",
    role:    "CEO",
    company: "Nexus Protocol",
    metric:  { value: "12×", label: "TVL Growth" },
    initials: "SC",
  },
  {
    index:   "02",
    quote:   "Finally, a team that thinks like operators, not just marketers. Their strategic clarity cut through the noise and accelerated our market position by months.",
    author:  "Marcus Webb",
    role:    "Founder",
    company: "Velocity Labs",
    metric:  { value: "$1.2M", label: "New MRR" },
    initials: "MW",
  },
  {
    index:   "03",
    quote:   "The ROI speaks for itself — 8× pipeline in 6 months. But what impressed me most was their systematic approach. Every decision had a reason.",
    author:  "Elena Rodriguez",
    role:    "CMO",
    company: "Cipher Systems",
    metric:  { value: "$8M", label: "Pipeline" },
    initials: "ER",
  },
];

export default function Testimonials() {
  const [active, setActive]     = useState(0);
  const [animating, setAnimating] = useState(false);

  /* Auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive(a => (a + 1) % TESTIMONIALS.length);
        setAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) => {
    if (i === active) return;
    setAnimating(true);
    setTimeout(() => { setActive(i); setAnimating(false); }, 250);
  };

  const t = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Centered accent glow */}
      <div
        className="orb absolute w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-20">
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <span className="type-label">Testimonials</span>
          <div className="flex-1 h-px" style={{ background: "var(--border-subtle)", maxWidth: "80px" }} />
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-start">

          {/* ── Featured quote ── */}
          <div className="reveal">

            {/* Oversized opening mark */}
            <div
              aria-hidden
              style={{
                fontFamily:  "var(--font-display)",
                fontWeight:  300,
                fontSize:    "clamp(5rem, 12vw, 9rem)",
                lineHeight:  0.75,
                color:       "var(--accent)",
                opacity:     0.12,
                marginBottom: "-1rem",
                userSelect:  "none",
              }}
            >
              "
            </div>

            {/* Quote body */}
            <div
              style={{
                opacity:    animating ? 0 : 1,
                transform:  animating ? "translateY(12px)" : "translateY(0)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <blockquote
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    300,
                  fontStyle:     "italic",
                  fontSize:      "clamp(1.4rem, 3vw, 2.1rem)",
                  lineHeight:    1.45,
                  letterSpacing: "-0.01em",
                  color:         "var(--text-primary)",
                  margin:        0,
                  padding:       0,
                  maxWidth:      "640px",
                }}
              >
                {t.quote}
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-5 mt-10">
                {/* Monogram */}
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    border:       "1px solid var(--border-accent)",
                    borderRadius: "2px",
                    background:   "rgba(0,200,255,0.05)",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-body)", fontWeight: 500,
                    fontSize: "0.75rem", color: "var(--accent)",
                    letterSpacing: "0.05em",
                  }}>
                    {t.initials}
                  </span>
                </div>

                {/* Name + role */}
                <div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontWeight: 500,
                    fontSize: "0.9rem", color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}>
                    {t.author}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontWeight: 300,
                    fontSize: "0.75rem", color: "var(--text-muted)",
                    marginTop: "2px",
                  }}>
                    {t.role}, {t.company}
                  </div>
                </div>

                {/* Separator */}
                <div className="hidden md:block w-px h-8 mx-2" style={{ background: "var(--border-visible)" }} />

                {/* Metric */}
                <div className="hidden md:flex flex-col">
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 300,
                    fontSize: "1.5rem", lineHeight: 1,
                    color: "var(--accent)", letterSpacing: "-0.02em",
                  }}>
                    {t.metric.value}
                  </span>
                  <span className="type-label" style={{ fontSize: "0.58rem", marginTop: "3px" }}>
                    {t.metric.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress + controls */}
            <div className="flex items-center gap-6 mt-12">
              {/* Dots */}
              <div className="flex items-center gap-2.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    style={{
                      width:      i === active ? "28px" : "6px",
                      height:     "4px",
                      borderRadius: "2px",
                      background: i === active ? "var(--accent)" : "var(--border-visible)",
                      border:     "none",
                      cursor:     "none",
                      transition: "width 0.4s ease, background 0.3s ease",
                      padding:    0,
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Index */}
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "0.65rem", letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}>
                {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </span>

              {/* Prev / Next */}
              <div className="flex items-center gap-2 ml-auto">
                {(["prev", "next"] as const).map(dir => (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => go(dir === "prev" ? (active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length : (active + 1) % TESTIMONIALS.length)}
                    className="group/btn flex items-center justify-center transition-all duration-300"
                    style={{
                      width: "36px", height: "36px",
                      border: "1px solid var(--border-visible)",
                      borderRadius: "2px", background: "none", cursor: "none",
                    }}
                    aria-label={dir === "prev" ? "Previous" : "Next"}
                  >
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                      style={{
                        color: "var(--text-muted)",
                        transform: dir === "prev" ? "rotate(180deg)" : "none",
                      }}
                      className="group-hover/btn:!text-[var(--accent)] transition-colors duration-300"
                    >
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Side stack — other testimonials ── */}
          <div className="reveal hidden lg:flex flex-col gap-3">
            {TESTIMONIALS.map((item, i) => {
              const isCurrent = i === active;
              return (
                <button
                  key={item.index}
                  type="button"
                  onClick={() => go(i)}
                  className="group/card text-left transition-all duration-400 glint"
                  style={{
                    background:   isCurrent ? "var(--bg-elevated)" : "transparent",
                    border:       `1px solid ${isCurrent ? "var(--border-accent)" : "var(--border-subtle)"}`,
                    borderRadius: "3px",
                    padding:      "1.25rem",
                    cursor:       "none",
                    opacity:      isCurrent ? 1 : 0.55,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                        style={{
                          border: `1px solid ${isCurrent ? "var(--border-accent)" : "var(--border-subtle)"}`,
                          borderRadius: "2px",
                          background: isCurrent ? "rgba(0,200,255,0.06)" : "transparent",
                        }}
                      >
                        <span style={{
                          fontFamily: "var(--font-body)", fontWeight: 500,
                          fontSize: "0.6rem",
                          color: isCurrent ? "var(--accent)" : "var(--text-muted)",
                        }}>
                          {item.initials}
                        </span>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "var(--font-body)", fontWeight: 500,
                          fontSize: "0.78rem", color: isCurrent ? "var(--text-primary)" : "var(--text-secondary)",
                        }}>
                          {item.author}
                        </div>
                        <div style={{
                          fontFamily: "var(--font-body)", fontWeight: 300,
                          fontSize: "0.65rem", color: "var(--text-muted)",
                          marginTop: "1px",
                        }}>
                          {item.company}
                        </div>
                      </div>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 300,
                      fontSize: "1.1rem", color: isCurrent ? "var(--accent)" : "var(--text-muted)",
                      letterSpacing: "-0.02em",
                    }}>
                      {item.metric.value}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "var(--font-body)", fontWeight: 300,
                    fontSize: "0.75rem", lineHeight: 1.65,
                    color: isCurrent ? "var(--text-secondary)" : "var(--text-muted)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {item.quote}
                  </p>
                </button>
              );
            })}

            {/* Social proof footnote */}
            <div
              className="mt-2 pt-5 flex items-center gap-3"
              style={{ borderTop: "1px solid var(--border-subtle)" }}
            >
              <div className="flex -space-x-2">
                {["SC", "MW", "ER"].map(ini => (
                  <div
                    key={ini}
                    className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "1px solid var(--bg-secondary)",
                      borderRadius: "50%",
                      background: "var(--bg-elevated)",
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-body)", fontWeight: 500,
                      fontSize: "0.55rem", color: "var(--text-muted)",
                    }}>
                      {ini}
                    </span>
                  </div>
                ))}
              </div>
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 300,
                fontSize: "0.7rem", color: "var(--text-muted)",
                lineHeight: 1.4,
              }}>
                92% client retention rate
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
