/**
 * HOC Token Section — Carbon & Sapphire / Swiss Precision Modernism
 * Left-weighted asymmetric layout, technical evidence panel, sapphire-only color
 * Token not launched — "Coming Soon" contract address placeholder
 */
import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { HOC_CONFIG } from '@/lib/config';

export default function TokenSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="token"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ background: 'oklch(0.105 0.007 265)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 70% 50%, oklch(0.42 0.19 265 / 0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header — left aligned */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">07 / Token</span>

            <div
              className="h-px flex-1 max-w-12"
              style={{
                background: 'oklch(0.42 0.19 265 / 0.4)',
              }}
            />
          </div>

          <h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: 'oklch(0.96 0.005 265)',
              letterSpacing: '-0.025em',
            }}
          >
            HOC Token
          </h2>

          <div className="hoc-divider w-20" />
        </div>

        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: 5 col — description */}
          <div className="lg:col-span-5 reveal stagger-1">
            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                color: 'oklch(0.68 0.015 265)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              The HOC Token is the native digital asset of the HOC ecosystem.
              It has not been officially launched. Contract address and full
              token details will be announced through official channels when
              the token is ready.
            </p>

            {/* Amber disclaimer — reserved for caution */}
            <div
              className="rounded-xl p-5 text-sm leading-relaxed"
              style={{
                background: 'oklch(0.75 0.17 75 / 0.06)',
                border: '1px solid oklch(0.75 0.17 75 / 0.18)',
                color: 'oklch(0.75 0.14 75)',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
              }}
            >
              <strong style={{ fontWeight: 600 }}>Important:</strong> The HOC
              Token has not been officially launched. Do not interact with any
              token claiming to be HOC until the official announcement. This
              project does not guarantee financial returns or investment
              profits.
            </div>
          </div>

          {/* Right: 7 col — token technical panel */}
          <div className="lg:col-span-7 reveal stagger-2">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'oklch(0.115 0.008 265)',
                border: '1px solid oklch(0.42 0.19 265 / 0.2)',
              }}
            >
              {/* Panel header */}
              <div
                className="px-7 py-5 flex items-center gap-5"
                style={{
                  borderBottom: '1px solid oklch(1 0 0 / 0.06)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0"
                  style={{
                    border: '1px solid oklch(0.42 0.19 265 / 0.25)',
                  }}
                >
                  <img
                    src="/images/hoc-logo.jpg"
                    alt="HOC Token"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {HOC_CONFIG.token.name}
                  </h3>

                  <div
                    className="text-xs mt-0.5"
                    style={{
                      color: 'oklch(0.55 0.015 265)',
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: '0.1em',
                    }}
                  >
                    SYMBOL: {HOC_CONFIG.token.symbol}
                  </div>
                </div>
              </div>

              {/* Contract address row */}
              <div
                className="px-7 py-5"
                style={{
                  borderBottom: '1px solid oklch(1 0 0 / 0.06)',
                }}
              >
                <div
                  className="text-xs mb-3"
                  style={{
                    color: 'oklch(0.48 0.015 265)',
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  Contract Address
                </div>

                <div
                  className="rounded-xl px-5 py-4"
                  style={{
                    background: 'oklch(0.09 0.006 265)',
                    border: '1px solid oklch(1 0 0 / 0.08)',
                  }}
                >
                  <code
                    className="text-sm"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: 'oklch(0.82 0.14 75)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {HOC_CONFIG.token.contractAddress}
                  </code>
                </div>
              </div>

              {/* CTA */}
              <div className="px-7 py-5">
                <a
                  href={HOC_CONFIG.token.tokenPageUrl}
                  className="btn-sapphire inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold w-full justify-center"
                  onClick={(e) => {
                    if (HOC_CONFIG.token.tokenPageUrl === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  View Token <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
