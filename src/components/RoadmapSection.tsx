/**
 * HOC Roadmap Section — Carbon & Sapphire design
 * Section label: 06 / Roadmap
 * Vertical timeline with status indicators
 */
import { useEffect, useRef } from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const PHASES = [
  {
    number: '01',
    title: 'Concept & Roadmap Planning',
    description: 'Defining the vision, architecture, and long-term strategy for the HOC ecosystem.',
    status: 'completed' as const,
    statusLabel: 'Completed',
  },
  {
    number: '02',
    title: 'Prototype Development',
    description: 'Building the first working prototype of the HOC mobile application with core features.',
    status: 'completed' as const,
    statusLabel: 'Completed',
  },
  {
    number: '03',
    title: 'Final Coding & Bug Fixing',
    description: 'Refining the codebase, resolving identified issues, and hardening the application for review.',
    status: 'progress' as const,
    statusLabel: 'In Progress',
  },
  {
    number: '04',
    title: 'General & Professional Review',
    description: 'Comprehensive internal and external review of all systems, security, and user experience.',
    status: 'upcoming' as const,
    statusLabel: 'Upcoming',
  },
  {
    number: '05',
    title: 'Global Legal & Compliance Preparation',
    description: 'Ensuring full regulatory compliance across target markets and jurisdictions worldwide.',
    status: 'upcoming' as const,
    statusLabel: 'Upcoming',
  },
  {
    number: '06',
    title: 'Official Global Launch',
    description: 'Public release of the HOC Super App on Android and iOS platforms globally.',
    status: 'future' as const,
    statusLabel: 'Future',
  },
];

const STATUS_CONFIG = {
  completed: {
    icon: CheckCircle2,
    dotColor: 'oklch(0.7 0.15 265)',
    lineColor: 'oklch(0.42 0.19 265)',
    badgeClass: 'status-completed',
  },
  progress: {
    icon: Clock,
    dotColor: 'oklch(0.85 0.15 75)',
    lineColor: 'oklch(0.75 0.17 75)',
    badgeClass: 'status-progress',
  },
  upcoming: {
    icon: Circle,
    dotColor: 'oklch(0.45 0.015 265)',
    lineColor: 'oklch(1 0 0 / 0.1)',
    badgeClass: 'status-upcoming',
  },
  future: {
    icon: Circle,
    dotColor: 'oklch(0.3 0.01 265)',
    lineColor: 'oklch(1 0 0 / 0.05)',
    badgeClass: 'status-future',
  },
};

export default function RoadmapSection() {
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
    <section id="roadmap" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'oklch(0.42 0.19 265 / 0.06)',
          filter: 'blur(80px)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="section-label mb-4">06 / Roadmap</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            HOC Roadmap
          </h2>
          <div className="hoc-divider w-24" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, oklch(0.42 0.19 265 / 0.6), oklch(0.42 0.19 265 / 0.2), oklch(1 0 0 / 0.05))',
            }}
          />

          <div className="space-y-0">
            {PHASES.map((phase, i) => {
              const config = STATUS_CONFIG[phase.status];
              const Icon = config.icon;
              return (
                <div
                  key={phase.number}
                  className={`reveal stagger-${Math.min(i + 1, 6)} relative flex gap-8 pb-10`}
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-12 flex justify-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative"
                      style={{
                        background: 'oklch(0.09 0.006 265)',
                        border: `2px solid ${config.dotColor}`,
                      }}
                    >
                      <Icon size={18} style={{ color: config.dotColor }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-2xl p-6 -mt-1"
                    style={{
                      background: 'oklch(0.115 0.008 265)',
                      border: `1px solid ${
                        phase.status === 'completed'
                          ? 'oklch(0.42 0.19 265 / 0.2)'
                          : phase.status === 'progress'
                          ? 'oklch(0.75 0.17 75 / 0.2)'
                          : 'oklch(1 0 0 / 0.06)'
                      }`,
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs"
                          style={{
                            color: 'oklch(0.42 0.19 265)',
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          Phase {phase.number}
                        </span>
                        <h3
                          className="text-lg font-semibold text-white"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {phase.title}
                        </h3>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ${config.badgeClass}`}
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {phase.statusLabel}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'oklch(0.6 0.015 265)', fontFamily: "'Inter', sans-serif" }}
                    >
                      {phase.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
