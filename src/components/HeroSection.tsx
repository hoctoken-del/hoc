/**
 * HOC Hero Section — Carbon & Sapphire / Swiss Precision Modernism
 * Declarative infrastructure statement headline, left-weighted asymmetric layout
 * Sapphire + silver-white only; no multicolor gradients
 */
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCommunity = () => {
    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '5rem' }}
    >
      {/* Precision grid background */}
      <div
        className="absolute inset-0 pointer-events-none hero-grid"
        style={{ opacity: 0.6 }}
      />

      {/* Single sapphire radial — restrained */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, oklch(0.42 0.19 265 / 0.14) 0%, transparent 65%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: 7 columns — Text content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="section-label">01 / Introduction</span>
              <div className="h-px flex-1 max-w-16" style={{ background: 'oklch(0.42 0.19 265 / 0.4)' }} />
            </div>

            {/* Logo + wordmark row */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: '1px solid oklch(0.42 0.19 265 / 0.3)' }}
              >
                <img
                  src="./images/hoc-logo.jpg"
                  alt="HOC"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-sm font-medium"
                style={{
                  color: 'oklch(0.7 0.15 265)',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                HOC Super App
              </span>
            </div>

            {/* Primary headline — declarative infrastructure statement */}
            <h1
              className="mb-6 leading-none"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                letterSpacing: '-0.03em',
                color: 'oklch(0.96 0.005 265)',
              }}
            >
              Building the
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, oklch(0.94 0.005 265) 0%, oklch(0.7 0.15 265) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Future of
              </span>
              <br />
              Digital Finance
            </h1>

            {/* Thin sapphire rule */}
            <div className="hoc-divider w-20 mb-7" />

            <p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: 'oklch(0.62 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              An AI-powered mobile ecosystem with a dedicated token for a more connected and accessible digital future.
              Currently in prototyping, testing, and active development.
            </p>

            {/* Dev status — amber only for in-progress signal */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
              style={{
                background: 'oklch(0.75 0.17 75 / 0.08)',
                border: '1px solid oklch(0.75 0.17 75 / 0.25)',
                color: 'oklch(0.82 0.14 75)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.72rem',
                letterSpacing: '0.1em',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: 'oklch(0.82 0.14 75)', flexShrink: 0 }}
              />
              UNDER ACTIVE DEVELOPMENT
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToAbout}
                className="btn-sapphire inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold"
              >
                Explore HOC <ArrowRight size={15} />
              </button>
              <button
                onClick={scrollToCommunity}
                className="btn-ghost-sapphire inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold"
              >
                Join the Community
              </button>
            </div>
          </div>

          {/* Right: 5 columns — Phone mockups */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative" style={{ width: '280px', height: '520px' }}>
              {/* Glow behind primary phone */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: '10%',
                  left: '10%',
                  right: '10%',
                  bottom: '10%',
                  background: 'oklch(0.42 0.19 265 / 0.2)',
                  filter: 'blur(40px)',
                  borderRadius: '50%',
                }}
              />
              {/* Primary phone */}
              <div
                className="phone-mockup absolute"
                style={{
                  width: '220px',
                  top: 0,
                  left: 0,
                  transform: 'perspective(1200px) rotateY(-8deg) rotateX(2deg)',
                  zIndex: 2,
                }}
              >
                <img
                  src="./images/app-screen-3.jpg"
                  alt="HOC App — Movement Ledger"
                  className="w-full"
                  style={{ borderRadius: '2.3rem' }}
                />
              </div>
              {/* Secondary phone — offset */}
              <div
                className="phone-mockup absolute"
                style={{
                  width: '150px',
                  bottom: 0,
                  right: 0,
                  transform: 'perspective(1200px) rotateY(-4deg) rotateX(1deg)',
                  zIndex: 3,
                  opacity: 0.85,
                }}
              >
                <img
                  src="./images/app-screen-1.jpg"
                  alt="HOC App — Dashboard"
                  className="w-full"
                  style={{ borderRadius: '2.3rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          style={{ opacity: 0.35 }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              color: 'oklch(0.94 0.005 265)',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </span>
          <div
            className="w-px h-8 animate-pulse"
            style={{ background: 'oklch(0.42 0.19 265 / 0.6)' }}
          />
        </button>
      </div>
    </section>
  );
}
