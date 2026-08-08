/**
 * HOC Community Section — Carbon & Sapphire / Swiss Precision Modernism
 * Left-weighted layout, technical evidence card style, sapphire-only color system
 * Placeholder social links — easy to update in config.ts
 */
import { useEffect, useRef } from 'react';
import { Twitter, Instagram, Github, TrendingUp, ArrowUpRight } from 'lucide-react';
import { HOC_CONFIG } from '@/lib/config';

const SOCIAL_PLATFORMS = [
  {
    name: 'X / Twitter',
    handle: '@HOCSuperApp',
    description: 'Latest updates, announcements, and community highlights.',
    icon: Twitter,
    href: HOC_CONFIG.social.twitter,
  },
  {
    name: 'Instagram',
    handle: '@HOCSuperApp',
    description: 'Development updates, visual content, and project milestones.',
    icon: Instagram,
    href: HOC_CONFIG.social.instagram,
  },
  {
    name: 'GitHub',
    handle: '@HOC_TOKEN',
    description: 'Open development updates and technical documentation.\n(Releaseable items)',
    icon: Github,
    href: HOC_CONFIG.social.github,
  },
  {
    name: 'Pump.fun',
    handle: 'HOC Token',
    description: 'Track the HOC token launch and community ecosystem.',
    icon: TrendingUp,
    href: HOC_CONFIG.social.pumpfun,
  },
];

export default function CommunitySection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="community" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, oklch(0.42 0.19 265 / 0.06) 0%, transparent 65%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header — left aligned */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">08 / Community</span>
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
            Join the HOC Community
          </h2>
          <div className="hoc-divider w-20 mb-5" />
          <p
            className="text-base max-w-xl"
            style={{ color: 'oklch(0.62 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Stay connected with the HOC project across all platforms.
            Be the first to know about launches, updates, and community events.
          </p>
        </div>

        {/* Social platform table — technical evidence style */}
        <div
          className="rounded-2xl overflow-hidden reveal stagger-1"
          style={{
            background: 'oklch(0.115 0.008 265)',
            border: '1px solid oklch(0.42 0.19 265 / 0.18)',
          }}
        >
          {SOCIAL_PLATFORMS.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 px-7 py-5 transition-all duration-200"
                style={{
                  borderBottom: i < SOCIAL_PLATFORMS.length - 1 ? '1px solid oklch(1 0 0 / 0.05)' : 'none',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'oklch(0.42 0.19 265 / 0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'oklch(0.42 0.19 265 / 0.1)',
                    border: '1px solid oklch(0.42 0.19 265 / 0.2)',
                  }}
                >
                  <Icon size={18} style={{ color: 'oklch(0.65 0.15 265)' }} />
                </div>

                {/* Name + handle */}
                <div className="flex-shrink-0 w-36">
                  <div
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {platform.name}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{
                      color: 'oklch(0.55 0.015 265)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {platform.handle}
                  </div>
                </div>

                {/* Description */}
                <div
                  className="flex-1 text-sm hidden sm:block"
                  style={{ color: 'oklch(0.58 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 'px' }}
                >
                  {platform.description}
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  size={16}
                  className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'oklch(0.45 0.015 265)' }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

