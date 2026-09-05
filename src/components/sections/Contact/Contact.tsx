import { ArrowUpRight } from 'lucide-react';
import { personal } from '@/data/personal';
import ContactForm from './ContactForm';
export default function Contact() {
  return (
    <section
      id="contact"
      className="section-space border-t border-line bg-[#F1F3EE]"
    >
      <div className="section-container grid gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow mb-5">06 / Get in touch</p>
          <h2 className="section-title">
            Let’s build
            <br />
            something useful.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            Have an engineering opportunity in mind? I’d love to hear about your
            team and what you’re building.
          </p>
          <a
            href={`mailto:${personal.email}`}
            className="mt-8 inline-flex flex-wrap items-center gap-2 text-base font-medium text-brand sm:text-lg"
          >
            {personal.email}
            <ArrowUpRight size={18} />
          </a>
          <div className="mt-5 flex gap-6">
            {personal.social
              .filter((link) => link.platform !== 'email')
              .map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  {link.label}
                  <ArrowUpRight size={15} />
                </a>
              ))}
          </div>
          <p className="mt-8 text-xs text-muted">{personal.location}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
