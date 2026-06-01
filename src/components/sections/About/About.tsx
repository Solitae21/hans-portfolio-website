import { motion } from 'framer-motion';
import { MapPin, Mail, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, SectionHeader, AnimatedBadge, Button } from '@/components/ui';
import StatCard from './StatCard';
import { personal } from '@/data/personal';
import profileImg from '@/assets/img/profile.jpg';

const techStack = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
  'Redux Toolkit', '.NET Core', 'Express.js', 'MongoDB',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-bg-secondary">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(132,204,22,0.07) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeader
            tag="01. About"
            title="About Me"
            subtitle="Get to know the developer behind the keyboard."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar + bio */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              {/* Avatar placeholder */}
              <div className="relative w-56 h-56 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent-indigo via-accent-purple to-accent-cyan p-0.5">
                  <div className="w-full h-full rounded-2xl bg-bg-tertiary flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImg}
                      alt={personal.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl shadow-glow-purple opacity-40 pointer-events-none" />
              </div>

              {/* Bio text */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{personal.bio}</p>
                <p className="text-gray-400 leading-relaxed">
                  I believe great software starts with great UX. Whether it's a subtle animation
                  or a complex data visualisation, I care deeply about the details that make
                  experiences feel polished and intentional.
                </p>
              </div>

              {/* Meta info */}
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent-cyan shrink-0" />
                  {personal.location}
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-accent-cyan shrink-0" />
                  {personal.email}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  {personal.availableForWork ? 'Open to remote opportunities' : 'Currently unavailable'}
                </span>
              </div>

              <div className="flex gap-4 pt-2">
                <Button as="a" href="#contact" size="sm">
                  Get In Touch
                </Button>
                <Button as="a" href={personal.resumeUrl} size="sm" variant="secondary" target="_blank" rel="noopener noreferrer">
                  View Resume
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Stats + tech stack */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-8">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {personal.stats.map((stat, i) => (
                  <StatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-gray-300 font-medium mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-accent-indigo inline-block" />
                  Tech I work with
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                >
                  {techStack.map((tech) => (
                    <motion.div
                      key={tech}
                      variants={{
                        hidden:   { opacity: 0, scale: 0.8 },
                        visible:  { opacity: 1, scale: 1 },
                      }}
                    >
                      <AnimatedBadge label={tech} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
