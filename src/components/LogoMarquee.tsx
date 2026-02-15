"use client";

export default function LogoMarquee() {
  // Placeholder client names - in production these would be real logos
  const clients = [
    "Nexus Protocol",
    "Velocity Labs",
    "Quantum Tech",
    "Apex Digital",
    "Cipher Systems",
    "Nova Dynamics",
    "Prism Network",
    "Flux Capital",
  ];

  return (
    <section className="py-16 border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="fade-mask">
        <div className="flex whitespace-nowrap">
          {/* First set */}
          <div className="marquee">
            {clients.map((client, i) => (
              <div
                key={`a-${i}`}
                className="flex items-center gap-16 mx-8"
              >
                <span className="text-xl md:text-2xl font-medium text-[var(--text-muted)] opacity-50 hover:opacity-100 hover:text-[var(--text-secondary)] transition-all duration-300 cursor-default">
                  {client}
                </span>
                <span className="text-[var(--text-muted)] opacity-30">
                  /
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="marquee" aria-hidden="true">
            {clients.map((client, i) => (
              <div
                key={`b-${i}`}
                className="flex items-center gap-16 mx-8"
              >
                <span className="text-xl md:text-2xl font-medium text-[var(--text-muted)] opacity-50 hover:opacity-100 hover:text-[var(--text-secondary)] transition-all duration-300 cursor-default">
                  {client}
                </span>
                <span className="text-[var(--text-muted)] opacity-30">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
