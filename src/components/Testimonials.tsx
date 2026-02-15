"use client";

const testimonials = [
  {
    quote: "Blockstein transformed our go-to-market approach. They didn't just run campaigns—they built a system that compounds our growth month over month.",
    author: "Sarah Chen",
    role: "CEO, Nexus Protocol",
    initials: "SC"
  },
  {
    quote: "Finally, a team that thinks like operators, not just marketers. Their strategic clarity cut through the noise and accelerated our market position.",
    author: "Marcus Webb",
    role: "Founder, Velocity Labs",
    initials: "MW"
  },
  {
    quote: "The ROI speaks for itself—8x pipeline growth in 6 months. But what impressed me most was their systematic approach to everything.",
    author: "Elena Rodriguez",
    role: "CMO, Cipher Systems",
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label inline-flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--accent)]" />
            Testimonials
            <span className="w-8 h-px bg-[var(--accent)]" />
          </span>
          <h2 className="heading-display text-4xl md:text-5xl text-[var(--text-primary)]">
            Trusted by the
            <br />
            <em>ambitious</em>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass glass-hover rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-[var(--accent)] opacity-30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              {/* Quote text */}
              <p className="body-text mb-8 text-[var(--text-secondary)]">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-subtle)]">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-muted)] flex items-center justify-center text-[var(--bg-primary)] font-medium text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[var(--text-primary)] font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
