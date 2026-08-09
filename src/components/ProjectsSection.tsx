/**
 * HOC Projects Section — Carbon & Sapphire design
 * Section label: 04 / Projects
 * Three project cards with images and descriptions
 */
import { useEffect, useRef } from 'react';
import { ExternalLink, Zap, Code2, Smartphone } from 'lucide-react';

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'oklch(0.42 0.19 265 / 0.06)',
          filter: 'blur(80px)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="section-label mb-4">04 / Projects</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Projects
          </h2>
          <div className="hoc-divider w-24" />
        </div>

        {/* Project 1: HOC Super App — featured large card */}
        <div
          className="reveal stagger-1 rounded-2xl overflow-hidden mb-8"
          style={{
            background: 'oklch(0.115 0.008 265)',
            border: '1px solid oklch(0.42 0.19 265 / 0.25)',
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* App screenshots */}
            <div
              className="relative overflow-hidden"
              style={{
                background: 'oklch(0.09 0.006 265)',
                minHeight: '320px',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, oklch(0.42 0.19 265 / 0.15) 0%, transparent 70%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
                {/* Two phone mockups side by side */}
                <div
                  className="phone-mockup flex-shrink-0"
                  style={{ width: '130px', transform: 'rotate(-4deg) translateY(8px)' }}
                >
                  <img
                    src="./images/app-screen-1.jpg"
                    alt="HOC App Screen 1"
                    className="w-full"
                    style={{ borderRadius: '2rem' }}
                  />
                </div>
                <div
                  className="phone-mockup flex-shrink-0"
                  style={{ width: '130px', transform: 'rotate(4deg) translateY(-8px)' }}
                >
                  <img
                    src="./images/app-screen-4.jpg"
                    alt="HOC App Screen 4"
                    className="w-full"
                    style={{ borderRadius: '2rem' }}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'oklch(0.42 0.19 265 / 0.15)',
                    border: '1px solid oklch(0.42 0.19 265 / 0.3)',
                  }}
                >
                  <Smartphone size={18} style={{ color: 'oklch(0.7 0.15 265)' }} />
                </div>
                <span
                  className="text-xs status-progress px-2 py-1 rounded-full"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Under Development
                </span>
              </div>
              <h3
                className="text-2xl lg:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                HOC Super App
              </h3>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: 'oklch(0.65 0.015 265)', fontFamily: "'Inter', sans-serif" }}
              >
                An AI-powered mobile app currently in development for Android and iOS, designed to become a next-generation digital ecosystem. HOC transforms real-world human activities into digital rewards through a transparent and intelligent platform.
                Users can create their own private network and benefit from its stable income, the app has its own token, and users can make transactions and even make daily purchases using the app.
              </p>
              <button
                onClick={() => document.getElementById('prototype')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                style={{
                  color: 'oklch(0.7 0.15 265)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.85 0.15 265)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.7 0.15 265)')}
              >
                View Prototype <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects 2 & 3 — side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 2: Geo Power */}
          <div
            className="reveal stagger-2 rounded-2xl overflow-hidden"
            style={{
              background: 'oklch(0.115 0.008 265)',
              border: '1px solid oklch(1 0 0 / 0.07)',
            }}
          >
            {/* Image area */}
            <div
              className="relative overflow-hidden"
              style={{ height: '220px', background: 'oklch(0.09 0.006 265)' }}
            >
              <img
                src="./images/geo-power-1.jpg"
                alt="Geo Power Generation System — Laboratory Report"
                className="w-full h-full object-cover object-top"
                style={{ opacity: 0.7 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, transparent 40%, oklch(0.115 0.008 265) 100%)',
                }}
              />
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'oklch(0.75 0.17 75 / 0.12)',
                    border: '1px solid oklch(0.75 0.17 75 / 0.25)',
                  }}
                >
                  <Zap size={16} style={{ color: 'oklch(0.85 0.15 75)' }} />
                </div>
                <span
                  className="text-xs status-completed px-2 py-1 rounded-full"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Lab Tested
                </span>
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Geo Power Generation System
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'oklch(0.62 0.015 265)', fontFamily: "'Inter', sans-serif" }}
              >
                A green energy technology project designed and developed by the founder.
                The system has been tested by an independent laboratory (EPIL) according
                to the project information provided by the founder. This system can achieve
                very high efficiency by connecting to the ground.
              </p>
              {/* Specs */}
              <div
                className="rounded-xl p-4 mt-4"
                style={{
                  background: 'oklch(0.09 0.006 265)',
                  border: '1px solid oklch(1 0 0 / 0.06)',
                }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{
                        color: 'oklch(0.42 0.19 265)',
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Input
                    </div>
                    <div
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      637.2 W
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{
                        color: 'oklch(0.85 0.15 75)',
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Output
                    </div>
                    <div
                      className="text-base font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      2100–6300 W
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Corporate Information System */}
          <div
            className="reveal stagger-3 rounded-2xl overflow-hidden"
            style={{
              background: 'oklch(0.115 0.008 265)',
              border: '1px solid oklch(1 0 0 / 0.07)',
            }}
          >
            {/* Visual area */}
            <div
              className="relative overflow-hidden flex items-center justify-center"
              style={{ height: '220px', background: 'oklch(0.09 0.006 265)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, oklch(0.42 0.19 265 / 0.12) 0%, transparent 70%)',
                }}
              />
              {/* Abstract grid visualization */}
              <div className="relative z-10 grid grid-cols-3 gap-3 p-8 opacity-60">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-lg"
                    style={{
                      height: `${32 + (i % 3) * 12}px`,
                      background: i % 3 === 0
                        ? 'oklch(0.42 0.19 265 / 0.4)'
                        : 'oklch(1 0 0 / 0.06)',
                      border: '1px solid oklch(1 0 0 / 0.08)',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'oklch(0.42 0.19 265 / 0.12)',
                    border: '1px solid oklch(0.42 0.19 265 / 0.25)',
                  }}
                >
                  <Code2 size={16} style={{ color: 'oklch(0.7 0.15 265)' }} />
                </div>
                <span
                  className="text-xs status-upcoming px-2 py-1 rounded-full"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Software Project
                </span>
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Corporate Information System
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'oklch(0.62 0.015 265)', fontFamily: "'Inter', sans-serif" }}
              >
                A software project designed to organize and manage company information
                and enable structured access and sharing. Built to streamline internal
                operations and provide a clear, auditable record of organizational data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
