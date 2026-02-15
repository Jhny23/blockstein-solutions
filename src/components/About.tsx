"use client";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Visual */}
          <div className="relative">
            {/* Main visual block */}
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              {/* Layered geometric shapes */}
              <div className="absolute inset-8 border border-[var(--border-visible)] rounded-3xl transform -rotate-6" />
              <div className="absolute inset-4 border border-[var(--accent)] opacity-30 rounded-3xl transform rotate-3" />

              {/* Main content area */}
              <div className="absolute inset-0 glass rounded-3xl flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-bold text-accent-gradient mb-4">
                    B
                  </div>
                  <div className="text-sm text-[var(--text-muted)] tracking-widest uppercase">
                    Since 2019
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-xl bg-[var(--accent)] opacity-10 transform rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-[var(--bronze)] opacity-20 transform -rotate-6" />
            </div>
          </div>

          {/* Right column - Content */}
          <div>
            <span className="label inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--accent)]" />
              About Us
            </span>

            <h2 className="heading-display text-4xl md:text-5xl text-[var(--text-primary)] mb-8">
              Strategy that
              <br />
              <em>compounds</em>
            </h2>

            <div className="space-y-6 body-text">
              <p>
                We're not an agency that churns out campaigns. We're strategic
                partners who build growth systems—structured approaches that
                create compounding returns over time.
              </p>
              <p>
                Founded by operators who've scaled companies from zero to
                eight figures, we understand the difference between tactics
                that spike and strategies that sustain.
              </p>
            </div>

            {/* Philosophy points */}
            <div className="mt-12 space-y-6">
              {[
                { title: "Systems over tactics", desc: "We build repeatable frameworks, not one-off campaigns" },
                { title: "Clarity over complexity", desc: "Simple strategies executed with precision outperform chaos" },
                { title: "Partnership over projects", desc: "We succeed when you succeed, fully aligned incentives" }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-px h-full bg-gradient-to-b from-[var(--accent)] to-transparent flex-shrink-0" />
                  <div>
                    <h4 className="text-[var(--text-primary)] font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
