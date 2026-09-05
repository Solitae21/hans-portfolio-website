import { ScrollReveal, SectionHeader } from '@/components/ui';
import ProjectGrid from './ProjectGrid';
export default function Projects() {
  return (
    <section
      id="projects"
      className="section-space border-t border-line bg-[#F1F3EE]"
    >
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            tag="01 / Selected work"
            title="Ideas turned into working software."
            subtitle="A selection of projects exploring collaboration, thoughtful interfaces, and full-stack development."
          />
        </ScrollReveal>
        <ProjectGrid />
      </div>
    </section>
  );
}
