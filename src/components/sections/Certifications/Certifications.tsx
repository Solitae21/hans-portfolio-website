import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BadgeCheck, ChevronDown } from 'lucide-react';
import { ScrollReveal, SectionHeader, GlassCard } from '@/components/ui';
import { certifications } from '@/data/certifications';

const INITIAL_COUNT = 6;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, INITIAL_COUNT);
  const hiddenCount = certifications.length - INITIAL_COUNT;

  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-bg-secondary">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 15% 40%, rgba(52,211,153,0.06) 0%, transparent 60%)' }}
      />

      <div className="section-container relative">
        <ScrollReveal>
          <SectionHeader
            tag="05. Certifications"
            title="Credentials & Learning"
            subtitle="Continuous learning toward full-stack engineering — capped by the Microsoft Full-Stack Developer Program."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <AnimatePresence initial={false}>
            {visible.map((cert, index) => (
              <motion.div
                key={cert.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index < INITIAL_COUNT ? index * 0.06 : 0 }}
              >
                <GlassCard className="p-5 h-full flex items-start gap-3" hover glow={cert.featured ? 'indigo' : 'none'}>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      cert.featured
                        ? 'bg-accent-indigo/15 text-accent-indigo'
                        : 'glass text-accent-cyan'
                    }`}
                  >
                    {cert.featured ? <Award size={18} /> : <BadgeCheck size={18} />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-white leading-snug">{cert.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {cert.issuer} <span className="text-gray-600">·</span> {cert.date}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hiddenCount > 0 && (
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="group inline-flex items-center gap-2 glass glass-hover rounded-full px-5 py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
            >
              {showAll ? 'Show fewer' : `Show all ${certifications.length} certifications`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
