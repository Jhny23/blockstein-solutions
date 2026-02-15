"use client";

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient orbs */}
      <div
        className="gradient-orb w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
          opacity: 0.5
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Label */}
        <span className="label inline-flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-[var(--accent)]" />
          Let's Talk
          <span className="w-8 h-px bg-[var(--accent)]" />
        </span>

        {/* Heading */}
        <h2 className="heading-display text-5xl md:text-6xl lg:text-7xl text-[var(--text-primary)] mb-6">
          Ready to
          <br />
          <span className="text-accent-gradient">scale?</span>
        </h2>

        {/* Subtext */}
        <p className="body-text text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Book a strategy call with our team. No pitch decks, no fluff—just a
          focused conversation about your growth challenges and how we can solve them.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@blockstein.co" className="btn-primary text-lg px-10 py-5">
            Book Strategy Call
          </a>
          <a href="mailto:hello@blockstein.co" className="btn-secondary text-lg px-10 py-5">
            hello@blockstein.co
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No commitment required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            30-minute focused call
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Response within 24h
          </div>
        </div>
      </div>
    </section>
  );
}
