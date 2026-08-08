/**
 * HOC Footer — Carbon & Sapphire / Swiss Precision Modernism
 * Authoritative brand presence, technical grid layout, sapphire-only color
 */
import { Twitter, Instagram, Github, TrendingUp } from 'lucide-react';
import { HOC_CONFIG } from '@/lib/config';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Token', href: '#token' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Twitter, href: HOC_CONFIG.social.twitter, label: 'X / Twitter' },
  { icon: Instagram, href: HOC_CONFIG.social.instagram, label: 'Instagram' },
  { icon: Github, href: HOC_CONFIG.social.github, label: 'GitHub' },
  { icon: TrendingUp, href: HOC_CONFIG.social.pumpfun, label: 'Pump.fun' },
];

export default function FooterSection() {
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'oklch(0.07 0.005 265)',
        borderTop: '1px solid oklch(0.42 0.19 265 / 0.15)',
      }}
    >
      {/* Top sapphire rule */}
      <div className="hoc-divider" />

      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          {/* Brand — 4 col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div
                className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0"
                style={{ border: '1px solid oklch(0.42 0.19 265 / 0.3)' }}
              >
                <img
                  src="/manus-storage/hoc-logo_a3ac4dc5.jpg"
                  alt="HOC"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
              >
                HOC
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: 'oklch(0.45 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Building the next generation of AI-powered digital ecosystems.
              Currently under development — the future is being built today.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-180"
                    style={{
                      background: 'oklch(0.42 0.19 265 / 0.08)',
                      border: '1px solid oklch(0.42 0.19 265 / 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'oklch(0.42 0.19 265 / 0.18)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.42 0.19 265 / 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'oklch(0.42 0.19 265 / 0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'oklch(0.42 0.19 265 / 0.15)';
                    }}
                  >
                    <Icon size={15} style={{ color: 'oklch(0.6 0.12 265)' }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation — 4 col */}
          <div className="lg:col-span-4">
            <div
              className="text-xs mb-5"
              style={{
                color: 'oklch(0.42 0.19 265)',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm py-0.5 transition-colors duration-150"
                  style={{ color: 'oklch(0.45 0.015 265)', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.85 0.005 265)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.45 0.015 265)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact — 4 col */}
          <div className="lg:col-span-4">
            <div
              className="text-xs mb-5"
              style={{
                color: 'oklch(0.42 0.19 265)',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Contact
            </div>
            <div className="space-y-3">
              <div>
                <div
                  className="text-xs mb-0.5"
                  style={{ color: 'oklch(0.38 0.01 265)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  Founder
                </div>
                <div className="text-sm text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {HOC_CONFIG.founder.name}
                </div>
              </div>
              <div>
                <div
                  className="text-xs mb-0.5"
                  style={{ color: 'oklch(0.38 0.01 265)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}
                >
                  Email
                </div>
                <a
                  href={`mailto:${HOC_CONFIG.founder.email}`}
                  className="text-sm transition-colors"
                  style={{ color: 'oklch(0.65 0.12 265)', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.8 0.15 265)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.65 0.12 265)')}
                >
                  {HOC_CONFIG.founder.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.05)' }}
        >
          <div
            className="text-sm"
            style={{ color: 'oklch(0.38 0.01 265)', fontFamily: "'Inter', sans-serif" }}
          >
            © 2026 HOC Super App. All Rights Reserved.
          </div>
          <div
            className="text-xs"
            style={{
              color: 'oklch(0.32 0.01 265)',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.08em',
            }}
          >
            HOC Mobile · v1.0.0 · Under Development
          </div>
        </div>
      </div>
    </footer>
  );
}

