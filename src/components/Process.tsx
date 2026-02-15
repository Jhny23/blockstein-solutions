"use client";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business, market, and goals. No assumptions—just rigorous analysis to understand what will actually move the needle.",
    duration: "Week 1-2"
  },
  {
    number: "02",
    title: "Strategy",
    description: "We architect a custom growth system tailored to your specific challenges. Every element is designed to compound over time.",
    duration: "Week 2-3"
  },
  {
    number: "03",
    title: "Execution",
    description: "We deploy your strategy with precision. Continuous optimization based on real data, not guesswork.",
    duration: "Ongoing"
  },
  {
    number: "04",
    title: "Scale",
    description: "We systematically expand what works. Building sustainable growth engines that run without constant intervention.",
    duration: "Ongoing"
  }
];

export default function Process() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-20">
          <span className="label inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--accent)]" />
            How We Work
          </span>
          <h2 className="heading-sans text-4xl md:text-5xl text-[var(--text-primary)]">
            A process built for
            <br />
            <span className="text-[var(--text-secondary)]">compounding results</span>
          </h2>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[var(--border-visible)] via-[var(--accent)] to-[var(--border-visible)] opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Step indicator */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:border-[var(--accent)] transition-colors duration-300">
                    <span className="text-xl font-semibold text-[var(--accent)]">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector dot for desktop */}
                  <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="body-text text-sm mb-4">
                  {step.description}
                </p>
                <span className="text-xs text-[var(--text-muted)]">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
