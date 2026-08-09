/**
 * HOC Contact Section — Carbon & Sapphire / Swiss Precision Modernism
 * Asymmetric layout, technical evidence panel, sapphire-only color system
 * Frontend-only form with clear backend placeholder note
 */
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, User, ArrowRight } from 'lucide-react';
import { HOC_CONFIG } from '@/lib/config';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only — no backend connected yet.
    // To connect: implement a backend endpoint or integrate Formspree/EmailJS
    // and replace this handler with a real API call.
    setSubmitted(true);
  };

  const fieldStyle: React.CSSProperties = {
    background: 'oklch(0.09 0.006 265)',
    border: '1px solid oklch(1 0 0 / 0.1)',
    color: 'oklch(0.94 0.005 265)',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 180ms',
    fontSize: '0.9rem',
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{ background: 'oklch(0.105 0.007 265)' }}
    >
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse at bottom right, oklch(0.42 0.19 265 / 0.08) 0%, transparent 65%)',
        }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">09 / Contact</span>
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
            Get In Touch
          </h2>
          <div className="hoc-divider w-20" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: 4 col — contact info */}
          <div className="lg:col-span-4 reveal stagger-1">
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'oklch(0.62 0.015 265)', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Have questions about the HOC project, partnership opportunities,
              or want to learn more? Reach out directly.
            </p>

            {/* Contact info panel */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'oklch(0.115 0.008 265)',
                border: '1px solid oklch(0.42 0.19 265 / 0.18)',
              }}
            >
              {[
                { icon: User, label: 'Founder', value: HOC_CONFIG.founder.name, href: undefined },
                { icon: Mail, label: 'Email', value: HOC_CONFIG.founder.email, href: `mailto:${HOC_CONFIG.founder.email}` },
                { icon: MapPin, label: 'Location', value: HOC_CONFIG.founder.location, href: undefined },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="px-6 py-5 flex items-start gap-4"
                    style={{ borderBottom: i < 2 ? '1px solid oklch(1 0 0 / 0.05)' : 'none' }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: 'oklch(0.42 0.19 265 / 0.1)',
                        border: '1px solid oklch(0.42 0.19 265 / 0.2)',
                      }}
                    >
                      <Icon size={15} style={{ color: 'oklch(0.65 0.15 265)' }} />
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{
                          color: 'oklch(0.45 0.015 265)',
                          fontFamily: "'JetBrains Mono', monospace",
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-white transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'oklch(0.7 0.15 265)')}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'white')}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div
                          className="text-sm text-white"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: 8 col — form */}
          <div className="lg:col-span-8 reveal stagger-2">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'oklch(0.115 0.008 265)',
                border: '1px solid oklch(1 0 0 / 0.07)',
              }}
            >
              {/* Frontend-only notice */}
              <div
                className="rounded-xl px-5 py-4 mb-7 text-sm leading-relaxed"
                style={{
                  background: 'oklch(0.42 0.19 265 / 0.07)',
                  border: '1px solid oklch(0.42 0.19 265 / 0.18)',
                  color: 'oklch(0.65 0.1 265)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                }}
              >
                <strong style={{ fontWeight: 600, color: 'oklch(0.75 0.1 265)' }}>Note:</strong>{' '}
                This form is currently a frontend placeholder. To send a message directly, email{' '}
                <a
                  href={`mailto:${HOC_CONFIG.founder.email}`}
                  style={{ color: 'oklch(0.7 0.15 265)', textDecoration: 'underline' }}
                >
                  {HOC_CONFIG.founder.email}
                </a>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: 'oklch(0.42 0.19 265 / 0.15)',
                      border: '1px solid oklch(0.42 0.19 265 / 0.3)',
                    }}
                  >
                    <span style={{ color: 'oklch(0.7 0.15 265)', fontSize: '1.5rem' }}>✓</span>
                  </div>
                  <div
                    className="text-xl font-semibold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Message Received
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: 'oklch(0.55 0.015 265)', fontFamily: "'Inter', sans-serif" }}
                  >
                    Backend connection pending. Please also email directly to ensure delivery.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                      { key: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    ].map((field) => (
                      <div key={field.key}>
                        <label
                          className="block text-xs mb-2"
                          style={{
                            color: 'oklch(0.48 0.015 265)',
                            fontFamily: "'JetBrains Mono', monospace",
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          style={fieldStyle}
                          onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'oklch(0.42 0.19 265 / 0.5)')}
                          onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'oklch(1 0 0 / 0.1)')}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{
                        color: 'oklch(0.48 0.015 265)',
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={fieldStyle}
                      onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'oklch(0.42 0.19 265 / 0.5)')}
                      onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'oklch(1 0 0 / 0.1)')}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-2"
                      style={{
                        color: 'oklch(0.48 0.015 265)',
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...fieldStyle, resize: 'vertical' }}
                      onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'oklch(0.42 0.19 265 / 0.5)')}
                      onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'oklch(1 0 0 / 0.1)')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-sapphire w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold"
                  >
                    Send Message <ArrowRight size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
