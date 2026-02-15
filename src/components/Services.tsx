"use client";

const services = [
  {
    number: "01",
    title: "Structured Branding",
    description: "We build brand systems that scale. From identity architecture to messaging frameworks, every element is designed to compound your market position.",
    features: ["Brand Strategy", "Visual Identity", "Messaging Architecture", "Brand Guidelines"],
    accent: "var(--accent)"
  },
  {
    number: "02",
    title: "Strategic Distribution",
    description: "Get in front of the right people, in the right places, at the right time. We engineer distribution channels that create sustainable growth loops.",
    features: ["Channel Strategy", "Partnership Development", "Community Building", "Content Distribution"],
    accent: "var(--bronze)"
  },
  {
    number: "03",
    title: "Performance Marketing",
    description: "Data-driven campaigns that convert. We optimize every touchpoint from impression to revenue, with full-funnel attribution and predictable scaling.",
    features: ["Paid Acquisition", "Conversion Optimization", "Analytics & Attribution", "Growth Engineering"],
    accent: "var(--silver)"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, var(--accent-glow) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <span className="label inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--accent)]" />
            What We Do
          </span>
          <h2 className="heading-sans text-4xl md:text-5xl lg:text-6xl text-[var(--text-primary)]">
            Three pillars of
            <br />
            <span className="text-[var(--text-secondary)]">systematic growth</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group glass glass-hover rounded-2xl p-8 card-lift relative overflow-hidden"
            >
              {/* Gradient top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`
                }}
              />

              {/* Number */}
              <span
                className="text-6xl font-semibold opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                style={{ color: service.accent }}
              >
                {service.number}
              </span>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="body-text text-sm mb-8">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: service.accent }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow link */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors group/link"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
