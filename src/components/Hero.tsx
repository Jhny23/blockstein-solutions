"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const cursorDotRef  = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    /* ── Custom cursor ── */
    const dot  = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top  = `${e.clientY}px`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let rafId: number;
    const animRing = () => {
      ringX.current = lerp(ringX.current, mouseX.current, 0.1);
      ringY.current = lerp(ringY.current, mouseY.current, 0.1);
      ring.style.left = `${ringX.current}px`;
      ring.style.top  = `${ringY.current}px`;
      rafId = requestAnimationFrame(animRing);
    };
    rafId = requestAnimationFrame(animRing);

    const onEnter = () => ring.classList.add("hovering");
    const onLeave = () => ring.classList.remove("hovering");
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io  = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stats = [
    { value: "47+",  label: "Brands Scaled" },
    { value: "$24M", label: "Revenue Generated" },
    { value: "3.2×", label: "Avg. ROAS" },
    { value: "92%",  label: "Client Retention" },
  ];

  return (
    <>
      {/* ── Custom cursor ── */}
      <div ref={cursorDotRef}  className="cursor-dot"  aria-hidden />
      <div ref={cursorRingRef} className="cursor-ring" aria-hidden />

      <section className="relative min-h-screen flex items-end overflow-hidden noise bg-[var(--bg-primary)]">

        {/* ── Background grid ── */}
        <div className="absolute inset-0 bg-grid opacity-100" />

        {/* ── Ambient orbs ── */}
        <div className="orb orb-accent w-[700px] h-[700px] -top-20 -right-40 opacity-80" />
        <div className="orb orb-warm  w-[500px] h-[500px] bottom-0 -left-24 opacity-60" style={{ animationDelay: "-12s" }} />

        {/* ── Thin horizontal rule — top ── */}
        <div
          className="absolute top-[88px] left-0 right-0 h-px bg-[var(--border-subtle)] line-expand"
          style={{ animationDelay: "0.8s" }}
        />

        {/* ── Right column — abstract mark ── */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:flex items-center justify-center pointer-events-none">

          {/* Large outlined letterform / geometric mark */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <div
              className="spin-slow absolute w-[440px] h-[440px] rounded-full"
              style={{ border: "1px solid rgba(0,200,255,0.08)" }}
            />
            {/* Middle ring */}
            <div
              className="spin-reverse absolute w-[320px] h-[320px] rounded-full"
              style={{ border: "1px dashed rgba(255,255,255,0.05)" }}
            />
            {/* Inner ring */}
            <div
              className="spin-slow absolute w-[200px] h-[200px] rounded-full"
              style={{ border: "1px solid rgba(0,200,255,0.12)", animationDuration: "80s" }}
            />

            {/* Crossing lines */}
            <svg
              className="absolute w-[440px] h-[440px] opacity-[0.07]"
              viewBox="0 0 440 440"
            >
              <line x1="220" y1="0"   x2="220" y2="440" stroke="white" strokeWidth="0.5" />
              <line x1="0"   y1="220" x2="440" y2="220" stroke="white" strokeWidth="0.5" />
              <line x1="0"   y1="0"   x2="440" y2="440" stroke="var(--accent)" strokeWidth="0.5" />
              <line x1="440" y1="0"   x2="0"   y2="440" stroke="var(--accent)" strokeWidth="0.5" />
              {/* Arc segments */}
              <path d="M 220 20 A 200 200 0 0 1 420 220" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M 20 220 A 200 200 0 0 1 220 420" stroke="var(--accent)" strokeWidth="0.5" fill="none" opacity="0.6" />
            </svg>

            {/* Node dots */}
            {[
              { top: "0px",    left: "50%",  size: 4, accent: true  },
              { top: "50%",    left: "0px",  size: 3, accent: false },
              { bottom: "0px", left: "50%",  size: 4, accent: false },
              { top: "50%",    right: "0px", size: 3, accent: true  },
              { top: "15%",    right: "15%", size: 2, accent: true  },
              { bottom: "15%", left: "15%",  size: 2, accent: false },
            ].map((node, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width:  node.size * 2,
                  height: node.size * 2,
                  background: node.accent ? "var(--accent)" : "var(--silver)",
                  opacity: node.accent ? 0.7 : 0.3,
                  top:    node.top,
                  left:   node.left,
                  right:  (node as any).right,
                  bottom: (node as any).bottom,
                  transform: "translate(-50%, -50%)",
                  boxShadow: node.accent ? "0 0 12px var(--accent)" : "none",
                }}
              />
            ))}

            {/* Central mark */}
            <div
              className="relative w-16 h-16 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(0,200,255,0.1), rgba(0,200,255,0.02))",
                border: "1px solid var(--border-accent)",
                borderRadius: "4px",
              }}
            >
              {/* Inner cross */}
              <div className="w-px h-6 bg-[var(--accent)] opacity-60 absolute" />
              <div className="w-6 h-px bg-[var(--accent)] opacity-60 absolute" />
            </div>
          </div>

          {/* Vertical label on far right edge */}
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="type-label text-[0.6rem] tracking-[0.25em]" style={{ color: "var(--text-muted)" }}>
              Global Digital Agency
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--border-visible)] to-transparent" />
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 container-site w-full pb-20 pt-40">
          <div className="max-w-[640px] lg:max-w-[55%]">

            {/* Overline */}
            <div className="enter enter-1 flex items-center gap-4 mb-10">
              <div className="w-6 h-px bg-[var(--accent)]" />
              <span className="type-label">Strategic Growth Partner</span>
            </div>

            {/* Headline — mixed type pairing */}
            <h1 className="mb-8">
              <span className="enter enter-2 block type-display text-[clamp(3.5rem,8vw,6.5rem)] text-gradient-white leading-[1.0]">
                We help brands
              </span>
              <span className="enter enter-3 block type-display italic text-[clamp(3.5rem,8vw,6.5rem)] leading-[1.0]" style={{ color: "var(--accent)", fontWeight: 300 }}>
                scale
              </span>
              <span className="enter enter-4 block type-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[1.0]" style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                with precision.
              </span>
            </h1>

            {/* Body */}
            <p className="enter enter-5 type-body text-base md:text-lg max-w-[480px] mb-10">
              Structured branding, strategic distribution, and performance
              marketing for tech companies and modern brands ready to
              dominate their markets.
            </p>

            {/* CTAs */}
            <div className="enter enter-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#contact" className="btn-primary">
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginLeft: "0.25rem" }}>
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#work" className="btn-ghost">
                View Our Work
              </a>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div
            className="enter enter-5 mt-24 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{ borderTop: "1px solid var(--border-subtle)" }}
          >
            {stats.map((s, i) => (
              <div key={i} className="group glint">
                <div
                  className="stat-num type-heading text-3xl md:text-4xl mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {s.value}
                </div>
                <div className="type-label" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </div>
                <div
                  className="mt-3 w-6 h-px transition-all duration-500 group-hover:w-full"
                  style={{ background: "var(--accent)", opacity: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <div
            className="w-px h-14 origin-top animate-[scaleY_2s_ease-in-out_infinite_alternate]"
            style={{
              background: "linear-gradient(to bottom, var(--text-muted), transparent)",
              animation: "scroll-line 2s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes scroll-line {
            0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
            50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
            51%  { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
            100% { transform: scaleY(0); transform-origin: bottom; opacity: 0.3; }
          }
        `}</style>

      </section>
    </>
  );
}