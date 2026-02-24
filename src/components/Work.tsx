"use client";

import { useState } from "react";

const PROJECTS = [
  {
    index:       "01",
    client:      "Nexus Protocol",
    category:    "DeFi Platform",
    year:        "2024",
    description: "Brand identity and go-to-market strategy for a next-gen DeFi protocol. Repositioned from technical curiosity to institutional-grade infrastructure.",
    metrics:     { label: "TVL Growth",          value: "12×" },
    tags:        ["Brand Strategy", "GTM", "Community"],
    gradient:    "linear-gradient(135deg, #0a0e1a 0%, #0d2040 50%, #0a1628 100%)",
    featured:    true,
  },
  {
    index:       "02",
    client:      "Velocity Labs",
    category:    "Developer Tools",
    year:        "2024",
    description: "Full-funnel marketing engine driving developer adoption and enterprise sales pipeline.",
    metrics:     { label: "MRR Growth",          value: "$1.2M" },
    tags:        ["Performance", "Content", "Sales Enablement"],
    gradient:    "linear-gradient(135deg, #0d1520 0%, #162030 50%, #253545 100%)",
    featured:    false,
  },
  {
    index:       "03",
    client:      "Cipher Systems",
    category:    "Cybersecurity",
    year:        "2023",
    description: "Strategic repositioning and demand generation for a B2B security platform entering enterprise.",
    metrics:     { label: "Pipeline Generated",  value: "$8M" },
    tags:        ["Repositioning", "Demand Gen", "B2B"],
    gradient:    "linear-gradient(135deg, #111111 0%, #1e1e1e 50%, #2a2a2a 100%)",
    featured:    false,
  },
  {
    index:       "04",
    client:      "Prism Network",
    category:    "Infrastructure",
    year:        "2023",
    description: "Community-first growth strategy for decentralized infrastructure protocol.",
    metrics:     { label: "Community Growth",    value: "340%" },
    tags:        ["Community", "Distribution", "Content"],
    gradient:    "linear-gradient(135deg, #0a0a1a 0%, #12123a 50%, #1a1a50 100%)",
    featured:    false,
  },
];

const featured  = PROJECTS.find(p => p.featured)!;
const listItems = PROJECTS.filter(p => !p.featured);

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
              <span className="type-label">Selected Work</span>
            </div>
            <h2>
              <span className="block" style={{
                fontFamily: "var(--font-display)", fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                lineHeight: 1.05, letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}>
                Results that
              </span>
              <span className="block" style={{
                fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                lineHeight: 1.05, letterSpacing: "-0.01em",
                color: "var(--text-secondary)",
              }}>
                speak volumes.
              </span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost self-start md:self-auto">
            View All Cases
          </a>
        </div>

        {/* Featured case */}
        <div className="reveal mb-3">
          <div
            className="group relative overflow-hidden lift"
            style={{
              borderRadius: "4px",
              minHeight: "clamp(300px, 38vw, 500px)",
              cursor: "none",
            }}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ background: featured.gradient }}
            />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(6,6,10,0.95) 0%, rgba(6,6,10,0.25) 55%, transparent 100%)",
              }}
            />

            {/* Top row */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-7 md:p-9">
              <span className="type-label">{featured.index}</span>
              <div className="flex items-center gap-3">
                <span style={{
                  fontFamily: "var(--font-body)", fontWeight: 300,
                  fontSize: "0.65rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--text-muted)",
                  padding: "5px 11px",
                  border: "1px solid var(--border-visible)", borderRadius: "2px",
                  background: "rgba(6,6,10,0.5)", backdropFilter: "blur(8px)",
                }}>
                  {featured.category}
                </span>
                <span className="type-label">{featured.year}</span>
              </div>
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-12">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
                <div>
                  <h3
                    className="mb-4 transition-colors duration-400 group-hover:!text-[var(--accent)]"
                    style={{
                      fontFamily: "var(--font-display)", fontWeight: 300,
                      fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                      lineHeight: 1.1, letterSpacing: "-0.01em",
                      color: "var(--text-primary)",
                    }}
                  >
                    {featured.client}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontWeight: 300,
                    fontSize: "0.875rem", lineHeight: 1.7,
                    color: "var(--text-secondary)", maxWidth: "460px",
                  }}>
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {featured.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: "var(--font-body)", fontWeight: 300,
                        fontSize: "0.62rem", letterSpacing: "0.08em",
                        textTransform: "uppercase", color: "var(--text-muted)",
                        padding: "4px 10px",
                        border: "1px solid var(--border-subtle)", borderRadius: "2px",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metric */}
                <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 300,
                    fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                    lineHeight: 1, letterSpacing: "-0.02em",
                    color: "var(--accent)",
                  }}>
                    {featured.metrics.value}
                  </div>
                  <div className="type-label">{featured.metrics.label}</div>
                </div>
              </div>
            </div>

            {/* Hover arrow badge */}
            <div
              className="absolute top-7 md:top-9 right-[140px] md:right-[160px] w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
              style={{
                border: "1px solid var(--border-accent)",
                borderRadius: "2px",
                background: "rgba(0,200,255,0.06)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
                <path d="M3 17L17 3M17 3H7M17 3v10" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* List rows */}
        <div
          className="reveal"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          {listItems.map((project, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={project.client}
                className="group relative"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  cursor: "none",
                }}
              >
                <div
                  className="relative flex items-center gap-5 md:gap-8 py-7 transition-all duration-500"
                  style={{ paddingLeft: isHov ? "1.25rem" : "0" }}
                >
                  {/* Active bar */}
                  <div
                    className="absolute left-0 top-0 w-px transition-all duration-500"
                    style={{
                      height: isHov ? "100%" : "0%",
                      background: "var(--accent)", opacity: 0.6,
                    }}
                  />

                  {/* Index */}
                  <span className="flex-shrink-0" style={{
                    fontFamily: "var(--font-body)", fontWeight: 300,
                    fontSize: "0.6rem", letterSpacing: "0.1em",
                    color: isHov ? "var(--accent)" : "var(--text-muted)",
                    transition: "color 0.3s ease",
                    width: "22px", lineHeight: 1,
                  }}>
                    {project.index}
                  </span>

                  {/* Client */}
                  <span className="flex-1" style={{
                    fontFamily: "var(--font-display)", fontWeight: 300,
                    fontSize: "clamp(1.35rem, 2.5vw, 2rem)",
                    letterSpacing: "-0.01em", lineHeight: 1.1,
                    color: isHov ? "var(--text-primary)" : "var(--text-secondary)",
                    transition: "color 0.3s ease",
                  }}>
                    {project.client}
                  </span>

                  {/* Category */}
                  <span className="hidden md:block flex-shrink-0" style={{
                    fontFamily: "var(--font-body)", fontWeight: 300,
                    fontSize: "0.75rem", color: isHov ? "var(--text-secondary)" : "var(--text-muted)",
                    transition: "color 0.3s ease", width: "140px",
                  }}>
                    {project.category}
                  </span>

                  {/* Metric */}
                  <div className="flex-shrink-0 flex items-baseline gap-2">
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 300,
                      fontSize: "1.4rem", letterSpacing: "-0.02em",
                      color: isHov ? "var(--accent)" : "var(--text-muted)",
                      transition: "color 0.3s ease",
                    }}>
                      {project.metrics.value}
                    </span>
                    <span className="hidden sm:block type-label" style={{ fontSize: "0.58rem" }}>
                      {project.metrics.label}
                    </span>
                  </div>

                  {/* Year */}
                  <span className="hidden lg:block flex-shrink-0 type-label">{project.year}</span>

                  {/* Arrow */}
                  <svg
                    width="15" height="15" viewBox="0 0 20 20" fill="none"
                    className="flex-shrink-0 transition-all duration-400"
                    style={{
                      color: isHov ? "var(--accent)" : "var(--text-muted)",
                      transform: isHov ? "rotate(0deg)" : "rotate(-45deg)",
                      opacity: isHov ? 1 : 0.35,
                    }}
                  >
                    <path d="M3 17L17 3M17 3H7M17 3v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Hover preview */}
                <div
                  className="hidden lg:block absolute right-14 top-1/2 pointer-events-none"
                  style={{
                    width: "200px", height: "112px",
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(10px)",
                    transition: "opacity 0.3s ease, transform 0.35s ease",
                    zIndex: 20,
                  }}
                >
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{
                      background: project.gradient,
                      border: "1px solid var(--border-visible)",
                      borderRadius: "3px",
                    }}
                  >
                    <div className="w-full h-full bg-grid opacity-25" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom footer row */}
        <div className="reveal mt-12 flex items-center justify-between">
          <span style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "0.75rem", color: "var(--text-muted)",
          }}>
            Showing {PROJECTS.length} of 47+ projects
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 group/all"
            style={{
              fontFamily: "var(--font-body)", fontWeight: 400,
              fontSize: "0.7rem", letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-secondary)", textDecoration: "none",
            }}
          >
            <span className="group-hover/all:!text-[var(--accent)] transition-colors duration-300">
              All case studies
            </span>
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none"
              className="transition-transform duration-300 group-hover/all:translate-x-1"
              style={{ color: "var(--accent)" }}
            >
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}