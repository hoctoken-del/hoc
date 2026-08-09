/**
 * HOC About + Founder Section — Carbon & Sapphire / Swiss Precision Modernism
 * Technical evidence panels, declarative copy, integrated founder portrait
 * Sapphire + silver-white + charcoal only
 */
import { useEffect, useRef } from 'react';
import { HOC_CONFIG } from '@/lib/config';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Restrained sapphire accent — top-left only */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse at top left, oklch(0.42 0.19 265 / 0.08) 0%, transparent 65%)',
        }}
      />

      <div className="container relative z-10">
        {/* ── Section header ── */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">02 / About</span>
            <div className="h-px flex-1 max-w-12" style={{ background: 'oklch(0.42 0.19 265 / 0.4)' }} />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'oklch(0.96 0.005 265)',
              letterSpacing: '-0.025em',
            }}
          >
            Who We Are
          </h2>
          <div className="hoc-divider w-20" />
        </div>

        {/* ── About content ── */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          {/* Left: 7 col — copy */}
          <div className="lg:col-span-7 reveal stagger-1">
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: 'oklch(0.72 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              HOC is an AI-powered mobile platform currently under development for Android and iOS.
              The project aims to create a connected digital ecosystem where people can access
              innovative services, digital tools, and future opportunities through a single platform.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'oklch(0.72 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              HOC converts real-world human activity into digital rewards. Phase 1 focuses on
              trusted movement data and a transparent reward engine — building the infrastructure
              layer for tomorrow's digital economy.
            </p>
          </div>

          {/* Right: 5 col — technical spec panel */}
          <div className="lg:col-span-5 reveal stagger-2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'oklch(0.115 0.008 265)',
                border: '1px solid oklch(0.42 0.19 265 / 0.2)',
              }}
            >
              {/* Panel header */}
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'oklch(0.42 0.19 265)' }}
                />
                <span
                  className="text-xs"
                  style={{
                    color: 'oklch(0.55 0.015 265)',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.1em',
                  }}
                >
                  PROJECT STATUS
                </span>
              </div>
              {/* Spec rows */}
              {[
                { label: 'Platform', value: 'Android & iOS' },
                { label: 'Stage', value: 'Active Development' },
                { label: 'Version', value: 'v1.0.0 MVP' },
                { label: 'Status', value: 'In Progress' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="px-6 py-4 flex items-center justify-between"
                  style={{
                    borderBottom: i < 3 ? '1px solid oklch(1 0 0 / 0.05)' : 'none',
                  }}
                >
                  <span
                    className="text-xs"
                    style={{
                      color: 'oklch(0.48 0.015 265)',
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color: item.label === 'Status' ? 'oklch(0.82 0.14 75)' : 'oklch(0.9 0.005 265)',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Thin sapphire rule ── */}
        <div className="hoc-divider mb-20" />

        {/* ── Founder ── */}
        <div className="mb-10 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">02.1 / Founder</span>
            <div className="h-px flex-1 max-w-12" style={{ background: 'oklch(0.42 0.19 265 / 0.4)' }} />
          </div>
          <h3
            className="text-3xl lg:text-4xl font-bold"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'oklch(0.96 0.005 265)',
              letterSpacing: '-0.025em',
            }}
          >
            Meet the Founder
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Founder photo — 4 col */}
          <div className="lg:col-span-4 reveal stagger-1">
            <div className="relative">
              {/* Sapphire glow — restrained */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-20px',
                  background: 'radial-gradient(ellipse at center, oklch(0.42 0.19 265 / 0.15) 0%, transparent 65%)',
                  filter: 'blur(20px)',
                }}
              />
              {/* Photo frame */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: '3/4',
                  maxWidth: '320px',
                  border: '1px solid oklch(0.42 0.19 265 / 0.3)',
                }}
              >
                <img
                  src="./images/founder.jpg"
                  alt={HOC_CONFIG.founder.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28"
                  style={{
                    background: 'linear-gradient(to top, oklch(0.09 0.006 265 / 0.9), transparent)',
                  }}
                />
                {/* Name tag */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="text-base font-bold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.01em' }}
                  >
                    {HOC_CONFIG.founder.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      color: 'oklch(0.7 0.15 265)',
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: '0.05em',
                    }}
                  >
                    {HOC_CONFIG.founder.role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder bio — 8 col */}
          <div className="lg:col-span-8 reveal stagger-2">
            <div className="mb-6">
              <h4
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
              >
                {HOC_CONFIG.founder.name}
              </h4>
              <div
                className="text-xs"
                style={{
                  color: 'oklch(0.55 0.015 265)',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {HOC_CONFIG.founder.role}
              </div>
            </div>

            {/* Thin rule */}
            <div className="hoc-divider mb-6" />

            {HOC_CONFIG.founder.bio.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: 'oklch(0.68 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {para}
              </p>
            ))}

            {/* Expertise tags — sapphire only */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {['Technology', 'Energy Systems', 'Software Development', 'Innovation', 'AI Research'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg text-xs"
                  style={{
                    background: 'oklch(0.42 0.19 265 / 0.08)',
                    border: '1px solid oklch(0.42 0.19 265 / 0.2)',
                    color: 'oklch(0.65 0.12 265)',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.05em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
