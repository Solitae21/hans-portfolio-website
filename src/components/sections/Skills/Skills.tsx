import { skillGroups } from '@/data/skills';
import { AnimatedBadge, SectionHeader } from '@/components/ui';
export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="section-container">
        <SectionHeader tag="04 / Toolkit" title="The tools behind the work." />
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div key={group.id} className="border-t border-line pt-6">
              <span className="eyebrow">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-medium">{group.label}</h3>
              <p className="mt-2 min-h-10 text-sm text-muted">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <AnimatedBadge key={skill.name} label={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
