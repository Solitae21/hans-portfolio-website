import { personal } from '@/data/personal';
import { SectionHeader } from '@/components/ui';
export default function About() {
  return (
    <section
      id="about"
      className="section-space border-y border-line bg-surface"
    >
      <div className="section-container grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <SectionHeader
          tag="03 / A little about me"
          title="Good software starts with care."
        />
        <div>
          <p className="text-lg leading-8 text-muted">{personal.bio}</p>
          <p className="mt-5 text-sm leading-7 text-muted">
            I care about the details that make software useful: clear
            interfaces, maintainable code, and a collaborative approach to
            solving problems.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-7">
            {personal.stats
              .filter((stat) => stat.label !== 'Cups of Coffee')
              .map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-medium tracking-tight">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
          </div>
          <p className="mt-8 text-xs text-muted">
            Based in {personal.location}
          </p>
        </div>
      </div>
    </section>
  );
}
