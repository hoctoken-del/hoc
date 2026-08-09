/**
 * HOC Navigation — Carbon & Sapphire design system
 * Fixed top nav with smooth scroll, active section highlight, mobile hamburger
 */
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Token', href: '#token' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'oklch(0.09 0.006 265 / 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid oklch(1 0 0 / 0.06)' : 'none',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                <img
                  src="./images/hoc-logo.jpg"
                  alt="HOC Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                HOC
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="relative px-4 py-2 text-sm font-medium transition-colors duration-180"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: isActive
                        ? 'oklch(0.94 0.005 265)'
                        : 'oklch(0.58 0.015 265)',
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-px"
                        style={{
                          background: 'oklch(0.42 0.19 265)',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#community')}
                className="hidden sm:block btn-sapphire px-5 py-2 rounded-lg text-sm"
              >
                Join Community
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'oklch(0 0 0 / 0.7)' }}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className="absolute top-0 right-0 bottom-0 w-72 flex flex-col"
          style={{
            background: 'oklch(0.115 0.008 265)',
            borderLeft: '1px solid oklch(1 0 0 / 0.08)',
            transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 300ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                <img
                  src="./images/hoc-logo.jpg"
                  alt="HOC Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                HOC
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 p-6 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-180"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'oklch(0.94 0.005 265)' : 'oklch(0.58 0.015 265)',
                    background: isActive ? 'oklch(0.42 0.19 265 / 0.1)' : 'transparent',
                  }}
                >
                  {isActive && (
                    <span
                      className="w-1 h-4 rounded-full flex-shrink-0"
                      style={{ background: 'oklch(0.42 0.19 265)' }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="p-6 border-t border-white/5">
            <button
              onClick={() => handleNavClick('#community')}
              className="btn-sapphire w-full px-5 py-3 rounded-xl text-sm"
            >
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
