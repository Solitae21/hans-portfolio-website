import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { GlassCard, AnimatedBadge } from '@/components/ui';
import type { Experience } from '@/types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const typeIcons = {
  work:       <Briefcase size={16} />,
  education:  <GraduationCap size={16} />,
  freelance:  <Code2 size={16} />,
};

const typeColors = {
  work:       'from-accent-indigo to-accent-purple',
  education:  'from-accent-cyan to-accent-indigo',
  freelance:  'from-accent-purple to-accent-cyan',
};

export default function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-start"
    >
      {/* Left side — even items show card, odd show empty */}
      <div className={isEven ? '' : 'hidden md:block'}>
        {isEven && <TimelineCard experience={experience} />}
      </div>

      {/* Centre node */}
      <div className="flex flex-col items-center md:pt-6">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${typeColors[experience.type]} flex items-center justify-center text-white shrink-0 shadow-glow-sm z-10`}>
          {typeIcons[experience.type]}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-accent-indigo/40 to-transparent mt-2 min-h-8" />
        )}
      </div>

      {/* Right side — odd items show card, even show empty */}
      <div className={!isEven ? '' : 'hidden md:block'}>
        {!isEven && <TimelineCard experience={experience} />}
      </div>

      {/* Mobile: always render card below node */}
      <div className="md:hidden col-span-full pl-14 -mt-8">
        {<TimelineCard experience={experience} />}
      </div>
    </motion.div>
  );
}

function TimelineCard({ experience }: { experience: Experience }) {
  return (
    <GlassCard className="p-6" hover>
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
        {experience.current && (
          <span className="text-xs font-mono text-emerald-400 border border-emerald-400/30 rounded-full px-2 py-0.5">
            Current
          </span>
        )}
      </div>
      <p className="text-accent-indigo font-medium text-sm mb-1">{experience.company}</p>
      <p className="font-mono text-gray-500 text-xs mb-4">{experience.period}</p>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">{experience.description}</p>

      {/* Achievements */}
      {experience.achievements.length > 0 && (
        <ul className="space-y-1.5 mb-4">
          {experience.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2 text-sm text-gray-400">
              <CheckCircle2 size={14} className="text-accent-cyan shrink-0 mt-0.5" />
              {achievement}
            </li>
          ))}
        </ul>
      )}

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <AnimatedBadge key={tech} label={tech} size="sm" />
        ))}
      </div>
    </GlassCard>
  );
}
