import { certifications } from '@/data/certifications';
import { SectionHeader } from '@/components/ui';
export default function Certifications() {
  return (
    <section id="certifications" className="section-space border-t border-line">
      <div className="section-container">
        <SectionHeader
          tag="05 / Continuous learning"
          title="Always a work in progress."
          subtitle="Certifications and courses supporting my growth as an engineer."
        />
        <div className="grid gap-x-12 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start justify-between gap-4 border-b border-line py-5"
            >
              <div>
                <h3 className="text-sm font-medium leading-6">{cert.name}</h3>
                <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
              </div>
              <span className="shrink-0 pt-1 text-xs text-muted">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
