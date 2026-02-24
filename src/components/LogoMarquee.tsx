"use client";

const CLIENTS_A = [
  "Nexus Protocol",
  "Velocity Labs",
  "Quantum Tech",
  "Apex Digital",
  "Cipher Systems",
  "Nova Dynamics",
  "Prism Network",
  "Flux Capital",
];

const CLIENTS_B = [
  "Drift Protocol",
  "Meridian Labs",
  "Solace Digital",
  "Ironclad Systems",
  "Echo Ventures",
  "Vault Network",
  "Strata Capital",
  "Onyx Technologies",
];

function MarqueeRow({
  items,
  reverse = false,
  speed = "35s",
}: {
  items: string[];
  reverse?: boolean;
  speed?: string;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden marquee-mask">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${speed} linear infinite ${reverse ? "reverse" : ""}`,
          willChange: "transform",
        }}
      >
        {repeated.map((client, i) => (
          <div
            key={i}
            className="flex items-center flex-shrink-0"
          >
            {/* Client name */}
            <span
              className="group/item transition-all duration-500"
              style={{
                fontFamily:    i % 3 === 0 ? "var(--font-display)" : "var(--font-body)",
                fontStyle:     i % 3 === 0 ? "italic" : "normal",
                fontWeight:    i % 3 === 0 ? 300 : 400,
                fontSize:      i % 3 === 0 ? "1.2rem" : "0.8rem",
                letterSpacing: i % 3 === 0 ? "-0.01em" : "0.08em",
                textTransform: i % 3 === 0 ? "none" : "uppercase",
                color:         "var(--text-muted)",
                opacity:       0.45,
                padding:       "0 2.5rem",
                cursor:        "default",
                transition:    "opacity 0.4s ease, color 0.4s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLSpanElement).style.opacity = "1";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--text-secondary)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLSpanElement).style.opacity = "0.45";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--text-muted)";
              }}
            >
              {client}
            </span>

            {/* Separator — alternates between · and a thin line */}
            {i % 2 === 0 ? (
              <span
                style={{
                  color:   "var(--accent)",
                  opacity: 0.2,
                  fontSize: "0.5rem",
                  flexShrink: 0,
                }}
              >
                ◆
              </span>
            ) : (
              <div
                style={{
                  width:      "1px",
                  height:     "14px",
                  background: "var(--border-visible)",
                  opacity:    0.4,
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        borderTop:    "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        padding:      "3rem 0",
        background:   "var(--bg-secondary)",
      }}
    >
      {/* Label — left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 hidden lg:flex items-center justify-center z-10"
        style={{
          background: "linear-gradient(90deg, var(--bg-secondary) 60%, transparent 100%)",
        }}
      >
        <span
          style={{
            fontFamily:    "var(--font-body)",
            fontWeight:    300,
            fontSize:      "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color:         "var(--text-muted)",
            writingMode:   "vertical-rl",
            opacity:       0.6,
          }}
        >
          Trusted by
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <MarqueeRow items={CLIENTS_A} speed="40s" />
        <MarqueeRow items={CLIENTS_B} reverse speed="32s" />
      </div>

      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, var(--bg-secondary), transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(-90deg, var(--bg-secondary), transparent)",
        }}
      />
    </section>
  );
}
