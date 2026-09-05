import { experiences } from '@/data/experience';
import { AnimatedBadge, ScrollReveal, SectionHeader } from '@/components/ui';
export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="section-container">
        <SectionHeader
          tag="02 / Experience"
          title="Built in real-world environments."
          subtitle="Professional work and the foundations behind it."
        />
        {experiences.map((experience) => (
          <ScrollReveal key={experience.id}>
            <article className="grid gap-5 border-t border-line py-9 md:grid-cols-[240px_1fr] md:gap-12">
              <div>
                <p className="eyebrow mb-3">
                  {experience.type === 'education'
                    ? 'Education'
                    : 'Professional experience'}
                </p>
                <p className="text-sm text-muted">{experience.period}</p>
                {experience.current && (
                  <span className="mt-3 inline-block rounded-full bg-[#E7EFE7] px-3 py-1 text-xs text-[#356044]">
                    Current role
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {experience.role}
                </h3>
                <p className="mt-1 text-base text-brand">
                  {experience.company}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {experience.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {experience.achievements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span aria-hidden="true" className="text-brand">
                        ↗
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <AnimatedBadge key={tech} label={tech} size="sm" />
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
