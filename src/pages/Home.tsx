/**
 * HOC Super App — Main Page
 * Assembles all sections in order with Navigation and Footer
 * Design: Carbon & Sapphire — Swiss Precision Modernism
 */
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TechnologySection from '@/components/TechnologySection';
import ProjectsSection from '@/components/ProjectsSection';
import PrototypeSection from '@/components/PrototypeSection';
import RoadmapSection from '@/components/RoadmapSection';
import TokenSection from '@/components/TokenSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  // Initialize scroll reveal for all .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    };

    // Initial observation
    observe();

    // Re-observe after a short delay to catch dynamically rendered elements
    const timer = setTimeout(observe, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: 'oklch(0.09 0.006 265)', color: 'oklch(0.94 0.005 265)' }}
    >
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <ProjectsSection />
        <PrototypeSection />
        <RoadmapSection />
        <TokenSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
