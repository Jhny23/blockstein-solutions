"use client";

import { useState } from "react";

const STEPS = [
  {
    index:       "01",
    title:       "Discovery",
    verb:        "We listen first.",
    description: "No assumptions — just rigorous analysis. We immerse in your business, market position, competitive landscape, and the specific friction points blocking your growth.",
    duration:    "Weeks 1–2",
    deliverable: "Growth Audit + Opportunity Map",
    details:     ["Stakeholder interviews", "Competitive analysis", "Market positioning audit", "Data infrastructure review"],
  },
  {
    index:       "02",
    title:       "Strategy",
    verb:        "We architect.",
    description: "A custom growth system engineered for your specific challenges. Every channel, message, and tactic is chosen because the data says it will compound — not because it's trending.",
    duration:    "Weeks 2–3",
    deliverable: "90-Day Growth Blueprint",
    details:     ["Channel prioritisation", "Messaging framework", "KPI architecture", "Resource allocation"],
  },
  {
    index:       "03",
    title:       "Execution",
    verb:        "We deploy.",
    description: "Precision deployment of the system. Structured rollout with real-time optimisation loops. Every decision is traced back to data, not gut feel.",
    duration:    "Ongoing",
    deliverable: "Weekly Performance Reports",
    details:     ["Phased campaign rollout", "A/B testing cadence", "Attribution modelling", "Creative iteration"],
  },
  {
    index:       "04",
    title:       "Scale",
    verb:        "We compound.",
    description: "Systematically expand what works. We identify the highest-leverage vectors and pour fuel on them — building engines that generate returns without constant intervention.",
    duration:    "Ongoing",
    deliverable: "Quarterly Scale Reviews",
    details:     ["Channel expansion", "Automation buildout", "Referral architecture", "Long-term brand equity"],
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="process"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div
        className="orb orb-accent absolute w-[500px] h-[500px] -top-20 -right-20 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="reveal grid lg:grid-cols-2 gap-10 items-end mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
              <span className="type-label">How We Work</span>
            </div>
            <h2>
              <span className="block" style={{
                fontFamily: "var(--font-display)", fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                lineHeight: 1.05, letterSpacing: "-0.01em",
                color: "var(--text-primary)",
              }}>
                A process built for
              </span>
              <span className="block" style={{
                fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                lineHeight: 1.05, letterSpacing: "-0.01em",
                color: "var(--text-secondary)",
              }}>
                compounding results.
              </span>
            </h2>
          </div>
          <p className="type-body text-sm md:text-base max-w-md">
            Every engagement follows the same rigorous sequence. Each phase feeds the next. Nothing is skipped — that's how results compound.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Vertical thread */}
          <div
            className="hidden lg:block absolute left-[2.45rem] top-0 bottom-0 w-px pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--border-visible) 10%, var(--border-visible) 90%, transparent)",
            }}
          />

          <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {STEPS.map((step, i) => {
              const isActive = activeStep === i;
              const isOther  = activeStep !== null && !isActive;

              return (
                <div
                  key={step.index}
                  className="group relative"
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  style={{ borderBottom: "1px solid var(--border-subtle)", cursor: "none" }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 w-px transition-all duration-500"
                    style={{ height: isActive ? "100%" : "0%", background: "var(--accent)", opacity: 0.7 }}
                  />

                  <div
                    className="relative grid lg:grid-cols-[5rem_1fr_1fr_auto] gap-0 lg:gap-8 items-start py-8 lg:py-10 transition-all duration-500"
                    style={{
                      paddingLeft: isActive ? "1.25rem" : "0",
                      opacity: isOther ? 0.35 : 1,
                    }}
                  >

                    {/* Thread node + index */}
                    <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0 mb-4 lg:mb-0">
                      <div
                        className="hidden lg:flex w-5 h-5 rounded-full items-center justify-center flex-shrink-0 transition-all duration-400"
                        style={{
                          border:     `1px solid ${isActive ? "var(--accent)" : "var(--border-visible)"}`,
                          background:  isActive ? "rgba(0,200,255,0.1)" : "var(--bg-primary)",
                          boxShadow:   isActive ? "0 0 14px rgba(0,200,255,0.25)" : "none",
                          marginTop:   "2px",
                        }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                          style={{ background: isActive ? "var(--accent)" : "var(--text-muted)", opacity: isActive ? 1 : 0.4 }}
                        />
                      </div>
                      <span
                        className="lg:mt-3 transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-body)", fontWeight: 300,
                          fontSize: "0.6rem", letterSpacing: "0.12em",
                          color: isActive ? "var(--accent)" : "var(--text-muted)",
                          lineHeight: 1,
                        }}
                      >
                        {step.index}
                      </span>
                    </div>

                    {/* Title + italic verb */}
                    <div className="mb-3 lg:mb-0">
                      <div
                        className="transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-display)", fontWeight: 300,
                          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                          letterSpacing: "-0.01em", lineHeight: 1.1,
                          color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                        }}
                      >
                        {step.title}
                      </div>
                      <div
                        className="overflow-hidden transition-all duration-400"
                        style={{
                          maxHeight: isActive ? "2rem" : "0px",
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? "4px" : "0px",
                        }}
                      >
                        <span style={{
                          fontFamily: "var(--font-display)", fontStyle: "italic",
                          fontWeight: 300, fontSize: "0.95rem", color: "var(--accent)",
                        }}>
                          {step.verb}
                        </span>
                      </div>
                    </div>

                    {/* Description + details */}
                    <div>
                      <p style={{
                        fontFamily: "var(--font-body)", fontWeight: 300,
                        fontSize: "0.85rem", lineHeight: 1.75,
                        color: isActive ? "var(--text-secondary)" : "var(--text-muted)",
                        transition: "color 0.3s ease", maxWidth: "400px",
                      }}>
                        {step.description}
                      </p>

                      {/* Detail grid */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isActive ? "120px" : "0px",
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? "1rem" : "0",
                        }}
                      >
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                          {step.details.map(d => (
                            <div key={d} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)", opacity: 0.7 }} />
                              <span style={{
                                fontFamily: "var(--font-body)", fontWeight: 300,
                                fontSize: "0.72rem", color: "var(--text-muted)",
                              }}>
                                {d}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Duration tag + deliverable */}
                    <div className="flex lg:flex-col items-start lg:items-end gap-3 lg:gap-2 mt-3 lg:mt-0 flex-shrink-0">
                      <div
                        className="px-3 py-1.5 flex-shrink-0 transition-all duration-300"
                        style={{
                          fontFamily: "var(--font-body)", fontWeight: 300,
                          fontSize: "0.6rem", letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: isActive ? "var(--accent)" : "var(--text-muted)",
                          border: `1px solid ${isActive ? "var(--border-accent)" : "var(--border-subtle)"}`,
                          borderRadius: "2px", whiteSpace: "nowrap",
                        }}
                      >
                        {step.duration}
                      </div>
                      <div
                        className="transition-all duration-400"
                        style={{
                          fontFamily: "var(--font-body)", fontWeight: 300,
                          fontSize: "0.65rem", color: "var(--text-muted)",
                          textAlign: "right",
                          opacity: isActive ? 0.8 : 0,
                          maxWidth: "150px", lineHeight: 1.4,
                        }}
                      >
                        ↳ {step.deliverable}
                      </div>
                    </div>
                  </div>

                  {/* Watermark */}
                  <div
                    aria-hidden
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block transition-opacity duration-500"
                    style={{
                      fontFamily: "var(--font-display)", fontWeight: 300,
                      fontSize: "7rem", lineHeight: 1,
                      color: "var(--accent)", letterSpacing: "-0.04em",
                      opacity: isActive ? 0.05 : 0.02,
                    }}
                  >
                    {step.index}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom row */}
        <div className="reveal mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p style={{
            fontFamily: "var(--font-body)", fontWeight: 300,
            fontSize: "0.8rem", color: "var(--text-muted)",
            maxWidth: "380px", lineHeight: 1.65,
          }}>
            Most clients see measurable results within the first 60 days. The compounding kicks in around month three.
          </p>
          <a href="#contact" className="btn-primary text-xs flex-shrink-0">
            Start Your Discovery
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "0.25rem" }}>
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
