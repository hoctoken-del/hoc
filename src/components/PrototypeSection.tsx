/**
 * HOC Prototype / Development Section — Carbon & Sapphire design
 * Section label: 05 / Prototype
 * Gallery of app screenshots with development status
 */
import { useEffect, useRef } from 'react';

const DEV_STAGES = [
  { label: 'Prototype', status: 'completed' },
  { label: 'Testing', status: 'completed' },
  { label: 'Debugging', status: 'progress' },
  { label: 'Development', status: 'progress' },
  { label: 'Optimization', status: 'upcoming' },
];

const SCREENSHOTS = [
  { src: '/images/app-screen-3.jpg', label: 'Movement Ledger' },
  { src: '/images/app-screen-1.jpg', label: 'Dashboard' },
  { src: '/images/app-screen-2.jpg', label: 'Profile' },
  { src: '/images/app-screen-4.jpg', label: 'Achievements' },
];

export default function PrototypeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.reveal')
              .forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="prototype"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ background: 'oklch(0.105 0.007 265)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'oklch(0.42 0.19 265 / 0.06)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="section-label mb-4">05 / Prototype</div>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            HOC Prototype
          </h2>

          <div className="hoc-divider w-24 mb-6" />

          <p
            className="text-lg max-w-2xl"
            style={{
              color: 'oklch(0.65 0.015 265)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            The HOC application prototype is complete and currently in active
            testing, debugging, and development phases.
          </p>
        </div>

        {/* Development stage indicators */}
        <div className="flex flex-wrap gap-3 mb-16 reveal stagger-1">
          {DEV_STAGES.map((stage) => (
            <div
              key={stage.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                stage.status === 'completed'
                  ? 'status-completed'
                  : stage.status === 'progress'
                    ? 'status-progress'
                    : 'status-upcoming'
              }`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background:
                    stage.status === 'completed'
                      ? 'oklch(0.7 0.15 265)'
                      : stage.status === 'progress'
                        ? 'oklch(0.85 0.15 75)'
                        : 'oklch(0.45 0.015 265)',
                }}
              />

              {stage.label}
            </div>
          ))}
        </div>

        {/* Screenshots gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {SCREENSHOTS.map((shot, i) => (
            <div
              key={shot.label}
              className={`reveal stagger-${i + 1} group`}
            >
              <div
                className="phone-mockup mx-auto transition-all duration-300 group-hover:-translate-y-2"
                style={{
                  maxWidth: '200px',
                  boxShadow: '0 16px 40px oklch(0 0 0 / 0.4)',
                }}
              >
                <img
                  src={shot.src}
                  alt={`HOC App — ${shot.label}`}
                  className="w-full"
                  style={{ borderRadius: '2.3rem' }}
                />
              </div>

              <div
                className="text-center mt-4 text-sm"
                style={{
                  color: 'oklch(0.55 0.015 265)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                }}
              >
                {shot.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
