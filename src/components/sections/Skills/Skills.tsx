import { ScrollReveal, SectionHeader } from '@/components/ui';
import SkillCategory from './SkillCategory';
import { skillGroups } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-bg-primary">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 20% 60%, rgba(52,211,153,0.06) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeader
            tag="02. Skills"
            title="My Tech Stack"
            subtitle="Technologies and tools I use to bring ideas to life."
          />
        </ScrollReveal>

        {/* Legend */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
            {(
              [
                { level: 'Expert',       color: 'text-accent-indigo' },
                { level: 'Advanced',     color: 'text-accent-purple' },
                { level: 'Intermediate', color: 'text-accent-cyan'   },
              ] as const
            ).map(({ level, color }) => (
              <span key={level} className={`flex items-center gap-1.5 ${color}`}>
                <span className="w-2 h-2 rounded-full bg-current inline-block" />
                {level}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCategory key={group.id} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
