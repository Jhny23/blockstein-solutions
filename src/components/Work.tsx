"use client";

const projects = [
  {
    client: "Nexus Protocol",
    category: "DeFi Platform",
    description: "Brand identity and go-to-market strategy for a next-gen DeFi protocol.",
    metrics: { label: "TVL Growth", value: "12x" },
    image: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%)"
  },
  {
    client: "Velocity Labs",
    category: "Developer Tools",
    description: "Full-funnel marketing engine driving developer adoption and enterprise sales.",
    metrics: { label: "MRR Growth", value: "$1.2M" },
    image: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"
  },
  {
    client: "Cipher Systems",
    category: "Cybersecurity",
    description: "Strategic repositioning and demand generation for B2B security platform.",
    metrics: { label: "Pipeline Generated", value: "$8M" },
    image: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%)"
  },
  {
    client: "Prism Network",
    category: "Infrastructure",
    description: "Community-first growth strategy for decentralized infrastructure protocol.",
    metrics: { label: "Community Growth", value: "340%" },
    image: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2d2d5a 100%)"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="label inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--accent)]" />
              Selected Work
            </span>
            <h2 className="heading-sans text-4xl md:text-5xl text-[var(--text-primary)]">
              Results that
              <br />
              <span className="text-[var(--text-secondary)]">speak volumes</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-secondary self-start md:self-auto"
          >
            View All Cases
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.client}
              className="group relative rounded-2xl overflow-hidden cursor-pointer card-lift"
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0"
                style={{ background: project.image }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />

              {/* Content */}
              <div className="relative p-8 md:p-10 min-h-[400px] flex flex-col justify-end">
                {/* Category tag */}
                <span className="absolute top-8 right-8 text-xs px-3 py-1 rounded-full glass text-[var(--text-secondary)]">
                  {project.category}
                </span>

                {/* Main content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {project.client}
                  </h3>
                  <p className="body-text text-sm mb-6 max-w-sm">
                    {project.description}
                  </p>

                  {/* Metric */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-semibold text-[var(--accent)]">
                      {project.metrics.value}
                    </span>
                    <span className="text-sm text-[var(--text-muted)]">
                      {project.metrics.label}
                    </span>
                  </div>
                </div>

                {/* Hover reveal arrow */}
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
