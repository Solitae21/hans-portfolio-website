import { ScrollReveal, SectionHeader } from '@/components/ui';
import ProjectGrid from './ProjectGrid';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-bg-secondary">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 90% 30%, rgba(139,92,246,0.08) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeader
            tag="03. Projects"
            title="Things I've Built"
            subtitle="A selection of projects that showcase my skills and passion for building quality software."
          />
        </ScrollReveal>

        <ProjectGrid />
      </div>
    </section>
  );
}
