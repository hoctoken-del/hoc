/**
 * HOC Technology Section — Carbon & Sapphire / Swiss Precision Modernism
 * Technical evidence panels, sapphire-only color system, no multicolor gradients
 */
import { useEffect, useRef } from 'react';
import { Brain, Smartphone, Coins, Link2, Shield, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Brain,
    title: 'AI Technology',
    description:
      'Intelligent algorithms designed to process and reward real-world human activity data, forming the core intelligence layer of the HOC ecosystem.',
    status: 'In Development',
    statusType: 'progress',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ecosystem',
    description:
      'A unified mobile platform for Android and iOS that consolidates digital services, tools, and opportunities into a single, seamless experience.',
    status: 'Prototype Ready',
    statusType: 'completed',
  },
  {
    icon: Coins,
    title: 'Digital Economy',
    description:
      'A transparent reward engine that converts verified activity into digital value — building a new economic model grounded in real-world participation.',
    status: 'In Development',
    statusType: 'progress',
  },
  {
    icon: Link2,
    title: 'Future Blockchain',
    description:
      'Planned integration with blockchain infrastructure to ensure transparency, immutability, and decentralized trust for all ecosystem transactions.',
    status: 'Planned',
    statusType: 'upcoming',
  },
  {
    icon: Shield,
    title: 'Secure Infrastructure',
    description:
      'Security-first architecture designed to protect user data, activity records, and digital assets across all layers of the platform.',
    status: 'In Development',
    statusType: 'progress',
  },
  {
    icon: Globe,
    title: 'Global Accessibility',
    description:
      'Engineered for worldwide reach — designed to function across diverse regions, languages, and connectivity environments.',
    status: 'Planned',
    statusType: 'upcoming',
  },
];

export default function TechnologySection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="technology"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ background: 'oklch(0.105 0.007 265)' }}
    >
      {/* Restrained sapphire accent — right */}
      <div
        className="absolute top-1/2 right-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse at right, oklch(0.42 0.19 265 / 0.08) 0%, transparent 65%)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">03 / Technology</span>
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
            Technology
          </h2>
          <div className="hoc-divider w-20 mb-5" />
          <p
            className="text-base max-w-xl"
            style={{ color: 'oklch(0.62 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            The technical pillars of the HOC ecosystem — each component designed with precision
            and built for long-term scalability.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{
            background: 'oklch(1 0 0 / 0.06)',
            border: '1px solid oklch(1 0 0 / 0.06)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
          }}
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`reveal stagger-${Math.min(i + 1, 6)} group relative p-7 transition-all duration-300 cursor-default`}
                style={{ background: 'oklch(0.115 0.008 265)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.13 0.01 265)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.115 0.008 265)';
                }}
              >
                {/* Top row: icon + status */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'oklch(0.42 0.19 265 / 0.1)',
                      border: '1px solid oklch(0.42 0.19 265 / 0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'oklch(0.65 0.15 265)' }} />
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      feature.statusType === 'completed'
                        ? 'status-completed'
                        : feature.statusType === 'progress'
                        ? 'status-progress'
                        : 'status-upcoming'
                    }`}
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.68rem' }}
                  >
                    {feature.status}
                  </span>
                </div>

                {/* Thin rule */}
                <div className="hoc-divider mb-4" />

                {/* Title */}
                <h3
                  className="text-base font-semibold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.01em' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'oklch(0.58 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

