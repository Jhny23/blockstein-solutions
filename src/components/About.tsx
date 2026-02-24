"use client";

const PILLARS = [
  {
    index: "01",
    title: "Systems over tactics",
    desc: "We build repeatable growth frameworks, not one-off campaigns that spike and disappear.",
  },
  {
    index: "02",
    title: "Clarity over complexity",
    desc: "Simple strategies executed with surgical precision consistently outperform complicated chaos.",
  },
  {
    index: "03",
    title: "Partnership over projects",
    desc: "We succeed when you succeed. Fully aligned incentives, every engagement.",
  },
];

const FACTS = [
  { value: "2019", label: "Founded" },
  { value: "4", label: "Core Disciplines" },
  { value: "3", label: "Continents Active" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      <div
        className="orb orb-accent absolute w-[500px] h-[500px] -top-32 -left-32 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      <div className="container-site relative z-10">
        <div className="reveal flex items-center gap-4 mb-20">
          <div className="w-6 h-px" style={{ background: "var(--accent)" }} />
          <span className="type-label">About Us</span>
          <div
            className="flex-1 h-px"
            style={{ background: "var(--border-subtle)", maxWidth: "120px" }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="reveal relative">
            <div
              className="border-shimmer relative p-10 mb-6"
              style={{
                background: "var(--bg-elevated)",
                borderRadius: "4px",
                border: "1px solid var(--border-visible)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "8rem",
                  lineHeight: 0.8,
                  color: "var(--accent)",
                  opacity: 0.15,
                  position: "absolute",
                  top: "1.5rem",
                  left: "2rem",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
                aria-hidden
              >
                "
              </div>

              <p
                className="relative z-10"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(1.4rem, 3vw, 1.85rem)",
                  lineHeight: 1.4,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  paddingTop: "1.5rem",
                }}
              >
                We build growth systems,{" "}
                <span style={{ color: "var(--accent)" }}>not campaigns</span>.
                The difference compounds.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,200,255,0.2), rgba(0,200,255,0.05))",
                    border: "1px solid var(--border-accent)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "0.75rem",
                      color: "var(--accent)",
                    }}
                  >
                    B
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    Blockstein
                  </div>
                  <div
                    className="type-label"
                    style={{ fontSize: "0.6rem", marginTop: "2px" }}
                  >
                    Founding Philosophy
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-3 gap-px"
              style={{
                background: "var(--border-subtle)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="glint flex flex-col items-center justify-center py-7 px-4 text-center"
                  style={{ background: "var(--bg-elevated)" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 300,
                      fontSize: "2rem",
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {f.value}
                  </div>
                  <div className="type-label mt-2" style={{ fontSize: "0.6rem" }}>
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 h-px"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), transparent 60%)",
                opacity: 0.4,
              }}
            />
          </div>

          <div>
            <h2 className="reveal mb-8">
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(2.75rem, 5vw, 4rem)",
                  lineHeight: 1.05,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                Strategy that
              </span>
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(2.75rem, 5vw, 4rem)",
                  lineHeight: 1.05,
                  color: "var(--accent)",
                  letterSpacing: "-0.01em",
                }}
              >
                compounds.
              </span>
            </h2>

            {/* FIXED HERE */}
            <div
              className="reveal space-y-5 mb-14"
              style={{ transitionDelay: "0.1s" }}
            >
              <p className="type-body text-base leading-relaxed">
                We're not an agency that churns out campaigns. We're strategic
                partners who build growth systems — structured approaches that
                create compounding returns over time.
              </p>
              <p className="type-body text-base leading-relaxed">
                Founded by operators who've scaled companies from zero to eight
                figures, we understand the difference between tactics that spike
                and strategies that sustain.
              </p>
            </div>

            <div className="reveal space-y-0">
              {PILLARS.map((p, i) => (
                <div
                  key={p.index}
                  className="group relative flex gap-6 py-6"
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    borderBottom:
                      i === PILLARS.length - 1
                        ? "1px solid var(--border-subtle)"
                        : "none",
                  }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-[var(--accent)]"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {p.index}
                  </span>

                  <div>
                    <h4
                      className="mb-1.5 transition-colors duration-300 group-hover:text-[var(--accent)]"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "0.9375rem",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 300,
                        fontSize: "0.8375rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div
                    className="absolute left-0 top-0 w-px h-0 group-hover:h-full transition-all duration-500"
                    style={{ background: "var(--accent)", opacity: 0.6 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}