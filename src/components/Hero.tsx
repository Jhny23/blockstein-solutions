"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div
        className="gradient-orb w-[600px] h-[600px] -top-40 -right-40"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
      />
      <div
        className="gradient-orb w-[400px] h-[400px] bottom-20 -left-20"
        style={{
          background: 'radial-gradient(circle, rgba(205, 151, 119, 0.15) 0%, transparent 70%)',
          animationDelay: '-10s'
        }}
      />

      {/* Decorative blockchain-inspired graphic - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:flex items-center justify-center pointer-events-none">
        <div className="relative w-[400px] h-[400px]">
          {/* Central node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[var(--accent)] opacity-60" />

          {/* Orbiting rings */}
          <div className="absolute inset-0 border border-[var(--border-visible)] rounded-full opacity-40 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 border border-[var(--accent)] rounded-full opacity-20 animate-[spin_40s_linear_infinite_reverse]" />
          <div className="absolute inset-16 border border-[var(--border-visible)] rounded-full opacity-30 animate-[spin_80s_linear_infinite]" />
          <div className="absolute inset-24 border border-dashed border-[var(--text-muted)] rounded-full opacity-10" />

          {/* Nodes on orbits */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent)] opacity-50" />
          <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-[var(--bronze)] opacity-60" />
          <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-[var(--silver)] opacity-40" />
          <div className="absolute bottom-1/3 left-8 w-3 h-3 rounded-full border border-[var(--accent)] opacity-40" />

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
            <line x1="200" y1="200" x2="200" y2="0" stroke="var(--accent)" strokeWidth="0.5" />
            <line x1="200" y1="200" x2="350" y2="100" stroke="var(--accent)" strokeWidth="0.5" />
            <line x1="200" y1="200" x2="350" y2="300" stroke="var(--border-visible)" strokeWidth="0.5" />
            <line x1="200" y1="200" x2="50" y2="150" stroke="var(--border-visible)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="stagger-in stagger-1 mb-8">
            <span className="label inline-flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              Strategic Growth Partner
            </span>
          </div>

          {/* Main heading */}
          <h1 className="stagger-in stagger-2 heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8">
            <span className="text-gradient">We help brands</span>
            <br />
            <span className="text-[var(--accent)]">scale</span>
            <span className="text-[var(--text-primary)]"> with</span>
            <br />
            <em className="text-[var(--text-secondary)] not-italic">precision</em>
          </h1>

          {/* Subheading */}
          <p className="stagger-in stagger-3 body-text text-lg md:text-xl max-w-2xl mb-12">
            Structured branding, strategic distribution, and performance
            marketing for tech companies and modern brands ready to dominate
            their markets.
          </p>

          {/* CTAs */}
          <div className="stagger-in stagger-4 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Book a Strategy Call
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="stagger-in stagger-5 mt-20 pt-10 border-t border-[var(--border-subtle)]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  47+
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  Brands Scaled
                </div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  $24M
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  Revenue Generated
                </div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  3.2x
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  Avg. ROAS
                </div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  92%
                </div>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  Client Retention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--text-muted)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
