import { ScrollReveal, SectionHeader } from '@/components/ui';
import TimelineItem from './TimelineItem';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-bg-primary">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(45,212,191,0.05) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeader
            tag="04. Experience"
            title="My Journey"
            subtitle="The milestones that shaped who I am as a developer."
          />
        </ScrollReveal>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
