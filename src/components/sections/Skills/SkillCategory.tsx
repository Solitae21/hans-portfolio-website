import { motion } from 'framer-motion';
import { GlassCard, AnimatedBadge } from '@/components/ui';
import type { SkillGroup } from '@/types';

const categoryIcons: Record<string, string> = {
  frontend: '⚡',
  backend:  '🔧',
  tools:    '🛠️',
};

interface SkillCategoryProps {
  group: SkillGroup;
  index: number;
}

export default function SkillCategory({ group, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <GlassCard className="p-6 h-full" hover>
        {/* Category header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" role="img" aria-label={group.label}>
            {categoryIcons[group.id] ?? '💡'}
          </span>
          <h3 className="text-lg font-semibold text-white">{group.label}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-5">{group.description}</p>

        {/* Skill badges */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: index * 0.15 + 0.3 } } }}
        >
          {group.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden:   { opacity: 0, scale: 0.8 },
                visible:  { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
            >
              <AnimatedBadge label={skill.name} level={skill.level} />
            </motion.div>
          ))}
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}
