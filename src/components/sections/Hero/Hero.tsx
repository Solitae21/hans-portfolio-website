import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { personal } from '@/data/personal';
import profile from '@/assets/img/profile.jpg';
import { Button, ScrollReveal } from '@/components/ui';
export default function Hero() {
  return (
    <section
      id="hero"
      className="section-container pb-16 pt-14 md:pb-20 md:pt-24"
    >
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        <ScrollReveal>
          <div className="mb-8 inline-flex items-center gap-2 text-xs text-muted">
            <span
              className={`h-2 w-2 rounded-full ${personal.availableForWork ? 'bg-emerald-700' : 'bg-muted'}`}
            />
            {personal.availableForWork
              ? 'Available for new opportunities'
              : 'Currently employed'}
          </div>
          <p className="eyebrow mb-4">Software Engineer · Philippines</p>
          <h1 className="text-[clamp(3.2rem,6.6vw,5.6rem)] font-medium leading-[1.04] tracking-[-0.065em]">
            Hi, I’m Hans.
            <br />
            <span className="text-muted">
              I build for
              <br className="hidden lg:block" /> the real world.
            </span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted">
            I’m Hans Angelo Amponin, a software engineer building
            production-grade React and TypeScript applications, with two years
            of experience in fintech.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              as="a"
              href="#projects"
              rightIcon={<ArrowRight size={16} />}
            >
              View projects
            </Button>
            <Button
              as="a"
              href={personal.resumeUrl}
              download
              variant="secondary"
              leftIcon={<Download size={16} />}
            >
              Download résumé
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
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
                  <ArrowUpRight size={14} />
                </a>
              ))}
          </div>
        </ScrollReveal>
        <ScrollReveal
          delay={0.1}
          className="relative mx-auto w-full max-w-[390px]"
        >
          <div className="rounded-[160px_160px_12px_12px] bg-[#E9EDE5] px-5 pt-5">
            <img
              src={profile}
              alt="Hans Angelo Amponin"
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[150px_150px_4px_4px] object-cover object-[center_25%]"
            />
            <div className="flex items-center justify-between py-5 text-[10px] font-medium uppercase tracking-[.12em]">
              <span>Thoughtful code. Useful products.</span>
              <span className="text-brand">↗</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-7 text-xs text-muted">
        <span>
          Currently building at{' '}
          <span className="font-medium text-ink">
            Asialink Finance Corporation
          </span>
        </span>
        <span>React / TypeScript / Next.js</span>
      </div>
    </section>
  );
}
